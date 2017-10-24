(function() {

    function ModalCtrl($scope, $uibModal) {

        $scope.openNewRoom = function () {
            $scope.message = "New Room button clicked";
            console.log($scope.message);
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modalNewRoom.html',
                controller: 'ModalInstanceCtrl',
                scope: $scope
            });
        };

    };

    angular
        .module('marcosBlocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
}) ();
