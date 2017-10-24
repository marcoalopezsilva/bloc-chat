(function() {

    function Room($firebaseArray) {

        var Room = {};
        //var tempHolder = null;

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

        //There is no need for next function anymore, as I passed the entire array (Junior's advice)
        //Room.getRoomId = function(roomName) {
        //    ref.orderByValue().equalTo(roomName).on('value', function(snapshot) {
        //        snapshot.forEach(function(data) {
        //            console.log("This room's $id is: " + data.key);
        //            tempHolder = data.key;
        //            });
        //        });
        //    return tempHolder;
        //};

        return Room;

    };

    angular
        .module('marcosBlocChat')
        .factory('Room', ['$firebaseArray', Room]);

})();
