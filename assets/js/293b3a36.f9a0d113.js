"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[325],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,f=h["".concat(u,".").concat(d)]||h[d]||c[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={id:"graphql",title:"5. Generating GraphQL Endpoint",sidebar_label:"5. Generating GraphQL Endpoint",slug:"/tutorial/graphql"},u=void 0,l={unversionedId:"tutorial/graphql",id:"tutorial/graphql",title:"5. Generating GraphQL Endpoint",description:"GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.",source:"@site/docs/tutorial/graphql.md",sourceDirName:"tutorial",slug:"/tutorial/graphql",permalink:"/docs/tutorial/graphql",editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/tutorial/graphql.md",tags:[],version:"current",frontMatter:{id:"graphql",title:"5. Generating GraphQL Endpoint",sidebar_label:"5. Generating GraphQL Endpoint",slug:"/tutorial/graphql"},sidebar:"sidebar",previous:{title:"4. Creating Use Cases",permalink:"/docs/tutorial/create-usecase"},next:{title:"6. Generating Herbs Shelf",permalink:"/docs/tutorial/herbsshelf"}},p={},c=[{value:"Types",id:"types",level:2},{value:"Queries",id:"queries",level:2},{value:"Mutations",id:"mutations",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data."),(0,s.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,s.kt)("a",{parentName:"p",href:"https://graphql.org/learn"},(0,s.kt)("em",{parentName:"a"},"Introduction to GraphQL | GraphQL")))),(0,s.kt)("p",null,"Herbs supports in REST ",(0,s.kt)("strong",{parentName:"p"},"and")," GraphQL APIs, which means that you can provide two options for the client's request using the same use case!"),(0,s.kt)("p",null,"Let's walk through the required setup to use GraphQL layer with Herbs. The GraphQL server needs 3 main definitions to work:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Types"),": to define the entities properties to the client."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Queries"),": to define the use cases which fetch data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Mutation"),": to define the use cases which create or update data.")),(0,s.kt)("p",null,"Using ",(0,s.kt)("a",{parentName:"p",href:"/docs/glues/herbs2gql"},(0,s.kt)("inlineCode",{parentName:"a"},"herbs2gql"))," it is really simple to set them all based on concepts we've seen before (eg. ",(0,s.kt)("a",{parentName:"p",href:"/docs/entity/getting-started"},"entity")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/usecase/getting-started"},"use case"),")."),(0,s.kt)("h2",{id:"types"},"Types"),(0,s.kt)("p",null,"In this case, the type for User entity is set."),(0,s.kt)("p",null,"For an entity like User:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"entity('User', {\n    id: id(Number),\n    nickname: field(String),\n    password: field(String),\n})\n")),(0,s.kt)("p",null,"the type definition in the GraphQL syntax would be something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n    id: Float!\n    nickname: String!\n    password: String!\n}\n")),(0,s.kt)("p",null,"But hopefully, we don't have to convert each entity by hand, we can use the function ",(0,s.kt)("inlineCode",{parentName:"p"},"entity2type")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"@herbsjs/herbs2gql"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// src/infra/api/graphql/types.js\nconst { entity2type } = require('@herbs/herbs2gql')\nconst entities = require('../../../domain/entities')\n\n// Set the default schema for the types.\nconst defaultSchema = [`\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }`]\n\n// For each entity in the list `entities` convert it to a type and put it in the list of `types`.\nconst types = [defaultSchema].concat(Object\n  .keys(entities)\n  .map(entity => [entity2type(entities[entity])]))\n\nmodule.exports = types\n")),(0,s.kt)("h2",{id:"queries"},"Queries"),(0,s.kt)("p",null,"The process to set up GraphQL is pretty similar to the previous one. The main difference is that with our CLI we use a factory function which receives the use case list."),(0,s.kt)("p",null,"We are going to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"usecase2query")," util and the ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultResolver"),", both from ",(0,s.kt)("inlineCode",{parentName:"p"},"@herbsjs/herbs2gql"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// src/infra/api/graphql/queries.js\nconst { usecase2query } = require('@herbs/herbs2gql')\nconst defaultResolver = require('./defaultResolver')\n\n// Function require all the use cases in a list.\nfunction factory (usecases) {\n    // For each use case in the list `use cases` convert it to a query and put it in the list of `queries`.\n    const queries = usecases.map(usecase => usecase2query(usecase(), defaultResolver(usecase)))\n    return queries  \n}\n\nmodule.exports = { factory }\n")),(0,s.kt)("h2",{id:"mutations"},"Mutations"),(0,s.kt)("p",null,"The same thing for mutations, but now we are using the ",(0,s.kt)("inlineCode",{parentName:"p"},"usecase2mutation")," util:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// src/infra/api/graphql/mutations.js\nconst { usecase2query } = require('@herbs/herbs2gql')\nconst defaultResolver = require('./defaultResolver')\n\n// Require all the use cases in a list.\nfunction factory (usecases) {\n    // For each use case in the list `use cases` convert it to a mutation and put it in the list of `mutations`.\n    const mutations = usecases.map(usecase => usecase2mutation(usecase(), defaultResolver(usecase)))\n    return mutations\n}\n\nmodule.exports = { factory }\n")))}d.isMDXComponent=!0}}]);