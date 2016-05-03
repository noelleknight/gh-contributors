
(function() {
    'use strict';

    angular.module('gh')
        .directive('ghContributor', GhContributor);

    function GhContributor() {
        return {
            restrict: '',
            templateUrl: 'users/gh-contributor.template.html',
            scope: {
              info: '='
            }
        };
    }
})();
