interface Printable {

    void print();
}

class Document implements Printable {

    @Override
    public void print() {

        System.out.println("Printing Document");
    }
}

public class InterfaceDemo {

    public static void main(String[] args) {

        Printable p = new Document();

        p.print();
    }
}