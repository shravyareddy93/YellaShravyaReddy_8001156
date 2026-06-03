class Student {

    String name;
    int rollNo;

    Student(String name, int rollNo) {

        this.name = name;
        this.rollNo = rollNo;
    }

    void display() {

        System.out.println("Name    : " + name);

        System.out.println("Roll No : " + rollNo);
    }
}

public class StudentClassDemo {

    public static void main(String[] args) {

        Student s1 =
                new Student("Anjali", 101);

        Student s2 =
                new Student("Kiran", 102);

        s1.display();

        s2.display();
    }
}