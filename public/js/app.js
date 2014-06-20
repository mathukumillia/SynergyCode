'use strict';

angular.module('mean', ['ngCookies', 'ui.router', 'ngResource', 'ui.bootstrap', 'mean.system', 'mean.articles', 'mean.editableFiles', 'mean.chat','ui.codemirror', 'ngSanitize', 'btford.socket-io', 'angularFileUpload']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.editableFiles', []);
angular.module('mean.chat', []);