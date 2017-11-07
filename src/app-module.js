import angular from 'angular';

let AppModule = angular
  .module('testApp', [])
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }])

  .run([
    '$location',
    ($location) => {
      console.log($location.search())
    }]
  )

export default AppModule;