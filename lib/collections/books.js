/**
 * Created by madrid on 03/04/15.
 */
Books = new Meteor.Collection('books');

//Setiing up a method in Meteor
Meteor.methods({
    //Adding a book with an anon function with a parameter
    addBook: function(bookData) {
        //If there's a user logged in
        if (this.userId) {
            bookData.userID = this.userId;
            //Setting the insert using the collections name and getting the parameter
            var bookID = Books.insert(bookData);
            // Returning the variable that saves the insert method
            return bookID;
        }
    }
});