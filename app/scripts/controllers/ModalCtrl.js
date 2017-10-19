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

            // Explanation by Junior: This makes sure that the modal is finished, then does something
            //modalInstance.result.then(function(res) {
            //    $scope.someVariable = res;
            //});
        };

        //console.log($scope);
    };

    angular
        .module('marcosBlocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
}) ();
