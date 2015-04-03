/**
 * Created by madrid on 03/04/15.
 */
Meteor.publish('books', function() {
    //Retunrning just the listBook of the user logged in
    return Books.find({userID: this.userId});
});
