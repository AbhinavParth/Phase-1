var app = angular.module("myapp", []);
app.controller("maincontroller", function ($scope) {
    $scope.collection = [{
        fnam: '', lnam: '', dob: '', ea: '',
        st: '', pin: '', ei: '', doj: '', dep: '', hi: '', vi: '',
        mn: '', em: ''
    }];
    $scope.model = [
        { name: "fname", label: "First Name" }, 
        { name: "lname", label: "Last Name" },
        { name: "dob", label: "Date of Birth" },
        { name: "ea", label: "Address" },
        { name: "st", label: "State" },
        { name: "pin", label: "PIN" },
        { name: "ei", label: "ID" },
        { name: "doj", label: "Joining Date" },
        { name: "dep", label: "Department" },
        { name: "hi", label: "Health Insurance" },
        { name: "vi", label: "Vehichle Insurance" },
        { name: "mn", label: "Mobile Number" },
        { name: "em", label: "Email" },
    ];
    $scope.display = function () {
        // if (document.getElementById("hii").checked) {
        //     $scope.data.hi = 'Yes'
        // }
        // else {
        //     $scope.data.hi = 'No'
        // }
        // if (document.getElementById("vii").checked) {
        //     $scope.data.vi = "Yes"
        // }
        // else {
        //     $scope.data.vi = "No"
        // }
        // if (document.getElementById("dp1").checked)
        //     $scope.data.dep = "HR"
        // if (document.getElementById("dp2").checked)
        //     $scope.data.dep = "sales"
        // if (document.getElementById("dp3").checked)
        //     $scope.data.dep = "Technology"
        $scope.collection.push($scope.data)
        $scope.data = ''
        $(function () {
            $("#mygrid").jqGrid({
                colModel: $scope.model,
                data: $scope.collection
            });

        });
    }
});