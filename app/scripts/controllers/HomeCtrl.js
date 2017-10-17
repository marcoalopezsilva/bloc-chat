(function() {

    function HomeCtrl(Room) {
        this.Welcome = 'Available Chat Rooms:';
        this.rooms = Room.all;
        this.add = Room.add;
    };

    angular
        .module ('marcosBlocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

}) ();
