(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.Floatingjs={}))})(this,function(s){"use strict";var g=Object.defineProperty;var y=(s,e,a)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var h=(s,e,a)=>y(s,typeof e!="symbol"?e+"":e,a);const e=new Event("outer");function a(o){const t=window.innerWidth,i=window.innerHeight;let n=Math.random()*t,r=-50;const l=Math.random()*20+10,m=Math.random()*2+1;let c=Math.random()*360;const f=Math.random()*.02+.01;o.style.left=`${n}px`,o.style.fontSize=`${l}px`;function d(){r+=m,n+=Math.sin(c)*2,c+=f,o.style.top=`${r}px`,o.style.left=`${n}px`,r<i+50?requestAnimationFrame(d):(r=-50,n=Math.random()*t,o.dispatchEvent(e))}d()}const p={elements:[],maxElements:10,interval:2e3,root:document.body};class u{constructor(t){h(this,"settings");h(this,"currentState");h(this,"interval");this.currentState={elements:[]},this.settings=Object.assign({},p,t)}createCharElement(t){const i=document.createElement("div");return i.classList.add("floatingjs-element"),i.appendChild(document.createTextNode(t)),i}createElement(t){return typeof t=="string"?this.createCharElement(t):t()}applyStyle(t){t.style.position="fixed",t.style.color="white",t.style.top="-50%",t.style.left="100px",t.style.pointerEvents="none",t.style.zIndex="9999"}run(){if(this.currentState.elements.length>=this.settings.maxElements)return;const i=Math.floor(Math.random()*this.settings.elements.length),n=this.createElement(this.settings.elements[i]);this.applyStyle(n),this.settings.root.appendChild(n),this.currentState.elements.push(n),a(n),n.addEventListener("outer",()=>{var l;(l=n.parentElement)==null||l.removeChild(n);const r=this.currentState.elements.indexOf(n);r!==-1&&this.currentState.elements.splice(r,1)})}start(){this.interval=setInterval(this.run.bind(this),this.settings.interval)}stop(){this.currentState.elements.forEach(t=>{var i;return(i=t.parentElement)==null?void 0:i.removeChild(t)}),this.currentState={elements:[]},clearInterval(this.interval)}}s.Floating=u,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});