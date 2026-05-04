// app.js
const routes = {
"/": { title: "Home", file: "pages/home.html" },
"/about": { title: "About", file: "pages/about.html"
},
"/contact": { title: "Contact", file: 
"pages/contact.html"}," /off-topic": { title: "Off Topic", file: "pages/off-topic.html" },
"/other": { title: "Other", file: "pages/other.html" }
};
const notFound = {
title: "Not Found",
file: "pages/404.html"
};




function parseHash() {
return location.hash.replace(/^#/, "") || "/";
}
function router() {
const path  = parseHash();
const route = routes[path] || notFound;
fetch("./" + route.file)
.then(r => r.text())
.then(html => {
document.getElementById("app").innerHTML = html;
document.title = route.title + " · PWA Demo";
mount(path);   
// re-bind page-specific listeners
});
}
window.addEventListener("hashchange", router);    
// nav clicks
window.addEventListener("DOMContentLoaded", router); // initial + deep lin