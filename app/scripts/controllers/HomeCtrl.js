(function() {

    function HomeCtrl(Room, Message) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.roomClick = function (roomClicked) {
            console.log("Room " + roomClicked + " clicked");
            // Next 3 lines I removed as per Junior's advise
            //this.currentRoomName = roomClicked;
            //this.currentRoomId = Room.getRoomId(roomClicked);
            //this.getMessagesByRoomId = Message.getByRoomId(this.currentRoomId);
            this.getMessagesByRoomId = Message.getByRoomId(roomClicked.$id);
            };
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);

}) ();
