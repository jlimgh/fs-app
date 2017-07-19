describe("floatPercentage", function() {
  var $rootScope,
  	  $scope,
  	  $compile,
  	  $el,
  	  elem,
  	  $body = $('body'),
  	  simpleHtml = '<form name="form" novalidate>' +
                      '<div class="form-group">' +
                        '<label for="usr">Input:</label>' +
                         '<input type="text" id="float" class="form-control" ng-model="length" name="length" float-percentage="float" />' +
                          '<strong> {{length}} </strong>' +
                          '<br />' +
                          '<span class="error" ng-show="form.length.$error.float">' + 
                            'This is not a valid float number!' +
                          '</span>' +
                          '<span class="error" ng-show="form.length.$error.number">' +
                              'Range must be between 0 and 100!' +
                          '</span>' +
                        '</div>' +
                      '</form>';

  beforeEach(function() {
  	module('app');

  	inject(function($injector) {
  		$rootScope = $injector.get('$rootScope');
  		$scope = $rootScope.$new();
  		$compile = $injector.get('$compile');
  	  elem = angular.element(simpleHtml);
  		$compile(elem)($scope);
  	});

  	$scope.$digest();
  });



  it("should exist on the DOM and as a input attribute", function() {
    
  	expect(elem.find("input").attr("float-percentage")).toBeTruthy();
  	$scope.$digest();
  	
  });

  it("should take in a model and make it a float number", function() {
    
    elem.val("5");
    $scope.$apply();
    $scope.$digest();
    
  	expect(elem.val()).toEqual('5');
  	
  });


  it("should show notification error if input is not a float number", function() {
    
    expect(elem.attr("span")).toBeFalsy();
    elem.val("f").trigger("input");
    $scope.$apply();
    $scope.$digest();

  	expect(elem.find("span").hasClass("error")).toEqual(true);
  	
  });


});
