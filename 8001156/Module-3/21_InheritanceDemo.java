class Person {

    String name = "Rahul";

    void display() {

        System.out.println("Name: " + name);
    }
}

class Student extends Person {

    int rollNo = 101;

    void showDetails() {

        display();

        System.out.println("Roll No: " + rollNo);
    }
}

public class InheritanceDemo {

    public static void main(String[] args) {

        Student s = new Student();

        s.showDetails();
    }
}