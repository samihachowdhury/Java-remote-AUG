
public class Arrays {
	
public static void main(String []args){
        
        int arr[] = {2,5,6,3,7,8};
        int sum = 0;
        
        for(int i = 0; i < arr.length;i++){
            sum += arr[i];
        }
        
        System.out.println("The sum of array is: "+sum);

double[] exampleArray = {1,5,6,5,4,1};
double maximum = exampleArray[0];
int index = 0;

for (int i = 1; i< exampleArray.length; i++) {
	if (exampleArray[i] > maximum) {
	maximum = exampleArray[i];
	index = i;
	
	}

}

System.out.println(index); }

public static double[] toPower(int size, int power){
    double[] result = new double[size];
    for(int i=0; i<size; i++){
        result[i] = Math.pow(Double.valueOf(i), Double.valueOf(power));
    }
    return result;
}

public static void main(String []args){
    
    int size = 4; 
    int power = 2;
    double[] result = toPower(size, power);
    
    System.out.print("toPower result is: "+Arrays.toString(result));
	}
}