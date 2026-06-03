record Student(String name,
               int age) {}

public class RecordClassDemo {

    public static void main(String[] args) {

        Student s =
                new Student("Rahul",22);

        System.out.println(
                s.name());

        System.out.println(
                s.age());
    }
}