using System;

namespace TwitterTower
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //main menu
            Console.WriteLine("insert your choose: \n1 to rectangle \n2 to triangle \n3 to exit \n");
            int choise = int.Parse(Console.ReadLine());
            while (choise != 3)
            {                
                Console.WriteLine("insert height and width");
                int height = int.Parse(Console.ReadLine());
                int width = int.Parse(Console.ReadLine());
                switch (choise)
                {
                    case 1:
                        Rectangle(height, width);
                        break;
                    case 2:
                        Triangle(height, width);
                        break;
                    default:
                        Console.WriteLine("wrong input \n");
                        break;
                }
                Console.WriteLine("insert your choose: \n1 to rectangle \n2 to triangle \n3 to exit \n");
                choise = int.Parse(Console.ReadLine());
            }


        }

        //The func get height & length, print the scope or area of rectangle
        static void Rectangle(int height, int width)
        {
            if (height == width || Math.Abs(height - width) > 5)
                Console.WriteLine($"area: {height * width} ");
            else Console.WriteLine($"scope: {2 * (height + width)}");
        }

        //The func get height & length, print the scope or shape of triangle
        static void Triangle(int height, int width)
        {
            Console.WriteLine("press:\n1 to print scope \n2 to print triangle \n");
            int choose = int.Parse(Console.ReadLine());
            switch (choose)
            {
                //scope print
                case 1:
                    double remainder = Math.Sqrt((0.5 * width) * (0.5 * width) + height * height);
                    Console.WriteLine($"scope:{2 * remainder + width}");
                    break;

                //triangle print
                case 2:             
                        if (width % 2 == 0 || width > height * 2)
                            Console.WriteLine("unable to print your triangle");
                        else
                        {
                            int groups = (width - 2) / 2;
                            int sum = 1;
                            if (groups != 0) sum = (height - 2) / groups;
                            string asterisks = "***";
                            string space = new string(' ', width / 2);

                            //first line
                            Console.WriteLine(space + "*");
                            space = space.Remove(0, 1);

                            //in case of addition to first group
                            for (int k = 0; k < height - 2 - groups * sum; k++)
                                Console.WriteLine(space + asterisks);

                            //groups
                            for (int i = 0; i < groups; i++)
                            {
                                for (int j = 0; j < sum; j++)
                                    Console.WriteLine(space + asterisks);
                                asterisks += "**";
                                space = space.Remove(0, 1);
                            }

                            //last line
                            Console.WriteLine(asterisks);
                        }
                        break;
                    
                default:
                    Triangle(height, width);
                    break;
            }

        }
    }
}
