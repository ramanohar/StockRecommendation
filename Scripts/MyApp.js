angular.module('app', [
  'ui.grid',
  'ui.grid.grouping'
])
.controller('GridCtrl', function ($scope,$timeout, uiGridConstants, uiGridGroupingConstants) {
    var self = this;

    self.gridOptions = {
       
        enableSorting: true,
        enableFiltering: true,
        data: [
         {

             RecommenderName: "Manohar",
             CompanyName: "abc company",
             StartPrice: "100",
             TargetPrice: "200",
             TimeLeft: "12 days",
             Status: "PASS",
             RecommendationGroup: "Active Recommendations"

         }, {
             RecommenderName: "Shreyas",
             CompanyName: "adobe",
             StartPrice: "200",
             TargetPrice: "400",
             TimeLeft: "3 days",
             Status: "PASS",
             RecommendationGroup: "Past Recommendations"
         }
    , {
        RecommenderName: "sada",
        CompanyName: "infra",
        StartPrice: "1000",
        TargetPrice: "2000",
        TimeLeft: "4 days",
        Status: "PASS",
        RecommendationGroup: "Top Recommendations"
    },
    {

        RecommenderName: "jayant",
        CompanyName: "Cisco",
        StartPrice: "400",
        TargetPrice: "450",
        TimeLeft: "0 days",
        Status: "PASS",
        RecommendationGroup: "Active Recommendations"

    }, {
        RecommenderName: "anil",
        CompanyName: "abc company",
        StartPrice: "150",
        TargetPrice: "400",
        TimeLeft: "6 days",
        Status: "PASS",
        RecommendationGroup: "Past Recommendations"
    }
    , {
        RecommenderName: "puneeth",
        CompanyName: "Infra",
        StartPrice: "1000",
        TargetPrice: "4000",
        TimeLeft: "12 days",
        Status: "PASS",
        RecommendationGroup: "Top Recommendations"
    }
        ],
        columnDefs: [
          {
              field: 'RecommenderName',
              displayName: 'Recommender Name',
              width: '20%'
          },
          {
              field: 'CompanyName',
              CompanyName: 'Company Name',
              width: '15%'
          },
           {
               field: 'StartPrice',
               CompanyName: 'Start Price',
               width: '10%'
           },
            {
                field: 'TargetPrice',
                CompanyName: 'Target Price',
                width: '10%'
            },
             {
                 field: 'TimeLeft',
                 CompanyName: 'Time Left',
                 width: '10%'
             },
              {
                  field: 'Status',
                  CompanyName: 'Status',
                  width: '10%'
              },
          {
              field: 'RecommendationGroup',
              cellTemplate: '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
          }
        ],
        onRegisterApi: function (gridApi) {
            $timeout(function () {
               
                gridApi.grouping.clearGrouping();
                gridApi.grouping.groupColumn('RecommendationGroup');
                gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
               
                   
               
            });

           
        }
    };

    $scope.availableTags = [
     "Shreyas",
     "Manohar",
     "Sada",
     "Puneeth",
     "Anil"
   
    ];
    $scope.complete = function () {
        $("#Names").autocomplete({
            source: $scope.availableTags
        });
    }
    //$("#buySell").selectmenu();
    //$("#CompanyName").selectmenu();
    
   
});
