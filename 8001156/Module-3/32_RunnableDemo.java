class MyRunnable implements Runnable {

    @Override
    public void run() {

        for(int i = 1; i <= 5; i++) {

            System.out.println(
                    "Runnable Thread : " + i);
        }
    }
}

public class RunnableDemo {

    public static void main(String[] args) {

        Thread t =
                new Thread(new MyRunnable());

        t.start();
    }
}