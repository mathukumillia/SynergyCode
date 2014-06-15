'use strict';

angular.module('mean', ['ngCookies', 'ui.router', 'ngResource', 'ui.bootstrap', 'mean.system', 'mean.articles', 'mean.editableFiles', 'mean.chat','ui.codemirror', 'ngSanitize', 'angularTreeview', 'btford.socket-io']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.editableFiles', []);
angular.module('mean.chat', []);