angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('projet', {
    url: '/app',
    templateUrl: 'templates/sideMenu.html',
    controller: 'indexCtrl',
    abstract:true
  })

  .state('homeParent', {
    url: '/artefact',
    abstract: true,
    templateUrl: 'templates/homeParent.html',
    controller: 'indexCtrl'
  })
  .state('homeParent.home', {
    url: '/home',
    views: {
      'homeContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('homeParent.signup', {
    url: '/signup',
    views: {
      'homeContent': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })
  .state('homeParent.research', {
    url: '/research',
    views: {
      'homeContent': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('projet.library', {
    url: '/library',
    views: {
      'menuContent': {
        templateUrl: 'templates/library.html',
        controller: 'libraryCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.forgotPassword', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
      }
    }
  })
$urlRouterProvider.otherwise('artefact/home')

});