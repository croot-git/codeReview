class Solution{

    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Map<String, Integer> phoneBook = new HashMap<String, Integer>();
        for(int i = 0 ; i < n ; i++){
            phoneBook.put(in.next(), in.nextInt());
        }
        while(in.hasNext()){
            String s = in.next();
            System.out.println((null == phoneBook.get(s)) ? "Not found" : s + "=" + phoneBook.get(s));
        }
        in.close();
    }
    
}