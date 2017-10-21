(function() {

    function HomeCtrl(Room, Message) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.roomClick = function (roomClicked) {
            console.log("Room " + roomClicked + " clicked");
            this.currentRoomName = roomClicked;
            this.currentRoomId = Room.getRoomId(roomClicked);
            this.getMessagesByRoomId = Message.getByRoomId(this.currentRoomId);
            };
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);

}) ();
