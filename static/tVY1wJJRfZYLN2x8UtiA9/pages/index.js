(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+yCD":function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i("q1tI");e.isMouseMoveEvent=function(t){return"clientY"in t};var r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e}(o.Component);e.default=r},"2ZXj":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("q1tI"),o=i("m1kc"),r=i("m1kc");e.populatePreviousSlides=function(t,e,i){void 0===i&&(i=0);var s,a,l=t.currentSlide,u=t.itemWidth,d=t.slidesToShow,c=e.children,h=e.showDots,p=e.infinite,f=o.getSlidesToSlide(t,e),m=l-i-(0<i?0:f),v=(n.Children.toArray(c).length-d)%f;return a=0<=m?(s=m,h&&!p&&0<v&&r.isInRightEnd(t)&&(s=l-v),-u*s):s=m<0&&0!==l?0:void 0,{nextSlides:s,nextPosition:a}}},"3TDQ":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("v5rg");e.getOriginalCounterPart=n.getOriginalCounterPart,e.getClones=n.getClones,e.checkClonesPosition=n.checkClonesPosition,e.getInitialSlideInInfiniteMode=n.getInitialSlideInInfiniteMode;var o=i("ztRg");e.getWidthFromDeviceType=o.getWidthFromDeviceType,e.getPartialVisibilityGutter=o.getPartialVisibilityGutter,e.getItemClientSideWidth=o.getItemClientSideWidth;var r=i("m1kc");e.getInitialState=r.getInitialState,e.getIfSlideIsVisbile=r.getIfSlideIsVisbile,e.getTransformForCenterMode=r.getTransformForCenterMode,e.getTransformForPartialVsibile=r.getTransformForPartialVsibile,e.isInLeftEnd=r.isInLeftEnd,e.isInRightEnd=r.isInRightEnd,e.notEnoughChildren=r.notEnoughChildren,e.getSlidesToSlide=r.getSlidesToSlide;var s=i("7XbK");e.throttle=s.default;var a=i("oQ0E");e.throwError=a.default;var l=i("DhR6");e.populateNextSlides=l.populateNextSlides;var u=i("2ZXj");e.populatePreviousSlides=u.populatePreviousSlides;var d=i("zwN0");e.populateSlidesOnMouseTouchMove=d.populateSlidesOnMouseTouchMove},"40+L":function(t,e,i){t.exports=i("41yN")},"41yN":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("sW6s");e.default=n.default},"7XbK":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e,i){var n;return function(){var o=arguments;n||(t.apply(this,o),n=!0,"function"==typeof i&&i(!0),setTimeout((function(){n=!1,"function"==typeof i&&i(!1)}),e))}}},DhR6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("m1kc");e.populateNextSlides=function(t,e,i){void 0===i&&(i=0);var o,r,s=t.slidesToShow,a=t.currentSlide,l=t.itemWidth,u=t.totalItems,d=n.getSlidesToSlide(t,e),c=a+1+i+s+(0<i?0:d);return r=c<=u?-l*(o=a+i+(0<i?0:d)):u<c&&a!==u-s?-l*(o=u-s):o=void 0,{nextSlides:o,nextPosition:r}}},RNiq:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return W}));var n=i("q1tI"),o=i.n(n),r=i("mt9B"),s=i("3Z9Z"),a=i("JI6e"),l=o.a.createElement;function u(){return l(s.a,null,l(a.a,{style:{padding:0,marginBottom:"5em"}},l("img",{src:"/images/image1.jpg",alt:"banner",style:{width:"40%",height:"100%",float:"left"}}),l("div",{style:{border:"1px solid grey"}},l("span",null,l("p",{style:{}},l("span",{style:{}},"3 days ago")," ",l("span",null,"\xa0.\xa0"),l("span",null,"2 min")),l("div",null,l("h3",null,l("span",{style:{}},"Top Street markets in middle East")),l("p",null," ",l("span",{style:{}},"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....")))))))}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c="_2R-kh",h="_wPDyp",p="_vzTHL",f="_3xnQP",m="_3lhLL",v=function(t){var e,i;function n(e){var i;return(i=t.call(this,e)||this).state={feeds:[],isError:"",isLoaded:!1},i}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,d(e,i);var r=n.prototype;return r.componentDidMount=function(){var t=this,e="https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token="+this.props.token;fetch(e).then((function(t){return t.json()})).then((function(e){e.hasOwnProperty("error")?t.setState({isLoaded:!0,isError:!0}):t.setState({isLoaded:!0,feeds:e.data,isError:!1})})).catch((function(e){console.error("Error:",e),t.setState({isLoaded:!0,isError:!0,error:e})}))},r.render=function(){var t=this.state,e=t.isError,i=t.isLoaded,n=t.feeds;return e?o.a.createElement("div",{className:m},o.a.createElement("p",null," the access token is not valid")):i?(console.log(n),o.a.createElement("div",{className:c},n.slice(0,this.props.counter).map((function(t,e){return o.a.createElement("div",{key:e,className:h},o.a.createElement("a",{key:e,href:t.permalink,className:"ig-instagram-link",target:"_blank",rel:"noreferrer"},"IMAGE"===t.media_type||"CAROUSEL_ALBUM"===t.media_type?o.a.createElement("img",{className:p,key:e,src:t.media_url,alt:"description"}):o.a.createElement("video",{className:p,key:e,src:t.media_url,type:"video/mp4"}),o.a.createElement("div",{className:f},o.a.createElement("div",{className:"instagram-count-item"},o.a.createElement("span",{className:"icon"},o.a.createElement("svg",{height:"18",viewBox:"0 0 512 512",width:"18"},o.a.createElement("path",{fill:"currentColor",d:"m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"})))))))})))):o.a.createElement("div",null," Loading... ")},n}(n.Component),g=i("IP2g"),y=i("8tEE"),S=o.a.createElement;function b(){return S("div",{className:"instagram"},S("h1",{style:{fontWeight:"bold",textAlign:"center"}},"Find us on Instagram",S("span",null,S("a",{href:"https://www.instagram.com/game.boards/",target:"_blank"},S(g.a,{icon:y.a,style:{width:"30px",cursor:"pointer",color:"#000",marginLeft:"10px"}})))),S(v,{token:"IGQVJXTkdsVFlOQnpVODZAHVGl0WjM5bHVNZAWpRd1I4dGJmZA0QzRHU3ZAmhuSTgzWlpJNGhmQVJ0WmVTNmIyMDlDek5KeGZABLVBuMHlLamt4bGZAXZA204ZAnpxTUN5RnYxNl9NSWdGMHhRWGtzbmFXQVFFOQZDZD",counter:"9"}))}var w=i("QojX"),T=i("cWnB"),E=o.a.createElement;function C(){return E("div",{className:"middle-subscribe"},E("h2",{className:"posts-let"},"Let the posts come to you"),E(w.a,{style:{padding:"2em",paddingTop:0,color:"white"}},E(s.a,null,E(a.a,null,E(w.a.Group,{className:"subcribe-form",controlId:"formGroupEmail"},E(w.a.Label,null,"Email *"),E(w.a.Control,{required:!0,className:"subcribe-form-field",type:"email"})))),E(s.a,null,E(a.a,{style:{display:"flex",justifyContent:"center"}},E(T.a,{className:"subcribe-form-button",type:"submit",style:{}},"Subscribe"," ")))))}var I=o.a.createElement;function P(){return I("div",{className:"middle-component col1-container",style:{}},I(s.a,null,I(a.a,{id:"one"},I(u,null),I(u,null),I(u,null)),I(a.a,{className:"middle-col"},I(C,null),I(b,null))))}function M(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var _=i("40+L"),k=i.n(_),A=o.a.createElement;function R(t){var e=t.link,i=t.isMoving;return A("div",{className:"card",style:{margin:"10px 0px",border:"none",marginTop:0},onClick:function(t){i&&t.preventDefault()}},A("img",{className:"carousel-image",src:e,alt:"images",draggable:!1}))}function x(){var t,e=Object(n.useState)(!1),i=e[0],o=e[1];return A("div",{className:"container-fluid",style:{padding:0,left:"0",marginBottom:"30px"}},A(k.a,(M(t={swipeable:!0,draggable:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:75}},ssr:!0,infinite:!0,autoPlaySpeed:2e3,partialVisible:!0},"infinite",!1),M(t,"beforeChange",(function(){return o(!0)})),M(t,"afterChange",(function(){return o(!1)})),M(t,"containerClass","first-carousel-container"),M(t,"deviceType","desktop"),M(t,"itemClass","image-item"),t),["/images/image1.jpg","/images/image2.jpg","/images/image3.jpg","/images/image4.jpg","/images/image5.jpg","/images/image7.jpg"].map((function(t,e){return A(R,{key:e,isMoving:i,link:t})}))))}var O=i("8Kt/"),D=i.n(O),L=o.a.createElement;function W(){return L(r.a,null,L(D.a,null,L("title",null,"Game Boards"),L("link",{rel:"icon",href:"/favicon.ico"}),L("meta",{name:"viewport",content:"width=device-width, initial-scale=0.41, maximum-scale=1"})),L(x,null),L(P,null))}},S9TR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("q1tI"),o=i("3TDQ");e.default=function(t){var e=t.props,i=t.state,r=t.goToSlide,s=t.clones,a=t.notEnoughChildren,l=i.itemWidth,u=e.children,d=e.infinite,c=e.itemClass,h=e.itemAriaLabel,p=e.partialVisbile,f=e.partialVisible,m=o.getInitialState(i,e),v=m.flexBisis,g=m.shouldRenderOnSSR,y=m.domFullyLoaded,S=m.partialVisibilityGutter;return m.shouldRenderAtAll?(p&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),n.createElement(n.Fragment,null,(d?s:n.Children.toArray(u)).map((function(t,s){return n.createElement("li",{key:s,"data-index":s,onClick:function(){e.focusOnSelect&&r(s)},"aria-hidden":o.getIfSlideIsVisbile(s,i)?"false":"true","aria-label":h||(t.props.ariaLabel?t.props.ariaLabel:null),style:{flex:g?"1 0 "+v+"%":"auto",position:"relative",width:y?((p||f)&&S&&!a?l-S:l)+"px":"auto"},className:"react-multi-carousel-item "+(o.getIfSlideIsVisbile(s,i)?"react-multi-carousel-item--active":"")+" "+c},t)})))):null}},SSZS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("q1tI"),o=i("v5rg"),r=i("bwfW"),s=i("m1kc");e.default=function(t){var e=t.props,i=t.state,a=t.goToSlide,l=t.getState,u=e.showDots,d=e.customDot,c=e.dotListClass,h=e.infinite,p=e.children;if(!u||s.notEnoughChildren(i))return null;var f,m=i.currentSlide,v=i.slidesToShow,g=s.getSlidesToSlide(i,e),y=n.Children.toArray(p);f=h?Math.ceil(y.length/g):Math.ceil((y.length-v)/g)+1;var S=r.getLookupTableForNextSlides(f,i,e,y),b=o.getOriginalIndexLookupTableByClones(v,y),w=b[m];return n.createElement("ul",{className:"react-multi-carousel-dot-list "+c},Array(f).fill(0).map((function(t,e){var i,o;if(h){o=S[e];var r=b[o];i=w===r||r<=w&&w<r+g}else{var s=y.length-v,u=e*g;i=(o=s<u?s:u)===m||o<m&&m<o+g&&m<y.length-v}return d?n.cloneElement(d,{index:e,active:i,key:e,onClick:function(){return a(o)},carouselState:l()}):n.createElement("li",{"data-index":e,key:e,className:"react-multi-carousel-dot "+(i?"react-multi-carousel-dot--active":"")},n.createElement("button",{"aria-label":"Go to slide "+(e+1),onClick:function(){return a(o)}}))})))}},bwfW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("v5rg"),o=i("m1kc");e.getLookupTableForNextSlides=function(t,e,i,r){var s={},a=o.getSlidesToSlide(e,i);return Array(t).fill(0).forEach((function(t,i){var o=n.getOriginalCounterPart(i,e,r);if(0===i)s[0]=o;else{var l=s[i-1]+a;s[i]=l}})),s}},m1kc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("ztRg");function o(t){var e=t.slidesToShow;return t.totalItems<e}function r(t,e,i){var n=i||t.transform;return!e.infinite&&0===t.currentSlide||o(t)?n:n+t.itemWidth/2}function s(t){var e=t.currentSlide,i=t.totalItems;return!(e+t.slidesToShow<i)}function a(t,e,i,n){void 0===e&&(e=0);var r=t.currentSlide,a=t.slidesToShow,l=s(t),u=!i.infinite&&l,d=n||t.transform;if(o(t))return d;var c=d+r*e;return u?c+(t.containerWidth-(t.itemWidth-e)*a):c}e.notEnoughChildren=o,e.getInitialState=function(t,e){var i,o=t.domLoaded,r=t.slidesToShow,s=t.containerWidth,a=t.itemWidth,l=e.deviceType,u=e.responsive,d=e.ssr,c=e.partialVisbile,h=e.partialVisible,p=Boolean(o&&r&&s&&a);d&&l&&!p&&(i=n.getWidthFromDeviceType(l,u));var f=Boolean(d&&l&&!p&&i);return{shouldRenderOnSSR:f,flexBisis:i,domFullyLoaded:p,partialVisibilityGutter:n.getPartialVisibilityGutter(u,c||h,l,t.deviceType),shouldRenderAtAll:f||p}},e.getIfSlideIsVisbile=function(t,e){var i=e.currentSlide,n=e.slidesToShow;return i<=t&&t<i+n},e.getTransformForCenterMode=r,e.isInLeftEnd=function(t){return!(0<t.currentSlide)},e.isInRightEnd=s,e.getTransformForPartialVsibile=a,e.getTransform=function(t,e,i){var o=e.partialVisbile,s=e.partialVisible,l=e.responsive,u=e.deviceType,d=e.centerMode,c=i||t.transform,h=n.getPartialVisibilityGutter(l,o||s,u,t.deviceType);return s||o?a(t,h,e,i):d?r(t,e,i):c},e.getSlidesToSlide=function(t,e){var i=t.domLoaded,n=t.slidesToShow,o=t.containerWidth,r=t.itemWidth,s=e.deviceType,a=e.responsive,l=e.slidesToSlide||1,u=Boolean(i&&n&&o&&r);return e.ssr&&e.deviceType&&!u&&Object.keys(a).forEach((function(t){var e=a[t].slidesToSlide;s===t&&e&&(l=e)})),u&&Object.keys(a).forEach((function(t){var e=a[t],i=e.breakpoint,n=e.slidesToSlide,o=i.max,r=i.min;n&&window.innerWidth>=r&&window.innerWidth<=o&&(l=n)})),l}},oQ0E:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=e.partialVisbile,n=e.partialVisible,o=e.centerMode,r=e.ssr,s=e.responsive;if((i||n)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!s)throw r?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(s&&"object"!=typeof s)throw new Error("responsive prop must be an object")}},sW6s:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i("q1tI"),r=i("3TDQ"),s=i("+yCD"),a=i("SSZS"),l=i("yQRQ"),u=i("S9TR"),d=i("m1kc"),c=400,h=function(t){function e(e){var i=t.call(this,e)||this;return i.containerRef=o.createRef(),i.listRef=o.createRef(),i.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:o.Children.count(e.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},i.onResize=i.onResize.bind(i),i.handleDown=i.handleDown.bind(i),i.handleMove=i.handleMove.bind(i),i.handleOut=i.handleOut.bind(i),i.onKeyUp=i.onKeyUp.bind(i),i.handleEnter=i.handleEnter.bind(i),i.setIsInThrottle=i.setIsInThrottle.bind(i),i.next=r.throttle(i.next.bind(i),e.transitionDuration||c,i.setIsInThrottle),i.previous=r.throttle(i.previous.bind(i),e.transitionDuration||c,i.setIsInThrottle),i.goToSlide=r.throttle(i.goToSlide.bind(i),e.transitionDuration||c,i.setIsInThrottle),i.onMove=!1,i.initialX=0,i.lastX=0,i.isAnimationAllowed=!1,i.direction="",i.initialY=0,i.isInThrottle=!1,i.transformPlaceHolder=0,i}return n(e,t),e.prototype.resetTotalItems=function(){var t=this,e=o.Children.count(this.props.children),i=r.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:i},(function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)}))},e.prototype.setIsInThrottle=function(t){void 0===t&&(t=!1),this.isInThrottle=t},e.prototype.setTransformDirectly=function(t,e){var i=this.props.additionalTransfrom,n=d.getTransform(this.state,this.props,t);this.transformPlaceHolder=t,this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(n+i)+"px,0,0)")},e.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||"transform 400ms ease-in-out":"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.props.autoPlaySpeed&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(t,e,i,n){var s=this;void 0===n&&(n=!1),this.isAnimationAllowed=!1;var a=o.Children.toArray(this.props.children),l=r.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,a),u=r.getClones(this.state.slidesToShow,a),d=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:i&&!n?d:l},(function(){s.correctItemsPosition(e||s.state.itemWidth)}))},e.prototype.setItemsToShow=function(t,e){var i=this,n=this.props.responsive;Object.keys(n).forEach((function(o){var r=n[o],s=r.breakpoint,a=r.items,l=s.max,u=s.min;window.innerWidth>=u&&window.innerWidth<=l&&(i.setState({slidesToShow:a,deviceType:o}),i.setContainerAndItemWidth(a,t,e))}))},e.prototype.setContainerAndItemWidth=function(t,e,i){var n=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,s=r.getItemClientSideWidth(this.props,t,o);this.setState({containerWidth:o,itemWidth:s},(function(){n.props.infinite&&n.setClones(t,s,e,i)})),e&&this.correctItemsPosition(s)}},e.prototype.correctItemsPosition=function(t,e,i){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var n=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;i&&this.setTransformDirectly(n,!0),this.setState({transform:n})},e.prototype.onResize=function(t){var e;e=!!this.props.infinite&&("boolean"!=typeof t||!t),this.setItemsToShow(e)},e.prototype.componentDidUpdate=function(t,e){var i=this,n=t.keyBoardControl,o=t.autoPlay,r=t.children,s=e.containerWidth,a=e.domLoaded,l=e.currentSlide;this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==s&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout((function(){i.setItemsToShow(!0)}),this.props.transitionDuration||c)),n&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!n&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),r.length!==this.props.children.length?setTimeout((function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()}),this.props.transitionDuration||c):this.props.infinite&&this.state.currentSlide!==l&&this.correctClonesPosition({domLoaded:a}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform)},e.prototype.correctClonesPosition=function(t){var e=this,i=t.domLoaded,n=o.Children.toArray(this.props.children),s=r.checkClonesPosition(this.state,n,this.props),a=s.isReachingTheEnd,l=s.isReachingTheStart,u=s.nextSlide,d=s.nextPosition;this.state.domLoaded&&i&&(a||l)&&(this.isAnimationAllowed=!1,setTimeout((function(){e.setState({transform:d,currentSlide:u})}),this.props.transitionDuration||c))},e.prototype.next=function(t){var e=this;void 0===t&&(t=0);var i=this.props,n=i.afterChange,o=i.beforeChange;if(!r.notEnoughChildren(this.state)){var s=r.populateNextSlides(this.state,this.props,t),a=s.nextSlides,l=s.nextPosition,u=this.state.currentSlide;void 0!==a&&void 0!==l&&("function"==typeof o&&o(a,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:l,currentSlide:a},(function(){"function"==typeof n&&setTimeout((function(){n(u,e.getState())}),e.props.transitionDuration||c)})))}},e.prototype.previous=function(t){var e=this;void 0===t&&(t=0);var i=this.props,n=i.afterChange,o=i.beforeChange;if(!r.notEnoughChildren(this.state)){var s=r.populatePreviousSlides(this.state,this.props,t),a=s.nextSlides,l=s.nextPosition;if(void 0!==a&&void 0!==l){var u=this.state.currentSlide;"function"==typeof o&&o(a,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:l,currentSlide:a},(function(){"function"==typeof n&&setTimeout((function(){n(u,e.getState())}),e.props.transitionDuration||c)}))}}},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.handleDown=function(t){if(!(!s.isMouseMoveEvent(t)&&!this.props.swipeable||s.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=s.isMouseMoveEvent(t)?t:t.touches[0],i=e.clientX,n=e.clientY;this.onMove=!0,this.initialX=i,this.initialY=n,this.lastX=i,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(t){if(!(!s.isMouseMoveEvent(t)&&!this.props.swipeable||s.isMouseMoveEvent(t)&&!this.props.draggable||r.notEnoughChildren(this.state))){var e=s.isMouseMoveEvent(t)?t:t.touches[0],i=e.clientX,n=e.clientY,o=this.initialX-i,a=this.initialY-n;if(!s.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.onMove){if(!(Math.abs(o)>Math.abs(a)))return;var l=r.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),u=l.direction,d=l.nextPosition,c=l.canContinue;u&&(this.direction=u,c&&void 0!==d&&this.setTransformDirectly(d)),this.lastX=i}}},e.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e="touchend"===t.type&&!this.props.swipeable,i=("mouseleave"===t.type||"mouseup"===t.type)&&!this.props.draggable;if(!e&&!i&&this.onMove){if(this.setAnimationDirectly(!0),"right"===this.direction)if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var n=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(n)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);"left"===this.direction&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(n=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(n)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(t){var e=t.getBoundingClientRect(),i=e.top,n=void 0===i?0:i,o=e.left,r=void 0===o?0:o,s=e.bottom,a=void 0===s?0:s,l=e.right,u=void 0===l?0:l;return 0<=n&&0<=r&&a<=(window.innerHeight||document.documentElement.clientHeight)&&u<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},e.prototype.onKeyUp=function(t){var e=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(e))return this.previous();break;case 39:if(this.isChildOfCarousel(e))return this.next();break;case 9:if(this.isChildOfCarousel(e)&&e instanceof HTMLInputElement&&!this.isInViewport(e))return this.next()}},e.prototype.handleEnter=function(){this.autoPlay&&this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(t,e){var i=this;if(!this.isInThrottle){var n=this.state.itemWidth,o=this.props,r=o.afterChange,s=o.beforeChange,a=this.state.currentSlide;"function"!=typeof s||e&&("object"!=typeof e||e.skipBeforeChange)||s(t,this.getState()),this.isAnimationAllowed=!0,this.setState({currentSlide:t,transform:-n*t},(function(){i.props.infinite&&i.correctClonesPosition({domLoaded:!0}),"function"!=typeof r||e&&("object"!=typeof e||e.skipAfterChange)||setTimeout((function(){r(a,i.getState())}),i.props.transitionDuration||c)}))}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(t){var e=this,i=this.props.customLeftArrow;return o.createElement(l.LeftArrow,{customLeftArrow:i,getState:function(){return e.getState()},previous:this.previous,disabled:t})},e.prototype.renderRightArrow=function(t){var e=this,i=this.props.customRightArrow;return o.createElement(l.RightArrow,{customRightArrow:i,getState:function(){return e.getState()},next:this.next,disabled:t})},e.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?o.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(e,i){return t.goToSlide(e,i)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var t=this;return o.createElement(a.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},e.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=o.Children.toArray(this.props.children);t=r.getClones(this.state.slidesToShow,e)}return o.createElement(u.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:r.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var t=this.props,e=t.deviceType,i=t.arrows,n=t.renderArrowsWhenDisabled,s=t.removeArrowOnDeviceType,a=t.infinite,l=t.containerClass,u=t.sliderClass,c=t.customTransition,h=t.additionalTransfrom,p=t.renderDotsOutside,f=t.renderButtonGroupOutside,m=t.className,v=r.getInitialState(this.state,this.props),g=v.shouldRenderOnSSR,y=v.shouldRenderAtAll,S=r.isInLeftEnd(this.state),b=r.isInRightEnd(this.state),w=i&&!(s&&(e&&-1<s.indexOf(e)||this.state.deviceType&&-1<s.indexOf(this.state.deviceType)))&&!r.notEnoughChildren(this.state)&&y,T=!a&&S,E=!a&&b,C=d.getTransform(this.state,this.props);return o.createElement(o.Fragment,null,o.createElement("div",{className:"react-multi-carousel-list "+l+" "+m,ref:this.containerRef},o.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?c||"transform 400ms ease-in-out":"none",overflow:g?"hidden":"unset",transform:"translate3d("+(C+h)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),w&&(!T||n)&&this.renderLeftArrow(T),w&&(!E||n)&&this.renderRightArrow(E),y&&!f&&this.renderButtonGroups(),y&&!p&&this.renderDotsList()),y&&p&&this.renderDotsList(),y&&f&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0},e}(o.Component);e.default=h},v5rg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=function(t,e,i){var n=e.slidesToShow,o=e.currentSlide;return i.length>2*n?t+2*n:o>=i.length?i.length+t:t},e.getOriginalIndexLookupTableByClones=function(t,e){if(e.length>2*t){for(var i={},n=e.length-2*t,o=e.length-n,r=n,s=0;s<o;s++)i[s]=r,r++;var a=e.length+o,l=a+e.slice(0,2*t).length,u=0;for(s=a;s<=l;s++)i[s]=u,u++;var d=a,c=0;for(s=o;s<d;s++)i[s]=c,c++;return i}i={};var h=3*e.length,p=0;for(s=0;s<h;s++)i[s]=p,++p===e.length&&(p=0);return i},e.getClones=function(t,e){return e.length<t?e:e.length>2*t?e.slice(e.length-2*t,e.length).concat(e,e.slice(0,2*t)):e.concat(e,e)},e.getInitialSlideInInfiniteMode=function(t,e){return e.length>2*t?2*t:e.length},e.checkClonesPosition=function(t,e,i){var n,o=t.currentSlide,r=t.slidesToShow,s=t.itemWidth,a=t.totalItems,l=0,u=0,d=0===o,c=e.length-(e.length-2*r);return e.length<r?(u=l=0,d=n=!1):e.length>2*r?((n=o>=c+e.length)&&(u=-s*(l=o-e.length)),d&&(u=-s*(l=c+(e.length-2*r)))):((n=o>=2*e.length)&&(u=-s*(l=o-e.length)),d&&(u=i.showDots?-s*(l=e.length):-s*(l=a-2*r))),{isReachingTheEnd:n,isReachingTheStart:d,nextSlide:l,nextPosition:u}}},vlRD:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])},yQRQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("q1tI");e.LeftArrow=function(t){var e=t.customLeftArrow,i=t.getState,o=t.previous,r=t.disabled;return e?n.cloneElement(e,{onClick:function(){return o()},carouselState:i(),disabled:r}):n.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left",onClick:function(){return o()},type:"button",disabled:r})};e.RightArrow=function(t){var e=t.customRightArrow,i=t.getState,o=t.next,r=t.disabled;return e?n.cloneElement(e,{onClick:function(){return o()},carouselState:i(),disabled:r}):n.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right",onClick:function(){return o()},type:"button",disabled:r})}},ztRg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getPartialVisibilityGutter=function(t,e,i,n){var o=0,r=n||i;return e&&r&&(o=t[r].partialVisibilityGutter||t[r].paritialVisibilityGutter),o},e.getWidthFromDeviceType=function(t,e){var i;return e[t]&&(i=(100/e[t].items).toFixed(1)),i},e.getItemClientSideWidth=function(t,e,i){return Math.round(i/(e+(t.centerMode?1:0)))}},zwN0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=function(t,e,i,n,o,r){var s,a,l=t.itemWidth,u=t.slidesToShow,d=t.totalItems,c=t.currentSlide,h=e.infinite,p=!1,f=Math.round((i-n)/l),m=Math.round((n-i)/l),v=i<o;if(o<i&&f<=u){s="right";var g=Math.abs(-l*(d-u)),y=r-(n-o),S=c===d-u;(Math.abs(y)<=g||S&&h)&&(a=y,p=!0)}return v&&m<=u&&(s="left",((y=r+(o-n))<=0||0===c&&h)&&(p=!0,a=y)),{direction:s,nextPosition:a,canContinue:p}}}},[["vlRD",0,2,4,1,3]]]);