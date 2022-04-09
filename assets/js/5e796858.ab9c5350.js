"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[5873],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],o={id:"gettingStarted",title:"Getting Started with Entities",sidebar_label:"Getting Started",slug:"/entity/getting-started"},l=void 0,u={unversionedId:"entity/gettingStarted",id:"entity/gettingStarted",title:"Getting Started with Entities",description:"What's an Entity?",source:"@site/docs/entity/getting-started.md",sourceDirName:"entity",slug:"/entity/getting-started",permalink:"/docs/entity/getting-started",editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/entity/getting-started.md",tags:[],version:"current",frontMatter:{id:"gettingStarted",title:"Getting Started with Entities",sidebar_label:"Getting Started",slug:"/entity/getting-started"},sidebar:"sidebar",previous:{title:"Result",permalink:"/docs/usecase/result"},next:{title:"Features",permalink:"/docs/entity/features"}},c={},p=[{value:"What&#39;s an Entity?",id:"whats-an-entity",level:2},{value:"Installing",id:"installing",level:2},{value:"Using",id:"using",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-an-entity"},"What's an Entity?"),(0,a.kt)("p",null,"Entities are the natural place for abstractions from your domain. Usually big things like User, Order, Contract Agreement, Shopping Cart, Schedule, etc. are entities. "),(0,a.kt)("p",null,"Entities have properties (fields), actions (methods) and often is uniquely identified by an ID."),(0,a.kt)("p",null,"Some entities in your domain need to be retrieved and persisted from a repository (ex: database). For that you can use a glue like ",(0,a.kt)("a",{parentName:"p",href:"/docs/glues/Herbs2knex"},"herbs2knex")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/glues/Herbs2mongo"},"herbs2mongo"),"."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," npm install @herbsjs/herbs\n")),(0,a.kt)("h2",{id:"using"},"Using"),(0,a.kt)("p",null,"This is an example of how to define an entity:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"entities/user.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { entity, field, id } = require('@herbsjs/herbs')\n\nconst User = \n    entity('User', {\n        id: id(Number),\n        name: field(String),\n        lastAccess: field(Date),\n        features: field([Feature]),\n        plan: field(Plan),\n        isAdmin() {\n            return false\n        }\n    })\n")),(0,a.kt)("p",null,"Here is an example of how to create, load and validate an entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const user = new User()\nuser.name = "Beth"\nuser.plan.monthlyCost = 10\nuser.features = [ \n    new Feature(),\n    new Feature(),\n    new Feature()\n]\nuser.validate()\n')))}f.isMDXComponent=!0}}]);