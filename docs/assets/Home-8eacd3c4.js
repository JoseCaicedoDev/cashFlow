import{_ as u,r as k,o as c,c as i,a as e,b as _,w as F,v as M,F as x,p as g,d as I,e as V,f as $,t as m,g as S,h as C,u as f,n as H,i as A,j as w,k as h,l as d,m as b}from"./index-23609fc1.js";const R=t=>(g("data-v-b3d7914e"),t=t(),I(),t),B={class:"header"},O={class:"resume"},D={class:"movement"},P=R(()=>e("div",{class:"grip"},null,-1)),T=[P],j={class:"body"},z={__name:"Layout",setup(t){const o=k(!1);return(a,r)=>(c(),i(x,null,[e("div",B,[_(a.$slots,"header",{},void 0,!0)]),e("div",O,[_(a.$slots,"resume",{},void 0,!0)]),e("div",D,[e("div",{class:"head",onClick:r[0]||(r[0]=s=>o.value=!o.value)},T),F(e("div",j,[_(a.$slots,"movement",{},void 0,!0)],512),[[M,o.value]])])],64))}},E=u(z,[["__scopeId","data-v-b3d7914e"]]);const q={methods:{reload(){location.reload()}}},N=t=>(g("data-v-39e4192a"),t=t(),I(),t),G=N(()=>e("h1",null,[e("span",null,"Cash"),$("Flow")],-1)),J=N(()=>e("span",null,null,-1));function K(t,o,a,r,s,l){return c(),i("header",null,[e("img",{src:V,alt:"logo",onClick:o[0]||(o[0]=(...n)=>l.reload&&l.reload(...n))}),G,J])}const Q=u(q,[["render",K],["__scopeId","data-v-39e4192a"]]);const U=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}),W={props:{label:{type:String},totalLabel:{type:String},amount:{type:Number,default:null},totalAmount:{type:Number}},computed:{labelVisual(){return this.label!==null?this.amount:this.totalLabel},amountVisual(){return this.amount!==null?this.amount:this.totalAmount},amountCurrency(){return U.format(this.amountVisual)}}},X={class:"graphic"},Y={class:"action"};function Z(t,o,a,r,s,l){return c(),i("main",null,[e("p",null,m(l.labelVisual),1),e("h1",null,m(l.amountCurrency),1),e("div",X,[_(t.$slots,"graphic",{},void 0,!0)]),e("div",Y,[_(t.$slots,"action",{},void 0,!0)])])}const ee=u(W,[["render",Z],["__scopeId","data-v-b4a6bdc0"]]),te="/assets/trash-icon-4f01394e.svg";const oe={class:"movement"},se={class:"content"},ne={class:"action"},ae={__name:"Movement",props:{id:{type:Number},title:{type:String},description:{type:String},amount:{type:Number}},emits:["remove"],setup(t,{emit:o}){const a=t,r=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}),{id:s,title:l,description:n,amount:p}=S(a),y=C(()=>r.format(p.value)),v=C(()=>p.value<0),L=()=>{o("remove",s.value)};return(ve,he)=>(c(),i("div",oe,[e("div",se,[e("h4",null,m(f(l)),1),e("p",null,m(f(n)),1)]),e("div",ne,[e("img",{src:te,alt:"icon delete",onClick:L}),e("p",{class:H({red:v.value,green:!v.value})},m(y.value),3)])]))}},re=u(ae,[["__scopeId","data-v-8c6b766b"]]);const le=t=>(g("data-v-80b6b889"),t=t(),I(),t),ce={class:"movements"},ie=le(()=>e("h2",{class:"title"},"Historial",-1)),ue={class:"content"},de={__name:"Index",props:{movements:{type:Array,default:()=>[]}},setup(t){const o=t,{movements:a}=S(o),r=s=>{console.log("remove",s)};return(s,l)=>(c(),i("div",ce,[ie,e("div",ue,[(c(!0),i(x,null,A(f(a),n=>(c(),w(re,{key:n.id,id:n.id,title:n.title,description:n.description,amount:n.amount,onRemove:r},null,8,["id","title","description","amount"]))),128))])]))}},_e=u(de,[["__scopeId","data-v-80b6b889"]]),me={components:{Layout:E,Header:Q,Resume:ee,Movement:_e},data(){return{amount:null,label:null,movements:[{id:0,title:"lorem ipsum dolor",description:"lorem ipsum dolor",amount:1e3},{id:1,title:"lorem ipsum dolor",description:"lorem ipsum dolor",amount:-2e3},{id:2,title:"lorem ipsum dolor",description:"lorem ipsum dolor",amount:100},{id:3,title:"lorem ipsum dolor",description:"lorem ipsum dolor",amount:-500},{id:4,title:"lorem ipsum dolor",description:"lorem ipsum dolor",amount:1500},{id:5,title:"lorem ipsum dolor",description:"lorem ipsum dolor",amount:3e3}]}}};function pe(t,o,a,r,s,l){const n=h("Header"),p=h("Resume"),y=h("Movement"),v=h("Layout");return c(),w(v,null,{header:d(()=>[b(n)]),resume:d(()=>[b(p,{label:s.label,totalLabel:"Ahorro Total",amount:s.amount,totalAmount:5e3},{graphic:d(()=>[$(" graphic ")]),action:d(()=>[$(" action ")]),_:1},8,["label","amount"])]),movement:d(()=>[b(y,{movements:s.movements},null,8,["movements"])]),_:1})}const be=u(me,[["render",pe]]);export{be as default};
