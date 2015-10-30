angular.module("timeApp")
    .directive("showTime", function() {
        return {
            restrict: 'E',
            template: 'The time is {{time}}',
            link: function(scope, element, attributes) {
                var currentTime = new Date();
                scope.time = currentTime.toString();
            }
        }
});