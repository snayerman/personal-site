(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(151),i=n(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},144:function(e,t,n){"use strict";var a=n(38);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(155)),o=a(n(156)),i=a(n(8)),u=a(n(52)),l=a(n(53)),s=a(n(4)),c=a(n(0)),d=n(16),p=n(151);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/personal-site/"+e)}var h={activeClassName:s.default.string,activeStyle:s.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,s=t.location,h=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(n);return c.default.createElement(d.Link,(0,o.default)({to:g,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){if(u&&u(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,p.parsePath)(g),a=n.pathname,r=n.hash;if(a===s.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}w(g,{state:h,replace:m})}return!0}},v))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v,g=(v=m,function(e){return c.default.createElement(d.Location,null,function(t){var n=t.location;return c.default.createElement(v,(0,o.default)({location:n},e))})});t.default=g;var w=function(e,t){window.___navigate(e,t)};t.navigate=w;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},145:function(e,t,n){},147:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(144),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var c=n(152),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var p=n(40);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),h=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(145),n(154)),i=(n(147),function(){return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("div",{id:"name"},r.a.createElement("div",{id:"letterCircle"},"S"),r.a.createElement("p",null,"Sam Nayerman")),r.a.createElement("div",{id:"links"},r.a.createElement("a",{href:"https://github.com/snayerman/"},r.a.createElement(o.Github,null)," GitHub "),r.a.createElement("a",{href:"https://www.linkedin.com/in/samuel-nayerman/"},r.a.createElement(o.Linkedin,null)," LinkedIn")))});t.a=function(e){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("div",{className:"container"},e.children))}},155:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},156:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},157:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(54),l=n(1),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b4cd36131730d53d126b.js.map