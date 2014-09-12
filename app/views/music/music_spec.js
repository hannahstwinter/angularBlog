'use strict';

describe('myApp.music module', function() {

  beforeEach(module('myApp.music'));

  describe('music controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var musicCtrl = $controller('MusicCtrl');
      expect(musicCtrl).toBeDefined();
    }));

  });
});
