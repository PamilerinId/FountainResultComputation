/**
 * Created by GHostEater on 10-Apr-16.
 */
(function () {
    'use strict';
    angular.module('fuoRes')
        .config(routerConfig);
    function routerConfig($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('login',{url:'/login',templateUrl:'app/login.html'})
            .state('home',{url:'/home',templateUrl:'app/home.html'});
        $urlRouterProvider.otherwise('/login');
    }
})();