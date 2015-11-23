function forumFn($scope, $http) {
    $http({url: '/forum'})
        .success(function (massages) {
            $scope.massages = massages;
        })
}