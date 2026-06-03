import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {

        Random random = new Random();

        int secretNumber = random.nextInt(100) + 1;

        Scanner sc = new Scanner(System.in);

        int guess;

        System.out.println("Guess a Number Between 1 and 100");

        do{

            System.out.print("Enter Guess: ");

            guess = sc.nextInt();

            if(guess > secretNumber){

                System.out.println("Too High!");
            }

            else if(guess < secretNumber){

                System.out.println("Too Low!");
            }

            else{

                System.out.println("Congratulations! Correct Guess.");
            }

        }while(guess != secretNumber);

        sc.close();
    }
}