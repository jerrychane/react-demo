(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{1414:function(e,t,s){var a={"./Locale.js":483,"./en_US.js":1415,"./index.js":482,"./tool.js":1416,"./zh_CN.js":484,"./zh_TW.js":1417};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=1414},1433:function(e,t){},1439:function(e,t){},1443:function(e,t,s){},1451:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),o=s(3),l=s.n(o),i=(s(505),s(490)),r=s(491),c=s(142),d=s(499),u=s(498),m=s(492),_=s.n(m),j=(s(1442),s(1443),s(12)),k=s.n(j),h=s(79),p=s.n(h),f=(s(426),s(108)),T=s.n(f);s(309);k.a.locale("en"),window.$$msdomain="";var g=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).getSelectedDataForTimerules=function(e,t,s,a){console.log("App -> getSelectedDataForTimerules -> selectedList, record, index, newData",e,t,s,a)},a.tasktimeCallback=function(e){console.log("App -> tasktimeCallback -> value",e)},a.onDeleteTimeRules=function(e,t){console.log("App -> onDeleteTimeRules -> oper, index",e,t)},a.onEditTimerules=function(e,t,s){console.log("App -> onEditTimerules -> oper, data, index",e,t,s)},a.taskuserListCallback=function(e,t){console.log("App -> taskuserListCallback -> sendflag, taskUserList",e,t),a.setState({sendflag:e})},a.getTaskUserState=function(e){console.log("App -> getTaskUserState -> TaskUserState",e)},a.deleteUserSelected=function(e,t){console.log("App -> deleteUserSelected -> record, index",e,t)},a.handleInputChange=function(e,t){console.log("App -> handleInputChange -> taskNameList",t),console.log(e,t)},a.handleOnOk=function(e){console.log(e)},a.state={timezone:"UTC-10:00",timezonePK:"",taskDetailDataTaskTime:[{starttime:1600053851991,endtime:1600313064e3,modetype:4,modefrequency:1,modevaule:"04-11",duramode:0,duravalue:"08:00",periodmode:"0",periodstart:"",periodend:"",timezoneCode:"cc4ee641-7d33-4133-8857-30468220cde8",timezone:"UTC+08:00",key:0}],taskUserList:[{uname:"\u963f\u65af\u987f23",ucode:"\u672a\u77e5\u90ae\u7bb1",key:0,userid:"0678157a-1f89-4612-95c1-173ab25ada00"}],taskNameList:{zh_CN:"1",en_US:"2",zh_TW:"3"},rulesForTasktimeTips:"",tableDataForTaskway:{},userlistAllData:[],taskDetailData:[],mode:"",languageFlag:"zh_CN",sendflag:0,showModal:!1},a.close=a.close.bind(Object(c.a)(a)),a.open=a.open.bind(Object(c.a)(a)),a}return Object(r.a)(s,[{key:"close",value:function(){this.setState({showModal:!1})}},{key:"open",value:function(){this.setState({showModal:!0})}},{key:"render",value:function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}));var e=this.state,t=e.taskDetailDataTaskTime,s=e.tableDataForTaskway,a=e.rulesForTasktimeTips,o=e.userlistAllData,l=e.taskUserList,i=e.taskDetailData,r=e.timezone,c=e.timezonePK,d=e.languageFlag,u=e.mode,m=e.taskNameList,j=e.sendflag;return console.log(window.navigator.language),n.a.createElement("div",{className:"demo"},n.a.createElement(T.a,{bordered:!0,className:"demo-margin",onClick:this.open},"\u8c03\u5ea6"),n.a.createElement(p.a,{show:this.state.showModal,width:"50%",onHide:this.close},n.a.createElement(p.a.Header,{closeButton:!0,closeButtonProps:{fieldId:"closeBtn"}},n.a.createElement(p.a.Title,null,"\u6807\u9898")),n.a.createElement(p.a.Body,null,n.a.createElement(_.a,{className:"demoClassName",refs:"demoRefs",mode:u,locale:d,taskDetailDataTaskTime:t,rulesForTasktimeTips:a,tableDataForTaskway:s,userlistAllData:o,taskUserList:l,taskNameList:m,sendflag:j,taskDetailData:i,timezone:r,timezonePK:c,getSelectedDataForTimerules:this.getSelectedDataForTimerules,tasktimeCallback:this.tasktimeCallback,onDeleteTimeRules:this.onDeleteTimeRules,onEditTimerules:this.onEditTimerules,taskuserListCallback:this.taskuserListCallback,getTaskUserState:this.getTaskUserState,deleteUserSelected:this.deleteUserSelected,handleInputChange:this.handleInputChange,handleOnOk:this.handleOnOk})),n.a.createElement(p.a.Footer,null,n.a.createElement(T.a,{onClick:this.close,colors:"secondary",style:{marginRight:8}},"\u53d6\u6d88"),n.a.createElement(T.a,{onClick:this.close,bordered:!0},"\u786e\u8ba4"))))}}]),s}(a.Component);l.a.render(n.a.createElement(g,null),document.getElementById("app"))},278:function(e,t,s){var a={"./ar_EG.js":1077,"./bg_BG.js":1078,"./ca_ES.js":1079,"./cs_CZ.js":1080,"./da_DK.js":1081,"./de_DE.js":1082,"./el_GR.js":1083,"./en_GB.js":1084,"./en_US.js":277,"./es_ES.js":1085,"./et_EE.js":1086,"./fa_IR.js":1087,"./fi_FI.js":1088,"./fr_BE.js":1089,"./fr_FR.js":1090,"./he_IL.js":1091,"./hi_IN.js":1092,"./hr_HR.js":1093,"./hu_HU.js":1094,"./id_ID.js":1095,"./is_IS.js":1096,"./it_IT.js":1097,"./ja_JP.js":1098,"./kn_IN.js":1099,"./ko_KR.js":1100,"./ku_IQ.js":1101,"./lv_LV.js":1102,"./mk_MK.js":1103,"./mm_MM.js":1104,"./mn_MN.js":1105,"./ms_MY.js":1106,"./nb_NO.js":1107,"./nl_BE.js":1108,"./nl_NL.js":1109,"./pl_PL.js":1110,"./pt_BR.js":1111,"./pt_PT.js":1112,"./ro_RO.js":1113,"./ru_RU.js":1114,"./sk_SK.js":1115,"./sl_SI.js":1116,"./sr_RS.js":1117,"./sv_SE.js":1118,"./ta_IN.js":1119,"./th_TH.js":1120,"./tr_TR.js":1121,"./ug_CN.js":1122,"./uk_UA.js":1123,"./vi_VN.js":1124,"./zh_CN.js":93,"./zh_TW.js":1125};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=278},497:function(e,t){},500:function(e,t,s){e.exports=s(1451)},505:function(e,t,s){},517:function(e,t){},519:function(e,t){},528:function(e,t){},530:function(e,t){},704:function(e,t){}},[[500,1,2]]]);
//# sourceMappingURL=main.bcdda6cc.chunk.js.map