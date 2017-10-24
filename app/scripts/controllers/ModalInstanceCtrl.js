(function() {

    function ModalInstanceCtrl($scope, $uibModalInstance, $cookies, Room) {

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
        
    };

    angular
        .module('marcosBlocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', 'Room', ModalInstanceCtrl]);
}) ();
