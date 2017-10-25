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

        Message.send = function (newMessage, linkedRoom) {
            console.log("Message.send function called with argument: " + newMessage);
            var today = new Date();
            var hours = today.getHours();
            if (hours < 10) {
                var hoursString = '0'+ hours;
            } else { var hoursString = hours };
            var mins = today.getMinutes();
            if (mins < 10) {
                var minsString = '0' + mins;
            } else { var minsString = mins };
            var time = hoursString + ':' + minsString;
            console.log(time);
            var currentUser = $cookies.get('blocChatCurrentUser');
            messages.$add({ content: newMessage, username: currentUser, roomId: linkedRoom, sentAt: time });
        };

        return Message;
    };

    angular
        .module('marcosBlocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
}) ();
