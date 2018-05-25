class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super()
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = id;
        this.scores = scores
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let score = 0
        this.scores.forEach((_score)=>{
            score += Number(_score)
        })
        score /= this.scores.length
        
        if(score>=90) {
            return 'O'
        } else if( score >= 80) {
            return 'E'
        } else if( score >= 70 ) {
            return 'A'
        } else if( score >= 55 ) {
            return 'P'
        } else if(score >= 40) {
            return 'D'
        } else {
            return 'T'
        }
    }
}