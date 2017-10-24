(function() {

    function ModalInstanceCtrl2($scope, $uibModalInstance, $cookies) {

        $scope.addNewUser = function () {
            $scope.message = "Modal for new user loaded";
            console.log($scope.message);
            if (!$scope.newUsername || typeof $scope.newUsername === undefined) {
                $scope.errorMessage = "Please enter a valid username"
                console.log($scope.errorMessage);
            } else {
                $cookies.put('blocChatCurrentUser', $scope.newUsername);
                console.log("New username: " + $cookies.get('blocChatCurrentUser') + " was created at cookies");
                $uibModalInstance.close();
            }
        };

    }

    angular
        .module('marcosBlocChat')
        .controller('ModalInstanceCtrl2', ['$scope', '$uibModalInstance', '$cookies', ModalInstanceCtrl2]);
}) ();
