import java.util.HashMap;

public class HashMapDemo {

    public static void main(String[] args) {

        HashMap<Integer,String> map =
                new HashMap<>();

        map.put(101,"Rahul");
        map.put(102,"Anjali");
        map.put(103,"Kiran");

        for(Integer key : map.keySet()) {

            System.out.println(
                    key + " : " + map.get(key));
        }
    }
}