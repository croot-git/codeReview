import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double meal_cost = in.nextDouble();
        int tip_percent = in.nextInt();
        int tax_percent = in.nextInt();
        double tip = Math.round(meal_cost * (tip_percent * 0.01) * 10d)/10d;
        double tax = meal_cost * (tax_percent * 0.01);
        //System.out.println(meal_cost + ", " + tip + ", " + tax);
        System.out.println("The total meal cost is " + Math.round(meal_cost + tip + tax) + " dollars.");
        in.close();
    }
}