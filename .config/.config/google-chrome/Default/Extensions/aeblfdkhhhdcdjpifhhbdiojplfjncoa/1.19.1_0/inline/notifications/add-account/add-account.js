(function () {
	'use strict';

	function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n);}function o(t){return "function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,r){if(t){const o=c(t,n,e,r);return t[0](o)}}function c(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function a(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function s(t,n){t.appendChild(n);}function d(t,n,e){t.insertBefore(n,e||null);}function f(t){t.parentNode.removeChild(t);}function l(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function m(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e);}let w;function y(t){w=t;}function v(){if(!w)throw new Error("Function called outside component initialization");return w}function b(t,n){v().$$.context.set(t,n);}function k(t){return v().$$.context.get(t)}const P=[],$=[],S=[],T=[],x=Promise.resolve();let C=!1;function _(t){S.push(t);}function A(){const t=new Set;do{for(;P.length;){const t=P.shift();y(t),z(t.$$);}for(;$.length;)$.pop()();for(let n=0;n<S.length;n+=1){const e=S[n];t.has(e)||(e(),t.add(e));}S.length=0;}while(P.length);for(;T.length;)T.pop()();C=!1;}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_);}}const O=new Set;let L;function j(t,n){t&&t.i&&(O.delete(t),t.i(n));}function I(t,n,e,r){if(t&&t.o){if(O.has(t))return;O.add(t),L.c.push(()=>{O.delete(t),r&&(e&&t.d(1),r());}),t.o(n);}}function M(t){t&&t.c();}function E(t,e,i){const{fragment:u,on_mount:c,on_destroy:a,after_update:s}=t.$$;u&&u.m(e,i),_(()=>{const e=c.map(n).filter(o);a?a.push(...e):r(e),t.$$.on_mount=[];}),s.forEach(_);}function U(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[]);}function N(t,n){-1===t.$$.dirty[0]&&(P.push(t),C||(C=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31;}function D(n,o,i,u,c,a,s=[-1]){const d=w;y(n);const f=o.props||{},l=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:s};let g=!1;l.ctx=i?i(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return l.ctx&&c(l.ctx[t],l.ctx[t]=o)&&(l.bound[t]&&l.bound[t](o),g&&N(n,t)),e}):[],l.update(),g=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),o.target&&(o.hydrate?l.fragment&&l.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):l.fragment&&l.fragment.c(),o.intro&&j(n.$$.fragment),E(n,o.target,o.anchor),A()),y(d);}class q{$destroy(){U(this,1),this.$destroy=t;}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1);}}$set(){}}const F=()=>function(){if("undefined"!=typeof window)return window;if("undefined"!=typeof globalThis)return globalThis;throw new Error("unable to locate global object")}().crypto.getRandomValues(new Uint32Array(1))[0].toString(36);class K{constructor(){this.request=t=>new Promise(n=>{chrome.runtime.sendMessage(t,t=>{n(t);});}),this.on=(t,n)=>{function e(e,r,o){return !(!e.name||e.name!==t)&&(Promise.resolve(n(e.data)).then(o),!0)}return chrome.runtime.onMessage.addListener(e),e},this.off=(t,n)=>{chrome.runtime.onMessage.removeListener(n);};}}class R{constructor(){this.uuid=F(),this.callbacks={},this.request=t=>new Promise(n=>{const e=R.generateId();this.callbacks[e]=n,this._sendMessage(Object.assign({callbackId:e},t));}),this.on=(t,n)=>this._register(e=>{e.name&&e.name===t&&Promise.resolve(n(e.data)).then(t=>{this._sendMessage(Object.assign(Object.assign({},e),{data:t}));});}),this.off=(t,n)=>{this._deregister(t,n);},this.listenForResponses=()=>{this._register(t=>{"callbackId"in t&&t.callbackId in this.callbacks&&(this.callbacks[t.callbackId](t.data),delete this.callbacks[t.callbackId]);});},this._sendMessage.bind(this),this._register.bind(this),this._deregister.bind(this),this.listenForResponses();}}R.generateId=()=>window.crypto.getRandomValues(new Uint32Array(1))[0];class X extends R{_sendMessage(t){window.top.postMessage(Object.assign({outgoing:!0},t),"*");}_register(t){function n(n){n.data.outgoing||t(n.data);}return window.top.addEventListener("message",n),n}_deregister(t,n){window.top.removeEventListener("message",n);}}class B extends R{static isSafariAppExtension(){return "undefined"!=typeof safari&&void 0!==safari.extension}_sendMessage(t){const n={callbackId:t.callbackId,uuid:this.uuid,outgoing:!0,message:{name:t.name,data:t.data}};safari.extension.dispatchMessage("message",n);}_register(t){const n=this.uuid;function e(e){const r=e.message;!r||r.uuid&&r.uuid!==n||t({callbackId:r.callbackId,name:r.message.name,data:r.message.data});}return safari.self.addEventListener("message",e),e}_deregister(t,n){safari.self.removeEventListener("message",n);}}function G(t){let n;const e=t[2].default,r=u(e,t,t[1],null);return {c(){r&&r.c();},m(t,e){r&&r.m(t,e),n=!0;},p(t,[n]){r&&r.p&&2&n&&r.p(c(e,t,t[1],null),a(e,t[1],n,null));},i(t){n||(j(r,t),n=!0);},o(t){I(r,t),n=!1;},d(t){r&&r.d(t);}}}function V(t,n,e){let{bridge:r}=n;b("bridge",new r("undefined"!=typeof chrome&&void 0!==chrome.runtime&&void 0!==chrome.runtime.sendMessage&&void 0!==chrome.runtime.onMessage?new K:B.isSafariAppExtension()?new B:new X));let{$$slots:o={},$$scope:i}=n;return t.$set=t=>{"bridge"in t&&e(0,r=t.bridge),"$$scope"in t&&e(1,i=t.$$scope);},[r,i,o]}class W extends q{constructor(t){super(),D(this,t,V,G,i,{bridge:0});}}function H(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function J(t,n){return t(n={exports:{}},n.exports),n.exports}var Y=J((function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e=/\s/g,r=/\W/g;n.generator={plain:function(t){return t},hyphens:function(t){return t.trim().replace(e,"-").replace(r,"-")}},n.Plural=function(t,n){var e=n.zero,r=n.one;return "{"+t+", plural,\n"+(e?"\t=0{"+e+"}\n":"")+(r?"\tone{"+r+"}\n":"")+"\tother{"+n.other+"}}"};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};n.splitAndEscapeReplacements=function(t){var n={},e={};for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];"function"==typeof i?e[r]=i:n[r]="string"==typeof i?i.replace(/[&<>"']/g,(function(t){return o[t]})):i;}return [n,e]},n.assign=function(t,n){var e=Object(t);for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e};}));H(Y);Y.generator,Y.Plural,Y.splitAndEscapeReplacements,Y.assign;var Z=J((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.dateTimeFormats={short:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},dateTime:{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}},n.numberFormats={currency:{style:"currency",currency:"USD"},decimal:{style:"decimal"},percent:{style:"percent"}},n.default=function(t){var n={};return function(e,r){var o=Array.prototype.slice.call(arguments),i=e+"-"+JSON.stringify(r);if(i in n)return n[i];var u,c=new((u=Function.prototype.bind).call.apply(u,[t,null].concat(o)));return n[i]=c,c}};}));H(Z);Z.dateTimeFormats,Z.numberFormats;var Q=J((function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e="{",r="}";n.default=function(t,n){if(!n)return t;for(var o="",i=[],u=0;u<t.length;u++)switch(t.charAt(u)){case e:i.push(o),o="";break;case r:i.push(n[o]),o="";break;default:o+=t.charAt(u);}return i.push(o),i.join("")};}));H(Q);var tt=J((function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e;n.default=function(t,n){void 0===e&&(e=new DOMParser);var r=e.parseFromString("<wrap>"+t+"</wrap>","text/xml");if(!r.firstChild||"wrap"!==r.firstChild.nodeName)throw new Error("Could not parse XML string");return function t(n,e,r){void 0===r&&(r=!1);if(3===n.nodeType)return n.nodeValue?[n.nodeValue]:[];if(1===n.nodeType){var o=Array.prototype.slice.call(n.childNodes).reduce((function(n,r){return n.concat(t(r,e))}),[]);return r||!e[n.nodeName]?o:[e[n.nodeName].apply(e,o)]}return []}(r.firstChild,n,!0)};}));H(tt);var nt=J((function(t,n){Object.defineProperty(n,"__esModule",{value:!0});n.makeBasicT=function(){var t={},n="en",e=Y.generator.hyphens,r=function(t){return e(t)},o=function(e,r,o){void 0===r&&(r={}),void 0===o&&(o="");var i=function(t,n,e){var r=t[n],o=t.en;return r&&r[e]?r[e]:o&&o[e]?o[e]:""}(t,n,e)||o||e;return "string"==typeof i?Q.default(i,r):i(r)},i=function(t,n,e){return void 0===n&&(n={}),void 0===e&&(e=""),o(e||r(t),n,t)},u={$:function(t,n,e){void 0===n&&(n={}),void 0===e&&(e="");var r=Y.splitAndEscapeReplacements(n),o=r[0],u=r[1],c=i(t,o,e);return tt.default(c,u)},generateId:r,locale:function(){return n},lookup:o,set:function(r){return void 0===r&&(r={}),t=r.messages||t,n=r.locale||n,e=r.idGenerator||e,{messages:t,locale:n,idGenerator:e}}};return Y.assign(i,u)},n.makeT=function(){var t=n.makeBasicT(),e=function(t){if("undefined"==typeof Intl){var n=function(){throw new Error("Missing Intl")};return {date:n,number:n}}try{Intl.DateTimeFormat(),(new Date).toLocaleString(),(new Date).toLocaleDateString(),(new Date).toLocaleTimeString();}catch(t){Date.prototype.toLocaleString=Date.prototype.toString,Date.prototype.toLocaleDateString=Date.prototype.toDateString,Date.prototype.toLocaleTimeString=Date.prototype.toTimeString,Intl.DateTimeFormat=function(){var t=Intl.DateTimeFormat;function n(){var n=Array.prototype.slice.apply(arguments);return n[0]=n[0]||"en-US",n[1]=n[1]||{},n[1].timeZone=n[1].timeZone||"America/Toronto",t.apply(this,n)}return n.prototype=t.prototype,n}();}var e=Z.default(Intl.DateTimeFormat),r=Z.default(Intl.NumberFormat);return {date:function(n,r,o){void 0===r&&(r="long"),void 0===o&&(o=t());var i=Z.dateTimeFormats[r]||Z.dateTimeFormats.long;return e(o,i).format(n)},number:function(n,e,o){void 0===e&&(e="decimal"),void 0===o&&(o=t());var i=Z.numberFormats[e]||Z.numberFormats.decimal;return r(o,i).format(n)}}}(t.locale);return Y.assign(t,e)},n.default=n.makeT();}));H(nt);nt.makeBasicT,nt.makeT;var et=J((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Plural=Y.Plural,n.generator=Y.generator,n.T=nt.default,n.makeBasicT=nt.makeBasicT,n.makeT=nt.makeT;}));H(et);et.Plural,et.generator,et.T,et.makeBasicT;var rt=et.makeT,ot={de:{"static-messages":{"auth-unfamiliar-website":function(t){return "Unbekannte Website"},"auth-type-code-to-fill":function(t){return t.code+" tippen, um "+t.type+t.website+" auszufüllen."},"auth-filling-on-website":function(t){return " auf "+t.website},"auth-incorrect-code-entered":function(t){return "Falscher Code eingegeben"},"auth-why-is-this-needed":function(t){return "Wieso ist das nötig?"},"list-no-items":function(t){return "Keine anzuzeigenden Objekte vorhanden."},"item-save-in-1password":function(t){return "In 1Password speichern"},"item-use-suggested-password":function(t){return "Empfohlenes Passwort nutzen"},"item-type-credit-card":function(t){return "Kreditkarte"},"item-type-identity":function(t){return "Identität"},"item-type-unspecified":function(t){return "Objekt"},categories:function(t){return "Kategorien"},"category-suggestions":function(t){return "Vorschläge"},"category-logins":function(t){return "Logins"},"category-identities":function(t){return "Identitäten"},"category-credit-cards":function(t){return "Kreditkarten"},"category-generated-password":function(t){return "Generiertes Passwort"},"category-hide-on-this-page":function(t){return "Auf dieser Seite ausblenden"},"locked-unlock-from-toolbar":function(t){return "Bitte 1Password per Symbolleistenicon entsperren."},"locked-press-shortcut-to-unlock":function(t){return t.shortcut+"-Kürzel tippen, um 1Password zu entsperren"},"notification-add-account":function(t){return "Konto hinzufügen zu"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "Sie können Konten später in 1Password hinzufügen und entfernen"},"notification-settings":function(t){return "Einstellungen"},"notification-add-account-never":function(t){return "Niemals"},"notification-add-account-confirm":function(t){return "Hinzufügen"},"authorize-fill":function(t){return "Klicken Sie OK, um Ihr 1Password-Objekt auf "+t.host+" auszufüllen"},Title:function(t){return "Titel"},"Save-new-Login":function(t){return "Neuen Login speichern"},Cancel:function(t){return "Abbrechen"},Save:function(t){return "Speichern"},Update:function(t){return "Update"},"unknown-item":function(t){return "Unbekanntes Objekt"},"save-in":function(t){return "Speichern in"}}},en:{"static-messages":{"auth-unfamiliar-website":function(t){return "Unfamiliar Website"},"auth-type-code-to-fill":function(t){return "Type "+t.code+" to authorize "+t.type+" filling"+t.website+"."},"auth-filling-on-website":function(t){return " on "+t.website},"auth-incorrect-code-entered":function(t){return "Incorrect code entered"},"auth-why-is-this-needed":function(t){return "Why is this needed?"},"list-no-items":function(t){return "No items to show."},"item-save-in-1password":function(t){return "Save in 1Password"},"item-use-suggested-password":function(t){return "Use Suggested Password"},"item-type-credit-card":function(t){return "credit card"},"item-type-identity":function(t){return "identity"},"item-type-unspecified":function(t){return "item"},categories:function(t){return "Categories"},"category-suggestions":function(t){return "Suggestions"},"category-logins":function(t){return "Logins"},"category-identities":function(t){return "Identities"},"category-credit-cards":function(t){return "Credit Cards"},"category-generated-password":function(t){return "Generated Password"},"category-hide-on-this-page":function(t){return "Hide on this page"},"locked-unlock-from-toolbar":function(t){return "Please unlock 1Password from the toolbar icon."},"locked-press-shortcut-to-unlock":function(t){return "Press "+t.shortcut+" to unlock 1Password"},"notification-add-account":function(t){return "Add account to"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "You can add and remove accounts later from 1Password"},"notification-settings":function(t){return "Settings"},"notification-add-account-never":function(t){return "Never"},"notification-add-account-confirm":function(t){return "Add"},"authorize-fill":function(t){return "Click OK to fill your 1Password item on "+t.host},Title:function(t){return "Title"},"Save-new-Login":function(t){return "Save new Login"},Cancel:function(t){return "Cancel"},Save:function(t){return "Save"},Update:function(t){return "Update"},"unknown-item":function(t){return "unknown item"},"save-in":function(t){return "save in"}}},es:{"static-messages":{"auth-unfamiliar-website":function(t){return "Página web no familiar"},"auth-type-code-to-fill":function(t){return "Escribe "+t.code+" para autorizar que "+t.type+" complete"+t.website+"."},"auth-filling-on-website":function(t){return " en "+t.website},"auth-incorrect-code-entered":function(t){return "Código incorrecto introducido"},"auth-why-is-this-needed":function(t){return "¿Por qué es esto necesario?"},"list-no-items":function(t){return "No hay elementos que mostrar."},"item-save-in-1password":function(t){return "Guardar en 1Password"},"item-use-suggested-password":function(t){return "Usar contraseña sugerida"},"item-type-credit-card":function(t){return "tarjeta de crédito"},"item-type-identity":function(t){return "identidad"},"item-type-unspecified":function(t){return "elemento"},categories:function(t){return "Categorías"},"category-suggestions":function(t){return "Sugerencias"},"category-logins":function(t){return "Inicios de sesión"},"category-identities":function(t){return "Identidades"},"category-credit-cards":function(t){return "Tarjetas de crédito"},"category-generated-password":function(t){return "Contraseña generada"},"category-hide-on-this-page":function(t){return "Ocultar en esta página"},"locked-unlock-from-toolbar":function(t){return "Por favor, desbloquea 1Password desde el icono en la barra de herramientas."},"locked-press-shortcut-to-unlock":function(t){return "Pulsa "+t.shortcut+" para desbloquear 1Password"},"notification-add-account":function(t){return "Añadir cuenta a"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "Puedes añadir y quitar cuentas más tarde desde 1Password"},"notification-settings":function(t){return "Ajustes"},"notification-add-account-never":function(t){return "Nunca"},"notification-add-account-confirm":function(t){return "Añadir"},"authorize-fill":function(t){return "Haz clic en OK para completar tu elemento de 1Password en "+t.host},Title:function(t){return "Título"},"Save-new-Login":function(t){return "Guardar nuevo inicio de sesión"},Cancel:function(t){return "Cancelar"},Save:function(t){return "Guardar"},Update:function(t){return "Actualizar"},"unknown-item":function(t){return "elemento desconocido"},"save-in":function(t){return "guardar en"}}},fr:{"static-messages":{"auth-unfamiliar-website":function(t){return "Site web non familier"},"auth-type-code-to-fill":function(t){return "Tapez "+t.code+" pour autoriser "+t.type+" à renseigner "+t.website+"."},"auth-filling-on-website":function(t){return " sur "+t.website},"auth-incorrect-code-entered":function(t){return "Code entré incorrect"},"auth-why-is-this-needed":function(t){return "Pourquoi est-ce nécessaire ?"},"list-no-items":function(t){return "Aucun élément à afficher."},"item-save-in-1password":function(t){return "Enregistrer dans 1Password"},"item-use-suggested-password":function(t){return "Utiliser le mot de passe suggéré"},"item-type-credit-card":function(t){return "carte de crédit"},"item-type-identity":function(t){return "identité"},"item-type-unspecified":function(t){return "élément"},categories:function(t){return "Catégories"},"category-suggestions":function(t){return "Suggestions"},"category-logins":function(t){return "Identifiants"},"category-identities":function(t){return "Identités"},"category-credit-cards":function(t){return "Cartes de crédit"},"category-generated-password":function(t){return "Mot de passe généré"},"category-hide-on-this-page":function(t){return "Masquer sur cette page"},"locked-unlock-from-toolbar":function(t){return "Veuillez déverrouiller 1Password depuis l'icône dans la barre d'outils."},"locked-press-shortcut-to-unlock":function(t){return "Appuyez sur "+t.shortcut+" pour déverrouiller 1Password"},"notification-add-account":function(t){return "Ajouter le compte à"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "Vous pouvez ajouter et supprimer des comptes plus tard depuis 1Password"},"notification-settings":function(t){return "Paramètres"},"notification-add-account-never":function(t){return "Jamais"},"notification-add-account-confirm":function(t){return "Ajouter"},"authorize-fill":function(t){return "Cliquez sur OK pour remplir votre élément 1Password sur "+t.host},Title:function(t){return "Titre"},"Save-new-Login":function(t){return "Enregistrer un nouvel Identifiant"},Cancel:function(t){return "Annuler"},Save:function(t){return "Enregistrer"},Update:function(t){return "Mise à jour"},"unknown-item":function(t){return "élément inconnu"},"save-in":function(t){return "enregistrer dans"}}},it:{"static-messages":{"auth-unfamiliar-website":function(t){return "Sito web sconosciuto"},"auth-type-code-to-fill":function(t){return "Digita "+t.code+" per autorizzare "+t.type+" a compilare "+t.website+"."},"auth-filling-on-website":function(t){return " su "+t.website},"auth-incorrect-code-entered":function(t){return "Codice inserito non corretto"},"auth-why-is-this-needed":function(t){return "Perché questo è necessario?"},"list-no-items":function(t){return "Nessun elemento da mostrare."},"item-save-in-1password":function(t){return "Salva in 1Password"},"item-use-suggested-password":function(t){return "Usa password suggerita"},"item-type-credit-card":function(t){return "carta di credito"},"item-type-identity":function(t){return "identità"},"item-type-unspecified":function(t){return "elemento"},categories:function(t){return "Categorie"},"category-suggestions":function(t){return "Suggerimenti"},"category-logins":function(t){return "Dati di accesso"},"category-identities":function(t){return "Identità"},"category-credit-cards":function(t){return "Carte di credito"},"category-generated-password":function(t){return "Password generata"},"category-hide-on-this-page":function(t){return "Nascondi su questa pagina"},"locked-unlock-from-toolbar":function(t){return "Sblocca 1Password dall'icona nella barra degli strumenti."},"locked-press-shortcut-to-unlock":function(t){return "Premi "+t.shortcut+" per sbloccare 1Password"},"notification-add-account":function(t){return "Aggiungi account a"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "Puoi aggiungere e rimuovere account in un secondo momento da 1Password"},"notification-settings":function(t){return "Impostazioni"},"notification-add-account-never":function(t){return "Mai"},"notification-add-account-confirm":function(t){return "Aggiungi"},"authorize-fill":function(t){return "Clicca OK per compilare il tuo elemento di 1Password su "+t.host},Title:function(t){return "Titolo"},"Save-new-Login":function(t){return "Salva nuovo accesso"},Cancel:function(t){return "Annulla"},Save:function(t){return "Salva"},Update:function(t){return "Aggiorna"},"unknown-item":function(t){return "elemento sconosciuto"},"save-in":function(t){return "salva in"}}},ja:{"static-messages":{"auth-unfamiliar-website":function(t){return "不明なウェブサイト"},"auth-type-code-to-fill":function(t){return t.code+" を入力し、"+t.website+" に"+t.type+" を入力します。"},"auth-filling-on-website":function(t){return " 指定先 "+t.website},"auth-incorrect-code-entered":function(t){return "不正なコードが入力されました"},"auth-why-is-this-needed":function(t){return "なぜこれが必要ですか？"},"list-no-items":function(t){return "表示する項目がありません。"},"item-save-in-1password":function(t){return "1Passwordに保存する"},"item-use-suggested-password":function(t){return "おすすめのパスワードを使用する"},"item-type-credit-card":function(t){return "クレジットカード"},"item-type-identity":function(t){return "個人情報"},"item-type-unspecified":function(t){return "アイテム"},categories:function(t){return "カテゴリ"},"category-suggestions":function(t){return "おすすめ"},"category-logins":function(t){return "ログイン"},"category-identities":function(t){return "個人情報"},"category-credit-cards":function(t){return "クレジットカード"},"category-generated-password":function(t){return "生成されたパスワード"},"category-hide-on-this-page":function(t){return "このページに表示しない"},"locked-unlock-from-toolbar":function(t){return "ツールバーのアイコンから1Passwordをアンロックしてください。"},"locked-press-shortcut-to-unlock":function(t){return t.shortcut+" を使用して、1Passwordをアンロック"},"notification-add-account":function(t){return "アカウントの追加先"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "アカウントは、後で1Passwordから追加したり削除することができます"},"notification-settings":function(t){return "設定"},"notification-add-account-never":function(t){return "追加しない"},"notification-add-account-confirm":function(t){return "追加する"},"authorize-fill":function(t){return "「OK」をクリックして、"+t.host+" の1Passwordアイテムを入力します"},Title:function(t){return "タイトル"},"Save-new-Login":function(t){return "新規ログインを保存"},Cancel:function(t){return "キャンセル"},Save:function(t){return "保存"},Update:function(t){return "アップデート"},"unknown-item":function(t){return "不明なアイテム"},"save-in":function(t){return "保存"}}},ko:{"static-messages":{"auth-unfamiliar-website":function(t){return "친숙하지 않은 웹사이트"},"auth-type-code-to-fill":function(t){return t.website+" "+t.type+"의 자동 입력을 승인하려면 "+t.code+"을(를) 입력하세요."},"auth-filling-on-website":function(t){return t.website+"에서"},"auth-incorrect-code-entered":function(t){return "잘못된 코드가 입력되었습니다"},"auth-why-is-this-needed":function(t){return "이것은 왜 필요하나요?"},"list-no-items":function(t){return "표시할 항목이 없습니다."},"item-save-in-1password":function(t){return "1Password에 저장"},"item-use-suggested-password":function(t){return "제안된 비밀번호 사용"},"item-type-credit-card":function(t){return "신용카드"},"item-type-identity":function(t){return "신원 정보"},"item-type-unspecified":function(t){return "항목"},categories:function(t){return "카테고리"},"category-suggestions":function(t){return "제안"},"category-logins":function(t){return "로그인 정보"},"category-identities":function(t){return "신원 정보"},"category-credit-cards":function(t){return "신용카드"},"category-generated-password":function(t){return "생성된 비밀번호"},"category-hide-on-this-page":function(t){return "이 페이지에서 숨기기"},"locked-unlock-from-toolbar":function(t){return "도구 모음 아이콘에서 1Password를 잠금 해제하세요."},"locked-press-shortcut-to-unlock":function(t){return t.shortcut+"을(를) 눌러서 1Password를 잠금 해제합니다"},"notification-add-account":function(t){return "다음에 계정 추가"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "나중에 1Password에서 계정을 추가 또는 제거할 수 있습니다"},"notification-settings":function(t){return "설정"},"notification-add-account-never":function(t){return "안 함"},"notification-add-account-confirm":function(t){return "추가"},"authorize-fill":function(t){return t.host+"에서 1Password 항목을 채우려면 확인을 클릭하세요"},Title:function(t){return "제목"},"Save-new-Login":function(t){return "새 로그인 정보 저장"},Cancel:function(t){return "취소"},Save:function(t){return "저장"},Update:function(t){return "업데이트"},"unknown-item":function(t){return "알 수 없는 항목"},"save-in":function(t){return "저장 위치"}}},pt:{"static-messages":{"auth-unfamiliar-website":function(t){return "Site desconhecido"},"auth-type-code-to-fill":function(t){return "Digite "+t.code+" para autorizar "+t.type+" a preencher"+t.website+"."},"auth-filling-on-website":function(t){return " em "+t.website},"auth-incorrect-code-entered":function(t){return "Foi informado um código incorreto"},"auth-why-is-this-needed":function(t){return "Por que isso é necessário?"},"list-no-items":function(t){return "Nenhum item para mostrar."},"item-save-in-1password":function(t){return "Salvar no 1Password"},"item-use-suggested-password":function(t){return "Usar a senha sugerida"},"item-type-credit-card":function(t){return "cartão de crédito"},"item-type-identity":function(t){return "identidade"},"item-type-unspecified":function(t){return "item"},categories:function(t){return "Categorias"},"category-suggestions":function(t){return "Sugestões"},"category-logins":function(t){return "Credenciais"},"category-identities":function(t){return "Identidades"},"category-credit-cards":function(t){return "Cartões de crédito"},"category-generated-password":function(t){return "Senha gerada"},"category-hide-on-this-page":function(t){return "Ocultar nesta página"},"locked-unlock-from-toolbar":function(t){return "Desbloqueie o 1Password no ícone da barra de ferramentas."},"locked-press-shortcut-to-unlock":function(t){return "Pressione "+t.shortcut+" para desbloquear o 1Password"},"notification-add-account":function(t){return "Adicionar conta ao"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "Você poderá adicionar e remover contas do 1Password depois"},"notification-settings":function(t){return "Configurações"},"notification-add-account-never":function(t){return "Nunca"},"notification-add-account-confirm":function(t){return "Adicionar"},"authorize-fill":function(t){return "Clique em OK para preencher o item do 1Password no "+t.host},Title:function(t){return "Título"},"Save-new-Login":function(t){return "Salvar novas credenciais"},Cancel:function(t){return "Cancelar"},Save:function(t){return "Salvar"},Update:function(t){return "Atualizar"},"unknown-item":function(t){return "item desconhecido"},"save-in":function(t){return "salvar em"}}},ru:{"static-messages":{"auth-unfamiliar-website":function(t){return "Неизвестный веб-сайт"},"auth-type-code-to-fill":function(t){return "Введите "+t.code+" для авторизации "+t.type+" заполнения "+t.website+"."},"auth-filling-on-website":function(t){return " на "+t.website},"auth-incorrect-code-entered":function(t){return "Введен неверный код"},"auth-why-is-this-needed":function(t){return "Почему это необходимо?"},"list-no-items":function(t){return "Нет элементов для отображения."},"item-save-in-1password":function(t){return "Сохранить в 1Password"},"item-use-suggested-password":function(t){return "Использовать предложенный пароль"},"item-type-credit-card":function(t){return "банковская карта"},"item-type-identity":function(t){return "удос-я личности"},"item-type-unspecified":function(t){return "элемент"},categories:function(t){return "Категории"},"category-suggestions":function(t){return "Предложения"},"category-logins":function(t){return "Данные для входа"},"category-identities":function(t){return "Удос-я личности"},"category-credit-cards":function(t){return "Банковские карты"},"category-generated-password":function(t){return "Сгенерированный пароль"},"category-hide-on-this-page":function(t){return "Скрыть на этой странице"},"locked-unlock-from-toolbar":function(t){return "Пожалуйста, разблокируйте 1Password, нажав на иконку в панели инструментов."},"locked-press-shortcut-to-unlock":function(t){return "Нажмите "+t.shortcut+" для разблокировки 1Password"},"notification-add-account":function(t){return "Добавить аккаунт в"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "Вы можете добавить или удалить аккаунты из 1Password позже, перейдя в Настройки"},"notification-settings":function(t){return "Настройки"},"notification-add-account-never":function(t){return "Никогда"},"notification-add-account-confirm":function(t){return "Добавить"},"authorize-fill":function(t){return "Нажмите ОК, чтобы заполнить элемент 1Password на "+t.host},Title:function(t){return "Название"},"Save-new-Login":function(t){return "Сохранить новый логин"},Cancel:function(t){return "Отмена"},Save:function(t){return "Сохранить"},Update:function(t){return "Обновить"},"unknown-item":function(t){return "неизвестный элемент"},"save-in":function(t){return "сохранить в"}}},"zh-CN":{"static-messages":{"auth-unfamiliar-website":function(t){return "不熟悉的网站"},"auth-type-code-to-fill":function(t){return "输入 "+t.code+" 以授权 "+t.type+" 填充"+t.website+"。"},"auth-filling-on-website":function(t){return "在 "+t.website},"auth-incorrect-code-entered":function(t){return "输入了不正确的代码"},"auth-why-is-this-needed":function(t){return "为什么需要此操作？"},"list-no-items":function(t){return "没有可显示的项目。"},"item-save-in-1password":function(t){return "在 1Password 中保存"},"item-use-suggested-password":function(t){return "使用建议的密码"},"item-type-credit-card":function(t){return "信用卡"},"item-type-identity":function(t){return "身份标识"},"item-type-unspecified":function(t){return "项目"},categories:function(t){return "类别"},"category-suggestions":function(t){return "建议"},"category-logins":function(t){return "登录信息"},"category-identities":function(t){return "身份标识"},"category-credit-cards":function(t){return "信用卡"},"category-generated-password":function(t){return "已生成的密码"},"category-hide-on-this-page":function(t){return "在此页面隐藏"},"locked-unlock-from-toolbar":function(t){return "请从工具栏图标中解锁 1Password。"},"locked-press-shortcut-to-unlock":function(t){return "按下 "+t.shortcut+" 来解锁 1Password"},"notification-add-account":function(t){return "将帐户添加到"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "之后您可以在 1Password 中添加和移除帐户"},"notification-settings":function(t){return "设置"},"notification-add-account-never":function(t){return "从不"},"notification-add-account-confirm":function(t){return "添加"},"authorize-fill":function(t){return "点击 OK 以在 "+t.host+" 填写您 1Password 的项目"},Title:function(t){return "标题"},"Save-new-Login":function(t){return "保存新登录信息"},Cancel:function(t){return "取消"},Save:function(t){return "保存"},Update:function(t){return "更新"},"unknown-item":function(t){return "未知项目"},"save-in":function(t){return "保存在"}}},"zh-TW":{"static-messages":{"auth-unfamiliar-website":function(t){return "不熟悉的網站"},"auth-type-code-to-fill":function(t){return "輸入 "+t.code+" 以授權 "+t.type+" 填充"+t.website+"。"},"auth-filling-on-website":function(t){return "到 "+t.website},"auth-incorrect-code-entered":function(t){return "輸入了不正確的代碼"},"auth-why-is-this-needed":function(t){return "為什麼需要此行為？"},"list-no-items":function(t){return "無可顯示的項目。"},"item-save-in-1password":function(t){return "在 1Password 中儲存"},"item-use-suggested-password":function(t){return "使用推薦的密碼"},"item-type-credit-card":function(t){return "信用卡"},"item-type-identity":function(t){return "身分認證"},"item-type-unspecified":function(t){return "項目"},categories:function(t){return "類別"},"category-suggestions":function(t){return "建議"},"category-logins":function(t){return "登入"},"category-identities":function(t){return "身分認證"},"category-credit-cards":function(t){return "信用卡"},"category-generated-password":function(t){return "建立密碼"},"category-hide-on-this-page":function(t){return "在此頁面上隱藏"},"locked-unlock-from-toolbar":function(t){return "請從工具列圖示中解鎖 1Password。"},"locked-press-shortcut-to-unlock":function(t){return "按 "+t.shortcut+" 來解鎖 1Password"},"notification-add-account":function(t){return "將帳號添加到"},"notification-1password-x":function(t){return "1Password X"},"notification-add-remove-later":function(t){return "之後您可以在 1Password 中添加和移除帳號"},"notification-settings":function(t){return "設定"},"notification-add-account-never":function(t){return "永不"},"notification-add-account-confirm":function(t){return "添加"},"authorize-fill":function(t){return "點擊 OK 以在 "+t.host+" 填寫您 1Password 的項目"},Title:function(t){return "標題"},"Save-new-Login":function(t){return "儲存新登入"},Cancel:function(t){return "取消"},Save:function(t){return "儲存"},Update:function(t){return "更新"},"unknown-item":function(t){return "未知項目"},"save-in":function(t){return "儲存在"}}}};function it(t){return "en"in ot&&"object"==typeof ot.en?void 0!==ot[t]:"en"===t}function ut(t){let n,e={},r={};return n="en"in ot&&"object"==typeof ot.en?ot[t]:ot,"messages"in n&&(r=n.messages),"static-messages"in n&&(e=n["static-messages"]),{[t]:Object.assign(Object.assign({},e),r)}}function ct(t){let n;const e=t[3].default,r=u(e,t,t[2],null);return {c(){r&&r.c();},m(t,e){r&&r.m(t,e),n=!0;},p(t,[n]){r&&r.p&&4&n&&r.p(c(e,t,t[2],null),a(e,t[2],n,null));},i(t){n||(j(r,t),n=!0);},o(t){I(r,t),n=!1;},d(t){r&&r.d(t);}}}function at(t,n,e){const r=new URLSearchParams(window.location.search);let o=r.get("locale");b("locale",function(t){if(!it(t))throw new Error(`Not able to support locale ${t}`);const n=ut(t),e=rt();return e.set({locale:t,messages:n}),e}(o));let{$$slots:i={},$$scope:u}=n;return t.$set=t=>{"$$scope"in t&&e(2,u=t.$$scope);},[r,o,u,i]}class st extends q{constructor(t){super(),D(this,t,at,ct,i,{});}}function dt(t){let n,e;var o=t[1];if(o)var i=new o({});return {c(){i&&M(i.$$.fragment),n=g("");},m(t,r){i&&E(i,t,r),d(t,n,r),e=!0;},p(t,e){if(o!==(o=t[1])){if(i){L={r:0,c:[],p:L};const t=i;I(t.$$.fragment,1,0,()=>{U(t,1);}),L.r||r(L.c),L=L.p;}o?(M((i=new o({})).$$.fragment),j(i.$$.fragment,1),E(i,n.parentNode,n)):i=null;}},i(t){e||(i&&j(i.$$.fragment,t),e=!0);},o(t){i&&I(i.$$.fragment,t),e=!1;},d(t){t&&f(n),i&&U(i,t);}}}function ft(t){let n;const e=new st({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}});return {c(){M(e.$$.fragment);},m(t,r){E(e,t,r),n=!0;},p(t,n){const r={};6&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);},i(t){n||(j(e.$$.fragment,t),n=!0);},o(t){I(e.$$.fragment,t),n=!1;},d(t){U(e,t);}}}function lt(t){let n;const e=new W({props:{bridge:t[0],$$slots:{default:[ft]},$$scope:{ctx:t}}});return {c(){M(e.$$.fragment);},m(t,r){E(e,t,r),n=!0;},p(t,[n]){const r={};1&n&&(r.bridge=t[0]),6&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);},i(t){n||(j(e.$$.fragment,t),n=!0);},o(t){I(e.$$.fragment,t),n=!1;},d(t){U(e,t);}}}function gt(t,n,e){let{bridge:r}=n,{component:o}=n;return t.$set=t=>{"bridge"in t&&e(0,r=t.bridge),"component"in t&&e(1,o=t.component);},[r,o]}class pt extends q{constructor(t){super(),D(this,t,gt,lt,i,{bridge:0,component:1});}}class mt{constructor(t){this.transport=t;}sendAddAccountResponse(t,n){return this.transport.request({name:"add-account-response",data:{uuid:t,response:n}})}}function ht(n){let e,o,i,u,c,a,w,y,v,b,k,P,$,S,T,x,C,_,A,z,O,L,j,I,M,E,U,N,D,q,F=n[0].lookup("notification-add-account")+"",K=n[0].lookup("notification-add-remove-later")+"",R=n[0].lookup("notification-settings")+"";return {c(){e=l("div"),o=l("div"),i=l("img"),c=p(),a=l("div"),a.innerHTML='<img src="../../images/icons/onepassword-48@2x.png" alt="">',w=p(),y=l("div"),v=l("p"),b=g(F),k=p(),P=l("span"),P.textContent=`${n[0].lookup("notification-1password-x")}`,$=p(),S=l("p"),T=g(K),x=p(),C=l("span"),C.textContent=">",_=p(),A=l("img"),O=p(),L=l("span"),L.textContent=">",j=p(),I=g(R),M=p(),E=l("div"),U=l("button"),U.textContent=`${n[0].lookup("notification-add-account-never")}`,N=p(),D=l("button"),D.textContent=`${n[0].lookup("notification-add-account-confirm")}`,i.src!==(u="../../images/close-button.svg")&&h(i,"src","../../images/close-button.svg"),h(i,"alt","Close"),h(o,"id","close-button"),h(o,"class","notification-close"),h(a,"class","notification-sidebar"),h(v,"class","notification-title"),h(C,"class","notification-chevron"),h(A,"id","gear"),A.src!==(z="../../images/settings.svg")&&h(A,"src","../../images/settings.svg"),h(A,"alt",""),h(L,"class","notification-chevron"),h(S,"class","notification-secondary"),h(U,"id","cancel-button"),h(U,"class","notification-button"),h(D,"id","ok-button"),h(D,"class","notification-button"),h(E,"class","notification-buttons"),h(y,"class","notification-content"),h(e,"class","notification-container");},m(t,r){d(t,e,r),s(e,o),s(o,i),s(e,c),s(e,a),s(e,w),s(e,y),s(y,v),s(v,b),s(v,k),s(v,P),s(y,$),s(y,S),s(S,T),s(S,x),s(S,C),s(S,_),s(S,A),s(S,O),s(S,L),s(S,j),s(S,I),s(y,M),s(y,E),s(E,U),s(E,N),s(E,D),q=[m(i,"click",n[1]),m(U,"click",n[1]),m(D,"click",n[1])];},p:t,i:t,o:t,d(t){t&&f(e),r(q);}}}function wt(t){const n=k("bridge"),e=new URLSearchParams(window.location.search).get("uuid");return [k("locale"),function(t){const{target:r}=t;if(!(r instanceof HTMLElement))return;let o="NO";"ok-button"===r.id?o="YES":"cancel-button"===r.id&&(o="IGNORE"),n.sendAddAccountResponse(e,o);}]}class yt extends q{constructor(t){super(),D(this,t,wt,ht,i,{});}}document.addEventListener("DOMContentLoaded",()=>{new pt({target:document.body,props:{bridge:mt,component:yt}});});

}());