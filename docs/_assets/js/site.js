(function(){
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  const toggle=document.querySelector('.nav-toggle'); const nav=document.querySelector('.site-nav');
  if(toggle && nav){ toggle.addEventListener('click',()=>{const e=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded', String(!e)); nav.setAttribute('aria-expanded', String(!e));}); }
})();
