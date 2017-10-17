(function() {

    function Room($firebaseArray) {
        var Room = {};
        // Q: Next line sets a path starting at the "rooms" location of the database?
        var ref = firebase.database().ref().child("rooms");
        // $firebaseArray returns a JavaScript array which contains the data at the provided location in Firebase and some extra AngularFire-specific fields
        // Q: So, next line gets the data at "ref" (currently, "rooms"), so basically the names of available rooms?
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function(room) {
            console.log("add Room function called");
            //I still have to modify this
            //rooms.$add({ foo: "bar" }).then(function(room) {
            //    var id = room.key;
            //    console.log("Added record with id " + id);
            //    list.$indexFor(id);
            //});
        };

        return Room;
    };

    angular
        .module('marcosBlocChat')
        .factory('Room', ['$firebaseArray', Room]);

})();
