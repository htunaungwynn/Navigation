directives..directive("navigationMenu", ['$compile',function ($compile) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      menu: '='
    },

    template: '<ul><li ng-repeat="item in menu"><a href={{item.Url}}>{{item.Name}}</a><span ng-if="item.Children.length > 0"><navigation menu="item.Children"></navigation></span></li></ul>',
    compile: function (el) {
      var contents = el.contents().remove();
      var compiled;
      return function(scope,el){
        if(!compiled)
          compiled = $compile(contents);

        compiled(scope,function(clone){
          el.append(clone);
        });
      };
    }
  };
}]);