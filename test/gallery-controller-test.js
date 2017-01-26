'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('GalleryController', function(){
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      this.galleryCtrl = new $controller('GalleryController');
      this.HomeController = new $controller('HomeController');
      this.SignupController = new $controller('SignupController');
    });
  });

  describe('property test GalleryController', () => {
    it('title proprerty should be equal to "welcome to Gallery"', () => {
      expect(this.galleryCtrl.title).toBe('welcome to Gallery!');
    });
  });
  describe('property test HomeController', () => {
    it('title proprerty should be equal to "welcome Home!"', () => {
      expect(this.HomeController.title).toBe('welcome Home!');
    });
  });
  describe('property test SignupController', () => {
    it('title proprerty should be equal to "signup-content!"', () => {
      expect(this.SignupController.title).toBe('signup-content!');
    });
  });
});
