(function() {

    function ModalCtrl($scope, $uibModal) {

        $scope.open = function () {
            $scope.message = "New Room button clicked";
            console.log($scope.message);
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modalNewRoom.html',
                controller: 'ModalInstanceCtrl',
                scope: $scope
            });

            modalInstance.result.then(function(res) {
                $scope.outcome = res;
            });
        };

    };

    angular
        .module('marcosBlocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
}) ();
