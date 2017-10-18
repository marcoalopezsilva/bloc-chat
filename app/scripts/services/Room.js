(function() {

    function Room($firebaseArray) {
        var Room = {};
        // Q: Next line sets a path starting at the "rooms" location of the database?
        var ref = firebase.database().ref().child("rooms");
        // $firebaseArray returns a JavaScript array which contains the data at the provided location in Firebase and some extra AngularFire-specific fields
        // Q: So, next line gets the data at "ref" (currently, "rooms"), so basically the names of available rooms?
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.addRoom = function (room) {
            console.log("addRoom function called with argument: " + room);
            var list = $firebaseArray(ref);
            list.$add({ $value: room }).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                list.$indexFor(id); // returns location in the array
                console.log(list);
            });
        };

        return Room;
    };

    angular
        .module('marcosBlocChat')
        .factory('Room', ['$firebaseArray', Room]);

})();
