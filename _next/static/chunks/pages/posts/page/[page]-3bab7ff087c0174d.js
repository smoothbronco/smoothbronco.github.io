(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1013:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/page/[page]",function(){return r(9749)}])},8572:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var a=r(5893),s=r(9352);let n=e=>new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"}),l=e=>{let{date:t}=e;return(0,a.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,a.jsx)(s.N$g,{}),n(t)]})}},3593:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var a=r(5893),s=r(7294),n=r(1891);let l=s.forwardRef((e,t)=>{let{children:r,src:s,alt:l,...c}=e,i=(0,n.O)();return(0,a.jsx)("img",{src:i+s,alt:l,...c,ref:t,children:r})});l.displayName="Image"},6965:function(e,t,r){"use strict";r.d(t,{N:function(){return c}});var a=r(5893),s=r(3593),n=r(4929),l=r(4759);let c=()=>(0,a.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,a.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,a.jsx)(s.E,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/author.png"}),(0,a.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Next.js"})]}),(0,a.jsx)("p",{className:"text-primary-1",children:"Modern JavaScript Framework: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching..."}),(0,a.jsx)("div",{className:"flex gap-4",children:l.e.map(e=>{let{href:t,icon:r,label:s}=e;return(0,a.jsx)(n.r,{href:t,passHref:!0,className:"text-primary-1","aria-label":s,children:r},t)})})]})},1988:function(e,t,r){"use strict";r.d(t,{f:function(){return i}});var a=r(5893),s=r(8572),n=r(3593),l=r(4929);let c=e=>{let{title:t,coverImage:r,date:c,excerpt:i,slug:d}=e;return(0,a.jsxs)(l.r,{href:"/posts/".concat(d),className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2",children:[(0,a.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,a.jsx)(n.E,{src:r,alt:"Cover Image for ".concat(t),className:"w-full max-w-xs h-full object-cover"})}),(0,a.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,a.jsx)(s.E,{date:c}),(0,a.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:t}),(0,a.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:i})]})]})},i=e=>{let{posts:t,icon:r,title:s}=e;return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"vstack gap-8",children:[(0,a.jsxs)("h2",{className:"hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight",children:[r," ",s]}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-10",children:t.map(e=>(0,a.jsx)(c,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug))})]})})}},9749:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return k},default:function(){return y}});var a=r(5893),s=r(1163),n=r(9352),l=r(2832),c=r(6965),i=r(4929),d=r(7294),u=r(1670);let o=d.forwardRef((e,t)=>{let{children:r,href:s,condition:n,...l}=e;return(0,a.jsx)(a.Fragment,{children:n?(0,a.jsx)(u.r,{href:s,passHref:!0,...l,ref:t,children:r}):(0,a.jsx)(a.Fragment,{children:r})})});o.displayName="ConditionalLink";var x=r(1764);let p={default:"",arrow:"",ellipsis:"w-auto px-1"},m=e=>{let{children:t,variant:r="default",active:s,disabled:n}=e;return(0,a.jsx)("div",{className:(0,x.cn)(p[r],n?"text-neutral-300 dark:text-neutral-600 ":"",s?"bg-teal-800 dark:bg-teal-600 text-white dark:text-white":"","center w-8 h-8 rounded-full text-lg text-accent-1"),children:t})},h=e=>{let{cell:t,page:r,count:s}=e;switch(t){case"<":return(0,a.jsx)(o,{condition:r>1,href:"/posts/page/".concat(r-1),children:(0,a.jsx)("button",{type:"button","aria-label":"前に戻る",disabled:1===r,children:(0,a.jsx)(m,{variant:"arrow",disabled:1===r,children:t})})});case">":return(0,a.jsx)(o,{condition:r<s,href:"/posts/page/".concat(r+1),children:(0,a.jsx)("button",{type:"button","aria-label":"次に進む",disabled:r===s,children:(0,a.jsx)(m,{variant:"arrow",disabled:r===s,children:t})})});case"...":return(0,a.jsx)(m,{variant:"ellipsis",children:t});default:return(0,a.jsx)(i.r,{href:"/posts/page/".concat(t),passHref:!0,children:(0,a.jsx)(m,{active:t===r,children:t})})}},f={count:-1,page:-1,siblingCount:1,boundaryCount:1},g=e=>{let{count:t,page:r,siblingCount:a,boundaryCount:s}={...f,...e},n=s+1+a,l=n+1>=r,c=t-n<=r;return["<",...l&&c?j(1,t+1):l?[...j(1,n+1+a+1),"...",...j(t+1-s,t+1)]:c?[...j(1,s+1),"...",...j(t+1-(a+1+n),t+1)]:[...j(1,1+s),"...",...j(r-a,r+a+1),"...",...j(t+1-s,t+1)],">"]},j=(e,t)=>Array.from({length:t-e}).map((t,r)=>e+r),v=e=>{let t=g(e),{page:r,count:s}=e;return(0,a.jsx)("div",{className:"overflow-x-auto w-full center",children:(0,a.jsx)("div",{className:"flex gap-1 px-4",children:t.map((e,t)=>(0,a.jsx)(h,{cell:e,page:r,count:s},t))})})};var N=r(1988);let b=e=>{let{posts:t,maxPage:r}=e,i=Number((0,s.useRouter)().query.page);return(0,a.jsx)(l.Z,{main:(0,a.jsxs)("div",{className:"vstack gap-10 p-8 bg-primary-1",children:[(0,a.jsx)(N.f,{posts:t,title:"記事一覧",icon:(0,a.jsx)(n.N9Z,{})}),(0,a.jsx)(v,{count:r,page:i})]}),aside:(0,a.jsx)(c.N,{})})},w=e=>(0,a.jsx)(b,{...e});var k=!0,y=w}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1013)}),_N_E=e.O()}]);