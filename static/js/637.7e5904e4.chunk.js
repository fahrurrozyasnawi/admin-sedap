"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[637],{33637:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var a=o(74165),n=o(15861),r=o(42669),i=o(73477),c=o(56573),l=o(21963),s=o(21032),d="http://localhost:5000",u=c.Z.create({baseURL:d,headers:{}});u.interceptors.request.use(function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var o,n,r,i,u,p,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=localStorage.getItem("access_token"),!(n=localStorage.getItem("refresh_token"))||!o){e.next=28;break}if(r=(0,l.Bw)(o),!(0,l.Bw)(n)){e.next=12;break}throw localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),console.log("To login page"),s.Z.replace("/admin-sedap/login"),new Error("Refresh Token Expired");case 12:if(!r){e.next=28;break}return e.prev=13,i={refreshToken:n},e.next=17,c.Z.post("".concat(d,"/refresh"),i);case 17:u=e.sent,p=u.data.accessToken,v=u.data.refreshToken,localStorage.setItem("access_token",p),localStorage.setItem("refresh_token",v),console.log("succes refresh token"),e.next=28;break;case 25:throw e.prev=25,e.t0=e.catch(13),new Error("Failed to refresh token");case 28:return e.abrupt("return",t);case 29:case"end":return e.stop()}}),e,null,[[13,25]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var p=u,v=o(8611),h=o(46417),m=function(){var e=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/test").then((function(e){return console.log("res ",e)})).catch((function(e){return console.log("Err ",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,{title:"Sample Card",children:(0,h.jsx)(r.Z,{variant:"body2",children:"Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours."})}),(0,h.jsx)(i.Z,{variant:"outlined",onClick:e,children:"Send Request"})]})}},73477:function(e,t,o){o.d(t,{Z:function(){return k}});var a=o(4942),n=o(63366),r=o(87462),i=o(47313),c=o(83061),l=o(29023),s=o(21921),d=o(17551),u=o(64164),p=o(11236),v=o(86366),h=o(28170),m=o(32298);function f(e){return(0,m.Z)("MuiButton",e)}var b=(0,o(77430).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=i.createContext({}),g=o(46417),S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],z=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},Z=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.Z)(o.color))],t["size".concat((0,h.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,h.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o,n,i=e.theme,c=e.ownerState;return(0,r.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(t,"&.".concat(b.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(t,"&.".concat(b.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(o=(n=i.palette).getContrastText)?void 0:o.call(n,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(b.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(b.disabled),{boxShadow:"none"}),t)})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},z(t))})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},z(t))})),k=i.forwardRef((function(e,t){var o=i.useContext(x),a=(0,l.Z)(o,e),d=(0,p.Z)({props:a,name:"MuiButton"}),u=d.children,v=d.color,m=void 0===v?"primary":v,b=d.component,z=void 0===b?"button":b,k=d.className,I=d.disabled,C=void 0!==I&&I,R=d.disableElevation,E=void 0!==R&&R,_=d.disableFocusRipple,T=void 0!==_&&_,W=d.endIcon,F=d.focusVisibleClassName,M=d.fullWidth,B=void 0!==M&&M,L=d.size,j=void 0===L?"medium":L,q=d.startIcon,N=d.type,P=d.variant,O=void 0===P?"text":P,V=(0,n.Z)(d,S),D=(0,r.Z)({},d,{color:m,component:z,disabled:C,disableElevation:E,disableFocusRipple:T,fullWidth:B,size:j,type:N,variant:O}),U=function(e){var t=e.color,o=e.disableElevation,a=e.fullWidth,n=e.size,i=e.variant,c=e.classes,l={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(n)),"".concat(i,"Size").concat((0,h.Z)(n)),"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(n))],endIcon:["endIcon","iconSize".concat((0,h.Z)(n))]},d=(0,s.Z)(l,f,c);return(0,r.Z)({},c,d)}(D),A=q&&(0,g.jsx)(y,{className:U.startIcon,ownerState:D,children:q}),G=W&&(0,g.jsx)(w,{className:U.endIcon,ownerState:D,children:W});return(0,g.jsxs)(Z,(0,r.Z)({ownerState:D,className:(0,c.Z)(o.className,U.root,k),component:z,disabled:C,focusRipple:!T,focusVisibleClassName:(0,c.Z)(U.focusVisible,F),ref:t,type:N},V,{classes:U,children:[A,u,G]}))}))}}]);