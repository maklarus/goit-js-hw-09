const t=document.querySelector(".feedback-form");document.querySelector("button");function n(){const e={};for(const o of t.elements)(o.tagName==="INPUT"||o.tagName==="TEXTAREA")&&(e[o.name]=o.value.trim());const a=JSON.stringify(e);localStorage.setItem("feedback-form-state",a)}function l(){for(const e of t.elements)e.type!=="submit"&&e.name&&(e.value="")}function m(e){n()}function s(e){e.preventDefault();const a=t.email.value.trim(),o=t.message.value.trim();a&&o?(console.log({email:a,message:o}),localStorage.clear(),l()):alert("Заповніть всі поля форми перед відправкою.")}function r(){const e=localStorage.getItem("feedback-form-state");if(e!==null){const a=JSON.parse(e);t.email.value=a.email||"",t.message.value=a.message||""}}t.addEventListener("submit",s);t.addEventListener("input",m);document.addEventListener("DOMContentLoaded",r);
//# sourceMappingURL=2-form-7a5bc247.js.map
