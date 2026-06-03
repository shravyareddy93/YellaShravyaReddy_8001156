import java.util.Scanner;

public class PrimeNumberCheck {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Number: ");
        int num = sc.nextInt();

        boolean prime = true;

        if(num <= 1) {

            prime = false;
        }

        for(int i = 2; i <= Math.sqrt(num); i++) {

            if(num % i == 0) {

                prime = false;
                break;
            }
        }

        if(prime) {

            System.out.println(num + " is Prime");
        }
        else {

            System.out.println(num + " is Not Prime");
        }

        sc.close();
    }
}