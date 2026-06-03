public class MethodOverloadingDemo {

    int add(int a, int b) {

        return a + b;
    }

    double add(double a, double b) {

        return a + b;
    }

    public static void main(String[] args) {

        MethodOverloadingDemo obj =
                new MethodOverloadingDemo();

        System.out.println(obj.add(10, 20));

        System.out.println(obj.add(5.5, 6.5));
    }
}