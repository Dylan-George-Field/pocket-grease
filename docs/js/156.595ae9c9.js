"use strict";(self["webpackChunkpocket_grease"]=self["webpackChunkpocket_grease"]||[]).push([[156],{1156:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var a=n(2494),s=n(2323);const o={class:"q-pa-lg form"},l={class:"row q-col-gutter-md"},r={class:"col-4 "},i={class:"col-8"};function c(e,t,n,c,u,d){const m=(0,a.up)("LineChart"),p=(0,a.up)("pocket-list"),h=(0,a.up)("pocket-selector");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(m,(0,s.vs)((0,a.F4)(c.lineChartProps)),null,16),(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(p)]),(0,a._)("div",i,[(0,a.Wm)(h)])])])])}var u=n(9682),d=n(5747),m=n(3920),p=n(3617);const h=(0,a.Uk)("Pocket List"),g=(0,a.Uk)(" There are no items yet ");function v(e,t,n,o,l,r){const i=(0,a.up)("q-toolbar-title"),c=(0,a.up)("q-toolbar"),u=(0,a.up)("q-item"),d=(0,a.up)("q-list"),m=(0,a.up)("q-item-section"),p=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{class:"bg-primary text-white shadow-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[h])),_:1})])),_:1}),0===o.tasks.length?((0,a.wg)(),(0,a.j4)(d,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[g])),_:1})])),_:1})):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.tasks,(e=>((0,a.wg)(),(0,a.j4)(d,{key:e.name,bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.name),1)])),_:2},1024),(0,a.Wm)(m,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:t=>o.deleteTask(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))],64)}const b={name:"PocketList",setup(){const e=(0,p.oR)(),t=e.state.graph.tasks;console.log(t);const n=function(t){e.dispatch("graph/deleteTask",t)};return{tasks:t,deleteTask:n}}};var w=n(9570),k=n(3747),f=n(7011),y=n(3414),C=n(2035),I=n(522),W=n(7518),B=n.n(W);b.render=v;const q=b;B()(b,"components",{QToolbar:w.Z,QToolbarTitle:k.Z,QList:f.Z,QItem:y.Z,QItemSection:C.Z,QBtn:I.Z});var D=n(3675);const H={class:"row q-gutter-md"};function V(e,t,n,s,o,l){const r=(0,a.up)("q-btn"),i=(0,a.up)("basic-income"),c=(0,a.up)("basic-deduction"),u=(0,a.up)("compound-interest");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.wy)((0,a._)("div",H,[(0,a.Wm)(r,{color:"primary",label:"Basic Income",onClick:t[0]||(t[0]=e=>s.showBasicIncome=!s.showBasicIncome)}),(0,a.Wm)(r,{color:"primary",label:"Basic Deduction",onClick:t[1]||(t[1]=e=>s.showBasicDeduction=!s.showBasicDeduction)}),(0,a.Wm)(r,{color:"primary",label:"Interest",onClick:t[2]||(t[2]=e=>s.showInterest=!s.showInterest)})],512),[[D.F8,s.showNavigation()]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(i,{onSaved:t[3]||(t[3]=e=>s.showBasicIncome=!1)})],512),[[D.F8,s.showBasicIncome]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(c,{onSaved:t[4]||(t[4]=e=>s.showBasicDeduction=!1)})],512),[[D.F8,s.showBasicDeduction]]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(u,{onSaved:t[5]||(t[5]=e=>s.showInterest=!1)})],512),[[D.F8,s.showInterest]])],64)}const _=(0,a._)("h5",{class:"q-my-none"},"Income",-1);function A(e,t,n,s,o,l){const r=(0,a.up)("q-input"),i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[_,(0,a.Wm)(r,{modelValue:s.income,"onUpdate:modelValue":t[0]||(t[0]=e=>s.income=e),modelModifiers:{number:!0},label:"Yearly Income",type:"number"},null,8,["modelValue"]),(0,a.Wm)(r,{modelValue:s.startAge,"onUpdate:modelValue":t[1]||(t[1]=e=>s.startAge=e),modelModifiers:{number:!0},label:"Start Age",type:"number"},null,8,["modelValue"]),(0,a.Wm)(r,{modelValue:s.retirementAge,"onUpdate:modelValue":t[2]||(t[2]=e=>s.retirementAge=e),modelModifiers:{number:!0},label:"Retirement Age",type:"number"},null,8,["modelValue"]),(0,a.Wm)(i,{color:"primary",label:"Save",onClick:s.save,class:"q-mt-sm"},null,8,["onClick"])],64)}class Z{constructor(e,t){this.name=e,this.calculation=[],this.priority=t}}var Q=n(9171);class T extends Z{constructor(e,t,n,a){super(e,0),this.income=t,this.startAge=n,this.retirementAge=a}calculate(){Q["default"].dispatch("graph/projectIncomeOver100Years",this),Q["default"].dispatch("graph/deduct")}}const S={name:"BasicIncome",emits:["saved"],setup(e,{emit:t}){const n=(0,u.iH)(6e4),a=(0,u.iH)(25),s=(0,u.iH)(65),o=(0,p.oR)(),l=function(){o.dispatch("graph/setTask",new T("Basic Income",n.value,a.value,s.value)),t("saved")};return{income:n,startAge:a,retirementAge:s,save:l}}};var Y=n(8908);S.render=A;const U=S;B()(S,"components",{QInput:Y.Z,QBtn:I.Z});const x=(0,a._)("h5",{class:"q-my-none"},"Deduction",-1);function L(e,t,n,s,o,l){const r=(0,a.up)("q-input"),i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[x,(0,a.Wm)(r,{modelValue:s.deduction,"onUpdate:modelValue":t[0]||(t[0]=e=>s.deduction=e),modelModifiers:{number:!0},label:"Yearly Deductions",type:"number"},null,8,["modelValue"]),(0,a.Wm)(r,{modelValue:s.start,"onUpdate:modelValue":t[1]||(t[1]=e=>s.start=e),modelModifiers:{number:!0},label:"Start Year",type:"number"},null,8,["modelValue"]),(0,a.Wm)(r,{modelValue:s.end,"onUpdate:modelValue":t[2]||(t[2]=e=>s.end=e),modelModifiers:{number:!0},label:"End Year",type:"number"},null,8,["modelValue"]),(0,a.Wm)(i,{color:"primary",label:"Save",onClick:s.save},null,8,["onClick"])],64)}class P extends Z{constructor(e,t,n,a){super(e,1),this.deductions=t,this.start=n,this.end=a}calculate(){Q["default"].dispatch("graph/projectDeductionsOver100Years",this),Q["default"].dispatch("graph/deduct")}}const R={name:"BasicDeduction",setup(e,{emit:t}){const n=(0,u.iH)(5e4),a=(0,u.iH)(25),s=(0,u.iH)(100),o=(0,p.oR)(),l=function(){o.dispatch("graph/setTask",new P("Basic Deduction",n.value,a.value,s.value)),t("saved")};return{deduction:n,save:l,start:a,end:s}}};R.render=L;const F=R;B()(R,"components",{QInput:Y.Z,QBtn:I.Z});const M=(0,a._)("h5",{class:"q-my-none"},"Compound Interest",-1);function j(e,t,n,s,o,l){const r=(0,a.up)("q-input"),i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[M,(0,a.Wm)(r,{modelValue:s.interest,"onUpdate:modelValue":t[0]||(t[0]=e=>s.interest=e),modelModifiers:{number:!0},label:"Interest %",type:"number"},null,8,["modelValue"]),(0,a.Wm)(i,{color:"primary",label:"Save",onClick:s.save,class:"q-mt-sm"},null,8,["onClick"])],64)}class E extends Z{constructor(e,t){super(e,2),this.interest=t}calculate(){Q["default"].dispatch("graph/compoundInterest",this)}}const z={name:"CompoundInterest",emits:["saved"],setup(e,{emit:t}){const n=(0,u.iH)(2),a=(0,p.oR)(),s=function(){a.dispatch("graph/setTask",new E("Interest",n.value)),t("saved")};return{interest:n,save:s}}};z.render=j;const N=z;B()(z,"components",{QInput:Y.Z,QBtn:I.Z});const O={name:"PcoketSelector",components:{BasicIncome:U,BasicDeduction:F,CompoundInterest:N},setup(){let e=(0,u.iH)(!1),t=(0,u.iH)(!1),n=(0,u.iH)(!1),a=function(){return!(e.value||t.value||n.value)};return{showNavigation:a,showBasicIncome:e,showBasicDeduction:t,showInterest:n}}};O.render=V;const K=O;B()(O,"components",{QBtn:I.Z}),m.Chart.register(...m.registerables);const G={name:"App",components:{LineChart:d.LineChart,PocketList:q,PocketSelector:K},setup(){const e=(0,p.oR)(),t=(0,u.iH)([0]),n=(0,u.iH)([0]),a=(0,u.iH)([0]),s=(0,u.iH)(),o=(0,u.iH)([0]);var l=(0,u.Fl)((()=>({labels:Array.from(Array(100).keys()),datasets:[{backgroundColor:"rgba(255, 255, 0, 0.1)",label:"Income",data:o.value,hidden:!1},{backgroundColor:"rgba(0, 255, 0, 0.1)",label:"Total",data:t.value,hidden:!1},{backgroundColor:"rgba(0, 0, 255, 0.1)",label:"Savings",data:n.value,hidden:s.value},{backgroundColor:"rgba(255, 0, 0, 0.1)",label:"Deductions",data:a.value,hidden:!1}]})));const r=(0,u.Fl)((()=>({scales:{x:{},y:{beginAtZero:!0}},plugins:{title:{display:!0,text:"Estimated earnings over a lifetime"}}}))),{lineChartProps:i,lineChartRef:c}=(0,d.useLineChart)({chartData:l,options:r});e.watch((e=>e.graph.calculate),(()=>{m(),e.dispatch("graph/sortTasks");const t=e.state.graph.tasks;t&&(t.forEach((e=>{e.calculate()})),e.dispatch("graph/deduct"),h())}));const m=function(){e.dispatch("graph/clearCanvas"),h()},h=function(){o.value=e.state.graph.income,t.value=e.state.graph.total,n.value=e.state.graph.savings,a.value=e.state.graph.deductions,s.value=e.state.graph.savingsToggle};return{testData:l,options:r,lineChartRef:c,lineChartProps:i}}};G.render=c;const J=G}}]);