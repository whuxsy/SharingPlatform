var app = angular.module('myApp');

/**
 * @Author      : Theory
 * @Description : 教师控制器
 * @type        : Controller
 */
app.controller('teacherCtrl', function ($scope, $http, $stateParams,$state) {//$stateParams别的页面传来的参数

    $scope.teacher = null;//教师

    $scope.t_lesson = null;//课程


    $scope.selectTLesson = null;//选择的课程


    $scope.currentPage = 1;//当前页数
    $scope.totalPage = 1;//总页数
    $scope.pages = [];


    // $http({
    //     method: 'GET',
    //     url: '/teacher/id',
    //     params:{
    //         "id" : $scope.teacher.teacherId // id必须从接口文档里看
    //     }
    // }).then(function successCallback(response) {
    //     $scope.teacher = response.data;
    // });


    $scope.initTeacher = function () {
        $scope.teacher = $stateParams.teacher;//获取传来的老师
        // $http({
        //     method: 'GET',
        //     url: '/teacher/id',
        //     params:{
        //         "id" : $scope.teacher.id
        //     }
        // }).then(function successCallback(response) {
        //     $scope.se = response.data;//获取返回的数据
        // });
        $scope.getTLessons();
    };




    /**
     * @Author      : Theory
     * @Description : 跳转到课程详情页
     * @Param       : 被点击的课程
     */
    $scope.goDetail_course = function (lesson) {
        $state.go('courseinfo', {
            "lesson": lesson
        });
    };

    //发送请求
    $scope.getTLessons = function () {
        let p = $scope.currentPage-1;
        $http({
            method: 'GET',
            url: "tl/getLessonByTeacherId",
            params:{
                "teacherId" : $scope.teacher.teacherId
            }
        }).then(function successCallback(response) {
            $scope.selectTLesson = response.data.content;//获取返回的课程
        })
    };


});



