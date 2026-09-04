const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const menuBtn=$('.menu-btn'), panel=$('.mobile-panel'), closeBtn=$('.close-btn');
function setMenu(open){if(!panel||!menuBtn)return;panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));menuBtn.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''}
menuBtn?.addEventListener('click',()=>setMenu(true));closeBtn?.addEventListener('click',()=>setMenu(false));$$('.mobile-panel a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
const progress=$('.scroll-progress span'), topBtn=$('.back-to-top');
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight; if(progress)progress.style.width=(max?scrollY/max*100:0)+'%'; if(topBtn)topBtn.style.display=scrollY>700?'block':'none'}
addEventListener('scroll',onScroll,{passive:true});onScroll();topBtn?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
$$('.choice-chip').forEach(btn=>btn.addEventListener('click',()=>{ $$('.choice-chip').forEach(b=>b.classList.remove('active'));btn.classList.add('active'); document.getElementById(btn.dataset.target)?.scrollIntoView({behavior:'smooth',block:'start'});}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});io.unobserve(e.target)}}),{threshold:.08});
$$('.section,.product-detail,.case-showcase,.contact-cta').forEach(el=>io.observe(el));
