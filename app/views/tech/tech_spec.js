'use strict';

describe('myApp.tech module', function() {

  beforeEach(module('myApp.tech'));

  describe('tech controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var techCtrl = $controller('TechCtrl');
      expect(techCtrl).toBeDefined();
    }));

  });
});
