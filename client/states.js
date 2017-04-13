angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blanktest', {
        views: {
            app: {
                controller: 'app_blanktest',
                templateProvider: function (app) {
                    return app.templateProvider('app.blanktest');
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
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.logincool', {
        views: {
            app: {
                controller: 'app_logincool',
                templateProvider: function (app) {
                    return app.templateProvider('app.logincool');
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
    }).state('app.messagesconfident', {
        views: {
            app: {
                controller: 'app_messagesconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.messagesconfident');
                }
            }
        }
    });
});