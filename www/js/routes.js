angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .state('signup', {
    url: '/page6',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
  })
  .state('login', {
    url: '/page5',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
  })
  .state('author', {
    url: '/author',
    templateUrl: 'templates/author.html',
    controller: 'authorCtrl'
  })
  .state('library', {
    url: '/library',
    templateUrl: 'templates/library.html',
    controller: 'libraryCtrl'
  })  
  .state('librarybook', {
    url: '/book0',
    templateUrl: 'templates/library-one.html',
    controller: 'libraryBookCtrl'
  })
  .state('tabsController.signup', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
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
  // .state('menu2', {
  //     url: '/page7',
  //     templateUrl: 'templates/menu2.html',
  //     controller: 'menu2Ctrl'
  //   })


  .state('offers', {
    url: '/page8',
    templateUrl: 'templates/offers.html',
    controller: 'offersCtrl'
  })

  .state('myCart', {
    url: '/page9',
    templateUrl: 'templates/myCart.html',
    controller: 'myCartCtrl'
  })

  .state('lastOrders', {
    url: '/page10',
    templateUrl: 'templates/lastOrders.html',
    controller: 'lastOrdersCtrl'
  })

  .state('favourite', {
    url: '/page11',
    templateUrl: 'templates/favourite.html',
    controller: 'favouriteCtrl'
  })

  .state('settings', {
    url: '/page12',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('support', {
    url: '/page13',
    templateUrl: 'templates/support.html',
    controller: 'supportCtrl'
  })

  .state('checkout', {
    url: '/page16',
    templateUrl: 'templates/checkout.html',
    controller: 'checkoutCtrl'
  })


$urlRouterProvider.otherwise('/library')



});
