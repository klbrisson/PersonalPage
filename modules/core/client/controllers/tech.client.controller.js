(function () {
  'use strict';

  angular
    .module('core')
    .controller('TechCtrl', TechController);

  TechController.$inject = ['$scope', '$interval'];

  function TechController($scope, $interval) {
    var imgs = ['javascript--transparent', 'html5--transparent', 'css3--transparent', 'csharp--transparent', 'angular-js', 'jquery--transparent', 'd3js--transparent', 'grunt--transparent', 'mongodb--transparent', 'nodejs--transparent', 'sass'];
    var images = $scope.images = [];
    var hidden = [];

    for (var i = 0; i < imgs.length; i++) {
      if (i < 5) {
        images.push('/modules/core/client/img/logos/' + imgs[i] + '.png');
      } else {
        hidden.push('/modules/core/client/img/logos/' + imgs[i] + '.png');
      }
    }

    $interval(function() {
      images.push(hidden.shift());
      hidden.push(images.shift());
    }, 2400);
  }
}());
