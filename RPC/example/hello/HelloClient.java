package example.hello;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Arrays;

public class HelloClient {
    private HelloClient() {}
    public static void main(String[] args) {
        try{
            Registry registry = LocateRegistry.getRegistry();
            Pair stub = (Pair) registry.lookup("Pair");
            int[] arr = {3, 6, 4, 5, 2, 1};
            int min = stub.getMin(arr);
            int max = stub.getMax(arr);
            System.out.println("Init array: " + Arrays.toString(arr));
            System.out.println("Response\nmin: " + min + "\nmax: " + max);
        } catch (Exception e){
            System.err.println("Client Exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
