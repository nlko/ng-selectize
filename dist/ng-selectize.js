(function() {
  "use strict";

  angular.module("theaquaNg", ['ng']).directive("selectize", function($timeout) {
    return {
      restrict: "AE",
      link: function(scope, element, attrs) {
        return $timeout(function() {
            var options = scope.$eval(attrs.selectize);

			// list of selective functions
            var option_func=['load','score','onInitialize','onChange','onItemAdd','onItemRemove','onClear','onDelete','onOptionAdd','onOptionRemove',
            'onDropdownOpen','onDropdownClose','onType','onLoad'];

			// convert every function name to a call to the function in the scope
			// For example, if we have in the controler
			// scope.my_load = function(query,cb) {}
			// and the html option contains
			// <select ... selectize="{ load:'my_load', delimiter: ',', ...}">
			// this will make load option point to the my_load function from the scope
            option_func.forEach(function(elem,index,array){
              if(options[elem])
                options[elem] = scope[options[elem]];
            });

            if(options['render']) {
              var render_func=['option','option_create','optgroup_header','optgroup'];

              render_func.forEach(function(elem,index,array){
                options['render'][elem] = scope[options['render'][elem]];
                });
            }

            console.dir(attrs);

          return $(element).selectize(options);
        });
      }
    };
  });
}).call(this);
