public class Solution {

   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
      int n = scan.nextInt(); 
      scan.close();
      String ans = (n%2==0 && n>20) ? "Not Weird" : "Weird";
      System.out.println(ans);
   }
   
}
