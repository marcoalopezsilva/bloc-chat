(function () {

    function Message($firebaseArray, $cookies) {

        var Message = {};
        var tempHolder = null;

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            console.log("getByRoomId function called with " + roomId);
            console.log("Will find messages if there are any -->");
            tempHolder = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            console.log(tempHolder);
            return tempHolder;
        };

        Message.send = function (messageToSend) {
            console.log("Message.send function called with argument: " + messageToSend.content);
            messages.$add(messageToSend);
        };

        return Message;
    };

    angular
        .module('marcosBlocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
}) ();
