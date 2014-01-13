'use strict';

angular.module('meanSkeletonApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
