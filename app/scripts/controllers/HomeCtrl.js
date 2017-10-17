(function() {

    function HomeCtrl(Room) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.addRoom = Room.addRoom;
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

}) ();
