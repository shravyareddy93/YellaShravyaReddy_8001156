import java.util.Optional;

public class OptionalClassDemo {

    public static void main(String[] args) {

        Optional<String> name =
                Optional.of("Java");

        System.out.println(
                name.orElse("Not Available"));
    }
}