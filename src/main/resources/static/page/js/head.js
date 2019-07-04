var API_index = angular.module('myApp');

/**
 * @Author      : Theory
 * @Description : 主页面控制器
 * @type        : Controller
 */
API_index.controller("headCtrl", function ($scope, $http, $state,Data,$interval) {



    $scope.currentUser = null;

    /**
     * @Author      : Theory
     * @Description : 跳转到登录页
     */
    $scope.goLogin = function () {
        $state.go('login');
    };


    /**
      * @Author      : Theory
      * @Description : 初始化导航栏
      */
    $scope.initHead = function () {
      $scope.currentUser = Data.get();
    };


    //每一秒刷新页面，获取用户信息
    $interval(function(){
            $scope.initHead();
    },1000);


    //判断角色类型
    $scope.hasUser = function () {
        if($scope.currentUser.nickName.length == 0)//没有用户
            return 0;
        else if($scope.currentUser.isManager == 1)
            return 1;
    };

    //是否是系统管理员
    $scope.isSysManager = function () {
        return $scope.currentUser.isManager == 1;
    };



    //是否是普通学生
    $scope.isStu = function () {
        return ($scope.currentUser.isManager == 0 && $scope.currentUser.isLessonManager==0);
    };



    //是否是课程管理员
    $scope.isLeManager = function () {
        return $scope.currentUser.isLessonManager == 1;
    };

});



