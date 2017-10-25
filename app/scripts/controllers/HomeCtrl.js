(function() {

    function HomeCtrl(Room, Message) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.roomClick = function (roomClicked) {
            this.errorMessage = null;
            console.log("Room " + roomClicked + " clicked");
            this.activeRoom = roomClicked.$id;
            this.activeRoomName = roomClicked.$value;
            this.getMessagesByRoomId = Message.getByRoomId(roomClicked.$id);
            };
        this.sendMessage = function(messageToPass) {
            if (!this.activeRoom) {
                this.errorMessage = "Please select a room first!"
                } else {
                    console.log("home.sendMessage function called; message to pass: " + messageToPass);
                    Message.send(messageToPass, this.activeRoom);
                    // Junior: This line doesn't work as expected...
                    this.messageSenderForm.reset();
                    };
            };
        };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);

}) ();
