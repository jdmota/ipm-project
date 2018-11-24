(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(23),_actions_userActions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(57),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(99),_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__),_ticket_card__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(455),_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(58),_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(35),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__),_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(383),_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10__),_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(385),_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_11__),_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(386),_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__),_search_search_without_auto__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(457),a;function _extends(){return(_extends=Object.assign||function(e){for(var _,t=1;t<arguments.length;t++)for(var a in _=arguments[t])Object.prototype.hasOwnProperty.call(_,a)&&(e[a]=_[a]);return e}).apply(this,arguments)}function _defineProperty(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}a=__webpack_require__(3).enterModule,a&&a(module);const styles=e=>({ticketExchange:{},title:{textAlign:"center"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit},appBar:{top:"auto",bottom:0,zIndex:20},toolbar:{margin:"auto"},margin:{margin:30}}),steps=["Ticket to get","Ticket to give","Confirmation"];class TicketExchange extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),_defineProperty(this,"next",()=>{this.setState(e=>({text:"",step:e.step+1}),()=>{3===this.state.step&&this.props.trade({ticket1:this.state.desiredTicket,ticket2:this.state.ticketToGive})})}),_defineProperty(this,"back",()=>{this.setState(e=>({step:0===e.step?0:e.step-1}))}),_defineProperty(this,"reset",()=>{this.setState({step:0,desiredTicket:null,ticketToGive:null})}),_defineProperty(this,"printGet",()=>{const e=this.props.users.loggedInUser.username;return this.props.tickets.map(_=>{if(_.owner===e)return null;const t=this.props.events.find(e=>e.id===_.eventId);return t.title.toUpperCase().includes(this.state.text.toUpperCase())?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:_.ticketId},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ticket_card__WEBPACK_IMPORTED_MODULE_7__.a,{event:t,ticket:_,selected:this.state.desiredTicket===_,onClick:()=>this.setState({desiredTicket:_})})):null}).filter(Boolean)}),_defineProperty(this,"printGive",()=>{const e=this.props.users.loggedInUser.username;return this.props.tickets.map(_=>{if(_.owner!==e)return null;const t=this.props.events.find(e=>e.id===_.eventId);return t.title.toUpperCase().includes(this.state.text.toUpperCase())?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:_.ticketId},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ticket_card__WEBPACK_IMPORTED_MODULE_7__.a,{event:t,ticket:_,selected:this.state.ticketToGive===_,onClick:()=>this.setState({ticketToGive:_})})):null}).filter(Boolean)}),_defineProperty(this,"printConfirm",()=>{const{desiredTicket:e,ticketToGive:_}=this.state,t=this.props.events.find(e=>e.id===_.eventId),a=this.props.events.find(_=>_.id===e.eventId);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,null,"Are you sure you want to trade this ticket:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ticket_card__WEBPACK_IMPORTED_MODULE_7__.a,{event:t,ticket:_}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,null,"For this ticket:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ticket_card__WEBPACK_IMPORTED_MODULE_7__.a,{event:a,ticket:e}))}),_defineProperty(this,"finished",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,null,"All steps completed - trade completed!")),_defineProperty(this,"printStep",e=>e.length?e:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,null,"No results found for query: ",this.state.text)),_defineProperty(this,"getStepContent",e=>0===e?this.printStep(this.printGet()):1===e?this.printStep(this.printGive()):2===e?this.printConfirm():"Unknown step"),this.state={text:"",step:0,desiredTicket:null,ticketToGive:null}}render(){const{classes:e}=this.props,_=this.state.step;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:e.title},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,{variant:"h4",color:"inherit"},"Ticket Exchange")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10___default.a,{activeStep:_},steps.map(e=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_11___default.a,_extends({key:e},{}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12___default.a,{},e)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_search_without_auto__WEBPACK_IMPORTED_MODULE_13__.a,{onRequestSearch:e=>{this.setState({text:e})}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:e.margin},_===steps.length?this.finished():this.getStepContent(_)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a,{position:"fixed",color:"default",className:e.appBar},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default.a,{className:e.toolbar},_===steps.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a,{onClick:this.reset,className:e.button},"Make new trade"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a,{disabled:0===_,onClick:this.back,className:e.button},"Back"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a,{variant:"contained",color:"primary",disabled:!this.state.desiredTicket||1===_&&!this.state.ticketToGive,onClick:this.next,className:e.button},_===steps.length-1?"Finish":"Next")))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}function mapStateToProps(e){return{tickets:e.tickets,users:e.users,events:e.events}}function mapDispatchToProps(e){return Object(redux__WEBPACK_IMPORTED_MODULE_2__.b)({trade:_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.e},e)}const _default=Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)(mapStateToProps,mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(TicketExchange));__webpack_exports__.default=_default,function(){var e=__webpack_require__(3).default,_=__webpack_require__(3).leaveModule;e&&(e.register(styles,"styles","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(steps,"steps","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(TicketExchange,"TicketExchange","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(mapStateToProps,"mapStateToProps","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(mapDispatchToProps,"mapDispatchToProps","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),e.register(_default,"default","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-exchange\\ticket-exchange.tsx"),_(module))}()}.call(this,__webpack_require__(15)(module))},455:function(e,_,t){"use strict";(function(e){var a,r=t(0),i=t.n(r),s=t(16),c=t(456),n=t.n(c),o=t(367),l=t.n(o),E=t(369),u=t.n(E);(a=t(3).enterModule)&&a(e);const p=()=>({root:{display:"block",maxWidth:500,height:120,marginTop:15,marginBottom:0,cursor:"pointer",textDecoration:"none"},card:{maxWidth:500,marginTop:10,marginBottom:10,cursor:"pointer",userSelect:"none"},selected:{border:"3px #c6edef solid"},image:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:110},force:{paddingTop:0,paddingLeft:0,paddingRight:0,paddingBottom:0}});function d(e){const{classes:_,onClick:t,selected:a}=e,{title:r,images:s}=e.event,{owner:c,date:o}=e.ticket;return i.a.createElement(l.a,{className:_.card,onClick:t},i.a.createElement(u.a,{className:a?_.selected:"",avatar:i.a.createElement("div",{className:_.image},i.a.createElement("img",{height:110,src:s[0]||"https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547"})),title:r,subheader:`${c} - ${o.getDate()}/${o.getMonth()}/${o.getFullYear()}`,action:a?i.a.createElement(n.a,null):null}))}const O=Object(s.withStyles)(p)(d);_.a=O,function(){var _=t(3).default,a=t(3).leaveModule;_&&(_.register(p,"styles","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-card.tsx"),_.register(d,"PaperSheet","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-card.tsx"),_.register(O,"default","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\ticket-card.tsx"),a(e))}()}).call(this,t(15)(e))},457:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__),_search__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(130),a;function _defineProperty(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}a=__webpack_require__(3).enterModule,a&&a(module);const styles=()=>({});class SearchWihoutAutoComplete extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),_defineProperty(this,"handleCancel",()=>{this.setState({value:""})}),_defineProperty(this,"handleKeyUp",e=>{(13===e.charCode||"Enter"===e.key)&&this.handleRequestSearch()}),_defineProperty(this,"handleChange",e=>{this.setState({value:e.target.value})}),_defineProperty(this,"handleRequestSearch",()=>{this.props.onRequestSearch(this.state.value,null)}),this.state={value:""}}render(){const{classes:e}=this.props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"black",inputProps:{value:this.state.value,onChange:this.handleChange,onKeyUp:this.handleKeyUp,className:e.input,disableUnderline:!1},onRightDrawerToggle:this.props.onRightDrawerToggle,handleCancel:this.handleCancel,handleRequestSearch:this.handleRequestSearch})}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(SearchWihoutAutoComplete);__webpack_exports__.a=_default,function(){var e=__webpack_require__(3).default,_=__webpack_require__(3).leaveModule;e&&(e.register(styles,"styles","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\search\\search-without-auto.tsx"),e.register(SearchWihoutAutoComplete,"SearchWihoutAutoComplete","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\search\\search-without-auto.tsx"),e.register(_default,"default","C:\\Users\\JOTA\\OneDrive\\Documentos\\Universidade\\ipm-project\\src\\components\\search\\search-without-auto.tsx"),_(module))}()}).call(this,__webpack_require__(15)(module))}}]);