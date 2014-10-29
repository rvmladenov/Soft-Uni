using System;
using System.Collections;

namespace StringDisperserProblem
{
    public class StringDisperser : IComparable<StringDisperser>, IEnumerable
    {
        private string[] args;
        
        public StringDisperser(params string[] args)
        {
            this.Args = args;
        }

        public string[] Args
        {
            get { return this.args; }
            set
            {
                if (value.Length == 0)
                {
                    throw new ArgumentNullException();
                }

                this.args = value;
            }
        }
        
        public override bool Equals(object obj)
        {
            StringDisperser disperser = obj as StringDisperser;
            if (disperser == null)
            {
                return false;
            }

            if (this.Args.Equals(disperser))
            {
                return false;
            }
            
            return true;
        }

        public static bool operator ==(StringDisperser string1, StringDisperser string2)
        {
            return Equals(string1, string2);
        }
        
        public static bool operator !=(StringDisperser string1, StringDisperser string2)
        {
            return !Equals(string1, string2);
        }
        
        public override int GetHashCode()
        {
            int hashCode = this.Args.GetHashCode();
            return hashCode;
        }
        
        public override string ToString()
        {
            string result = String.Join(", ", this.Args);
            return result;
        }
        
        public object Clone()
        {
            string[] args = this.Args;
            string[] newTextArray = new string[args.Length];
            
            for (int i = 0; i < newTextArray.Length; i++)
            {
                newTextArray[i] = args[i];
            }
            
            return new StringDisperser(newTextArray);
        }
        
        public int CompareTo(StringDisperser other)
        {
            return this.ConcatenateText(this.Args).CompareTo(other.ConcatenateText(other.args));
        }
        
        private string ConcatenateText(string[] array)
        {
            string wholeString = String.Join("", this.Args);
            return wholeString;
        }
        
        public IEnumerator GetEnumerator()
        {
            string totalString = this.ConcatenateText(this.Args);
            for (int i = 0; i < totalString.Length; i++)
            {
                yield return totalString[i];
            }
        }
    }
}