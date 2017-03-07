angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.testlist', {
        views: {
            app: {
                controller: 'app_testlist',
                templateProvider: function (app) {
                    return app.templateProvider('app.testlist');
                }
            }
        }
    }).state('app.loginclassic', {
        views: {
            app: {
                controller: 'app_loginclassic',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginclassic');
                }
            }
        }
    }).state('app.test_folder/test', {
        views: {
            app: {
                controller: 'app_test_folder_test',
                templateProvider: function (app) {
                    return app.templateProvider('app.test_folder.test');
                }
            }
        }
    }).state('app.test_folder/page', {
        views: {
            app: {
                controller: 'app_test_folder_page',
                templateProvider: function (app) {
                    return app.templateProvider('app.test_folder.page');
                }
            }
        }
    });
});