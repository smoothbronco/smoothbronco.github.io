(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1013:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/page/[page]",function(){return r(9749)}])},8572:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var a=r(5893),s=r(9352);let n=e=>new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"}),l=e=>{let{date:t}=e;return(0,a.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,a.jsx)(s.N$g,{}),n(t)]})}},8332:function(e,t,r){"use strict";r.d(t,{N:function(){return o}});var a=r(5893),s=r(7294),n=r(1163);let l=()=>{let e=(0,n.useRouter)(),t=e.pathname.split("/").filter(Boolean).length,r=t?Array(t).fill("..").join("/"):".";return r},i=s.forwardRef((e,t)=>{let{children:r,src:s,alt:n,...i}=e,c=l();return(0,a.jsx)("img",{src:c+s,alt:n,...i,ref:t,children:r})});i.displayName="Image";var c=r(4929),d=r(4759);let o=()=>(0,a.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,a.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,a.jsx)(i,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/author.png"}),(0,a.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Takahiro Hayashi"})]}),(0,a.jsx)("p",{className:"text-primary-1",children:"大学生のエンジニアブログ"}),(0,a.jsx)("div",{className:"flex gap-4",children:d.e.map(e=>{let{href:t,icon:r,label:s}=e;return(0,a.jsx)(c.r,{href:t,passHref:!0,className:"text-primary-1","aria-label":s,children:r},t)})})]})},1988:function(e,t,r){"use strict";r.d(t,{f:function(){return i}});var a=r(5893),s=r(8572),n=r(4929);let l=e=>{let{title:t,date:r,excerpt:l,slug:i}=e;return(0,a.jsx)(n.r,{href:"/posts/".concat(i),className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2",children:(0,a.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,a.jsx)(s.E,{date:r}),(0,a.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:t}),(0,a.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})})},i=e=>{let{posts:t,icon:r,title:s}=e;return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"vstack gap-8",children:[(0,a.jsxs)("h2",{className:"hstack gap-2 text-primary-1 text-3xl font-bold",children:[r," ",s]}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-10",children:t.map(e=>(0,a.jsx)(l,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug))})]})})}},9749:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return k}});var a=r(5893),s=r(1163),n=r(9352),l=r(2832),i=r(8332),c=r(4929),d=r(7294),o=r(1670);let u=d.forwardRef((e,t)=>{let{children:r,href:s,condition:n,...l}=e;return(0,a.jsx)(a.Fragment,{children:n?(0,a.jsx)(o.r,{href:s,passHref:!0,...l,ref:t,children:r}):(0,a.jsx)(a.Fragment,{children:r})})});u.displayName="ConditionalLink";var x=r(1764);let p={default:"",arrow:"",ellipsis:"w-auto px-1"},h=e=>{let{children:t,variant:r="default",active:s,disabled:n}=e;return(0,a.jsx)("div",{className:(0,x.cn)(p[r],n?"text-neutral-300 dark:text-neutral-600 ":"",s?"bg-teal-800 dark:bg-teal-600 text-white dark:text-white":"","center w-8 h-8 rounded-full text-lg text-accent-1"),children:t})},m=e=>{let{cell:t,page:r,count:s}=e;switch(t){case"<":return(0,a.jsx)(u,{condition:r>1,href:"/posts/page/".concat(r-1),children:(0,a.jsx)("button",{type:"button","aria-label":"前に戻る",disabled:1===r,children:(0,a.jsx)(h,{variant:"arrow",disabled:1===r,children:t})})});case">":return(0,a.jsx)(u,{condition:r<s,href:"/posts/page/".concat(r+1),children:(0,a.jsx)("button",{type:"button","aria-label":"次に進む",disabled:r===s,children:(0,a.jsx)(h,{variant:"arrow",disabled:r===s,children:t})})});case"...":return(0,a.jsx)(h,{variant:"ellipsis",children:t});default:return(0,a.jsx)(c.r,{href:"/posts/page/".concat(t),passHref:!0,children:(0,a.jsx)(h,{active:t===r,children:t})})}},f={count:-1,page:-1,siblingCount:1,boundaryCount:1},j=e=>{let{count:t,page:r,siblingCount:a,boundaryCount:s}={...f,...e},n=s+1+a,l=n+1>=r,i=t-n<=r;return["<",...l&&i?g(1,t+1):l?[...g(1,n+1+a+1),"...",...g(t+1-s,t+1)]:i?[...g(1,s+1),"...",...g(t+1-(a+1+n),t+1)]:[...g(1,1+s),"...",...g(r-a,r+a+1),"...",...g(t+1-s,t+1)],">"]},g=(e,t)=>Array.from({length:t-e}).map((t,r)=>e+r),v=e=>{let t=j(e),{page:r,count:s}=e;return(0,a.jsx)("div",{className:"overflow-x-auto w-full center",children:(0,a.jsx)("div",{className:"flex gap-1 px-4",children:t.map((e,t)=>(0,a.jsx)(m,{cell:e,page:r,count:s},t))})})};var N=r(1988);let b=e=>{let{posts:t,maxPage:r}=e,c=Number((0,s.useRouter)().query.page);return(0,a.jsx)(l.Z,{main:(0,a.jsxs)("div",{className:"vstack gap-10 p-8 bg-primary-1",children:[(0,a.jsx)(N.f,{posts:t,title:"記事一覧",icon:(0,a.jsx)(n.N9Z,{})}),(0,a.jsx)(v,{count:r,page:c})]}),aside:(0,a.jsx)(i.N,{})})},w=e=>(0,a.jsx)(b,{...e});var y=!0,k=w},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1013)}),_N_E=e.O()}]);