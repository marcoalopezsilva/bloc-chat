(function() {

    function HomeCtrl(Room) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

}) ();
