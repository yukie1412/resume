var app=angular.module("resume",["angular-svg-round-progressbar"]);app.controller("resumeCtrl",["$scope","resumeApi",function(e,r){e.profile=r.getProfile(),e.skills=r.getSkills(),e.experiences=r.getExperience(),e.toLink=function(e){window.open(e,"_blank")}}]);