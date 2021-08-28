var t=Object.defineProperty,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,e=(n,s,a)=>s in n?t(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,o=(t,o)=>{for(var p in o||(o={}))s.call(o,p)&&e(t,p,o[p]);if(n)for(var p of n(o))a.call(o,p)&&e(t,p,o[p]);return t};import{V as p,h as l,a as c,c as r,e as i,g as u,w as d,f as k,b as g,i as m}from"./app.9967936d.js";var v={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,mergeProps:n,createVNode:s,createElementVNode:a,openBlock:e,createElementBlock:l}=p;const{defineComponent:c}=p,{reactive:r}=p,i=c({setup(t,{expose:n}){n();const s={options:r({width:"800px",height:"450px",color:"#409eff",title:"",src:"https://go.dreamwq.com/videos/IronMan.mp4",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!1,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0}),reactive:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});return o({render:function(o,p){const c=t("vue3VideoPlay");return e(),l("div",null,[a("div",null,[s(c,n(o.options,{poster:"https://go.dreamwq.com/videos/ironMan.jpg"}),null,16)])])}},i)}(),"render-demo-1":function(){const{resolveComponent:t,mergeProps:n,createVNode:s,createElementVNode:a,openBlock:e,createElementBlock:l}=p;const{defineComponent:c}=p,{reactive:r}=p,i=c({setup(t,{expose:n}){n();const s={options:r({width:"400px",height:"220px",color:"#409eff",speed:!1,title:"",src:"https://go.dreamwq.com/videos/IronMan.mp4"}),reactive:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});return o({render:function(o,p){const c=t("vue3VideoPlay");return e(),l("div",null,[a("div",null,[s(c,n(o.options,{poster:"https://xdlumia.oss-cn-beijing.aliyuncs.com/videos/02.jpg"}),null,16)])])}},i)}(),"render-demo-2":function(){const{resolveComponent:t,mergeProps:n,createVNode:s,createElementVNode:a,openBlock:e,createElementBlock:l}=p;const{defineComponent:c}=p,{reactive:r}=p,i=c({setup(t,{expose:n}){n();const s={options:r({width:"400px",height:"220px",color:"#409eff",control:!1,title:"",src:"https://go.dreamwq.com/videos/IronMan.mp4"}),reactive:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});return o({render:function(o,p){const c=t("vue3VideoPlay");return e(),l("div",null,[a("div",null,[s(c,n(o.options,{poster:"https://xdlumia.oss-cn-beijing.aliyuncs.com/videos/02.jpg"}),null,16)])])}},i)}(),"render-demo-3":function(){const{resolveComponent:t,createVNode:n,createElementVNode:s,openBlock:a,createElementBlock:e}=p;const{defineComponent:l}=p,{reactive:c}=p,r=l({setup(t,{expose:n}){n();const s={options:c({src:"https://go.dreamwq.com/videos/IronMan.mp4",poster:""}),onPlay:t=>{console.log("播放")},onPause:t=>{console.log(t,"暂停")},onTimeupdate:t=>{console.log(t,"时间更新")},onCanplay:t=>{console.log(t,"可以播放")},reactive:c};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});return o({render:function(o,p){const l=t("vue3VideoPlay");return a(),e("div",null,[s("div",null,[n(l,{width:"800px",title:"钢铁侠",src:o.options.src,poster:o.options.poster,onPlay:o.onPlay,onPause:o.onPause,onTimeupdate:o.onTimeupdate,onCanplay:o.onCanplay},null,8,["src","poster","onPlay","onPause","onTimeupdate","onCanplay"])])])}},r)}()}};const h='{"title":"示例 主页","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"开始使用","slug":"开始使用"},{"level":2,"title":"举个例子","slug":"举个例子"},{"level":2,"title":"事件示例","slug":"事件示例"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"快捷键说明","slug":"快捷键说明"}],"relativePath":"guide/install.md","lastUpdated":1630114528627}',y=k('',18),f=g("div",{class:"language-html"},[g("pre",null,[g("code",null,[g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n    "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("vue3VideoPlay")]),m(),g("span",{class:"token attr-name"},"v-bind"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("options"),g("span",{class:"token punctuation"},'"')]),m(),g("span",{class:"token attr-name"},"poster"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},"'"),m("https://go.dreamwq.com/videos/ironMan.jpg"),g("span",{class:"token punctuation"},"'")]),g("span",{class:"token punctuation"},"/>")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("script")]),m(),g("span",{class:"token attr-name"},"setup"),m(),g("span",{class:"token attr-name"},"lang"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("ts"),g("span",{class:"token punctuation"},'"')]),g("span",{class:"token punctuation"},">")]),g("span",{class:"token script"},[g("span",{class:"token language-javascript"},[m("\n"),g("span",{class:"token keyword"},"import"),m(),g("span",{class:"token punctuation"},"{"),m(" reactive "),g("span",{class:"token punctuation"},"}"),m(),g("span",{class:"token keyword"},"from"),m(),g("span",{class:"token string"},"'vue'"),g("span",{class:"token punctuation"},";"),m("\n\n"),g("span",{class:"token keyword"},"const"),m(" options "),g("span",{class:"token operator"},"="),m(),g("span",{class:"token function"},"reactive"),g("span",{class:"token punctuation"},"("),g("span",{class:"token punctuation"},"{"),m("\n  width"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"'800px'"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放器高度"),m("\n  height"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"'450px'"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放器高度"),m("\n  color"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"#409eff"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//主题色"),m("\n  title"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"''"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频名称"),m("\n  src"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"https://go.dreamwq.com/videos/IronMan.mp4"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频源"),m("\n  muted"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//静音"),m("\n  webFullScreen"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m("\n  speedRate"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token punctuation"},"["),g("span",{class:"token string"},'"0.75"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},'"1.0"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},'"1.25"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},'"1.5"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},'"2.0"'),g("span",{class:"token punctuation"},"]"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放倍速"),m("\n  autoPlay"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//自动播放"),m("\n  loop"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//循环播放"),m("\n  mirror"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//镜像画面"),m("\n  ligthOff"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m("  "),g("span",{class:"token comment"},"//关灯模式"),m("\n  volume"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token number"},"0.3"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//默认音量大小"),m("\n  control"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"true"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//是否显示控制器"),m("\n"),g("span",{class:"token punctuation"},"}"),g("span",{class:"token punctuation"},")"),m("\n")])]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("script")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("style")]),m(),g("span",{class:"token attr-name"},"scoped"),g("span",{class:"token punctuation"},">")]),g("span",{class:"token style"},[g("span",{class:"token language-css"},"\n")]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("style")]),g("span",{class:"token punctuation"},">")]),m("\n\n")])])],-1),x=g("p",null,[m("可以通过"),g("code",null,"props"),m("的"),g("code",null,"speed"),m("开启或关闭进度条功能,")],-1),b=g("div",{class:"language-html"},[g("pre",null,[g("code",null,[g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n    "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("vue3VideoPlay")]),m(),g("span",{class:"token attr-name"},"v-bind"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("options"),g("span",{class:"token punctuation"},'"')]),m(),g("span",{class:"token attr-name"},"poster"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},"'"),m("https://xdlumia.oss-cn-beijing.aliyuncs.com/videos/02.jpg"),g("span",{class:"token punctuation"},"'")]),g("span",{class:"token punctuation"},"/>")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("script")]),m(),g("span",{class:"token attr-name"},"setup"),m(),g("span",{class:"token attr-name"},"lang"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("ts"),g("span",{class:"token punctuation"},'"')]),g("span",{class:"token punctuation"},">")]),g("span",{class:"token script"},[g("span",{class:"token language-javascript"},[m("\n"),g("span",{class:"token keyword"},"import"),m(),g("span",{class:"token punctuation"},"{"),m(" reactive "),g("span",{class:"token punctuation"},"}"),m(),g("span",{class:"token keyword"},"from"),m(),g("span",{class:"token string"},"'vue'"),g("span",{class:"token punctuation"},";"),m("\n\n"),g("span",{class:"token keyword"},"const"),m(" options "),g("span",{class:"token operator"},"="),m(),g("span",{class:"token function"},"reactive"),g("span",{class:"token punctuation"},"("),g("span",{class:"token punctuation"},"{"),m("\n  width"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"'400px'"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放器高度"),m("\n  height"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"'220px'"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放器高度"),m("\n  color"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"#409eff"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//主题色"),m("\n  speed"),g("span",{class:"token operator"},":"),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//关闭进度条拖动"),m("\n  title"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"''"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频名称"),m("\n  src"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"https://go.dreamwq.com/videos/IronMan.mp4"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频源"),m("\n"),g("span",{class:"token punctuation"},"}"),g("span",{class:"token punctuation"},")"),m("\n")])]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("script")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("style")]),m(),g("span",{class:"token attr-name"},"scoped"),g("span",{class:"token punctuation"},">")]),g("span",{class:"token style"},[g("span",{class:"token language-css"},"\n")]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("style")]),g("span",{class:"token punctuation"},">")]),m("\n\n")])])],-1),w=g("p",null,[m("还可以通过"),g("code",null,"props"),m("的"),g("code",null,"control"),m("属性 来控制是否显示控制器")],-1),q=g("div",null,[m("通过"),g("code",null,"control"),m(" 来控制是否显示控制器")],-1),P=g("div",{class:"language-vue"},[g("pre",null,[g("code",null,[g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n    "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("vue3VideoPlay")]),m(),g("span",{class:"token attr-name"},"v-bind"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("options"),g("span",{class:"token punctuation"},'"')]),m(),g("span",{class:"token attr-name"},"poster"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},"'"),m("https://xdlumia.oss-cn-beijing.aliyuncs.com/videos/02.jpg"),g("span",{class:"token punctuation"},"'")]),g("span",{class:"token punctuation"},"/>")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("script")]),m(),g("span",{class:"token attr-name"},"setup"),m(),g("span",{class:"token attr-name"},"lang"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("ts"),g("span",{class:"token punctuation"},'"')]),g("span",{class:"token punctuation"},">")]),g("span",{class:"token script"},[g("span",{class:"token language-javascript"},[m("\n"),g("span",{class:"token keyword"},"import"),m(),g("span",{class:"token punctuation"},"{"),m(" reactive "),g("span",{class:"token punctuation"},"}"),m(),g("span",{class:"token keyword"},"from"),m(),g("span",{class:"token string"},"'vue'"),g("span",{class:"token punctuation"},";"),m("\n\n"),g("span",{class:"token keyword"},"const"),m(" options "),g("span",{class:"token operator"},"="),m(),g("span",{class:"token function"},"reactive"),g("span",{class:"token punctuation"},"("),g("span",{class:"token punctuation"},"{"),m("\n  width"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"'400px'"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放器高度"),m("\n  height"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"'220px'"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//播放器高度"),m("\n  color"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"#409eff"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//主题色"),m("\n  control"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token boolean"},"false"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//是否显示控制器"),m("\n  title"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"''"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频名称"),m("\n  src"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"https://go.dreamwq.com/videos/IronMan.mp4"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频源"),m("\n"),g("span",{class:"token punctuation"},"}"),g("span",{class:"token punctuation"},")"),m("\n")])]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("script")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("style")]),m(),g("span",{class:"token attr-name"},"scoped"),g("span",{class:"token punctuation"},">")]),g("span",{class:"token style"},[g("span",{class:"token language-css"},"\n")]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("style")]),g("span",{class:"token punctuation"},">")]),m("\n\n")])])],-1),_=g("h2",{id:"事件示例"},[g("a",{class:"header-anchor",href:"#事件示例","aria-hidden":"true"},"#"),m(" 事件示例")],-1),j=g("div",null,[g("code",null,"vue3-video-play"),m(" 支持原生"),g("code",null,"video"),m("所有事件。")],-1),C=g("div",{class:"language-vue"},[g("pre",null,[g("code",null,[g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n      "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("vue3VideoPlay")]),m(" \n      "),g("span",{class:"token attr-name"},"width"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("800px"),g("span",{class:"token punctuation"},'"')]),m("\n      "),g("span",{class:"token attr-name"},"title"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("钢铁侠"),g("span",{class:"token punctuation"},'"')]),m("\n      "),g("span",{class:"token attr-name"},":src"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("options.src"),g("span",{class:"token punctuation"},'"')]),m("\n      "),g("span",{class:"token attr-name"},":poster"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("options.poster"),g("span",{class:"token punctuation"},'"')]),m("\n      "),g("span",{class:"token attr-name"},"@play"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("onPlay"),g("span",{class:"token punctuation"},'"')]),m("\n      "),g("span",{class:"token attr-name"},"@pause"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("onPause"),g("span",{class:"token punctuation"},'"')]),m(" \n      "),g("span",{class:"token attr-name"},"@timeupdate"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("onTimeupdate"),g("span",{class:"token punctuation"},'"')]),m(" \n      "),g("span",{class:"token attr-name"},"@canplay"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("onCanplay"),g("span",{class:"token punctuation"},'"')]),m(),g("span",{class:"token punctuation"},"/>")]),m("\n  "),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("div")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("template")]),g("span",{class:"token punctuation"},">")]),m("\n\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("script")]),m(),g("span",{class:"token attr-name"},"setup"),m(),g("span",{class:"token attr-name"},"lang"),g("span",{class:"token attr-value"},[g("span",{class:"token punctuation attr-equals"},"="),g("span",{class:"token punctuation"},'"'),m("ts"),g("span",{class:"token punctuation"},'"')]),g("span",{class:"token punctuation"},">")]),g("span",{class:"token script"},[g("span",{class:"token language-javascript"},[m("\n"),g("span",{class:"token keyword"},"import"),m(),g("span",{class:"token punctuation"},"{"),m(" reactive "),g("span",{class:"token punctuation"},"}"),m(),g("span",{class:"token keyword"},"from"),m(),g("span",{class:"token string"},"'vue'"),g("span",{class:"token punctuation"},";"),m("\n\n"),g("span",{class:"token keyword"},"const"),m(" options "),g("span",{class:"token operator"},"="),m(),g("span",{class:"token function"},"reactive"),g("span",{class:"token punctuation"},"("),g("span",{class:"token punctuation"},"{"),m("\n  src"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},'"https://go.dreamwq.com/videos/IronMan.mp4"'),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//视频源"),m("\n  poster"),g("span",{class:"token operator"},":"),m(),g("span",{class:"token string"},"''"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token comment"},"//封面"),m("\n"),g("span",{class:"token punctuation"},"}"),g("span",{class:"token punctuation"},")"),m("\n"),g("span",{class:"token keyword"},"const"),m(),g("span",{class:"token function-variable function"},"onPlay"),m(),g("span",{class:"token operator"},"="),m(),g("span",{class:"token punctuation"},"("),g("span",{class:"token parameter"},"ev"),g("span",{class:"token punctuation"},")"),m(),g("span",{class:"token operator"},"=>"),m(),g("span",{class:"token punctuation"},"{"),m("\n  console"),g("span",{class:"token punctuation"},"."),g("span",{class:"token function"},"log"),g("span",{class:"token punctuation"},"("),g("span",{class:"token string"},"'播放'"),g("span",{class:"token punctuation"},")"),m("\n"),g("span",{class:"token punctuation"},"}"),m("\n"),g("span",{class:"token keyword"},"const"),m(),g("span",{class:"token function-variable function"},"onPause"),m(),g("span",{class:"token operator"},"="),m(),g("span",{class:"token punctuation"},"("),g("span",{class:"token parameter"},"ev"),g("span",{class:"token punctuation"},")"),m(),g("span",{class:"token operator"},"=>"),m(),g("span",{class:"token punctuation"},"{"),m("\n  console"),g("span",{class:"token punctuation"},"."),g("span",{class:"token function"},"log"),g("span",{class:"token punctuation"},"("),m("ev"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},"'暂停'"),g("span",{class:"token punctuation"},")"),m("\n"),g("span",{class:"token punctuation"},"}"),m("\n\n"),g("span",{class:"token keyword"},"const"),m(),g("span",{class:"token function-variable function"},"onTimeupdate"),m(),g("span",{class:"token operator"},"="),m(),g("span",{class:"token punctuation"},"("),g("span",{class:"token parameter"},"ev"),g("span",{class:"token punctuation"},")"),m(),g("span",{class:"token operator"},"=>"),m(),g("span",{class:"token punctuation"},"{"),m("\n  console"),g("span",{class:"token punctuation"},"."),g("span",{class:"token function"},"log"),g("span",{class:"token punctuation"},"("),m("ev"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},"'时间更新'"),g("span",{class:"token punctuation"},")"),m("\n"),g("span",{class:"token punctuation"},"}"),m("\n"),g("span",{class:"token keyword"},"const"),m(),g("span",{class:"token function-variable function"},"onCanplay"),m(),g("span",{class:"token operator"},"="),m(),g("span",{class:"token punctuation"},"("),g("span",{class:"token parameter"},"ev"),g("span",{class:"token punctuation"},")"),m(),g("span",{class:"token operator"},"=>"),m(),g("span",{class:"token punctuation"},"{"),m("\n  console"),g("span",{class:"token punctuation"},"."),g("span",{class:"token function"},"log"),g("span",{class:"token punctuation"},"("),m("ev"),g("span",{class:"token punctuation"},","),m(),g("span",{class:"token string"},"'可以播放'"),g("span",{class:"token punctuation"},")"),m("\n"),g("span",{class:"token punctuation"},"}"),m("\n")])]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("script")]),g("span",{class:"token punctuation"},">")]),m("\n\n"),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"<"),m("style")]),m(),g("span",{class:"token attr-name"},"scoped"),g("span",{class:"token punctuation"},">")]),g("span",{class:"token style"},[g("span",{class:"token language-css"},"\n")]),g("span",{class:"token tag"},[g("span",{class:"token tag"},[g("span",{class:"token punctuation"},"</"),m("style")]),g("span",{class:"token punctuation"},">")]),m("\n\n")])])],-1),V=k('',13);v.render=function(t,n,s,a,e,o){const p=l("render-demo-0"),k=l("demo"),g=l("render-demo-1"),m=l("render-demo-2"),v=l("render-demo-3");return c(),r("div",null,[i("\n * @Author: web.王晓冬\n * @Date: 2021-08-19 18:56:59\n * @LastEditors: web.王晓冬\n * @LastEditTime: 2021-08-28 09:35:28\n * @Description: file content\n"),y,u(k,{sourceCode:'<template>\n  <div>\n    <vue3VideoPlay v-bind="options" poster=\'https://go.dreamwq.com/videos/ironMan.jpg\'/>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { reactive } from \'vue\';\n\nconst options = reactive({\n  width: \'800px\', //播放器高度\n  height: \'450px\', //播放器高度\n  color: "#409eff", //主题色\n  title: \'\', //视频名称\n  src: "https://go.dreamwq.com/videos/IronMan.mp4", //视频源\n  muted: false, //静音\n  webFullScreen: false,\n  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速\n  autoPlay: false, //自动播放\n  loop: false, //循环播放\n  mirror: false, //镜像画面\n  ligthOff: false,  //关灯模式\n  volume: 0.3, //默认音量大小\n  control: true, //是否显示控制器\n})\n<\/script>\n\n<style scoped>\n</style>\n\n'},{default:d((()=>[u(p),f])),_:1}),x,u(k,{sourceCode:"<template>\n  <div>\n    <vue3VideoPlay v-bind=\"options\" poster='https://xdlumia.oss-cn-beijing.aliyuncs.com/videos/02.jpg'/>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { reactive } from 'vue';\n\nconst options = reactive({\n  width: '400px', //播放器高度\n  height: '220px', //播放器高度\n  color: \"#409eff\", //主题色\n  speed:false, //关闭进度条拖动\n  title: '', //视频名称\n  src: \"https://go.dreamwq.com/videos/IronMan.mp4\", //视频源\n})\n<\/script>\n\n<style scoped>\n</style>\n\n"},{default:d((()=>[u(g),b])),_:1}),w,u(k,{sourceCode:"<template>\n  <div>\n    <vue3VideoPlay v-bind=\"options\" poster='https://xdlumia.oss-cn-beijing.aliyuncs.com/videos/02.jpg'/>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { reactive } from 'vue';\n\nconst options = reactive({\n  width: '400px', //播放器高度\n  height: '220px', //播放器高度\n  color: \"#409eff\", //主题色\n  control: false, //是否显示控制器\n  title: '', //视频名称\n  src: \"https://go.dreamwq.com/videos/IronMan.mp4\", //视频源\n})\n<\/script>\n\n<style scoped>\n</style>\n\n"},{description:d((()=>[q])),highlight:d((()=>[P])),default:d((()=>[u(m)])),_:1}),_,u(k,{sourceCode:'<template>\n  <div>\n      <vue3VideoPlay \n      width="800px"\n      title="钢铁侠"\n      :src="options.src"\n      :poster="options.poster"\n      @play="onPlay"\n      @pause="onPause" \n      @timeupdate="onTimeupdate" \n      @canplay="onCanplay" />\n  </div>\n\n</template>\n\n\n<script setup lang="ts">\nimport { reactive } from \'vue\';\n\nconst options = reactive({\n  src: "https://go.dreamwq.com/videos/IronMan.mp4", //视频源\n  poster: \'\', //封面\n})\nconst onPlay = (ev) => {\n  console.log(\'播放\')\n}\nconst onPause = (ev) => {\n  console.log(ev, \'暂停\')\n}\n\nconst onTimeupdate = (ev) => {\n  console.log(ev, \'时间更新\')\n}\nconst onCanplay = (ev) => {\n  console.log(ev, \'可以播放\')\n}\n<\/script>\n\n<style scoped>\n</style>\n\n'},{description:d((()=>[j])),highlight:d((()=>[C])),default:d((()=>[u(v)])),_:1}),V])};export{h as __pageData,v as default};
