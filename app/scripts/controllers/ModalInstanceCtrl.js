(function() {

    function ModalInstanceCtrl($scope, $uibModalInstance) {

        $scope.cancel = function () {
            $scope.message = "Cancel requested";
            console.log($scope.message);
            $uibModalInstance.dismiss();
        };

        $scope.addNew = function () {
            $scope.message = "Room addition requested";
            console.log($scope.message);
            $scope.add($scope.newRoom);
        };
    };

    angular
        .module('marcosBlocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);
}) ();
