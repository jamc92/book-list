/**
 * Created by madrid on 03/04/15.
 */

Template.bookList.helpers({
    books: function() {
        return Books.find();
    }
});