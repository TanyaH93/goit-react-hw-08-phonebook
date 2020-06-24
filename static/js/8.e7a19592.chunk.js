(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[8],{223:function(r,e,t){"use strict";t.r(e);var o=t(0),p=t.n(o),n=t(180),a=t(33),i=t(1),s=(t(2),t(45));var c=function(r){var e=function(e){var t=r(e);return e.css?Object(i.a)(Object(i.a)({},Object(s.a)(t,r(Object(i.a)({theme:e.theme},e.css)))),function(r,e){var t={};return Object.keys(r).forEach((function(o){-1===e.indexOf(o)&&(t[o]=r[o])})),t}(e.css,[r.filterProps])):t};return e.propTypes={},e.filterProps=["css"].concat(Object(a.a)(r.filterProps)),e};var f=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o=function(r){return e.reduce((function(e,t){var o=t(r);return o?Object(s.a)(e,o):e}),{})};return o.propTypes={},o.filterProps=e.reduce((function(r,e){return r.concat(e.filterProps)}),[]),o},u=t(21),l=t(78);function m(r,e){return e&&"string"===typeof e?e.split(".").reduce((function(r,e){return r&&r[e]?r[e]:null}),r):null}var h=function(r){var e=r.prop,t=r.cssProperty,o=void 0===t?r.prop:t,p=r.themeKey,n=r.transform,a=function(r){if(null==r[e])return null;var t=r[e],a=m(r.theme,p)||{};return Object(l.a)(r,t,(function(r){var e;return"function"===typeof a?e=a(r):Array.isArray(a)?e=a[r]||r:(e=m(a,r)||r,n&&(e=n(e))),!1===o?e:Object(u.a)({},o,e)}))};return a.propTypes={},a.filterProps=[e],a};function d(r){return"number"!==typeof r?r:"".concat(r,"px solid")}var y=f(h({prop:"border",themeKey:"borders",transform:d}),h({prop:"borderTop",themeKey:"borders",transform:d}),h({prop:"borderRight",themeKey:"borders",transform:d}),h({prop:"borderBottom",themeKey:"borders",transform:d}),h({prop:"borderLeft",themeKey:"borders",transform:d}),h({prop:"borderColor",themeKey:"palette"}),h({prop:"borderRadius",themeKey:"shape"})),b=f(h({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),h({prop:"display"}),h({prop:"overflow"}),h({prop:"textOverflow"}),h({prop:"visibility"}),h({prop:"whiteSpace"})),g=f(h({prop:"flexBasis"}),h({prop:"flexDirection"}),h({prop:"flexWrap"}),h({prop:"justifyContent"}),h({prop:"alignItems"}),h({prop:"alignContent"}),h({prop:"order"}),h({prop:"flex"}),h({prop:"flexGrow"}),h({prop:"flexShrink"}),h({prop:"alignSelf"}),h({prop:"justifyItems"}),h({prop:"justifySelf"})),v=f(h({prop:"gridGap"}),h({prop:"gridColumnGap"}),h({prop:"gridRowGap"}),h({prop:"gridColumn"}),h({prop:"gridRow"}),h({prop:"gridAutoFlow"}),h({prop:"gridAutoColumns"}),h({prop:"gridAutoRows"}),h({prop:"gridTemplateColumns"}),h({prop:"gridTemplateRows"}),h({prop:"gridTemplateAreas"}),h({prop:"gridArea"})),j=f(h({prop:"position"}),h({prop:"zIndex",themeKey:"zIndex"}),h({prop:"top"}),h({prop:"right"}),h({prop:"bottom"}),h({prop:"left"})),O=f(h({prop:"color",themeKey:"palette"}),h({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=h({prop:"boxShadow",themeKey:"shadows"});function w(r){return r<=1?"".concat(100*r,"%"):r}var P=h({prop:"width",transform:w}),K=h({prop:"maxWidth",transform:w}),A=h({prop:"minWidth",transform:w}),T=h({prop:"height",transform:w}),N=h({prop:"maxHeight",transform:w}),k=h({prop:"minHeight",transform:w}),C=(h({prop:"size",cssProperty:"width",transform:w}),h({prop:"size",cssProperty:"height",transform:w}),f(P,K,A,T,N,k,h({prop:"boxSizing"}))),S=t(186),E=f(h({prop:"fontFamily",themeKey:"typography"}),h({prop:"fontSize",themeKey:"typography"}),h({prop:"fontStyle",themeKey:"typography"}),h({prop:"fontWeight",themeKey:"typography"}),h({prop:"letterSpacing"}),h({prop:"lineHeight"}),h({prop:"textAlign"})),R=t(3),z=t(6),B=t(34),I=t.n(B),W=t(155);function G(r,e){var t={};return Object.keys(r).forEach((function(o){-1===e.indexOf(o)&&(t[o]=r[o])})),t}var H=t(35),F=function(r){var e=function(r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.name,n=Object(R.a)(t,["name"]);var a,s=o,c="function"===typeof e?function(r){return{root:function(t){return e(Object(i.a)({theme:r},t))}}}:{root:e},f=Object(W.a)(c,Object(i.a)({Component:r,name:o||r.displayName,classNamePrefix:s},n));e.filterProps&&(a=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var u=p.a.forwardRef((function(e,t){var o=e.children,n=e.className,s=e.clone,c=e.component,u=Object(R.a)(e,["children","className","clone","component"]),l=f(e),m=Object(z.a)(l.root,n),h=u;if(a&&(h=G(h,a)),s)return p.a.cloneElement(o,Object(i.a)({className:Object(z.a)(o.props.className,m)},h));if("function"===typeof o)return o(Object(i.a)({className:m},h));var d=c||r;return p.a.createElement(d,Object(i.a)({ref:t,className:m},h),o)}));return I()(u,r),u}}(r);return function(r,t){return e(r,Object(i.a)({defaultTheme:H.a},t))}},J=c(f(y,b,g,v,j,O,x,C,S.b,E)),L=F("div")(J,{name:"MuiBox"}),D=t(175),M=Object(D.a)((function(r){return{text:{textAlign:"center",margin:r.spacing(2)}}}));e.default=function(){var r=M();return p.a.createElement(L,null,p.a.createElement(n.a,{variant:"h3",component:"h3",gutterBottom:!0,className:r.text},"Welcome to our Phonebook App!"),p.a.createElement(n.a,{variant:"subtitle1",gutterBottom:!0,className:r.text},"Please, register or LogIn for continue using app."))}}}]);
//# sourceMappingURL=8.e7a19592.chunk.js.map