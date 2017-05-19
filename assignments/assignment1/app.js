(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope) {
            var vm = this;

            list.addItem = function () {
                shoppingList.addItem(list.itemName, list.itemQuantity);
                list.title = origTitle + " (" + list.items.length + " items )";
            };
            $scope.checkItems = function() {
                var lunchItems = $scope.items.split(' ');
                if ( lunchItems < 4 ) {
                    $scope.message = 'Enjoy!';
                }
                else if ( lunchItems > 0 ) {
                    $scope.message = 'Too much!.';
                }
            };

            $scope.upper = function() {
                var upCase = $filter('uppercase');
                $scope.items = upCase($scope.items);
            };
        }

        function AnnotateMe(name, job, blah) {
            return 'blah';
        }

        console.log(AnnotateMe());
})();
