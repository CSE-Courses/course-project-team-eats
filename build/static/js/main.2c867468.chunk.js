(this.webpackJsonpeats=this.webpackJsonpeats||[]).push([[0],[,,,,,function(e,t,a){e.exports={body:"People_body__2smkP",block:"People_block__1fCou","parent-block":"People_parent-block__1q7Cq","select-button":"People_select-button__wo7qj",logo:"People_logo__33Zk8",paragraph:"People_paragraph__1CX50"}},,,,function(e,t,a){e.exports=a.p+"static/media/logo.bc0e3de5.png"},function(e,t,a){e.exports={"search-summary":"SearchResultsSummary_search-summary__1lXMz",heading:"SearchResultsSummary_heading__XGo7X",container:"SearchResultsSummary_container__1r8si",filters:"SearchResultsSummary_filters__15QyG","text-heading":"SearchResultsSummary_text-heading__1y_iQ",slider:"SearchResultsSummary_slider__1byHU","nextUser-button":"SearchResultsSummary_nextUser-button__1TzHT","submit-button":"SearchResultsSummary_submit-button__Gc8Ej"}},function(e,t,a){e.exports={body:"final_page_body__1vcYG",block:"final_page_block__2U5HB","parent-block":"final_page_parent-block__16xbr","select-button":"final_page_select-button__2yxeg",logo:"final_page_logo__1_h91",paragraph:"final_page_paragraph__1CM79",winner:"final_page_winner__3Hdpq",restart:"final_page_restart__3uJpM",menu:"final_page_menu__1rSiA"}},,,,,,,function(e,t,a){e.exports={"search-result":"SearchResult_search-result__2Qe_V","business-image":"SearchResult_business-image__1Y7rj","image-checkbox":"SearchResult_image-checkbox__2DZqB","image-checkbox-checked":"SearchResult_image-checkbox-checked__qi8bY",fa:"SearchResult_fa__1jiH5","business-info":"SearchResult_business-info__3OO4S","contact-info":"SearchResult_contact-info__cxoKX","business-tag":"SearchResult_business-tag__3qdjK"}},function(e,t,a){e.exports={body:"StarterPage_body__17VGt",block:"StarterPage_block__vbGa0",paragraph:"StarterPage_paragraph__3dSHq","start-button":"StarterPage_start-button__5760y",logo:"StarterPage_logo__24oAp"}},,function(e,t,a){e.exports={"input-control":"SearchBar_input-control__2zJqG","search-button":"SearchBar_search-button__3nQ6P","search-icon":"SearchBar_search-icon__1vwQg"}},,,function(e,t,a){e.exports={logo:"LandingPage_logo__w1uvn","search-area":"LandingPage_search-area__2pb8L",landing:"LandingPage_landing__3fU-u"}},function(e,t,a){e.exports={body:"text_field_body__P-wxk",block:"text_field_block__2o5Vw","parent-block":"text_field_parent-block__31cCz","select-button":"text_field_select-button__30lua",logo:"text_field_logo__3qMPW",paragraph:"text_field_paragraph__1IePb"}},,,,,,function(e,t,a){e.exports={"nav-bar":"NavBar_nav-bar__2daSH",logo:"NavBar_logo__r8not","nav-button":"NavBar_nav-button__2P95t"}},,,,function(e,t,a){e.exports={rating:"BusinessRating_rating__2Hu56"}},,function(e,t,a){e.exports={"search-results":"SearchResults_search-results__3fn_e"}},function(e,t,a){e.exports={spinner:"Spinner_spinner__25KuM"}},,function(e,t,a){e.exports={pagination:"Pagination_pagination__2rJx8","pagination-next":"Pagination_pagination-next__iFzCk"}},function(e,t,a){e.exports=a.p+"static/media/logo.bc0e3de5.png"},function(e,t,a){e.exports=a(59)},,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),r=a.n(l),s=a(9),o=a.n(s),i=a(24),u=a.n(i),m=a(2),p=a(21),b=a.n(p);function d(e){var t=Object(n.useState)(e.term||""),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(e.location||""),o=Object(m.a)(s,2),i=o[0],u=o[1];function p(t){"function"===typeof e.search&&e.search(l,i),console.log(l,i),t.preventDefault()}var d=e.small?"":"is-medium";return c.a.createElement("form",{onSubmit:p},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-static ".concat(d)},"Search")),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input ".concat(d," ").concat(b.a["input-control"]),onChange:function(e){return r(e.target.value)},type:"text",value:l,placeholder:"Search your favorite food"})),c.a.createElement("div",{className:"control"},c.a.createElement("div",{className:"button is-static ".concat(d)},"Near")),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input ".concat(d," ").concat(b.a["input-control"]),onChange:function(e){return u(e.target.value)},type:"text",value:i,placeholder:"Set your location"})),c.a.createElement("div",{className:"button ".concat(d," ").concat(b.a["search-button"]),onClick:p},c.a.createElement("span",{className:"icon is-small ".concat(b.a["search-icon"])},c.a.createElement("i",{className:"fas fa-search"})))))}var E=a(22),f=a.n(E),g=a(1);function h(){var e=f()().history;return c.a.createElement("div",{className:u.a.landing},c.a.createElement("div",{className:u.a["search-area"]},c.a.createElement(g.b,{to:"/"}," ",c.a.createElement("img",{src:o.a,className:u.a.logo,alt:"logo"})," "),c.a.createElement(d,{search:function(t,a){var n=encodeURI(t),c=encodeURI(a);e.push("/search?find_desc=".concat(n,"&find_loc=").concat(c))}})))}var v=a(3),_=a(31),N=a.n(_);function y(e){return c.a.createElement("div",{className:N.a["nav-bar"]},c.a.createElement(g.b,{to:"/landing"},c.a.createElement("img",{src:o.a,className:N.a.logo,alt:"belb_logo"})),c.a.createElement(d,{small:!0,term:e.term,location:e.location,search:e.search}))}var k=a(10),S=a.n(k);function x(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],u=o[1],p=Object(n.useState)(!1),b=Object(m.a)(p,2),d=b[0],E=b[1],f=Object(n.useState)(!1),h=Object(m.a)(f,2),v=h[0],_=h[1],N=Object(n.useState)(!1),y=Object(m.a)(N,2),k=y[0],x=y[1],O=Object(n.useState)({value:0}),j=Object(m.a)(O,2),w=j[0],R=j[1];function C(e){if("1"===e)r(!0),u(!1),E(!1),_(!1),R({value:0});else if("2"===e)u(!0),r(!1),E(!1),_(!1),R({value:0});else if("3"===e)E(!0),u(!1),r(!1),_(!1),R({value:0});else{if("4"!==e)return;_(!0),r(!1),u(!1),E(!1),R({value:0})}}function U(t){e.searchWithFilter(e.term,e.location,t)}var P=null;e.amountResults&&e.shownResults&&(P=c.a.createElement("p",null,"Showing 1-",e.shownResults," out of ",e.amountResults," results"," "));var B=l?"is-success":"",I=i?"is-success":"",D=d?"is-success":"",F=v?"is-success":"",L=k?"is-active":"";return c.a.createElement("div",{className:S.a.container},c.a.createElement("div",{className:S.a["search-summary"]},c.a.createElement("h1",{className:"subtitle"},c.a.createElement("strong",null,e.term)," ",e.location),c.a.createElement("h1",{className:S.a.heading},"Choose your top 5 restaurants"),P),c.a.createElement("div",{className:S.a.filters},c.a.createElement("div",{className:"dropdown ".concat(L)},c.a.createElement("div",{className:"dropdown-trigger"},c.a.createElement("button",{className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu3",onClick:function(e){x(!k)}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-sliders-h"})),c.a.createElement("span",null,"Filters"))),c.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu3",role:"menu"},c.a.createElement("div",{className:"dropdown-content"},c.a.createElement("div",{className:"slider-content"},c.a.createElement("div",{className:"text-heading ".concat(S.a["text-heading"])},"Filter by miles"),c.a.createElement("input",{className:"slider is-fullwidth is-success is-circle ".concat(S.a.slider),step:"1",min:"0",max:"25",value:w.value,type:"range",onChange:function(t){!function(t){R({value:t.target.value}),r(!1),u(!1),E(!1),_(!1),e.searchWithRadiusFilter(e.term,e.location,1600*w.value),console.log(w.value)}(t)}}),c.a.createElement("output",{for:"sliderWithValue"},w.value))))),c.a.createElement("div",{className:"buttons has-addons"},c.a.createElement("button",{className:"button ".concat(B," "),onClick:function(e){U("1"),C("1")},value:"1"},"$"),c.a.createElement("button",{className:"button ".concat(I," "),onClick:function(e){U("2"),C("2")},value:"2"},"$$"),c.a.createElement("button",{className:"button ".concat(D," "),onClick:function(e){U("3"),C("3")},value:"3"},"$$$"),c.a.createElement("button",{className:"button ".concat(F," "),onClick:function(e){U("4"),C("4")},value:"4"},"$$$$")),c.a.createElement("button",{className:"button",onClick:function(t){!function(t){"function"===typeof e.search&&e.search(e.term,e.location),t.preventDefault()}(t),r(!1),u(!1),E(!1),_(!1),R({value:0})}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-minus-circle"})),c.a.createElement("span",null,"Clear filter")),c.a.createElement(g.b,{to:"/Finale"}," ",c.a.createElement("button",{className:"button is-warning ".concat(S.a["submit-button"]),title:"Disabled button",onClick:function(e){console.log("Submit button works")}},"Submit"))))}var O=a(17),j=a.n(O),w=a(23),R=a(32),C=a(35),U=a.n(C),P=a(36);function B(e){return c.a.createElement("div",{className:U.a.rating},c.a.createElement(P.a,{emptySymbol:"far fa-star",fullSymbol:"fas fa-star",fractions:2,readonly:!0,initialRating:e.rating}),c.a.createElement("p",null,e.reviewCount," reviews"))}var I=a(18),D=a.n(I),F=[{id:"1",name:"Nothing"}];function L(e){var t=Object(n.useState)({list:F}),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),i=o[0],u=o[1];if(!e.business)return c.a.createElement("div",null," Error! Not Found");console.log(i),console.log(l);var p=function(){var e=Object(w.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={listData:i},e.next=3,fetch("/add_restaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:e.sent.ok&&console.log("POST request works");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=e.business.categories.map((function(t){return c.a.createElement("span",{className:"tag ".concat(D.a["business-tag"]),key:e.business.id+t.title},t.title)})),d=e.business.location.display_address.map((function(t){return c.a.createElement("p",{key:e.business.id+t},t)}));return c.a.createElement("div",{className:D.a["search-result"]},c.a.createElement("label",{className:"image-checkbox",onClick:function(t){t.target.checked?(!function(){var t=l.list.concat({id:e.business.id,name:e.business.name});r(Object(R.a)(Object(R.a)({},l),{},{list:t})),u("")}(),p()):(r({list:F}),u(""))},value:e.business.name},c.a.createElement("img",{src:e.business.image_url,alt:"business",className:"".concat(D.a["business-image"])}),c.a.createElement("input",{type:"checkbox",name:"image[]",value:""}),c.a.createElement("i",{className:"fa fa-check"})),c.a.createElement("div",{className:D.a["business-info"]},c.a.createElement("h2",{className:"subtitle"},e.business.name),c.a.createElement(B,{reviewCount:e.business.review_count,rating:e.business.rating}),c.a.createElement("p",null," ",e.business.price,b)),c.a.createElement("div",{className:D.a["contact-info"]},c.a.createElement("p",null,e.business.phone," "),d))}var q=a(37),H=a.n(q),A=a(38),G=a.n(A);function W(){return c.a.createElement("div",{className:"button is-loading is-large ".concat(G.a.spinner)},"Loading")}function z(e){var t=c.a.createElement(W,null);return e.businesses&&e.businesses.length&&(t=e.businesses.map((function(e){return c.a.createElement(L,{key:e.id,business:e})}))),c.a.createElement("div",{className:H.a["search-results"]},t)}var $=a(39),J=a.n($);function X(e,t){var a=J.a.stringify(t);return fetch("".concat("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3").concat(e,"?").concat(a),{headers:{Authorization:"Bearer ".concat("O4JNnGx9X1K4ob_XXNycmYmw6aRg_301eB8ZGT-l8wZhzEq3W81ar_ywxC7rORwlLydvMMt_uvk2U9ulR2CRRWzJixf6wAurUiDU_O7_J1awtjZxj3HwWybvLCWAX3Yx"),Origin:"localhost",withCredentials:!0}})}var M=a(40),T=a.n(M);function Q(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!0),o=Object(m.a)(s,2),i=o[0],u=o[1],p=Object(n.useState)(!1),b=Object(m.a)(p,2),d=b[0],E=b[1],f=Object(n.useState)(!1),g=Object(m.a)(f,2),h=g[0],v=g[1];function _(t){if("1"===t.target.value){e.search(e.term,e.location),r(0),u(!0),E(!1),v(!1)}else if("2"===t.target.value){var a=l+21;e.nextPage(e.term,e.location,a),r(a),u(!1),E(!0),v(!1)}else{var n=l+20;e.nextPage(e.term,e.location,n),r(n),u(!1),E(!1),v(!0)}}var N=i?"is-current":"",y=d?"is-current":"",k=h?"is-current":"";return c.a.createElement("div",{className:T.a.pagination},c.a.createElement("nav",{className:"pagination",role:"navigation","aria-label":"pagination"},c.a.createElement("ul",{className:"pagination-list"},c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link ".concat(N),"aria-label":"Page 1","aria-current":"page",value:"1",onClick:function(e){return _(e)}},"1")),c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link ".concat(y),"aria-label":"Goto page 2",value:"2",onClick:function(e){return _(e)}},"2")),c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link ".concat(k),"aria-label":"Goto page 3",value:"3",onClick:function(e){return _(e)}},"3")))))}function Y(){var e=f()(),t=e.location,a=e.history,l=new URLSearchParams(t.search),r=l.get("find_desc"),s=l.get("find_loc"),o=(l.get("price"),l.get("radius"),l.get("offset"),function(e,t){var a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],r=c[1],s=Object(n.useState)(),o=Object(m.a)(s,2),i=o[0],u=o[1],p=Object(n.useState)({term:e,location:t}),b=Object(m.a)(p,2),d=b[0],E=b[1];return Object(n.useEffect)((function(){r([]),function(){var e=Object(w.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("/businesses/search",d);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a.businesses),u(a.total),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[d]),[l,i,d,E]}(r,s)),i=Object(m.a)(o,4),u=i[0],p=i[1],b=i[2],d=i[3];function E(e,t){var n=encodeURI(e),c=encodeURI(t);a.push("/search?find_desc=".concat(n,"&find_loc=").concat(c)),d({term:e,location:t})}function g(e){e.preventDefault()}return r&&s||a.push("/"),c.a.createElement("div",null,c.a.createElement(y,{term:r,location:s,search:E}),c.a.createElement(x,{term:b.term,location:b.location,amountResults:p,shownResults:u?u.length:0,searchWithFilter:function(e,t,n){var c=encodeURI(e),l=encodeURI(s),r=n;a.push("/search?find_desc=".concat(c,"&find_loc=").concat(l,"&price=").concat(r)),d({term:e,location:t,price:n})},searchWithRadiusFilter:function(e,t,n){var c=encodeURI(e),l=encodeURI(s),r=n;a.push("/search?find_desc=".concat(c,"&find_loc=").concat(l,"&radius=").concat(r)),d({term:e,location:t,radius:n})},search:E,handleSubmit:g}),c.a.createElement(z,{businesses:u,handleSubmit:g}),c.a.createElement(Q,{nextPage:function(e,t,n){var c=encodeURI(e),l=encodeURI(s),r=n;a.push("/search?find_desc=".concat(c,"&find_loc=").concat(l,"&offset=").concat(r)),d({term:e,location:t,offset:n})},search:E,term:b.term,location:b.location}))}var Z=a(5),K=a.n(Z);function V(e){return{value:e}}function ee(){return c.a.createElement("div",{className:K.a.body},c.a.createElement(g.b,{to:"/"}," ",c.a.createElement("img",{src:o.a,className:K.a.logo,alt:"logo"})),c.a.createElement("div",{className:K.a["parent-block"]},c.a.createElement("p",{className:K.a.paragraph},"How many are going to eat?"),c.a.createElement("div",{classNameName:K.a.block},c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),value:"2",onClick:function(e){return V("2")}},"2")," "),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("3")},value:"3"},"3")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("4")},value:"4"},"4")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("5")},value:"5"},"5")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("6")},value:"6"},"6")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("7")},value:"7"},"7")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("8")},value:"8"},"8")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("9")},value:"9"},"9")),c.a.createElement(g.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(K.a["select-button"]),onClick:function(e){return V("10")},value:"10"},"10")))))}var te=a(19),ae=a.n(te);function ne(){return c.a.createElement("div",{className:ae.a.body},c.a.createElement(g.b,{to:"/"},"  ",c.a.createElement("img",{src:o.a,className:ae.a.logo,alt:"logo"})," "),c.a.createElement("div",{className:ae.a.block},c.a.createElement("p",{className:ae.a.paragraph},"Click to get started!"),c.a.createElement(g.b,{to:"/Home"}," ",c.a.createElement("button",{className:"button is-info is-rounded ".concat(ae.a["start-button"])},"Let's Eat!"))))}var ce=a(13),le=a(14),re=a(16),se=a(15),oe=function(e){Object(re.a)(a,e);var t=Object(se.a)(a);function a(){return Object(ce.a)(this,a),t.apply(this,arguments)}return Object(le.a)(a,[{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("h3",null,"Sign Up"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"First name"),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"First name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Last name"),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email address"),c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password"})),c.a.createElement(g.b,{to:"/people"}," ",c.a.createElement("button",{type:"submit",className:"button"},"Sign Up")),c.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",c.a.createElement("a",{href:"#"},"sign in?")))}}]),a}(n.Component),ie=function(e){Object(re.a)(a,e);var t=Object(se.a)(a);function a(){return Object(ce.a)(this,a),t.apply(this,arguments)}return Object(le.a)(a,[{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("h3",null,"Login"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Username"),c.a.createElement("input",{type:"username",className:"form-control",placeholder:"Enter username"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),c.a.createElement(g.b,{to:"/people"}," ",c.a.createElement("button",{type:"submit",className:"button"},"Submit")),c.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",c.a.createElement("a",{href:"#"},"password?")))}}]),a}(n.Component),ue=(a(55),a(25)),me=a.n(ue),pe=[];function be(e){pe.push(document.getElementById("user1").value),console.log(pe),e.preventDefault()}function de(e){pe.push(document.getElementById("user2").value),console.log(pe),e.preventDefault()}function Ee(e){pe.push(document.getElementById("user3").value),console.log(pe),e.preventDefault()}function fe(e){pe.push(document.getElementById("user4").value),console.log(pe),e.preventDefault()}function ge(e){pe.push(document.getElementById("user5").value),console.log(pe),e.preventDefault()}function he(e){pe.push(document.getElementById("user6").value),console.log(pe),e.preventDefault()}function ve(e){pe.push(document.getElementById("user7").value),console.log(pe),e.preventDefault()}function _e(e){pe.push(document.getElementById("user8").value),console.log(pe),e.preventDefault()}function Ne(e){pe.push(document.getElementById("user9").value),console.log(pe),e.preventDefault()}function ye(e){pe.push(document.getElementById("user10").value),console.log(pe),e.preventDefault()}function ke(e){pe.push(document.getElementById("location").value),console.log(pe),e.preventDefault()}var Se=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:me.a.body},c.a.createElement("img",{src:o.a,className:me.a.logo,alt:"logo"}),c.a.createElement("p",{className:me.a.paragraph},"Enter specific food each person wants to eat (pizza, burgers, etc.):"),c.a.createElement("form",null,c.a.createElement("label",null,"User 1:",c.a.createElement("input",{type:"text",name:"user",id:"user1"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:be})),c.a.createElement("form",null,c.a.createElement("label",null,"User 2:",c.a.createElement("input",{type:"text",name:"user",id:"user2"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:de})),c.a.createElement("form",null,c.a.createElement("label",null,"User 3:",c.a.createElement("input",{type:"text",name:"user",id:"user3"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:Ee})),c.a.createElement("form",null,c.a.createElement("label",null,"User 4:",c.a.createElement("input",{type:"text",name:"user",id:"user4"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:fe})),c.a.createElement("form",null,c.a.createElement("label",null,"User 5:",c.a.createElement("input",{type:"text",name:"user",id:"user5"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:ge})),c.a.createElement("form",null,c.a.createElement("label",null,"User 6:",c.a.createElement("input",{type:"text",name:"user",id:"user6"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:he})),c.a.createElement("form",null,c.a.createElement("label",null,"User 7:",c.a.createElement("input",{type:"text",name:"user",id:"user7"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:ve})),c.a.createElement("form",null,c.a.createElement("label",null,"User 8:",c.a.createElement("input",{type:"text",name:"user",id:"user8"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:_e})),c.a.createElement("form",null,c.a.createElement("label",null,"User 9:",c.a.createElement("input",{type:"text",name:"user",id:"user9"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:Ne})),c.a.createElement("form",null,c.a.createElement("label",null,"User 10:",c.a.createElement("input",{type:"text",name:"user",id:"user10"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Submit",onClick:ye})),c.a.createElement("form",null,c.a.createElement("label",null,"Location (city, state):",c.a.createElement("input",{type:"text",name:"location",id:"location"})),c.a.createElement("span",{id:"result"}," "),c.a.createElement("input",{type:"submit",value:"Finish",onClick:ke})))))},xe=(a(56),a(57),function(e){Object(re.a)(a,e);var t=Object(se.a)(a);function a(){return Object(ce.a)(this,a),t.apply(this,arguments)}return Object(le.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"Signup"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},c.a.createElement("div",{className:"container"},c.a.createElement(g.b,{className:"navbar-brand",to:"/sign-in"},"Eats"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(g.b,{className:"nav-link",to:"/sign-in"},"Login")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(g.b,{className:"nav-link",to:"/sign-up"},"Sign up")))))),c.a.createElement("div",{className:"auth-wrapper"},c.a.createElement("div",{className:"auth-inner"},c.a.createElement(v.Switch,null,c.a.createElement(v.Route,{exact:!0,path:"/",component:ie}),c.a.createElement(v.Route,{path:"/sign-in",component:ie}),c.a.createElement(v.Route,{path:"/sign-up",component:oe})))))}}]),a}(n.Component)),Oe=a(41),je=a.n(Oe),we=a(11),Re=a.n(we);var Ce=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:Re.a.block},c.a.createElement("img",{src:je.a,className:Re.a.logo,alt:"logo"}),c.a.createElement("p",{className:Re.a.paragraph},"Here's our restaurant recommendation:"),c.a.createElement("p",{className:Re.a.winner},"Duff's Famous Wings"),c.a.createElement("div",{className:Re.a["parent-block"]},c.a.createElement("a",{className:Re.a.restart,href:"https://eats442-2bcd2.web.app",target:"_blank",rel:"noopener noreferrer"},"Retake \u21bb"),c.a.createElement("a",{className:Re.a.menu,href:"https://static1.squarespace.com/static/52ddad0ae4b01d8ef4e51a2e/t/5eac9828c4b8ff78fae0348f/1588369460308/Amherst_TakeOut_Feb2020.pdf",target:"_blank",rel:"noopener noreferrer"},"Open Menu")))))};var Ue=function(){return c.a.createElement(v.Switch,null,c.a.createElement(v.Route,{path:"/search",component:Y}),c.a.createElement(v.Route,{exact:!0,path:"/",component:ne}),c.a.createElement(v.Route,{path:"/landing",component:h}),c.a.createElement(v.Route,{path:"/people",component:ee}),c.a.createElement(v.Route,{path:"/text",component:Se}),c.a.createElement(v.Route,{path:"/sign-up",component:oe}),c.a.createElement(v.Route,{path:"/sign-in",component:ie}),c.a.createElement(v.Route,{path:"/Home",component:xe}),c.a.createElement(v.Route,{path:"/Finale",component:Ce}))};a(58);r.a.render(c.a.createElement(g.a,null,c.a.createElement(Ue,null)),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.2c867468.chunk.js.map