(function () {
  'use strict';

  angular
    .module('core')
    .controller('WellCtrl', WellController);

  WellController.$inject = ['$scope', '$interval'];

  function WellController($scope, $interval) {
    var imgs = ['javascript', 'html-5', 'css-3', 'c-sharp', 'angular-js', 'jquery-logo', 'd3-js', 'grunt-white', 'mongo-db', 'node-js', 'sass'];
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
