(function() {

    function HomeCtrl(Room) {
        this.currentRoom = null;
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.roomClick = function (roomClicked) {
            console.log("Room " + roomClicked + " clicked");
            this.currentRoom = roomClicked;
            };
        };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

}) ();
