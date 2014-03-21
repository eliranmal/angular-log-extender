angular-log-extender
===============

Added Capabilities for AngularJS $log.

- Allows for message formatting with placeholders, try:

        $log.log('hello, {}', 'world');
        $log.info('it\'s funny cuz it\'s {}', true);
        $log.warn('{} Batman!', Array(16).join('wat' - 1));
        $log.error('{}{}{}, the number of the beast!', 6, 6, 6);


# Setup

Install via bower:

    bower install angular-log-extender
    
Include the dependency in the module definition:

    angular.module('myModule', ['logExtender']);
    
