(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{100:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__17sx2"}},105:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a(9),c=a(8),o=a(1),l=a(5),u=a(17),s=a(51),d=a(33),p=a(99),h=a.n(p),j=a(0),v=function(e){return Object(j.jsxs)("div",{className:h.a.CheckoutSummary,children:[Object(j.jsx)("h1",{children:"We hope it tastes well!"}),Object(j.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(j.jsx)(s.a,{ingredients:e.ingredients})}),Object(j.jsx)(d.a,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(j.jsx)(d.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},b=a(24),m=a(41),g=a(100),f=a.n(g),O=a(20),C=a(97),y=a(42),x=a(18),k=a(4),I=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"fastest"},{value:"cheapest",displayValue:"cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(k.b)(e.state.orderForm[a],{value:t.target.value,valid:Object(k.a)(t.target.value,e.state.orderForm[a].validation),touched:!0}),r=Object(k.b)(e.state.orderForm,Object(b.a)({},a,n)),i=!0;for(var c in r)i=r[c].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=Object(j.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(j.jsx)(C.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,Value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}},t.id)})),Object(j.jsx)(d.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(n=Object(j.jsx)(m.a,{})),Object(j.jsxs)("div",{className:f.a.ContactData,children:[Object(j.jsx)("h4",{children:"Enter Your Contact Data "}),n]})}}]),a}(o.Component),_=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(x.g(t,a))}}}))(Object(y.a)(I,O.a)),T=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=Object(j.jsx)(l.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(j.jsx)(l.a,{to:"/"}):null;e=Object(j.jsxs)("div",{children:[t,Object(j.jsx)(v,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinedHandler}),Object(j.jsx)(l.b,{path:"".concat(this.props.match.path,"/contact-data"),component:_})]})}return e}}]),a}(o.Component);t.default=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(T)},97:function(e,t,a){"use strict";var n=a(10),r=(a(1),a(98)),i=a.n(r),c=a(0);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(c.jsx)("textarea",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(c.jsx)("select",{className:a.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(c.jsxs)("div",{className:i.a.Input,children:[Object(c.jsx)("label",{className:i.a.Label,children:e.label}),t]})}},98:function(e,t,a){e.exports={Input:"Input_Input__1j4PD",Label:"Input_Label__2i2Tf",InputElement:"Input_InputElement__3haSw",Invalid:"Input_Invalid__3FWzZ"}},99:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2tGr6"}}}]);
//# sourceMappingURL=3.67b4a6a5.chunk.js.map