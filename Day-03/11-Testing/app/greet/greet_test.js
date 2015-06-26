describe("Greet Module", function(){

    beforeEach(module("myApp.greet"));

    describe("greetController", function(){
        it("Should have the name initialized to empty string", inject(function($controller){

            var fakeScope = {};

            $controller("greetController", {$scope : fakeScope});

            expect(fakeScope.name).toBe('');
        }));

        it("Should have the greetMsg initialized to empty string", inject(function($controller){

            var fakeScope = {};

            $controller("greetController", {$scope : fakeScope});

            expect(fakeScope.greetMsg).toBe('');
        }));

        it("Should populate the greetMsg with the greet message when greeted", inject(function($controller){

        var fakeScope = {};

        $controller("greetController", {$scope : fakeScope});

        fakeScope.name = 'Magesh';
        fakeScope.greet();

        expect(fakeScope.greetMsg).toBe('Hi Magesh, Have a nice day!');
    }));
    });

    describe("trimText Filter", function(){
        it("should return the original string if the given string is short", inject(function($filter){

            var trimTextFilter = $filter("trimText");
            var data = 'short string';
            var expectedResult = data;

            var result = trimTextFilter(data,20);

            expect(result).toBe(expectedResult);

        }));

        it("should return the truncated string if the given string is long", inject(function($filter){

            var trimTextFilter = $filter("trimText");
            var data = 'This is a very very looooooong string for testing';
            var expectedResult = 'This is a very very ...';

            var result = trimTextFilter(data,20);

            expect(result).toBe(expectedResult);

        }));
    });

});
