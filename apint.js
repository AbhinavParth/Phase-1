var app = angular.module("myapp",[]);
app.controller('people', function($scope,$http){
    mymodel= [
        {label:"id"}, 
        {label:"Names"},
        {label:"Gender"},
        {label:"Email"},
        {label:"Status"},   
    ]
    $http.get("https://gorest.co.in/public/v1/users")
    .then(function(response){
        console.log(response)
        $scope.detail = response.data.data
    })
    $(function () {
        $("#mygrid").jqGrid({
            // colNames: ["ID", "Names", "Gender", "Email", "Status"]
            colModel : mymodel
            // data : $scope.detail
        })
})
})