(()=>{var e={758:e=>{e.exports={backgroundImages:["bg0.webp","bg1.webp","bg2.webp","bg3.webp","bg4.webp","bg5.webp","bg6.webp","bg7.webp","bg8.webp","bg9.webp","bg10.webp","bg11.webp","bg12.webp","bg13.webp","bg14.webp","bg15.webp","bg16.webp","bg17.webp","bg18.webp","bg19.webp","bg20.webp","bg21.webp","bg22.webp","bg23.webp","bg24.webp","bg25.webp","bg26.webp","bg27.webp"]}},586:e=>{"use strict";e.exports=JSON.parse('{"kiara calli":{"lastName":"takamori","firstName":"killiope"},"ame gura":{"lastName":"watsogawr","firstName":"amesame"},"gura ame":{"lastName":"gawrtson","firstName":"gurame"}}')},371:(e,t,n)=>{const o=n(586),r=n(523),a="lastName",i="firstName";function s(e){return e[0].toUpperCase()+e.slice(1)}function c(e,t){return function(e,t){return e.slice(-1).toLowerCase()===t[0].toLowerCase()}(e,t)?e.slice(0,-1)+t:e+t}function l(e){return e||"undefined"}function f(e,t){const n=function(e,t){return r.getTalentId(e)+" "+r.getTalentId(t)}(e,t);if(n in o)return o[n]}function d(e,t,n){return function(e,t,n,o){const r=c(e,t);return r===n||r===o?c(e,o):r}(e[n+"Before"],t[n+"After"],e[n],t[n])}function u(e,t,n){return e[n]&&t[n]?d(e,t,n):e[n]||t[n]}function h(e,t){if(e===t)return function(e){return{lastName:s(e.lastName),firstName:s(e.firstName)}}(e);const n=f(e,t);return n||{lastName:u(e,t,a),firstName:u(e,t,i)}}function g(e){const t=[];for(const n of["lastName","firstName"])e[n]&&t.push(s(e[n]));return t.join(" ")}function y(e){return s(l(e.lastName))+" "+s(l(e.firstName))}function m(e,t){return[{talent1:e,talent2:t,fusion:h(e,t)},{talent1:t,talent2:e,fusion:h(t,e)}]}function w(e,t,n){const o=y(e),r=y(t),a=y(n);console.log(o+" + "+r+" = "+a)}e.exports={getFullNameStringById:function(e){return g(r.getTalentById(e))},getFusionStringByIds:function(e,t){return g(function(e,t){return h(r.getTalentById(e),r.getTalentById(t))}(e,t))},printAllNameVariations:function(){const e=function(){const e=[],t=r.getTalentIdsAll();for(let n=0;n<t.length;n++)for(let o=n+1;o<t.length;o++){const a=r.getTalentById(t[n]),i=r.getTalentById(t[o]);e.push(...m(a,i))}return e}();for(const t of e)w(t.talent1,t.talent2,t.fusion)},printAllNameVariationsForTalent:function(e){const t=function(e){const t=[],n=r.getTalentIdsAll();for(const o of n){if(e===o)continue;const n=r.getTalentById(e),a=r.getTalentById(o);t.push(...m(n,a))}return t}(e);for(const e of t)w(e.talent1,e.talent2,e.fusion)}}},523:(e,t,n)=>{const o=n(954),r=n(891);function a(){return r.getObjectLength(o)}function i(){return Object.entries(o).filter((e=>e[1].enabled)).map((e=>e[0]))}function s(){return i().length}e.exports={calculateTalentVariationsAll:function(){return r.calculateVariations(a())},calculateTalentVariationsEnabled:function(){return r.calculateVariations(s())},getTalentById:function(e){const t=o[e];if(!t)throw new Error("talent not found");return t},getTalentCountAll:a,getTalentCountEnabled:s,getTalentId:function(e){for(const t of Object.entries(o))if(e===t[1])return t[0]},getTalentIdsAll:function(){return Object.keys(o)},getTalentIdsEnabled:i,getTalentCategory:function(e){return e.category},getTalentIdsFromCategory:function(e){let t=[];for(let[n,r]of Object.entries(o))r.category.includes(e)&&t.push(n);return t},getTalentIdsEnabledFromCategory:function(e){let t=[];for(let[n,r]of Object.entries(o))r.category.includes(e)&&r.enabled&&t.push(n);return t}}},954:e=>{"use strict";e.exports=JSON.parse('{"sora":{"enabled":true,"lastName":"tokino","firstName":"sora","lastNameBefore":"toki","lastNameAfter":"kino","firstNameBefore":"so","firstNameAfter":"ora","category":["All","Japanese"],"drawFirst":{"hair":{"colors":["#865147","#bc8875","#c2967e"]},"body":{"colors":["#868ef8","#503aa4","#fc2a73","#ffffff"]},"etc":{"colors":["#fc2a73","#fefdcc"]},"mouth":{"x":0.48444444444444446,"y":0.5079365079365079,"width":0.9333333333333333,"hasBlend":true},"nose":{"x":0.5299145299145299,"y":0.5912408759124088},"eyes":{"areDifferent":false,"left":0.12,"right":0.9276485788113695,"y":0.5174825174825175}},"drawSecond":{"hair":{"count":1},"body":{"count":2},"etc":{"count":2},"mouth":{"y":0.598,"width":0.06},"nose":{"y":0.545},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.046,"width":0.091,"y":0.48},"faceCenterX":0.38,"rotation":-10.71}},"haato":{"enabled":true,"lastName":"akai","firstName":"haato","lastNameBefore":"aka","lastNameAfter":"kai","firstNameBefore":"haa","firstNameAfter":"aato","category":["All","Japanese"],"drawFirst":{"hair":{"colors":["#ffe3ae","#f9d3a7"]},"body":{"colors":["#3d70b8","#de445d","#fffffd"]},"etc":{"colors":["#de445d","#3d70b8","#ffdb90"]},"mouth":{"x":0.47651006711409394,"y":0.6875,"width":0.8590604026845637,"hasBlend":true},"nose":{"x":0.711864406779661,"y":0.525},"eyes":{"areDifferent":false,"left":0.095,"right":0.94,"y":0.49523809523809526}},"drawSecond":{"hair":{"count":2},"body":{"count":2},"etc":{"count":2},"mouth":{"y":0.3785,"width":0.043},"nose":{"y":0.339},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.039,"width":0.0798,"y":0.29},"faceCenterX":0.488,"rotation":-1.6}},"okayu":{"enabled":true,"lastName":"nekomata","firstName":"okayu","lastNameBefore":"neko","lastNameAfter":"mata","firstNameBefore":"oka","firstNameAfter":"kayu","category":["All","Japanese"],"drawFirst":{"hair":{"colors":["#f7e8ff","#e7c6ff"]},"body":{"colors":["#787d80","#d36aed","#3a383d"]},"etc":{"colors":["#d391e8","#ffffff","#353535"]},"mouth":{"x":0.49056603773584906,"y":0.4,"width":1.1,"hasCutout":true,"hasBlend":true},"nose":{"x":0.4642857142857143,"y":0.8518518518518519},"eyes":{"areDifferent":false,"left":0.14,"right":0.91,"y":0.5402298850574713}},"drawSecond":{"hair":{"count":1},"body":{"count":2},"etc":{"count":1},"mouth":{"y":0.448,"width":0.047},"nose":{"y":0.3980836236933798},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.044,"width":0.087,"y":0.356},"faceCenterX":0.4991289198606272}},"korone":{"enabled":true,"lastName":"inugami","firstName":"korone","lastNameBefore":"inu","lastNameAfter":"gami","firstNameBefore":"koro","firstNameAfter":"rone","category":["All","Japanese"],"drawFirst":{"hair":{"colors":["#a6706a","#844d45","#d39c94"]},"body":{"colors":["#fae79a","#ec5f7a","#7ec9d5","#d1d8d5"]},"etc":{"colors":["#ec5f7a","#7ec9d5"]},"mouth":{"x":0.5076923076923077,"y":0.4,"width":0.8615384615384616,"hasBlend":true},"nose":{"x":0.4523809523809524,"y":0.8285714285714286},"eyes":{"areDifferent":false,"left":0.11,"right":0.89,"y":0.49206349206349204}},"drawSecond":{"hair":{"count":1},"body":{"count":2},"etc":{"count":3},"mouth":{"y":0.376,"width":0.051},"nose":{"y":0.342},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.038,"width":0.065,"y":0.283},"faceCenterX":0.5}},"pekora":{"enabled":true,"lastName":"usada","firstName":"pekora","lastNameBefore":"usa","lastNameAfter":"sada","firstNameBefore":"peko","firstNameAfter":"kora","category":["All","Japanese"],"drawFirst":{"hair":{"colors":["#acc0f2","#ffffff","#5f6aaf","#bdbdd7"]},"body":{"colors":["#ffffff","#4375f5","#a0cdfb","#dce5f1"]},"etc":{"colors":["#ff8437","#4375f5","#a0cdfb"]},"mouth":{"x":0.509090909090909,"y":0.32,"width":0.7,"hasCutout":true,"hasBlend":true},"nose":{"x":0.5,"y":0.6867469879518072},"eyes":{"areDifferent":false,"left":0.16,"right":0.89,"y":0.49044585987261147}},"drawSecond":{"hair":{"count":2},"body":{"count":3},"mouth":{"y":0.522,"width":0.045},"nose":{"y":0.48433333333333334},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.033,"width":0.055,"y":0.44666666666666666},"faceCenterX":0.5}},"coco":{"enabled":true,"lastName":"kiryu","firstName":"coco","lastNameBefore":"ki","lastNameAfter":"ryu","firstNameBefore":"coco","firstNameAfter":"coco","category":["All","Japanese"],"drawFirst":{"hair":{"colors":["#fd945e","#fcfa60","#552039"]},"body":{"colors":["#645a67","#a23f60","#fef6f3","#b92934","#f4af48"]},"etc":{"colors":["#c10417","#574fb9","#fccf54"]},"mouth":{"x":0.472,"y":0.42105263157894735,"width":0.864,"hasBlend":true},"nose":{"x":0.46875,"y":0.5681818181818182},"eyes":{"areDifferent":false,"left":0.2,"right":0.8976744186046511,"y":0.5}},"drawSecond":{"hair":{"count":3},"body":{"count":3},"etc":{"count":3},"mouth":{"y":0.373,"width":0.047},"nose":{"y":0.3365},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.036,"width":0.063,"y":0.287},"faceCenterX":0.5,"areEyesOnTop":true}},"ollie":{"enabled":true,"lastName":"kureiji","firstName":"ollie","lastNameBefore":"kurei","lastNameAfter":"reiji","firstNameBefore":"olli","firstNameAfter":"llie","category":["All","Indonesia"],"drawFirst":{"hair":{"colors":["#eb0045","#edb7c7","#d1c6ca"]},"body":{"colors":["#465666","#de2545","#aaa2b9","#d4b0ba"]},"etc":{"colors":["#db2443","#aaa2b9","#d4b0ba"]},"mouth":{"x":0.4954128440366973,"y":0.41,"width":0.7,"hasCutout":true},"nose":{"x":0.48936170212765956,"y":0.8769230769230769},"eyes":{"areDifferent":true,"left":0.22,"right":0.93,"y":0.5418994413407822}},"drawSecond":{"hair":{"count":3},"body":{"count":2},"etc":{"count":1},"mouth":{"y":0.59,"width":0.0646},"nose":{"y":0.530932594644506},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.05216989843028624,"width":0.091,"y":0.46722068328716526},"faceCenterX":0.4995383194829178}},"anya":{"enabled":true,"lastName":"melfissa","firstName":"anya","lastNameBefore":"melfi","lastNameAfter":"fissa","firstNameBefore":"an","firstNameAfter":"nya","category":["All","Indonesia"],"drawFirst":{"hair":{"colors":["#99797e","#f8d176","#bf977a","#f6b575"]},"body":{"colors":["#61637c","#f8d176","#9a7e90"]},"etc":{"colors":["#f8d176","#61637c","#9a7e90","#cec8bc"]},"mouth":{"x":0.5328947368421053,"y":0.85,"width":0.868421052631579,"hasBlend":true},"nose":{"x":0.5,"y":0.375},"eyes":{"areDifferent":false,"left":0.11,"right":0.92,"y":0.32}},"drawSecond":{"hair":{"count":2},"body":{"count":2},"etc":{"count":1},"mouth":{"y":0.5525378450578807,"width":0.0675},"nose":{"y":0.4866429207479964},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.055,"width":0.109,"y":0.43766696349065004},"faceCenterX":0.5031166518254675}},"calli":{"enabled":true,"lastName":"mori","firstName":"calliope","lastNameBefore":"mori","lastNameAfter":"mori","firstNameBefore":"calli","firstNameAfter":"lliope","category":["All","English"],"drawFirst":{"hair":{"colors":["#f8ccde","#e48096"]},"body":{"colors":["#302c2c","#9b7f6c"]},"etc":{"colors":["#ca1748","#f68d9f"]},"mouth":{"x":0.47668393782383417,"y":0.2871287128712871,"width":0.8497409326424871,"hasBlend":true},"nose":{"x":0.4827586206896552,"y":0.5397727272727273},"eyes":{"areDifferent":false,"left":0.15,"right":0.91,"y":0.5638297872340425}},"drawSecond":{"hair":{"count":1},"body":{"count":2},"etc":{"count":1},"mouth":{"y":0.5416991426344505,"width":0.0646921278254092},"nose":{"y":0.49727201870615745},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.0535,"width":0.0925,"y":0.4247856586126267},"faceCenterX":0.49571317225253314}},"kiara":{"enabled":true,"lastName":"takanashi","firstName":"kiara","lastNameBefore":"taka","lastNameAfter":"nashi","firstNameBefore":"kia","firstNameAfter":"ara","category":["All","English"],"drawFirst":{"hair":{"colors":["#ff8161","#bdead7","#63b8d6"]},"body":{"colors":["#fd622a","#393e78","#ffffff","#f2270a"]},"etc":{"colors":["#69ebc9","#e0f962","#febc6e"]},"mouth":{"x":0.49382716049382713,"y":0.6590909090909091,"width":0.9135802469135802,"hasBlend":true},"nose":{"x":0.4,"y":0.6530612244897959},"eyes":{"areDifferent":false,"left":0.14583333333333334,"right":0.95,"y":0.5103448275862069}},"drawSecond":{"hair":{"count":3},"body":{"count":3},"etc":{"count":3},"mouth":{"y":0.5395014786649768,"width":0.06252640473172792},"nose":{"y":0.4816223067173637},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.051964512040557666,"width":0.084,"y":0.4224757076468103},"faceCenterX":0.5006337135614702}},"ina":{"enabled":true,"lastName":"ninomae","firstName":"ina\'nis","lastNameBefore":"nino","lastNameAfter":"mae","firstNameBefore":"ina","firstNameAfter":"\'nis","category":["All","English"],"drawFirst":{"hair":{"colors":["#695982","#f3a35f","#50445e","#ffba76"]},"body":{"colors":["#554d5f","#876b9c","#e8e4ed"]},"etc":{"colors":["#a94665","#ad6ca2","#e8e4ed"]},"mouth":{"x":0.46153846153846156,"y":0.36,"width":1.2,"hasBlend":true},"nose":{"x":0.48717948717948717,"y":0.7246376811594203},"eyes":{"areDifferent":false,"left":0.16037735849056603,"right":0.9716981132075472,"y":0.5}},"drawSecond":{"hair":{"count":3},"body":{"count":3},"etc":{"count":1},"mouth":{"y":0.5663538873994638,"width":0.04},"nose":{"y":0.524798927613941},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.036193029490616625,"width":0.062,"y":0.48525469168900803},"faceCenterX":0.5013404825737265}},"gura":{"enabled":true,"lastName":"gawr","firstName":"gura","lastNameBefore":"gawr","lastNameAfter":"gawr","firstNameBefore":"gu","firstNameAfter":"ra","category":["All","English"],"drawFirst":{"hair":{"colors":["#f3f3f3","#5e9ad2","#e2e3e5","#afebe3"]},"body":{"colors":["#33739d","#b3b3b3","#ffffff"]},"etc":{"colors":["#64a4cb","#b3b3b3","#ffffff"]},"mouth":{"x":0.4895833333333333,"y":0.9090909090909091,"width":1,"hasBlend":true},"nose":{"x":0.47619047619047616,"y":0.6166666666666667},"eyes":{"areDifferent":false,"left":0.052434456928838954,"right":0.9737827715355806,"y":0.5}},"drawSecond":{"hair":{"count":2},"body":{"count":2},"mouth":{"y":0.5696252465483235,"width":0.0757396449704142},"nose":{"y":0.5088757396449705},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.05798816568047337,"width":0.09861932938856016,"y":0.44260355029585796},"faceCenterX":0.49940828402366866}},"ame":{"enabled":true,"lastName":"watson","firstName":"amelia","lastNameBefore":"watso","lastNameAfter":"tson","firstNameBefore":"ame","firstNameAfter":"melia","category":["All","English"],"drawFirst":{"hair":{"colors":["#fad99b","#f4cb94"]},"body":{"colors":["#fae5cd","#8f5048","#f2f0f3","#ea4f5f"]},"etc":{"colors":["#ea4f5f","#f2c8ca"]},"mouth":{"x":0.5,"y":0.4,"width":0.95,"hasCutout":true},"nose":{"x":0.5571428571428572,"y":0.7647058823529411},"eyes":{"areDifferent":false,"left":0.2,"right":0.92,"y":0.543}},"drawSecond":{"hair":{"count":2},"body":{"count":2},"etc":{"count":1},"mouth":{"y":0.5623130608175474,"width":0.06580259222333001},"nose":{"y":0.4945164506480558},"eyes":{"sides":"both","faceCenterXToEyeDistance":0.0575,"width":0.105,"y":0.42572283150548357},"faceCenterX":0.5423728813559322}}}')},891:e=>{function t(e){return Math.floor(e*Math.random())}e.exports={calculateVariations:function(e){return e*e-e},getObjectLength:function(e){return Object.keys(e).length},getRandomInt:t,getRandomIntUnique:function(e,n){"number"==typeof n&&(n=[n]);let o=n[0];for(;n.includes(o);)o=t(e);return o},mod:function(e,t){return(e%t+t)%t}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";var e=n(758),t=n(891),o=n(371),r=n(523);const a="images/talents/",i=".webp",s=["hair","body","etc"];function c(e){const t=new Image;return t.src=e,t}function l(e){return new Promise((t=>{e.onload=()=>t(e)}))}function f(e,t){t.push(l(e))}function d(e){if(e.length<=1)return;const{width:t,height:n}=e[0];for(const o of e)if(o.width!==t||o.height!==n)throw new Error("images are of different sizes")}function u(e,t){return e/t}function h(e,t,n){return{width:e,height:n*(e/t)}}function g(e,t,n){return{width:t*(e/n),height:e}}function y(e,t,n,o){return u(e,t)>u(n,o)}function m(e,t,n){return function(e,t,n){return e*(1-n)+t*n}(0,e-t,n)}function w(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t}function b(e,t){t&&(e.save(),e.rotate(function(e){return e*Math.PI/180}(t)))}function p(e,t,n,o){d(Object.values(t.eyes));const r=t.baseImage,a=r.width*o.faceCenterX,i=t.eyes.left||t.eyes.right,s=i.width*(n.eyes.right-n.eyes.left),c=r.width*o.eyes.width/s,l=r.width*o.eyes.faceCenterXToEyeDistance,f=h(c*i.width,i.width,i.height),u=r.height*o.eyes.y-f.height*n.eyes.y,g=o.eyes.sides;if("both"===g||"left"===g){const t=a-l-f.width*n.eyes.right;e.drawImage(i,t,u,f.width,f.height)}if("both"===g||"right"===g){const o=t.eyes.right||t.eyes.left,i=r.width-a-l-f.width*n.eyes.right;e.save(),e.translate(r.width,0),e.scale(-1,1),e.drawImage(o,i,u,f.width,f.height),e.restore()}}async function N(e,t){const n=document.createElement("canvas");if(e===t)return async function(e,t){const n=c(a+t+"-original"+i);return await l(n),e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0),e}(n,e);const o=n.getContext("2d"),u=await async function(e,t){const n=(0,r.getTalentById)(e).drawFirst,o=(0,r.getTalentById)(t).drawSecond,l={},d=[],u=c(a+t+"-base"+i);if(l.baseImage=u,f(u,d),n.mouth&&o.mouth){if(l.mouth={},n.mouth.hasBlend){const t=c(a+e+"-mouth-blend"+i);l.mouth.blend=t,f(t,d)}if(n.mouth.hasCutout){const t=c(a+e+"-mouth-cutout"+i);l.mouth.cutout=t,f(t,d)}}if(n.nose&&o.nose){const t=c(a+e+"-nose"+i);l.nose=t,f(t,d)}if(n.eyes&&o.eyes){const t=o.eyes.sides;if(l.eyes={},!n.eyes.areDifferent||"right"!==t){const t=c(a+e+"-eye-left"+i);l.eyes.left=t,f(t,d)}if(n.eyes.areDifferent&&("both"===t||"right"===t)){const t=c(a+e+"-eye-right"+i);l.eyes.right=t,f(t,d)}}for(const e of s)if(n[e]&&o[e]){l[e]=[];for(let n=0;n<o[e].count;n++){const o=c(a+t+"-"+e+"-"+n+i);l[e].push(o),f(o,d)}}return await Promise.all(d),l}(e,t),g=(0,r.getTalentById)(e).drawFirst,y=(0,r.getTalentById)(t).drawSecond,m=u.baseImage,N=[];for(const e of s)if(u[e])for(const t of u[e])N.push(t);d(N.concat([m])),n.width=m.width,n.height=m.height;const I=w(n),k=I.getContext("2d");k.drawImage(m,0,0),k.globalCompositeOperation="saturation",k.fillStyle="black",k.fillRect(0,0,I.width,I.height);const S=w(n),C=S.getContext("2d");for(const e of N)C.drawImage(e,0,0);k.globalCompositeOperation="destination-in",k.drawImage(S,0,0),o.drawImage(m,0,0),o.drawImage(I,0,0);const x=m.width*y.faceCenterX,T=y.rotation;if(b(o,T),u.mouth){d(Object.values(u.mouth));const e=u.mouth.blend||u.mouth.cutout,t=e.width*g.mouth.width,n=m.width*y.mouth.width,r=m.height*y.mouth.y,a=n/t,i=h(a*e.width,e.width,e.height),s=x-i.width*g.mouth.x,c=r-i.height*g.mouth.y;if(u.mouth.blend&&(o.save(),o.globalCompositeOperation="difference",o.drawImage(u.mouth.blend,s,c,i.width,i.height),o.restore()),u.mouth.cutout&&o.drawImage(u.mouth.cutout,s,c,i.width,i.height),u.nose){const e=u.nose,t=m.height*y.nose.y,n=h(a*e.width,e.width,e.height),r=x-n.width*g.nose.x,i=t-n.height*g.nose.y;o.save(),o.globalCompositeOperation="difference",o.drawImage(e,r,i,n.width,n.height),o.restore()}}u.eyes&&!y.areEyesOnTop&&p(o,u,g,y),function(e,t){t&&e.restore()}(o,T);for(const e of s)if(u[e])for(const[t,r]of u[e].entries()){o.save();const a=g[e].colors[t%g[e].colors.length],i=w(n),s=i.getContext("2d");s.drawImage(r,0,0),s.fillStyle=a,s.globalCompositeOperation="overlay",s.fillRect(0,0,i.width,i.height),s.globalCompositeOperation="destination-in",s.drawImage(r,0,0),o.drawImage(i,0,0),o.restore()}return u.eyes&&y.areEyesOnTop&&p(o,u,g,y),n}let I=0;async function k(e,t,n){const o=++I,r=e.getContext("2d");!function(e){e.clearRect(0,0,e.canvas.width,e.canvas.height)}(r);const a=await N(t,n);if(I!==o)return;!function(e){e.save(),e.fillStyle="white",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.restore()}(r);const{width:i,height:s}=(c=e.width,l=e.height,f=a.width,d=a.height,y(f,d,c,l)?h(c,f,d):g(l,f,d));var c,l,f,d;r.drawImage(a,m(e.width,i,.5),m(e.height,s,1),i,s)}const S=document.querySelector.bind(document),C=[".talent-dropdown",".talent-select-button-imgs",".talent-select-name",".talent-select-image"],x=["All","Japanese","English","Indonesia"],T=(0,r.getTalentIdsEnabledFromCategory)(x[0]),B=[],A=[];let v;function E(e,n){return(0,t.mod)(e,n)}function q(e){return e.content.cloneNode(!0)}function D(e){return parseInt(e.dataset.talentIndex)}function L(e){return parseInt(e.dataset.categoryIndex)}function _(e,t){e.dataset.talentIndex=t}function X(e,t){e.dataset.categoryIndex=t}function F(){return[T[D(B[0])],T[D(B[1])]]}function O(e){return e.closest(".talent-select-container")}function j(e,t){const n=L(e),o=A[n],r=D(e),a=o.indexOf(r);return o[E(a+t,o.length)]}function J(e){_(e,j(e,-1)),Q()}function R(e){_(e,j(e,1)),Q()}function H(e){J(O(e.target))}function M(e){R(O(e.target))}function $(e){if(T.length<=1)return;const n=D(e);let o;if(2===T.length)o=E(n+1,T.length);else{const r=D(function(e){return e===B[0]?B[1]:B[0]}(e));o=(0,t.getRandomIntUnique)(T.length,[n,r])}X(e,0),_(e,o),Q()}function P(e){$(O(e.target))}function V(){if(T.length<=1)return;const e=D(B[0]),n=(0,t.getRandomIntUnique)(T.length,e),o=D(B[1]);let r=o;r=2===T.length?E(n+1,T.length):(0,t.getRandomIntUnique)(T.length,[o,n]),X(B[0],0),_(B[0],n),X(B[1],0),_(B[1],r),Q()}function U(){const e=L(B[0]),t=L(B[1]);X(B[0],t),X(B[1],e);const n=D(B[0]),o=D(B[1]);_(B[0],o),_(B[1],n),Q()}function z(){!function(){const e=S(".template-talent-select");for(let t=1;t<=2;t++){const n=q(e);n.querySelector(".talent-select-container").classList.add(`talent-select-container-${t}`),n.querySelector(".talent-select-box").classList.add(`talent-select-box-${t}`),n.querySelector(".talent-dropdown").classList.add(`talent-dropdown-${t}`),S(".main").appendChild(n)}}(),function(){const e=(0,t.getRandomInt)(T.length);for(let t=0;t<2;t++){const n=S(`.talent-select-container-${t+1}`);_(n,e),X(n,0),n.querySelector(".talent-select-image").onclick=fe,n.querySelector(".talent-select-name__name").onclick=fe,n.querySelector(".button-img-up").onclick=H,n.querySelector(".button-img-down").onclick=M,n.querySelector(".button-img-random").onclick=P,B[t]=n}}(),function(){for(const e of B){const t=e.querySelector(".talent-dropdown");he(t),document.addEventListener("click",(e=>{ge(e,t)})),document.addEventListener("keydown",(e=>{ye(e,t)}))}}()}function G(e){!function(e){const t=T[D(e)];e.querySelector(".talent-select-image").style.setProperty("--image-url",`url(images/talents/${t}-medium.webp)`)}(e),function(e){e.querySelector(".talent-select-name__name").innerHTML=(0,o.getFullNameStringById)(T[D(e)])}(e),function(e){const t=e.querySelector(".talent-dropdown"),n=oe(e);(function(e){for(const t of e.querySelectorAll(".talent-dropdown-category__entry"))t.classList.remove("talent-dropdown-category__entry--highlighted")})(t),Z(n),te(n);const o=ne(e);(function(e){for(const t of e.querySelectorAll(".talent-dropdown-entries__entry"))t.classList.remove("talent-dropdown-entries__entry--highlighted")})(t),r=o,r.classList.add("talent-dropdown-entries__entry--highlighted"),ee(o);var r}(e)}function K(){!function(){const[e,t]=F();S(".result-name").innerHTML=(0,o.getFusionStringByIds)(e,t)}(),function(){const e=S(".result-canvas");var t;(t=e).style.animation="none",t.offsetHeight,t.style.animation=null,k(e,...F())}()}function Q(){!function(){for(const e of B)G(e)}(),K()}function W(e,t){return e.querySelector(`[data-talent-index="${t}"]`)}function Y(e,t){return e.querySelector(`[data-category-index="${t}"]`)}function Z(e){e.classList.add("talent-dropdown-category__entry--highlighted")}function ee(e){const t=e.closest(".talent-dropdown-entries"),n=e.offsetTop-t.offsetHeight/2+e.offsetHeight/2;t.scrollTop=n}function te(e){const t=e.closest(".talent-dropdown-categories"),n=e.offsetTop-t.offsetHeight/2+e.offsetHeight/2;t.scrollTop=n}function ne(e){return W(e,D(O(e)))}function oe(e){return Y(e,L(O(e)))}function re(e){!function(e,t){for(const n of t)e.querySelector(n).classList.remove("dropdown-visible")}(e,C)}function ae(e){e.querySelector(".talent-dropdown-categories").classList.remove("dropdown-visible")}function ie(e){e.querySelector(".talent-dropdown-entries").classList.remove("dropdown-visible")}function se(e){const t=e.currentTarget,n=O(t);_(n,t.dataset.talentIndex),ie(n),re(n),Q()}function ce(e){const t=e.currentTarget,n=O(t),o=t.dataset.categoryIndex;X(n,o),function(e,t){const n=A[e];for(let e=0;e<T.length;e++){const o=W(t,e);n.includes(e)?o.classList.add("dropdown-visible"):o.classList.remove("dropdown-visible")}}(o,n),ae(n),function(e){e.querySelector(".talent-dropdown-entries").classList.add("dropdown-visible"),te(oe(e.querySelector(".talent-dropdown")))}(n),e.ifDropdownCategoryJustShown=n.querySelector(".talent-dropdown")}function le(e){return e.querySelector(".talent-dropdown").classList.contains("dropdown-visible")}function fe(e){const t=O(e.target);le(t)||(ie(t),function(e){!function(e,t){for(const n of t)e.querySelector(n).classList.add("dropdown-visible")}(e,C),ee(ne(e.querySelector(".talent-dropdown")))}(t),function(e){e.querySelector(".talent-dropdown-categories").classList.add("dropdown-visible"),te(oe(e.querySelector(".talent-dropdown")))}(t),e.ifDropdownElementJustShown=t.querySelector(".talent-dropdown"))}function de(e,t,n){const r=q(S(".template-talent-dropdown-entry"));r.querySelector(".talent-dropdown-entries__entry__image").style.setProperty("--image-url",`url(images/talents/${n}-small.webp)`);const a=(0,o.getFullNameStringById)(n);r.querySelector(".talent-dropdown-entries__entry__name").innerHTML=a;const i=e.querySelector(".talent-dropdown-entries");i.appendChild(r);const s=i.lastElementChild;s.dataset.talentIndex=t,s.onclick=se,s.onmouseup=se}function ue(e,t,n){const o=q(S(".template-talent-dropdown-category"));o.querySelector(".talent-dropdown-entries__category__name").innerHTML=n;const r=e.querySelector(".talent-dropdown-categories");r.appendChild(o);const a=r.lastElementChild;a.dataset.categoryIndex=t,a.onclick=ce,a.onmouseup=ce}function he(e){for(let t=0;t<T.length;t++)de(e,t,T[t]);for(let t=0;t<x.length;t++){ue(e,t,x[t]);let n=[];for(let e=0;e<T.length;e++)(0,r.getTalentCategory)((0,r.getTalentById)(T[e])).includes(x[t])&&n.push(e);A.length<x.length&&A.push(n)}Z(Y(e,0))}function ge(e,t){if(e.ifDropdownElementJustShown===t)return;if(e.ifDropdownCategoryJustShown===t)return;const n=O(t);ie(n),ae(n),re(n)}function ye(e,t){const n=O(t);if(!le(n))return;const o={ArrowUp:()=>{J(n)},ArrowDown:()=>{R(n)},Enter:()=>{re(n)}};o[e.key]&&(o[e.key](),e.preventDefault())}function me(){localStorage.removeItem("backgroundIndex")}function we(t){v=t,S(".background").style.setProperty("--image-url",`url(images/backgrounds/${e.backgroundImages[t]})`)}function be(){localStorage.setItem("backgroundIndex",v)}function pe(n){return(0,t.mod)(n,e.backgroundImages.length)}function Ne(){const n=function(){const e=localStorage.getItem("backgroundIndex");if("string"==typeof e&&e.match(/^\d+/))return parseInt(e)}();var o;"number"!=typeof(o=n)||o<0||o>=e.backgroundImages.length?(we((0,t.getRandomInt)(e.backgroundImages.length)),me()):we(n)}function Ie(){S(".info").classList.remove("info--in"),S(".info").classList.add("info--out")}function ke(){const n=S(".info").classList;S(".info-button").onclick=e=>{n.contains("info--in")||(S(".info").classList.remove("info--out"),S(".info").classList.add("info--in"),e.stopPropagation())},window.onkeydown=e=>{n.contains("info--in")&&"Escape"===e.key&&Ie()},window.onclick=()=>{n.contains("info--in")&&Ie()},S(".info__close").onclick=()=>{Ie()},S(".info").onclick=e=>{e.stopPropagation()},S(".background-forwards").onclick=()=>(v=pe(++v),we(v),void be()),S(".background-backwards").onclick=()=>(v=pe(--v),we(v),void be()),S(".background-random").onclick=()=>(we((0,t.getRandomIntUnique)(e.backgroundImages.length,v)),void me()),S(".current-progress").innerHTML=(0,r.getTalentCountEnabled)(),S(".possible-variations").innerHTML=(0,r.calculateTalentVariationsEnabled)()}z(),function(){const e=S(".result-box");e.querySelector(".button-img-random").onclick=V,e.querySelector(".button-img-swap").onclick=U}(),Q(),Ne(),ke()})()})();