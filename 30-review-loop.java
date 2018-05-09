public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        String s = "";
        String oddRs = "";
        String evenRs = "";
        sc.nextLine();
	for (int i = 0; i < T; i++) {
            s = sc.nextLine();
            String[] sArr = s.split("");
            for(int j = 0 ; j < sArr.length ; j++) {
                if(j%2==0)
                    evenRs += sArr[j];
                else
                    oddRs += sArr[j];
            }
            System.out.println(evenRs + " " + oddRs);
            oddRs = "";
            evenRs = "";
        }
    }
    
}