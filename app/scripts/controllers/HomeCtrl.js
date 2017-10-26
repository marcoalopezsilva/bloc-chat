(function() {

    function HomeCtrl(Room, Message, $cookies) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        // I declare activeRoom as null to allow me to hide/show the messages form at html
        this.activeRoom = null;

        this.roomClick = function (roomClicked) {
            this.errorMessage = null;
            console.log("Room " + roomClicked + " clicked");
            this.activeRoom = roomClicked.$id;
            this.activeRoomName = roomClicked.$value;
            this.getMessagesByRoomId = Message.getByRoomId(roomClicked.$id);
            };
        this.sendMessage = function() {
            console.log("home.sendMessage function called; message to pass: " + this.inputMessage);
            var message = {
                // The controller can see this.inputMessage because we made it available at html by writing home.inputMessage (we didn't have to declare it here!)
                content: this.inputMessage,
                username: $cookies.get('blocChatCurrentUser'),
                roomId: this.activeRoom,
                sentAt: firebase.database.ServerValue.TIMESTAMP
            };
            Message.send(message);
            // Next lines clears the messages form
            this.inputMessage = null;
            };

        };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);

}) ();
