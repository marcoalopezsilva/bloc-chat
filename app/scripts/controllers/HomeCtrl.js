(function() {

    function HomeCtrl(Room, Message) {
        this.currentRoomName = null;
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.roomClick = function (roomClicked) {
            console.log("Room " + roomClicked + " clicked");
            this.currentRoomName = roomClicked;
            };
        this.getByRoomId = Message.getByRoomId;
        };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);

}) ();
