(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{363:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(26),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__),_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(121),_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__),_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(69),_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(34),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(397),_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(401),_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_7__),_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(403),_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_8__),_search_search_without_auto__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(396),a;function _extends(){return(_extends=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var _ in t=arguments[a])Object.prototype.hasOwnProperty.call(t,_)&&(e[_]=t[_]);return e}).apply(this,arguments)}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a=__webpack_require__(3).enterModule,a&&a(module);const styles=e=>({ticketExchange:{},title:{textAlign:"center"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit},appBar:{top:"auto",bottom:0,zIndex:20},toolbar:{margin:"auto"}}),steps=["Ticket to get","Ticket to give","Confirmation"];function getStepContent(e){return 0===e?"Select a ticket to get":1===e?"Select a ticket to give":2===e?"Now you just need to confirm your exchange":"Unknown step"}class TicketExchange extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),_defineProperty(this,"next",()=>{this.setState(e=>({step:e.step+1}))}),_defineProperty(this,"back",()=>{this.setState(e=>({step:0===e.step?0:e.step-1}))}),_defineProperty(this,"reset",()=>{this.setState({step:0})}),this.state={step:0}}render(){const{classes:e}=this.props,t=this.state.step;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:e.title},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a,{variant:"h4",color:"inherit"},"Ticket Exchange")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_6___default.a,{activeStep:t},steps.map(e=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_7___default.a,_extends({key:e},{}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_8___default.a,{},e)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_search_without_auto__WEBPACK_IMPORTED_MODULE_9__.a,{onRequestSearch:(...e)=>console.log(e),onRightDrawerToggle:this.props.onRightDrawerToggle}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,t===steps.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a,{className:e.instructions},"All steps completed - you're finished"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a,{className:e.instructions},getStepContent(t))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a,{position:"fixed",color:"default",className:e.appBar},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a,{className:e.toolbar},t===steps.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a,{onClick:this.reset,className:e.button},"Reset"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a,{disabled:0===t,onClick:this.back,className:e.button},"Back"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a,{variant:"contained",color:"primary",onClick:this.next,className:e.button},t===steps.length-1?"Finish":"Next")))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(TicketExchange);__webpack_exports__.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(styles,"styles","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(steps,"steps","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(getStepContent,"getStepContent","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(TicketExchange,"TicketExchange","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(_default,"default","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),t(module))}()}.call(this,__webpack_require__(14)(module))},396:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__),_search__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(120),a;function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a=__webpack_require__(3).enterModule,a&&a(module);const styles=()=>({});class SearchWihoutAutoComplete extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),_defineProperty(this,"handleCancel",()=>{this.setState({value:""})}),_defineProperty(this,"handleKeyUp",e=>{(13===e.charCode||"Enter"===e.key)&&this.handleRequestSearch()}),_defineProperty(this,"handleChange",e=>{this.setState({value:e.target.value})}),_defineProperty(this,"handleRequestSearch",()=>{this.props.onRequestSearch(this.state.value,null)}),this.state={value:""}}render(){const{classes:e}=this.props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"black",inputProps:{value:this.state.value,onChange:this.handleChange,onKeyUp:this.handleKeyUp,className:e.input,disableUnderline:!1},onRightDrawerToggle:this.props.onRightDrawerToggle,handleCancel:this.handleCancel,handleRequestSearch:this.handleRequestSearch})}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(SearchWihoutAutoComplete);__webpack_exports__.a=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(styles,"styles","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\search\\search-without-auto.tsx"),e.register(SearchWihoutAutoComplete,"SearchWihoutAutoComplete","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\search\\search-without-auto.tsx"),e.register(_default,"default","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\search\\search-without-auto.tsx"),t(module))}()}).call(this,__webpack_require__(14)(module))},397:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=_(a(398))},398:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=_(a(4)),l=_(a(8)),i=_(a(6)),n=_(a(0)),o=(_(a(2)),_(a(7))),c=_(a(5)),u=_(a(23)),s=_(a(399)),d={root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}};function p(e){var t=e.activeStep,a=e.alternativeLabel,_=e.children,c=e.classes,s=e.className,d=e.connector,p=e.nonLinear,f=e.orientation,E=(0,i.default)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),m=(0,o.default)(c.root,c[f],(0,l.default)({},c.alternativeLabel,a),s),O=n.default.isValidElement(d)?n.default.cloneElement(d,{orientation:f}):null,P=n.default.Children.toArray(_),v=P.map(function(e,_){var l={alternativeLabel:a,connector:d,last:_+1===P.length,orientation:f},i={index:_,active:!1,completed:!1,disabled:!1};return t===_?i.active=!0:!p&&t>_?i.completed=!0:!p&&t<_&&(i.disabled=!0),[!a&&O&&0!==_&&n.default.cloneElement(O,(0,r.default)({key:_},i)),n.default.cloneElement(e,(0,r.default)({},l,i,e.props))]});return n.default.createElement(u.default,(0,r.default)({square:!0,elevation:0,className:m},E),v)}t.styles=d,p.propTypes={},p.defaultProps={activeStep:0,alternativeLabel:!1,connector:n.default.createElement(s.default,null),nonLinear:!1,orientation:"horizontal"},p.muiName="Stepper";var f=(0,c.default)(d,{name:"MuiStepper"})(p);t.default=f},399:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=_(a(400))},400:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=_(a(4)),l=_(a(8)),i=_(a(6)),n=_(a(0)),o=(_(a(2)),_(a(7))),c=_(a(5)),u=function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}};function s(e){var t,a,_=e.active,c=e.alternativeLabel,u=e.classes,s=e.className,d=e.completed,p=e.disabled,f=(e.index,e.orientation),E=(0,i.default)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return n.default.createElement("div",(0,r.default)({className:(0,o.default)(u.root,u[f],(t={},(0,l.default)(t,u.alternativeLabel,c),(0,l.default)(t,u.active,_),(0,l.default)(t,u.completed,d),(0,l.default)(t,u.disabled,p),t),s)},E),n.default.createElement("span",{className:(0,o.default)(u.line,(a={},(0,l.default)(a,u.lineHorizontal,"horizontal"===f),(0,l.default)(a,u.lineVertical,"vertical"===f),a))}))}t.styles=u,s.propTypes={},s.defaultProps={alternativeLabel:!1,orientation:"horizontal"};var d=(0,c.default)(u,{name:"MuiStepConnector"})(s);t.default=d},401:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=_(a(402))},402:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=_(a(4)),l=_(a(8)),i=_(a(6)),n=_(a(0)),o=(_(a(2)),_(a(7))),c=(_(a(17)),_(a(5))),u={root:{},horizontal:{paddingLeft:8,paddingRight:8,"&:first-child":{paddingLeft:0},"&:last-child":{paddingRight:0}},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}};function s(e){var t,a=e.active,_=e.alternativeLabel,c=e.children,u=e.classes,s=e.className,d=e.completed,p=e.connector,f=e.disabled,E=e.index,m=e.last,O=e.orientation,P=(0,i.default)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","index","last","orientation"]),v=(0,o.default)(u.root,u[O],(t={},(0,l.default)(t,u.alternativeLabel,_),(0,l.default)(t,u.completed,d),t),s);return n.default.createElement("div",(0,r.default)({className:v},P),p&&_&&0!==E&&n.default.cloneElement(p,{orientation:O,alternativeLabel:_,index:E,active:a,completed:d,disabled:f}),n.default.Children.map(c,function(e){return n.default.isValidElement(e)?n.default.cloneElement(e,(0,r.default)({active:a,alternativeLabel:_,completed:d,disabled:f,last:m,icon:E+1,orientation:O},e.props)):null}))}t.styles=u,s.propTypes={},s.defaultProps={active:!1,completed:!1,disabled:!1};var d=(0,c.default)(u,{name:"MuiStep"})(s);t.default=d},403:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=_(a(404))},404:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=_(a(4)),l=_(a(8)),i=_(a(6)),n=_(a(0)),o=(_(a(2)),_(a(7))),c=_(a(5)),u=_(a(26)),s=_(a(405)),d=function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}};function p(e){var t,a,_=e.active,c=e.alternativeLabel,d=e.children,p=e.classes,f=e.className,E=e.completed,m=e.disabled,O=e.error,P=e.icon,v=(e.last,e.optional),h=e.orientation,D=e.StepIconComponent,M=e.StepIconProps,b=(0,i.default)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),y=D;return P&&!y&&(y=s.default),n.default.createElement("span",(0,r.default)({className:(0,o.default)(p.root,p[h],(t={},(0,l.default)(t,p.disabled,m),(0,l.default)(t,p.alternativeLabel,c),(0,l.default)(t,p.error,O),t),f)},b),P||y?n.default.createElement("span",{className:(0,o.default)(p.iconContainer,(0,l.default)({},p.alternativeLabel,c))},n.default.createElement(y,(0,r.default)({completed:E,active:_,error:O,icon:P},M))):null,n.default.createElement("span",{className:p.labelContainer},n.default.createElement(u.default,{component:"span",className:(0,o.default)(p.label,(a={},(0,l.default)(a,p.alternativeLabel,c),(0,l.default)(a,p.completed,E),(0,l.default)(a,p.active,_),(0,l.default)(a,p.error,O),a))},d),v))}t.styles=d,p.propTypes={},p.defaultProps={active:!1,alternativeLabel:!1,completed:!1,disabled:!1,error:!1,last:!1,orientation:"horizontal"},p.muiName="StepLabel";var f=(0,c.default)(d,{name:"MuiStepLabel"})(p);t.default=f},405:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=_(a(406))},406:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=_(a(8)),l=_(a(0)),i=(_(a(2)),_(a(7))),n=_(a(407)),o=_(a(408)),c=_(a(5)),u=_(a(41)),s=function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$active":{color:e.palette.primary.main},"&$completed":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}};t.styles=s;var d=l.default.createElement("circle",{cx:"12",cy:"12",r:"12"});function p(e){var t=e.completed,a=e.icon,_=e.active,c=e.error,s=e.classes;return"number"==typeof a||"string"==typeof a?c?l.default.createElement(o.default,{className:(0,i.default)(s.root,s.error)}):t?l.default.createElement(n.default,{className:(0,i.default)(s.root,s.completed)}):l.default.createElement(u.default,{className:(0,i.default)(s.root,(0,r.default)({},s.active,_))},d,l.default.createElement("text",{className:s.text,x:"12",y:"16",textAnchor:"middle"},a)):a}p.propTypes={},p.defaultProps={active:!1,completed:!1,error:!1};var f=(0,c.default)(s,{name:"MuiStepIcon"})(p);t.default=f},407:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_(a(0)),l=_(a(43)),i=_(a(41)),n=r.default.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),o=function(e){return r.default.createElement(i.default,e,n)};(o=(0,l.default)(o)).muiName="SvgIcon";var c=o;t.default=c},408:function(e,t,a){"use strict";var _=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_(a(0)),l=_(a(43)),i=_(a(41)),n=r.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),o=function(e){return r.default.createElement(i.default,e,n)};(o=(0,l.default)(o)).muiName="SvgIcon";var c=o;t.default=c}}]);