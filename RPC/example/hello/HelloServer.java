package example.hello;

import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

import java.util.Arrays;

public class HelloServer implements Pair{
    public HelloServer(){

    }

    // @Override
    // public String sayHello() throws RemoteException {
    //     return "Hello, World";
    // }

    @Override
    public int[] sortInteger(int[] a) throws RemoteException {
        Arrays.sort(a);
        return a;
    }

    @Override
    public int getMin(int[] a) throws RemoteException {
        Arrays.sort(a);
        return a[0];
    }

    @Override
    public int getMax(int[] a)  throws RemoteException{
        Arrays.sort(a);
        return a[a.length - 1];
    }

    public static void main(String[] args) {
        try{
            HelloServer obj = new HelloServer();
            Pair stub = (Pair) UnicastRemoteObject.exportObject(obj, 0);

            Registry registry = LocateRegistry.getRegistry();
            registry.bind("Pair", stub);

            System.err.print("Server ready");
        } catch (Exception e){
            System.err.println("Server exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
