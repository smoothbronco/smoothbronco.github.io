(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1760)}])},8572:function(e,t,s){"use strict";s.d(t,{E:function(){return l}});var r=s(5893),a=s(9352);let n=e=>new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"}),l=e=>{let{date:t}=e;return(0,r.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,r.jsx)(a.N$g,{}),n(t)]})}},8332:function(e,t,s){"use strict";s.d(t,{N:function(){return o}});var r=s(5893),a=s(7294),n=s(1163);let l=()=>{let e=(0,n.useRouter)(),t=e.pathname.split("/").filter(Boolean).length,s=t?Array(t).fill("..").join("/"):".";return s},c=a.forwardRef((e,t)=>{let{children:s,src:a,alt:n,...c}=e,i=l();return(0,r.jsx)("img",{src:i+a,alt:n,...c,ref:t,children:s})});c.displayName="Image";var i=s(4929),d=s(4759);let o=()=>(0,r.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,r.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,r.jsx)(c,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/author.png"}),(0,r.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"TH dev"})]}),(0,r.jsx)("p",{className:"text-primary-1",children:"Software Engineer"}),(0,r.jsx)("div",{className:"flex gap-4",children:d.e.map(e=>{let{href:t,icon:s,label:a}=e;return(0,r.jsx)(i.r,{href:t,passHref:!0,className:"text-primary-1","aria-label":a,children:s},t)})})]})},1988:function(e,t,s){"use strict";s.d(t,{f:function(){return c}});var r=s(5893),a=s(8572),n=s(4929);let l=e=>{let{title:t,date:s,excerpt:l,slug:c}=e;return(0,r.jsx)(n.r,{href:"/posts/".concat(c),className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2",children:(0,r.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,r.jsx)(a.E,{date:s}),(0,r.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:t}),(0,r.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})})},c=e=>{let{posts:t,icon:s,title:a}=e;return(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"vstack gap-8",children:[(0,r.jsxs)("h2",{className:"hstack gap-2 text-primary-1 text-3xl font-bold",children:[s," ",a]}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-10",children:t.map(e=>(0,r.jsx)(l,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug))})]})})}},1760:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return u},default:function(){return m}});var r=s(5893),a=s(9352),n=s(4929),l=s(2832),c=s(8332),i=s(1988);let d=e=>{let{posts:t}=e;return(0,r.jsx)(l.Z,{main:(0,r.jsxs)("div",{className:"vstack gap-12 p-8 bg-primary-1",children:[(0,r.jsx)(i.f,{posts:t,title:"Latest",icon:(0,r.jsx)(a.N9Z,{})}),(0,r.jsx)(n.r,{href:"/posts/page/1",passHref:!0,className:"button",children:"記事一覧へ"})]}),aside:(0,r.jsx)(c.N,{})})},o=e=>(0,r.jsx)(d,{...e});var u=!0,m=o},1163:function(e,t,s){e.exports=s(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);