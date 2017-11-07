import angular from 'angular';
import AppModule from './app-module';

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, [AppModule.name]);
    console.log('hello');
  });