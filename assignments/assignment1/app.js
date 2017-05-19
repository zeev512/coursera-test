(function () {
    'use strict';

    angular.module('LunchCheck', [])
<<<<<<< HEAD
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
=======
        .controller('LunchCheckController', ['$scope', LunchCheckController]);

    function LunchCheckController ($scope) {
        $scope.items = "";
        $scope.message = "";

        $scope.checkItems = function() {
            var lunchItems = $scope.items.split(',');
            if ( lunchItems.length == 0 || lunchItems.length == 1 ) {
                var empty = true;
                if (lunchItems.length == 1) {
                    var item = lunchItems[0];
                    if (item !== '')
                        empty = false;
                }
                if ( empty )
                    $scope.message = 'Please enter data first';
            }
            else if ( lunchItems.length == 0 ) {
                $scope.message = 'Please enter data first';
            }
            else if ( lunchItems.length < 4 ) {
                $scope.message = 'Enjoy!';
            }
            else if ( lunchItems.length > 3 ) {
                $scope.message = 'Too much!';
            }
        };

        $scope.replyMessage = function() {
            return $scope.message;
        }
    }

})();

>>>>>>> eac762081bf86b1461d6abb5caa9bd7e443f2880
