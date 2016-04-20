(function () {
  'use strict';

  angular
    .module('core')
    .controller('WellCtrl', WellController);

  WellController.$inject = ['$scope'];

  function WellController($scope) {
    var imgs = ['html_js_css', 'csharp', 'angularjs', 'd3js', 'grunt', 'mongodb', 'nodejs', 'sass'];
    var images = $scope.images = [];

    for (var i = 0; i < imgs.length; i++) {
      images.push('/modules/core/client/img/logos/' + imgs[i] + '.png');
    }
  }
}());
