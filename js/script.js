document.documentElement.classList.add('js');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
const year=document.getElementById('year');
if(menuToggle&&navLinks){menuToggle.addEventListener('click',()=>navLinks.classList.toggle('active'));navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('active')))}
if(year) year.textContent=new Date().getFullYear();
function handleForm(event){event.preventDefault();const msg=document.getElementById('formMessage');if(msg) msg.textContent='Thank you. Your request has been received. Connect this form to your backend before launch.';event.target.reset()}
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.08});reveals.forEach(el=>revealObserver.observe(el));}else{reveals.forEach(el=>el.classList.add('visible'));}
