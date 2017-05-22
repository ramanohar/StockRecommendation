var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.grouping']);

app.controller('MainCtrl', ['$scope', '$http', '$interval', 'uiGridGroupingConstants', function ($scope, $http, $interval, uiGridGroupingConstants) {
    $scope.gridOptions = {
        enableFiltering: true,
        treeRowHeaderAlwaysVisible: false,
        columnDefs: [
           {
               name: 'Recommendation Group', field: 'RecommendationGroup', grouping: { groupPriority: 0 },
               cellTemplate: '<span style="padding:15px;">{{grid.appScope.name(grid, row)}}</span>'
           },
           { name: 'Recommender Name', field: 'RecommenderName', enableCellEdit: true },
           { name: 'CompanyName', field: 'CompanyName' },
           { name: 'Start Price', field: 'StartPrice' },
           { name: 'Target Price', field: 'TargetPrice' },
            { name: 'Time Left', field: 'TimeLeft' },
            { name: 'Status', field: 'Status' }


        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

    $scope.name = function (grid, row, col) {
        if (row.groupHeader) {
            var entity = row.treeNode.children[0].row.entity;
            return entity.RecommendationGroup;
        }
        else {
            return row.entity.RecommendationGroup;
        }
        return "SAmple";
    }

    $scope.gridOptions.data = [{

        "RecommenderName": "Manohar",
        "CompanyName": "abc company",
        "StartPrice": "200",
        "TargetPrice": "400",
        "TimeLeft": "3 days",
        "Status": "PASS",
        "RecommendationGroup": "Active Recommendations"

    }, {
        "RecommenderName": "Shreyas",
        "CompanyName": "abc company",
        "StartPrice": "200",
        "TargetPrice": "400",
        "TimeLeft": "3 days",
        "Status": "PASS",
        "RecommendationGroup": "Past Recommendations"
    }
    , {
        "RecommenderName": "sada",
        "CompanyName": "abc company",
        "StartPrice": "200",
        "TargetPrice": "400",
        "TimeLeft": "3 days",
        "Status": "PASS",
        "RecommendationGroup": "Top Recommendations"
    },
    {

        "RecommenderName": "jayant",
        "CompanyName": "abc company",
        "StartPrice": "200",
        "TargetPrice": "400",
        "TimeLeft": "3 days",
        "Status": "PASS",
        "RecommendationGroup": "Active Recommendations"

    }, {
        "RecommenderName": "anil",
        "CompanyName": "abc company",
        "StartPrice": "200",
        "TargetPrice": "400",
        "TimeLeft": "3 days",
        "Status": "PASS",
        "RecommendationGroup": "Past Recommendations"
    }
    , {
        "RecommenderName": "puneeth",
        "CompanyName": "abc company",
        "StartPrice": "200",
        "TargetPrice": "400",
        "TimeLeft": "3 days",
        "Status": "PASS",
        "RecommendationGroup": "Top Recommendations"
    }

    ];

}]);
