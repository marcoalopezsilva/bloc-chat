(function () {

    function Message($firebaseArray) {

        var Message = {};
        var tempHolder = null;
        var tempHolder2 = null;

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            console.log("getByRoomId function called with " + roomId);
            console.log("Will find messages if there are any -->");
            // In next line, "roomId" as argument or orderByChild refers to the key at the database; whereas 'roomId' at .equalTo refers to the function's argument (a variable)
            ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot){
                tempHolder = snapshot.val();
                console.log(tempHolder);
            });
            return tempHolder;
        };

        return Message;
    };

    angular
        .module('marcosBlocChat')
        .factory('Message', ['$firebaseArray', Message]);
}) ();
