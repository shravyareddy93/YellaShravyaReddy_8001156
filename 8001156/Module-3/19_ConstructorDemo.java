public class ConstructorDemo {

    String name;
    int age;

    ConstructorDemo(String name, int age) {

        this.name = name;
        this.age = age;
    }

    void display() {

        System.out.println("Name : " + name);

        System.out.println("Age  : " + age);
    }

    public static void main(String[] args) {

        ConstructorDemo obj =
                new ConstructorDemo("Rahul", 22);

        obj.display();
    }
}