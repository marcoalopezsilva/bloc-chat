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
            // Simplified the thing, as per Junior's advice. We don't need to listen for changes right now ->
            //ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot){
            //    tempHolder = snapshot.val();
            //    console.log(tempHolder);
            //});
            //return tempHolder;
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        return Message;
    };

    angular
        .module('marcosBlocChat')
        .factory('Message', ['$firebaseArray', Message]);
}) ();
