import java.util.ArrayList;

public class ArrayListDemo {

    public static void main(String[] args) {

        ArrayList<String> list =
                new ArrayList<>();

        list.add("Java");
        list.add("Python");
        list.add("C++");

        for(String language : list) {

            System.out.println(language);
        }
    }
}