(this["webpackJsonptwitter-hashtagfinder"]=this["webpackJsonptwitter-hashtagfinder"]||[]).push([[0],{67:function(e,t,s){},68:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(33),i=s.n(n),o=s(4),r=s(12),l=s.n(r),d=(s(67),s(68),s.p+"static/media/logo-white.fd3cc605.svg"),j=s.p+"static/media/logo-pink.96503fc8.svg",b=s.p+"static/media/icon-info-circle.04710de8.svg",u=s.p+"static/media/icon-user-alt.525f1ff1.svg",h=s.p+"static/media/icon-home.c39cad5e.svg",m=s(6),O=s(0);var x=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>600?c(!0):c(!1)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:s?"topUnfixed":"topFixed",children:[Object(O.jsx)("img",{src:0==s?d:s>0?j:void 0,alt:"Logo",className:"logo"}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(m.b,{to:"/About",className:"linkRoute",children:Object(O.jsxs)("button",{className:"aboutButton",children:[Object(O.jsx)("img",{src:b,alt:"logoSobre",className:"buttonLogo"}),Object(O.jsx)("span",{className:"buttonText",children:"Sobre"})]})}),Object(O.jsx)(m.b,{to:"/login",className:"linkRoute",children:Object(O.jsxs)("button",{className:"loginButton",children:[Object(O.jsx)("img",{src:u,alt:"logoLogin",className:"buttonLogo"}),Object(O.jsx)("span",{className:"buttonText",children:"Login"})]})})]})]})})};s(74);var g,p=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"containerBody"}),Object(O.jsx)("footer",{className:"footer",children:"@NewTab Academy 2021. Todos os direitos reservados"})]})},f=s(44),v=s(40),N=s(11).a.div(g||(g=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 287px;\n  width: 287px;\n  background-color: none;\n  color: #fff;\n  margin: 0 15px; \n  font-size: 4em;\n  border: 0px solid black;\n  border-radius: 21px;\n  box-shadow: 0px 9px 27px #5538EE29;\n  flex-direction: row;\n  cursor: pointer;\n"]))),A=s.p+"static/media/icon-search.57ca2231.svg",S=[{width:1,itemsToShow:1},{width:550,itemsToShow:2},{width:900,itemsToShow:3},{width:1200,itemsToShow:5}];var k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),d=r[0],j=r[1],b=Object(a.useState)(null),u=Object(o.a)(b,2),h=u[0],m=u[1],g=Object(a.useState)(null),v=Object(o.a)(g,2),k=v[0],w=v[1],y=Object(a.useState)(""),B=Object(o.a)(y,2),T=(B[0],B[1]),D=Object(a.useState)(!1),C=Object(o.a)(D,2),E=C[0],L=C[1],H=Object(a.useState)(""),I=Object(o.a)(H,2),M=I[0],R=I[1],F=Object(a.useState)([]),P=Object(o.a)(F,2),U=P[0],_=P[1],q=Object(a.useState)([]),z=Object(o.a)(q,2),K=z[0],W=z[1],J=d.length;function G(){var e=document.getElementById("enter").value.replace(/#/g,"");l.a.get("https://cors.bridged.cc/https://api.twitter.com/1.1/search/tweets.json?q="+e+"&lang=pt&result_type=recent",{method:"GET",headers:{Authorization:"Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"}}).then((function(e){_(e.data.statuses)}))}function Q(){var e=document.getElementById("enter").value.replace(/#/g,"");l.a.get("https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query="+e+"%20has:images&max_results=50&expansions=author_id,attachments.media_keys&media.fields=type,url,width,height",{method:"GET",headers:{Authorization:"Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"}}).then((function(e){W(e.data.includes.media)}))}return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"homepage",children:[Object(O.jsxs)("header",{className:"banner",children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"textBox",children:[Object(O.jsx)("h1",{className:"title",children:" Encontre hashtags de maneira f\xe1cil "}),Object(O.jsx)("p",{className:"subtitle",children:" Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo "})]})]}),Object(O.jsx)("div",{className:"containerInput",children:Object(O.jsx)("div",{className:"inputDiv",children:Object(O.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),0==d.length)m("Campo obrigat\xf3rio!");else{m(null),console.log("chama fun\xe7\xe3o post"),console.log("CONTE\xdaDO DIGITADO",d);var t=d;G(t.replace(/#/g,"")),Q(t.replace(/#/g,"")),T(t.replace(/#/g,"")),j("")}"Enter"===e.key&&(G(),Q(),function(){var e=document.getElementById("enter").value.replace(/#/g,""),t=new Date,a=String(t.getDate()).padStart(2,"0"),c=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear(),i=a+"/"+c+"/"+n,o=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),l=o+":"+r,d=s(12);t=JSON.stringify({records:[{fields:{Squad:"52",Hashtag:e,Data:i,Hora:l}}]});d({method:"post",url:"https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas",headers:{Authorization:"Bearer key2CwkHb0CKumjuM","Content-Type":"application/json",Cookie:"brw=brwT6txT287hmhYVt"},data:t}).then((function(e){})).catch((function(e){console.log(e)}))}())},children:[Object(O.jsx)("img",{src:A,alt:"logoSearch",class:"logoSearch"}),Object(O.jsx)("input",{id:"enter",name:"searchBar",type:"text",className:"searchBar",placeholder:"Buscar...",maxlength:"20","data-ls-module":"charCounter",value:d,onChange:function(e){j(e.target.value),n(e.target.value),J<20&&(w(null),console.log(k)),J>=19&&(w("Limite de caracteres atingido!"),console.log(k))}})]})})}),Object(O.jsx)("div",{className:"validationLimit",children:k&&Object(O.jsx)("p",{className:"errorMessage",children:k})}),Object(O.jsx)("div",{className:"validationError",children:h&&Object(O.jsx)("p",{className:"errorMessage",children:h})}),Object(O.jsxs)("h2",{className:"searchTitle",children:["Exibindo os 10 resultados mais recentes de #",c]}),Object(O.jsx)("div",{id:"resultPostsText",className:"resultPostsText",children:Object(O.jsx)(f.a,{className:"carousel",breakPoints:S,children:K.slice(0,10).map((function(e,t){return Object(O.jsx)(N,{children:Object(O.jsxs)("div",{className:"imageContainer",children:[Object(O.jsx)("div",{id:"imageContent"+t,className:"imageContent",onClick:function(e){return function(e){var t=e.target.id;R(document.getElementById(t).style.backgroundImage.replace('url("',"").replace('")',"")),L(!0)}(e)},style:{backgroundImage:"url(".concat(e.url,")")}}),Object(O.jsxs)("div",{className:"textContent",children:[Object(O.jsx)("p",{children:"Postado por: @"}),Object(O.jsx)("p",{children:"@username"})]})]},t)})}))})}),Object(O.jsx)("div",{id:"resultPostsText",className:"resultPostsText",children:Object(O.jsx)("div",{className:"resultPosts",children:Object(O.jsx)("div",{className:"postContainer",children:U.slice(0,10).map((function(e,t){return Object(O.jsxs)("div",{className:"postBox",children:[Object(O.jsx)("div",{className:"divImgTweet",children:Object(O.jsx)("img",{className:"postImg",style:{backgroundImage:"url(".concat(e.user.profile_image_url,")")}})}),Object(O.jsxs)("div",{className:"textBoxTweet",children:[Object(O.jsxs)("div",{className:"userBoxTweet",children:[Object(O.jsx)("div",{className:"postUser",children:e.user.name}),Object(O.jsxs)("div",{className:"postUsername",children:["@",e.user.screen_name]})]}),Object(O.jsx)("div",{className:"postText",children:e.text}),Object(O.jsx)("a",{className:"postLink",href:"https://twitter.com/"+e.user.screen_name+"/status/"+e.id_str,target:"_blank",rel:"noreferrer",children:"Ver mais no Twitter"})]})]},t)}))})})})]}),Object(O.jsx)("div",{className:"backdrop",style:{display:E?"block":"none"},onClick:function(){return L(!1)}}),Object(O.jsx)("div",{className:"modalContainer",style:{display:E?"block":"none"},children:Object(O.jsx)("div",{className:"modalContent",style:{backgroundImage:"url(".concat(M,")")},children:Object(O.jsx)("div",{className:"closeImg",style:{display:E?"block":"none"},onClick:function(){return L(!1)},children:"\xd7"})})}),Object(O.jsx)(p,{})]})},w=(s(75),s.p+"static/media/login-bg.f2411a57.jpg"),y=s(3);var B=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(null),i=Object(o.a)(n,2),r=i[0],j=i[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),x=u[0],g=u[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),v=f[0],N=f[1],A=Object(y.f)();function S(e){return 0==x.length?(c("Campo obrigat\xf3rio!"),e.preventDefault(),!1):0==v.length?(c(""),j("Campo obrigat\xf3rio!"),e.preventDefault(),!1):(c(null),j(null),console.log("CREDENCIAIS DE USUARIO =>","USER:",x,"SENHA:",v),void l.a.get("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=3&view=Grid%20view&filterByFormula=(AND({Email}=%22"+x+"%22,{Senha}=%22"+v+"%22))",{headers:{Authorization:"Bearer key2CwkHb0CKumjuM"}}).then((function(t){return 0==t.data.records.length?(alert("Email e/ou Senha inv\xe1lidos"),e.preventDefault(),!1):(console.log(t.data.records.length),console.log("chegou aqui"),A.push("/Search"))})).catch((function(){console.log("deu errado")})))}return Object(O.jsxs)("div",{className:"containerLogin",children:[Object(O.jsx)("img",{src:w,className:"backgroundImg"}),Object(O.jsxs)("div",{className:"headerLogin",children:[Object(O.jsx)("img",{src:d,className:"logo"}),Object(O.jsx)(m.b,{to:"/",children:Object(O.jsxs)("button",{className:"butHome",children:[Object(O.jsx)("img",{src:h,className:"butIcon"}),Object(O.jsx)("span",{className:"butTitle",children:"Home"})]})})]}),Object(O.jsxs)("div",{className:"loginBox",children:[Object(O.jsx)("h1",{className:"titleBox",children:"Login"}),Object(O.jsxs)("form",{className:"formLogin",onKeyPress:function(e){"Enter"===e.key&&S()},children:[Object(O.jsx)("input",{className:"itensLogin",placeholder:"Usu\xe1rio",value:x,onChange:function(e){g(e.target.value)}}),s&&Object(O.jsx)("p",{className:"invalidUser",children:s}),Object(O.jsx)("input",{className:"itensLogin",type:"password",placeholder:"Senha",value:v,onChange:function(e){N(e.target.value)}}),r&&Object(O.jsx)("p",{className:"invalidUser",children:r})]}),Object(O.jsx)("button",{className:"buttonLogin",type:"submit",onClick:S,children:" Acessar "})]})]})},T=s(41),D=s(42),C=s(45),E=s(43);s(76),s(77);var L=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>600?c(!0):c(!1)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:s?"topUnfixed":"topFixed",children:[Object(O.jsx)("img",{src:0==s?d:s>0?j:void 0,alt:"Logo",className:"logo"}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(m.b,{to:"/",className:"linkRoute",children:Object(O.jsxs)("button",{className:"aboutButton",children:[Object(O.jsx)("img",{src:h,alt:"logoSobre",className:"logoSobre"}),Object(O.jsx)("span",{children:"Home"})]})}),Object(O.jsx)(m.b,{to:"/login",className:"linkRoute",children:Object(O.jsxs)("button",{className:"loginButton",children:[Object(O.jsx)("img",{src:u,alt:"logoLogin",className:"logoLogin"}),Object(O.jsx)("span",{children:"Login"})]})})]})]})})},H=s.p+"static/media/about-illustration.b1365d34.svg",I=s.p+"static/media/icon-github.9939c646.svg",M=s.p+"static/media/icon-envelope.552d69e3.svg",R=s.p+"static/media/icon-linkedin.c0c953a6.svg",F=function(e){Object(C.a)(s,e);var t=Object(E.a)(s);function s(){var e;Object(T.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={aboutText:"",list:[]},e}return Object(D.a)(s,[{key:"componentDidMount",value:function(){this.getSobre(),this.getSquad()}},{key:"getSobre",value:function(){var e=this;fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='52')",{}).then((function(e){return e.json()})).then((function(t){e.setState({aboutText:t.records[0].fields.Sobre})}))}},{key:"getSquad",value:function(){var e=this;fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='52')",{}).then((function(e){return e.json()})).then((function(t){e.setState({list:t.records}),console.log(t)}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"aboutWrapper",children:[Object(O.jsxs)("div",{className:"aboutHeader",children:[Object(O.jsx)("section",{className:"header",children:Object(O.jsx)(L,{})}),Object(O.jsx)("h1",{className:"aboutProject",children:"Sobre o projeto"})]}),Object(O.jsxs)("div",{className:"aboutText",children:[Object(O.jsxs)("div",{className:"aboutAside",children:[Object(O.jsx)("h3",{children:"O que \xe9"}),Object(O.jsx)("p",{children:this.state.aboutText})]}),Object(O.jsx)("img",{src:H,alt:"Logo",className:"aboutSvg"})]}),Object(O.jsx)("h1",{className:"aboutWe",children:"Quem somos n\xf3s"}),Object(O.jsx)("div",{className:"wrapperPhoto",children:Object(O.jsx)("div",{className:"aboutTeam",children:this.state.list.map((function(e,t){if("Leonardo"!=e.fields.Nome)return Object(O.jsx)("div",{className:"aboutCard",children:Object(O.jsxs)("div",{className:"aboutTeamWrapper",children:[Object(O.jsx)("div",{className:"aboutPhoto",children:Object(O.jsx)("img",{className:"photoAbout",src:e.fields.Imagem[0].url})}),Object(O.jsx)("h2",{className:"nameAbout",children:e.fields.Nome}),Object(O.jsx)("p",{className:"descriptionAbout",children:e.fields.Descri\u00e7\u00e3o}),Object(O.jsxs)("div",{className:"aboutSocials",children:[Object(O.jsx)("a",{href:e.fields.Github,children:Object(O.jsx)("img",{src:I,alt:"GitHub",className:"iconAbout"})}),Object(O.jsx)("a",{href:e.fields.Email,children:Object(O.jsx)("img",{src:M,alt:"e-mail",className:"iconAbout"})}),Object(O.jsx)("a",{href:e.fields.LinkedIn,children:Object(O.jsx)("img",{src:R,alt:"Linkedin",className:"iconAbout"})})]})]})},"person-card"+t)}))})}),Object(O.jsx)("footer",{className:"footer",children:"@NewTab Academy 2021. Todos os direitos reservados"})]})}}]),s}(c.a.Component),P=s(17),U=(s(78),s.p+"static/media/icon-home.c39cad5e.svg"),_=s.p+"static/media/icon-power-off.82d053be.svg";var q=function(){var e=Object(a.useState)(Object(P.a)(Array(100)).map((function(e,t){return t}))),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){l.a.get("https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB?filterByFormula=%7BSquad%7D+%3D+'52'&maxRecords=50&  pageSize=50&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Hora&sort%5B1%5D%5Bdirection%5D=asc&   timeZone=America/Sao_Paulo&api_key=key2CwkHb0CKumjuM",{headers:{Authorization:"Bearer key2CwkHb0CKumjuM"}}).then((function(e){var t=e.data.records.map((function(e){return{squad:"52",hashtag:e.fields.Hashtag,data:e.fields.Data,hora:e.fields.Hora}}));c(t),console.log(t)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"containerSearch",children:[Object(O.jsx)("img",{src:w,className:"backgroundImg"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{class:"header",children:[Object(O.jsxs)("p",{class:"homeTitle",children:["hashtag",Object(O.jsx)("strong",{children:"finder"})]}),Object(O.jsx)(m.b,{to:"/",className:"linkRoute",children:Object(O.jsxs)("button",{class:"homeButton",children:[Object(O.jsx)("img",{src:U,alt:"home-icon"}),"HOME"]})}),Object(O.jsx)(m.b,{to:"/",className:"linkRoute",children:Object(O.jsxs)("button",{class:"exitButton",children:[Object(O.jsx)("img",{src:_,alt:"home-icon"}),"SAIR"]})})]}),Object(O.jsx)("div",{class:"containerTitle",children:Object(O.jsx)("h1",{children:"Buscas realizadas"})}),Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Hashtag"}),Object(O.jsx)("th",{children:"Data"}),Object(O.jsx)("th",{children:"Hora"})]})}),Object(O.jsx)("div",{itemHeight:50,loadMoreItems:function(){console.log("fetchItems");var e=Object(P.a)(Array(100)).map((function(e,t){return s.length+t}));return new Promise((function(t){setTimeout((function(){c([].concat(Object(P.a)(s),Object(P.a)(e))),t()}),100)}))},children:s.map((function(e,t){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.hashtag}),Object(O.jsx)("td",{children:e.data}),Object(O.jsx)("td",{children:e.hora})]})})})})}))})]})]})]})})};i.a.render(Object(O.jsx)(m.a,{children:Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{path:"/",component:k,exact:!0}),Object(O.jsx)(y.a,{path:"/login",component:B}),Object(O.jsx)(y.a,{path:"/About",component:F}),Object(O.jsx)(y.a,{path:"/search",component:q})]})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.dd3fe0c5.chunk.js.map