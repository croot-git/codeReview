class MyBook extends Book {
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    constructor(title, author, price) {
        super()
        this.title = title
        this.author = author
        this.price = price
    }
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    display() {
        let out = []
        out.push('Title: ' + this.title)
        out.push('Author: ' + this.author)
        out.push('Price: ' + this.price)
        
        console.log(out.join('\n'))
    }
}