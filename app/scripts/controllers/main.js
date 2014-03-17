'use strict';

angular.module('ngLogExtender')
    .controller('MainCtrl', function ($scope, $log) {

        $log.log('this is a log message with a string [{}], a number [{}], a boolean [{}] and an object [{}]',
            'i am a string yo', 1, true, {});

    });
