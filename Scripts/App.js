var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.grouping']);

app.controller('MainCtrl', ['$scope', '$http', '$interval', 'uiGridGroupingConstants', function ($scope, $http, $interval, uiGridGroupingConstants) {
    $scope.gridOptions = {
        enableFiltering: true,
        treeRowHeaderAlwaysVisible: false,
        columnDefs: [
           {
               name: 'Merchant Name', field: 'user._id', grouping: { groupPriority: 0 },
               cellTemplate: '<span style="padding:15px;">{{grid.appScope.name(grid, row)}}</span>'
           },
           { name: 'Name', field: 'title', enableCellEdit: true },
           { name: 'SKU', field: 'sku' },
           { name: 'Category', field: 'pro_category.name' },
           { name: 'Price', field: 'price', treeAggregationType: uiGridGroupingConstants.aggregation.SUM }
        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

    $scope.name = function (grid, row, col) {
        if (row.groupHeader) {
            var entity = row.treeNode.children[0].row.entity;
            return entity.user.name;
        }
        else {
            return row.entity.user.name;
        }
        return "SAmple";
    }

    $scope.gridOptions.data = [{
        "_id": "559dfaa671c2bd2c0a00002f",
        "title": "dfds",
        "sku": "fdsf",
        "price": "34535",
        "desc": "dsfsdf",
        "main_image": "NOPQR09345.png",
        "added_by": "558a526b977459300a00002b",
        "user": {
            "_id": "558a526b977459300a00002b",
            "name": "Merchant",
        }
    }, {
        "_id": "559e0a0f71c2bd2c0a000031",
        "title": "dfdxf",
        "sku": "esdf",
        "price": "345",
        "desc": "xcfgvxdvf",
        "main_image": "NOPQR09345.png",
        "added_by": "558a526b977459300a00002b",
        "user": {
            "_id": "558a526b977459300a00002b",
            "name": "Merchant",
        }
    }, {
        "_id": "559e11084a3df01808000029",
        "title": "Product 1",
        "sku": "KJH",
        "price": "12508",
        "desc": "This istest",
        "main_image": "NOPQR09345.png",
        "added_by": "558a6ade977459300a00002c",
        "user": {
            "_id": "558a6ade977459300a00002c",
            "name": "Merchant",
        }
    }];



}]);
