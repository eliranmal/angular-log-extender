describe("Unit: Testing Decorated Log Service", function () {

    beforeEach(angular.mock.module('ngLogExtender'));

    it('should contain an $log service', inject(function ($log) {
        expect($log).toBeTruthy();
    }));

    it('should have a working $log service', inject(['$log', function ($log) {
        expect(typeof $log.log).toBe('function');
        expect(typeof $log.info).toBe('function');
        expect(typeof $log.warn).toBe('function');
        expect(typeof $log.error).toBe('function');
        expect(typeof $log.debug).toBe('function');
    }]));

    xit('should not break original functionality of $log service', inject(['$log', '$window', function ($log, $window) {
        $log.info('hey hey hey');
        spyOn($log, 'info').and.callThrough();
        expect($log.info).toHaveBeenCalled();
    }]));

});