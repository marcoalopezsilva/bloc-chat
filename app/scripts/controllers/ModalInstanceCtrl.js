(function() {

    function ModalInstanceCtrl($scope, $uibModalInstance) {

        $scope.cancel = function () {
            $scope.message = "Cancel requested";
            console.log($scope.message);
            $uibModalInstance.dismiss();
        };

        $scope.add = function () {
            $scope.message = "Room addition requested";
            console.log($scope.message);
            $scope.addRoom($scope.newRoom);
        };
    };

    angular
        .module('marcosBlocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);
}) ();
