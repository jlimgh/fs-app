describe("floatPercentage", function() {
  var $rootScope,
  	  $scope,
  	  $compile,
  	  $el,
  	  $body = $('body'),
  	  simpleHtml = "<form name='form'>" + "<input ng-model='length' float-percentage='float'></input>" + "</form>";

  beforeEach(function() {
  	module('app');

  	inject(function($injector) {
  		$rootScope = $injector.get('$rootScope');
  		$scope = $rootScope.$new();
  		$compile = $injector.get('$compile');
  		el = $compile(angular.element(simpleHtml))($scope);
  	});

  	$body.append(el);
  	$rootScope.$digest();
  });

  it("should exist", function() {
  	expect(el.hasClass("float")).toBeFalsy();
  	$scope.$digest();
  	console.log("el", el);
  	expect(el.hasClass("float")).toBeTruthy();
  });



  it("Should show an notification error if it is not a float number", function () {
    // $compile(dirElement)($scope);
    // $scope.$digest();

    // Find the input control: 
    console.log("el: ", el);
    console.log("floatpercentage", el.attr("float-percentage"));
    var dirElementInput = el.find('input');

    // Set some text!
    angular.element(dirElementInput).val('Some text').trigger('input');
    $scope.$apply();

    console.log("dirElementInput", dirElementInput);
    // Check the outcome is what you expect! (in my case, that a specific class has been applied)
    expect(dirElementInput.hasClass('ng-valid')).toEqual(true);
  });


});

