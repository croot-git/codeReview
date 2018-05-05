public class Solution {
    public static void main(String[] args) {
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";
		
        Scanner scan = new Scanner(System.in);
        
        int j = scan.nextInt();
        double e = scan.nextDouble();
        scan.nextLine();    // 인트&더블형 이후 문자열 개행 처리 // 비선언시 문자열 null 로 나옴
        String inputString = scan.nextLine();

        System.out.println(i + j);
        System.out.println(d + e);
        System.out.println(s + inputString);
        
        scan.close();
    }
}