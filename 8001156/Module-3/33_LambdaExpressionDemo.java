interface Message {

    void show();
}

public class LambdaExpressionDemo {

    public static void main(String[] args) {

        Message msg = () ->
                System.out.println(
                        "Hello from Lambda");

        msg.show();
    }
}