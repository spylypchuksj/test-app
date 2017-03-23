angular.module('app').controller('app_postsclassic', app_postsclassic);
function app_postsclassic($scope, app) {
    'use strict';
    app.init($scope);
    $scope.toggleFilters = function (item, filters) {
        filters.forEach(function (filter) {
            filter.selected = false;
        });
        item.selected = true;
    };
    $scope.filter = function (value, index, array) {
        if ($scope.data && $scope.data.filters) {
            var filters = $scope.data.filters;
            for (var i = 0; i < filters.length; i++) {
                if (filters[i].selected && filters[i].id !== 'all') {
                    if (value[filters[i].id]) {
                        return true;
                    }
                } else if (filters[i].selected && filters[i].id === 'all') {
                    return true;
                }
            }
        }
    };
}