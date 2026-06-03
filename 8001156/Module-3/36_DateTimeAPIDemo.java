import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

public class DateTimeAPIDemo {

    public static void main(String[] args) {

        System.out.println(
                "Date : " + LocalDate.now());

        System.out.println(
                "Time : " + LocalTime.now());

        System.out.println(
                "Date Time : " +
                LocalDateTime.now());
    }
}