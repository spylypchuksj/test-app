angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
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
    }).state('app.test/testscreen', {
        views: {
            app: {
                controller: 'app_test_testscreen',
                templateProvider: function (app) {
                    return app.templateProvider('app.test.testscreen');
                }
            }
        }
    }).state('app.test/sptest', {
        views: {
            app: {
                controller: 'app_test_sptest',
                templateProvider: function (app) {
                    return app.templateProvider('app.test.sptest');
                }
            }
        }
    }).state('app.screen', {
        views: {
            app: {
                controller: 'app_screen',
                templateProvider: function (app) {
                    return app.templateProvider('app.screen');
                }
            }
        }
    });
});