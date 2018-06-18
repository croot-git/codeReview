import Foundation

// read the integer n
let n = Int(readLine()!)!

// read the array
let arr = readLine()!.components(separatedBy: " ").map{ Int($0)! }

var numberOfSwaps = 0
var a = arr

for var i in 0 ... a.count - 1 {
    
    for var j in 0 ... a.count - 2 {
        // Swap adjacent elements if they are in decreasing order
        if a[j] > a[j + 1] {
            swap(&a[j], &a[j + 1])
            numberOfSwaps += 1
        }
    }
    
    // If no elements were swapped during a traversal, array is sorted
    if numberOfSwaps == 0 {
        break;
    }
}

print("Array is sorted in \(numberOfSwaps) swaps.")
print("First Element: \(a[0])")
print("Last Element: \(a[a.count-1])")
