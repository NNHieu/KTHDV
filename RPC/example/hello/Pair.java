package example.hello;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Pair extends Remote{
    int[] sortInteger(int[] a) throws RemoteException;
    public int getMin(int[] a) throws RemoteException;
    public int getMax(int[] a)throws RemoteException;
}
