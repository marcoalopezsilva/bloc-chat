(function() {

    function HomeCtrl(Room) {
        this.Welcome = 'Available Chat Rooms:';
        this.Room = Room;
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

}) ();
