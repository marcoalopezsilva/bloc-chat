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
<<<<<<< HEAD
                $scope.someVariable = res;
=======
                $scope.outcome = res;
                console.log("outcome is: " + $scope.outcome);
>>>>>>> 891f4d5699810c9f84c74d68dc04cde53b351cde
            });
        };

        console.log($scope);
    };

    angular
        .module('marcosBlocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
}) ();
