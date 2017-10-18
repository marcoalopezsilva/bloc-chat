(function() {

    function ModalInstanceCtrl($scope, $uibModalInstance, Room) {

        $scope.cancel = function () {
            $scope.message = "Cancel requested";
            console.log($scope.message);
            $uibModalInstance.close();
        };

        $scope.addNew = function () {
            $scope.message = "Room addition requested";
            console.log($scope.message);
            Room.addRoom($scope.newRoom);
            $uibModalInstance.close();
        };
    };

    angular
        .module('marcosBlocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', ModalInstanceCtrl]);
}) ();
