'use strict';

angular.module('logExtender')
    .controller('MainCtrl', function ($scope, $log) {

        $log.log('this is a log message with a string [{}], a number [{}], a boolean [{}] and an object [{}]',
            'i am a string yo', 1, true, {});

        $log.log('hello, {}', 'world');
        $log.info('it\'s funny cuz it\'s {}', true);
        $log.warn('{} Batman!', Array(16).join('wat' - 1));
        $log.error('{}{}{}, the number of the beast!', 6, 6, 6);

    });
