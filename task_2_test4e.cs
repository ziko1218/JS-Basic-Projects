using System;

namespace ProjectExam;
{
    class Program
{ 
    static void Main(string [] args)
{
    string findBook = Console.ReadLine();
    bool isFound;
    int count = 0; 

while (!isFound) 
string input = Console.ReadLine();
count ++;

if (input == "No More Books")
 {
     break;
 }
if (input == findBook) 
{
    isFound = true;
}
}
if (isFound)
{
  Console.WriteLine($"You checked {count - 1} books and found it.") 
}
else {
    Console.WriteLine("The book you search is not here!");
    Console.WriteLine($"You checked {count - 1} books.");
}
}
}


}