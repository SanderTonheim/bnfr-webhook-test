import{t as b,ac as x,r as c,a as d,P as j,j as o,c7 as v,as as H,cM as I,ao as k,aW as B,at as E,ba as y}from"./desk-0312ba5d-a1629a64.js";import{useDeskTool as C}from"./index-74d44846-899aa953.js";import"./index-75fb8da5.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(H,{actions:o(I,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(k,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const L=b(x)(u||(u=O([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=y();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[l,h]=c.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:l==null?void 0:l.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[v.isValidElementType(a)&&c.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),c.isValidElement(a)&&a]})]})}export{G as default};
