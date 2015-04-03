/**
 * Created by madrid on 03/04/15.
 */
Meteor.subscribe('books');

Template.bookList.events({
    "submit .add-book": function(event) {
        event.preventDefault(); // this prevents built-in form submission
        Meteor.call('addBook', {title: event.target.title.value, author: event.target.author.value})
    }
});