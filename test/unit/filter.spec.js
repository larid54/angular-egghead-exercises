describe('user', function ()
{
    'use strict';

    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope, Users)
    {
        scope = $rootScope.$new();

        $controller('UserCtrl', {$scope: scope, Users: Users});
    }));


    describe('limit rows', function ()
    {
        it('default limit should be 15', function ()
        {
            expect(scope.limit).toEqual(15);
        });
    });

    describe('reverse function', function ()
    {
        beforeEach(function ()
        {
            scope.reverseSort('username');
        });

        it('should set choice to the name of the column you clicked', function ()
        {
            expect(scope.predicate).toEqual('username');
        });
    });

});