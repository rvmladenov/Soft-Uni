using System;
using System.Text;

namespace OthertypesInOOP.GenericLit
{
    [Version(0, 1)]
    class GenericList<T> where T : IComparable<T>
    {
        const int DefaultCapacity = 16;

        private T[] elements;
        private int listSize = 0;

        public GenericList(int capacity = DefaultCapacity)
        {
            elements = new T[capacity];
        }

        public int ListSize
        {
            get { return this.listSize; }
        }
        public int Capacity
        {
            get { return this.elements.Length; }
        }


        public void Add(T element)
        {
            if (this.ListSize >= this.Capacity)
            {
                this.Expand();
            }
            this.elements[this.ListSize] = element;
            this.listSize++;
        }

        public T this[int index]
        {
            get
            {
                if (index < 0 || index >= this.ListSize)
                {
                    throw new IndexOutOfRangeException();
                }

                return elements[index];
            }
        }

        public void RemoveAt(int index)
        {
            if (index < 0 || index >= this.ListSize)
            {
                throw new IndexOutOfRangeException();
            }
            for (int i = index; i < this.ListSize - 1; i++)
            {
                this.elements[i] = this.elements[i + 1];
            }
            this.listSize--;
            this.elements[ListSize] = default(T);
        }

        public void InsertAt(int index, T element)
        {
            if (index < 0 || index >= this.ListSize)
            {
                throw new IndexOutOfRangeException();
            }
            if (this.ListSize >= this.Capacity)
            {
                this.Expand();
            }
            for (int i = this.ListSize; i > index; i--)
            {
                this.elements[i] = this.elements[i - 1];
            }
            this.listSize++;
            this.elements[index] = element;
        }

        public void clearList()
        {
            this.elements = new T[this.Capacity];
            this.listSize = 0;
        }

        public int IndexOf(T element)
        {
            // Standart IndexOf function implemented by the same way in almost every language
            for (int i = 0; i < this.ListSize; i++)
            {
                if (this.elements[i].Equals(element))
                {
                    return i;
                }
            }
            return -1;
        }

        public bool Contains(T element)
        {
            if (this.IndexOf(element) != -1)
            {
                return true;
            }
            return false;
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder(this.ListSize);
            for (int i = 0; i < this.ListSize; i++)
            {
                result.Append(this.elements[i] + ", ");
            }
            return result.ToString().Trim(' ', ',');
        }

        private void Expand()
        {
            T[] expandedArray = new T[this.Capacity * 2];
            Array.Copy(this.elements, expandedArray, this.Capacity);
            this.elements = expandedArray;
        }

        public T Max()
        {
            validateEmptyList();

            T max = this.elements[0];
            for (int i = 1; i < this.ListSize; i++)
            {
                if (this.elements[i].CompareTo(max) > 0)
                {
                    max = elements[i];
                }
            }
            return max;
        }
        public T Min()
        {
            validateEmptyList();

            T min = this.elements[0];
            for (int i = 1; i < this.ListSize; i++)
            {
                if (this.elements[i].CompareTo(min) < 0)
                {
                    min = elements[i];
                }
            }
            return min;
        }

        private void validateEmptyList()
        {
            if (this.ListSize < 1)
            {
                throw new InvalidOperationException("The list is empty");
            }
        }
    }
}
