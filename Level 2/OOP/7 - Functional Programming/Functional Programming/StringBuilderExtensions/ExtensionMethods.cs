using System;
using System.Collections.Generic;
using System.Text;

namespace Functional_Programming.StringBuilderExtensions
{
    public static class ExtensionMethods
    {
        public static StringBuilder Substring(this StringBuilder strBuilder,
            int startIndex, int length)
        {
            StringBuilder result = new StringBuilder();

            string str = strBuilder.ToString();
            for (int i = 0; i < length; i++)
            {
                result.Append(str[startIndex]);
                startIndex++;
                if (startIndex > str.Length - 1)
                {
                    break;
                }
            }
            return result;
        }

        public static StringBuilder RemoveText(this StringBuilder strBuilder,
            string textToReplace)
        {
            strBuilder.Replace(textToReplace, "");
            return strBuilder;
        }

        public static StringBuilder AppendAll<T>(this StringBuilder strBuilder,
            IEnumerable<T> items)
        {
            foreach (var item in items)
            {
                strBuilder.Append(item);
            }
            return strBuilder;
        }

        static void Main(string[] args)
        {
            StringBuilder textSample = new StringBuilder("Some dummy text here");

            Console.WriteLine(textSample.Substring(1, 2));
            textSample.RemoveText("dummy");
            Console.WriteLine(textSample);

            StringBuilder textSample2 = new StringBuilder();
            textSample2.AppendAll(new List<string>() { "What", " is", " your", " name", "?" });
            Console.WriteLine(textSample2);

        }
    }
}
