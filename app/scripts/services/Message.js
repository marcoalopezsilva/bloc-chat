(function () {

    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
        console.log("getByRoomId function called with " + roomId);
        };

        return Message;
    };

    angular
        .module('marcosBlocChat')
        .factory('Message', ['$firebaseArray', Message]);
}) ();
