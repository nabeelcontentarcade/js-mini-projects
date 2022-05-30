const toggle = document.getElementById("toggle")
const close = document.getElementById("close")
const open = document.getElementById("open")
const modal = document.getElementById("modal")



toggle.addEventListener("click", function () { document.body.classList.toggle("show-nav")})
open.addEventListener("click", function(){ modal.classList.add("show-modal")})
close.addEventListener("click", function() { modal.classList.remove("show-modal")})
window.addEventListener("click", function(e) { e.target == modal ? modal.classList.remove("show-modal") : false})