/**
 * Created by Manuel on 15/05/2017.
 */

var RodiApp = angular.module('RodiApp', ['ngCookies', 'ngTable', 'chart.js']);

var baseUrl = 'http://localhost:63342/RODI/frontend/';
// Da modificare quando è online
// var baseUrl = 'http://www.riskopendata.org/';

var baseAPIurl = 'https://dev.riskopendata.org/api-dev/'; // Sviluppo
var APIversion = '0.24.1';

RodiApp.config(function($locationProvider) {

    $locationProvider.html5Mode(true);

});
