
var app = angular.module('app', []);

app.directive('floatPercentage', function() {
	return {
	  restrict: 'A',	
	  require: 'ngModel',
	  link: function(scope, elm, attrs, controller) {
	  	var sumNum;
	  	var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
	    controller.$parsers.unshift(function(viewValue) {
	      if (FLOAT_REGEXP.test(viewValue)) {
	        controller.$setValidity('float', true);
	        sumNum = parseFloat(viewValue.replace(',', '.'));
	        if (sumNum >= 0 && sumNum <= 100) {
	        	controller.$setValidity('number', true);
	        	return sumNum + "%";
	        } else {
	        	controller.$setValidity('number', false);
	        }
	      } else {
	        controller.$setValidity('float', false);
	        return undefined;
	      }
	    });
	  }
	};
});