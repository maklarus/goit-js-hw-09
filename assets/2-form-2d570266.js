const o=document.querySelector(".feedback-form"),n=document.querySelector("button");function l(){const e={};for(const a of o.elements)(a.tagName==="INPUT"||a.tagName==="TEXTAREA")&&(e[a.name]=a.value.trim());const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}function m(){for(const e of o.elements)e.type!=="submit"&&e.name&&(e.value="")}function r(e){l()}function s(e){e.preventDefault();const t=o.email.value.trim(),a=o.message.value.trim();t&&a?(console.log({email:t,message:a}),localStorage.clear(),m()):alert("Заповніть всі поля форми перед відправкою.")}function c(){const e=localStorage.getItem("feedback-form-state");if(e!==null){const t=JSON.parse(e);o.email.value=t.email||"",o.message.value=t.message||""}}n.addEventListener("click",s);o.addEventListener("input",r);document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=2-form-2d570266.js.map