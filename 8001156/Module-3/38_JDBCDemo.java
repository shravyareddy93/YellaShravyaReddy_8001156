import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class JDBCDemo {

    public static void main(String[] args) {

        try {

            Connection con =
                    DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test",
                    "root",
                    "password");

            Statement stmt =
                    con.createStatement();

            stmt.executeUpdate(
                    "CREATE TABLE IF NOT EXISTS Student(" +
                    "id INT PRIMARY KEY," +
                    "name VARCHAR(50))");

            System.out.println(
                    "Table Created Successfully");

            con.close();
        }

        catch(Exception e) {

            System.out.println(
                    e.getMessage());
        }
    }
}