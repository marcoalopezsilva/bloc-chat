(function() {

    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase:false
            });
        $stateProvider
            .state('home', {
                url:'/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    angular
        .module('marcosBlocChat', ['ui.bootstrap','ui.router','firebase','ngCookies'])
        .config(config);

})();

// Junior: Instructions do not specify where the run block is to be introduced, and since Bloc's syntax is different from the standard Angular reference, I decided to place it here an see if that worked.
(function() {

    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser ==='') {
            $uibModal.open({
                templateUrl: '/templates/modalNewUser.html',
                controller: 'ModalInstanceCtrl',
                // Junior: I included these two lines to prevent the user from closing the modal by clicking on the background (googled it)
                backdrop: 'static',
                keyboard: false
                //scope: $scope
            });
        };
    }

    angular
        .module('marcosBlocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);

})();
