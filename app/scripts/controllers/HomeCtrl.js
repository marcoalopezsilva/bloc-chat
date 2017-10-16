(function() {

    function HomeCtrl(Room) {
        this.Welcome = 'Available Chat Rooms:';
        this.RoomArray = Room;
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

}) ();
