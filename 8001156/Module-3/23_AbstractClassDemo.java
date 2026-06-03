abstract class Shape {

    abstract void draw();
}

class Circle extends Shape {

    @Override
    void draw() {

        System.out.println("Drawing Circle");
    }
}

public class AbstractClassDemo {

    public static void main(String[] args) {

        Shape s = new Circle();

        s.draw();
    }
}