'use strict';

const moduleName = 'main';
const angular = require('angular');


let mod = angular.module(moduleName, [
    // Angular
    require('angular-animate'),
    require('angular-ui-router'),
    require('angular-sanitize'),
    require('angular-utils-pagination'),
    require('angular-scroll'),
    require('angular-ui-mask'),
    require('ng-file-upload'),

    // Libraries
    require('../libraries/loading'),
    require('../libraries/notifications'),
    require('../libraries/file-upload'),
    require('../libraries/delete-record'),
]);

// Run
mod.run(require('./run'));

// Config
mod.config(require('./config'));

// Routes
mod.constant('apiRoutes', require('../../constants/apiRoutes'));

// Constants
mod.constant('manufacturers', require('./constants/manufacturers'));


// Controllers
mod.controller('OrderListController', require('./controllers/OrderListController'));
mod.controller('OrderController', require('./controllers/OrderController'));
mod.controller('ProductListController', require('./controllers/ProductListController'));
mod.controller('ProductController', require('./controllers/ProductController'));


// Filters
mod.filter('jsonDate', require('./filters/jsonDate'));


// Services
mod.service('AdminService', require('./services/AdminService'));



module.exports = moduleName;