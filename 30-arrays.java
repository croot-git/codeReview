public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        String s = "";
        for(int i = 0; i < n; i++)
            arr[i] = in.nextInt();
        
        for(int j = (arr.length-1) ; j >= 0 ; j--) {
            s += (j==(arr.length-1)) ? "" : " ";
            s += Integer.toString(arr[j]);
        }
        System.out.println(s);
        in.close();
    }
}