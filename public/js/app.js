'use strict';

angular.module('mean', ['ngCookies', 'ui.router', 'ngResource', 'ui.bootstrap', 'mean.system', 'mean.articles', 'mean.editableFiles','ui.codemirror', 'ngSanitize', 'angularTreeview', 'btford.socket-io']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.editableFiles', []);