public class VirtualThreadDemo {

    public static void main(String[] args)
            throws Exception {

        Thread virtualThread =
                Thread.startVirtualThread(() -> {

                    System.out.println(
                            "Running Virtual Thread");
                });

        virtualThread.join();
    }
}