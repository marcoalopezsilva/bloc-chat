(function() {

    function ModalCtrl($scope, $uibModal, $log) {

        $scope.showForm = function () {
            $scope.message = "New Room button clicked";
            console.log($scope.message);
            var modalInstance = $uibModal.open({
                scope: $scope,
                animation: $scope.animationsEnabled,
                templateUrl: '/templates/modalTextInput.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
        });

        modalInstance.result.then(function (text) {
            $scope.selected = text;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
            });
        };

        var ModalInstanceCtrl = function ($scope, $modalInstance, userForm) {
            $scope.form = {}
            $scope.submitForm = function () {
                if ($scope.form.userForm.$valid) {
                    console.log('user form is in scope');
                    $modalInstance.close('closed');
                } else {
                    console.log('userform is not in scope');
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

    };

    angular
        .module('marcosBlocChat')
        .controller('ModalCtrl', [ModalCtrl]);

}) ();
