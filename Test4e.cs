using System;

namespace ProjectExam;
{
    class Program
{
    static void Main(string[] args)
    {
string guessMyCity = 'Barcelona';
string guess = '';
int guessCount = 0;
int guessLimit = 3;
bool isOutOfGuesses = false;

while (guess != guessMyCity && !isOutOfGuesses);
{
    if(guessCount < guessLimit)
    {
   Console.Write ("Enter guess: ")
   guess = Console.ReadLine();
   guessCount++;
    }
    else {
      isOutOfGuesses = true;
    }
  }
if (isOutOfGuesses)
{
Console.Write("You Lose!"); }
 else {
Console.Write("You Win!")  
}
Console.ReadLine();

    }
  }
}