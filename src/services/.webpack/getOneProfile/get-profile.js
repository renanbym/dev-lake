!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,t){e.exports=require("babel-runtime/core-js/promise")},function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";var n,o=r(0),i=(n=o)&&n.__esModule?n:{default:n};const{connect:a}=r(4),u=r(7),{ObjectId:c}=r(9);e.exports.handler=async(e,t,r)=>{t.callbackWaitsForEmptyEventLoop=!1;try{let t,n={};if(await a(!0),e.pathParameters&&e.pathParameters.id&&(n._id=new c(e.pathParameters.id)),n._id){if(!((t=await u.find(n)).length>0))return r(null,{statusCode:400,body:(0,i.default)({error:"error"})});t=t[0]}else t=await u.find(n);return r(null,{statusCode:200,body:(0,i.default)(t)})}catch(e){return r(null,{statusCode:400,body:(0,i.default)({error:e.message})})}}},function(e,t,r){"use strict";var n=i(r(1)),o=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}const a=r(2),{getSecret:u}=r(5);let c,s=!1;const l=(e,t)=>t&&t.constructor===RegExp?t.toString():"str"!==e?t:void 0,d=(e,t,r,n)=>{process.stdout.write(`${e}.${t}(${(0,o.default)(r,l)}`),n?process.stdout.write(`,${(0,o.default)(n,l)})\n`):process.stdout.write(")\n")};e.exports={connect:(e=!1)=>new n.default(async(t,r)=>{try{if(e&&a.set("debug",d),s)return console.log("===> Aproveitando conexao"),t(c);const n=await u("mongodb_uri");return console.log(n),(c=await a.connect(n,{reconnectTries:Number.MAX_VALUE,reconnectInterval:1e3}))===a?(s=!0,t(c)):r("error")}catch(e){return console.log("===> connect error",e),r(e)}}),disconnect:()=>new n.default(async(e,t)=>{try{a.connection.close(()=>{s=!1,console.log("===> Desconectando conexao"),e()})}catch(e){return console.log("===> disconnect error",e),t(e)}}),mongoose:a}},function(e,t,r){"use strict";var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};const a=new(r(6).SSM)({region:process.env.AWS_REGION});let u,c=new Date(0);const s=e=>u[e],l=()=>new i.default((e,t)=>{u={};try{const r=async t=>{const n=await a.getParametersByPath(t).promise();console.log(n);for(const e of n.Parameters){const r=e.Name.replace(`${t.Path}/`,"");u[r]=e.Value}if(!n.NextToken)return c=new Date((new Date).getTime()+18e4),e(u);t.NextToken=n.NextToken,r(t)};return r({Recursive:!0,WithDecryption:!0})}catch(e){return t("Not Found Secret")}});e.exports={getSecret:e=>new i.default(async(t,r)=>{try{let n;if(new Date>=c&&(u=null),u){if(n=s(e))return t(n);throw"Not Found Secret."}if(await l(),u)return(n=s(e))?t(n):r("Not Found Secret!")}catch(e){return r("Not Found Secret")}}),getAll:l}},function(e,t){e.exports=require("aws-sdk")},function(e,t,r){"use strict";var n,o=r(2),i=(n=o)&&n.__esModule?n:{default:n};i.default.Promise=r(8);const a=new o.Schema({url:{type:String,require:!0,index:{unique:!0}},status:{type:String,enum:["created","updated","modernize"],require:!0},name:String,headline:String,location:String,summary:String,positions:[{_id:!1,title:{type:String},company:{type:String},description:{type:String},date1:{type:String},date2:{type:String},roles:[{_id:!1,title:{type:String},company:{type:String},description:{type:String},date1:{type:String},date2:{type:String}}]}],educations:[{_id:!1,title:String,degree:String,date1:Date,date2:Date}],skills:[{_id:!1,title:String,count:Number}],search:[{_id:!1,position:String,location:String}],ranking:{_id:!1,permanencia:String},date:{type:Date,default:Date.now},update:{type:Date,default:Date.now}});global.modelSchema=global.modelSchema||i.default.model("Perfil",a),e.exports=global.modelSchema},function(e,t){e.exports=require("bluebird")},function(e,t){e.exports=require("mongodb")}]));
//# sourceMappingURL=get-profile.js.map