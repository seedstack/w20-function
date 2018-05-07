/*
 * Copyright © 2013-2018, The SeedStack authors <http://seedstack.org>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
define([
    '{angular}/angular'
], function (angular) {
    'use strict';

    var module = angular.module('demo', []);

    module.controller('HomeController', ['$scope', 'AuthenticationService', function ($scope, authenticationService) {
        $scope.login = function () {
            authenticationService.authenticate();
        };

        $scope.logout = function () {
            authenticationService.deauthenticate();
        };
    }]);

    return {
        angularModules: ['demo']
    }
});