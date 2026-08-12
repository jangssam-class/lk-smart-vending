const menuBtn=document.querySelector('.menu-btn');
const mobilePanel=document.querySelector('.mobile-panel');
const closeBtn=document.querySelector('.close-btn');
function openMenu(){mobilePanel?.classList.add('open');mobilePanel?.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeMenu(){mobilePanel?.classList.remove('open');mobilePanel?.setAttribute('aria-hidden','true');document.body.style.overflow=''}
menuBtn?.addEventListener('click',openMenu);closeBtn?.addEventListener('click',closeMenu);
mobilePanel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

const header=document.querySelector('.site-header');
const progress=document.querySelector('.scroll-progress span');
const back=document.querySelector('.back-to-top');
function onScroll(){
  const y=window.scrollY;
  header?.classList.toggle('scrolled',y>20);
  const max=document.documentElement.scrollHeight-window.innerHeight;
  if(progress) progress.style.width=(max?Math.min(100,y/max*100):0)+'%';
  back?.classList.toggle('show',y>600);
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
back?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}
  });
},{threshold:.12,rootMargin:'0px 0px -35px 0px'});
document.querySelectorAll('.reveal-up,.reveal-zoom,.reveal-grid,[data-reveal-section] .section-title-row,[data-reveal-section] .section-head')
.forEach(el=>observer.observe(el));

const cases=[{"tag": "의료시설형", "title": "병원·의료시설", "image": "images/hospital-v17.jpg", "summary": "방문객과 근무자가 편리하게 이용할 수 있도록 음료, 간식, 위생용품 등 공간 특성에 맞는 상품 구성을 검토할 수 있습니다.", "place": "대기공간 · 휴게공간", "goods": "음료 · 간식 · 위생용품", "point": "24시간 이용 편의"}, {"tag": "오피스형", "title": "사무실·사내복지", "image": "images/office.jpg", "summary": "직원들이 휴게시간에 간편하게 이용할 수 있도록 간식과 음료, 간편식 중심으로 구성하는 형태입니다.", "place": "사내 휴게실 · 공용공간", "goods": "간식 · 음료 · 간편식", "point": "직원 복지 · 접근성"}, {"tag": "라운지형", "title": "카페·휴게공간", "image": "images/cafe-wide.jpg", "summary": "사람이 머무는 라운지나 휴게공간에서 음료와 간식을 함께 판매하도록 구성할 수 있습니다.", "place": "라운지 · 카페 · 휴게공간", "goods": "음료 · 스낵 · 간편식", "point": "공간 분위기와 조화"}, {"tag": "피트니스형", "title": "헬스장·운동시설", "image": "images/fitness.jpg", "summary": "운동 전후 구매 수요를 고려해 음료와 간식, 소형 운동 관련 상품 등을 검토할 수 있습니다.", "place": "출입구 · 휴게존", "goods": "음료 · 간식 · 운동용품", "point": "운동 전후 구매 편의"}, {"tag": "주거형", "title": "아파트·주거시설", "image": "images/apartment.jpg", "summary": "입주민이 가까운 곳에서 필요한 생활 편의상품을 구매할 수 있도록 공용공간에 구성하는 형태입니다.", "place": "커뮤니티실 · 공용공간", "goods": "생활용품 · 간식 · 음료", "point": "생활 편의성"}, {"tag": "산업형", "title": "공장·작업현장", "image": "images/factory.jpg", "summary": "교대근무나 휴게시간에 이용하기 편하도록 음료, 간편식, 간식 등 빠르게 구매할 수 있는 상품 구성을 검토합니다.", "place": "휴게실 · 작업장 인근", "goods": "음료 · 간편식 · 간식", "point": "교대근무 편의"}, {"tag": "숙박형", "title": "호텔·숙박시설", "image": "images/hotel.jpg", "summary": "프런트 운영시간과 관계없이 투숙객이 필요한 편의상품을 구매할 수 있도록 구성하는 형태입니다.", "place": "로비 · 객실층 공용공간", "goods": "편의상품 · 음료 · 간식", "point": "야간 이용 편의"}, {"tag": "교육시설형", "title": "학교·학원", "image": "images/school.jpg", "summary": "시설 운영방침과 이용자 특성을 고려해 간식, 음료 및 학습 편의상품 등을 구성할 수 있습니다.", "place": "휴게공간 · 공용구역", "goods": "간식 · 음료 · 학습편의", "point": "이용자 동선 고려"}, {"tag": "외부형", "title": "실외 보호 설치", "image": "images/outdoor-cover-front.jpg", "summary": "외부 환경에서는 비, 바람, 직사광선 등 현장 조건을 확인한 뒤 보호 구조물과 설치 방식을 함께 검토합니다.", "place": "건물 외부 · 반실외 공간", "goods": "현장 목적에 맞춤", "point": "보호 구조 · 현장조건"}, {"tag": "무인매장형", "title": "식품 판매 공간", "image": "images/ramen-install.jpg", "summary": "기존 무인판매 설비와 함께 배치해 음료나 간식 등 연계 상품을 추가로 판매하는 형태로 활용할 수 있습니다.", "place": "무인매장 · 식품판매존", "goods": "식품 · 음료 · 연계상품", "point": "복합 판매 구성"}];
let current=0;
const cards=[...document.querySelectorAll('.case-card')];
const previewImage=document.getElementById('previewImage');
const previewTag=document.getElementById('previewTag');
const previewTitle=document.getElementById('previewTitle');
const previewText=document.getElementById('previewText');
const previewPlace=document.getElementById('previewPlace');
const previewGoods=document.getElementById('previewGoods');
const previewPoint=document.getElementById('previewPoint');
const dots=document.getElementById('caseDots');
const track=document.getElementById('caseTrack');

cases.forEach((_,i)=>{
  const b=document.createElement('button');
  b.type='button'; b.setAttribute('aria-label',(i+1)+'번 사례'); b.addEventListener('click',()=>selectCase(i));
  dots?.appendChild(b);
});

function selectCase(i, scroll=true){
  current=(i+cases.length)%cases.length;
  const c=cases[current];
  cards.forEach((el,n)=>el.classList.toggle('active',n===current));
  [...dots.children].forEach((el,n)=>el.classList.toggle('active',n===current));
  previewImage.src=c.image; previewImage.alt=c.title;
  previewTag.textContent=c.tag; previewTitle.textContent=c.title; previewText.textContent=c.summary;
  previewPlace.textContent=c.place; previewGoods.textContent=c.goods; previewPoint.textContent=c.point;
  if(scroll) cards[current]?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
}
cards.forEach((card,i)=>card.addEventListener('click',()=>selectCase(i)));
document.getElementById('casePrev')?.addEventListener('click',()=>selectCase(current-1));
document.getElementById('caseNext')?.addEventListener('click',()=>selectCase(current+1));
selectCase(0,false);

const modal=document.getElementById('caseModal');
const modalImage=document.getElementById('modalImage');
const modalTag=document.getElementById('modalTag');
const modalTitle=document.getElementById('modalTitle');
const modalSummary=document.getElementById('modalSummary');
const modalPlace=document.getElementById('modalPlace');
const modalGoods=document.getElementById('modalGoods');
const modalPoint=document.getElementById('modalPoint');
function openModal(i=current){
  current=(i+cases.length)%cases.length; selectCase(current,false);
  const c=cases[current];
  modalImage.src=c.image; modalImage.alt=c.title; modalTag.textContent=c.tag; modalTitle.textContent=c.title;
  modalSummary.textContent=c.summary; modalPlace.textContent=c.place; modalGoods.textContent=c.goods; modalPoint.textContent=c.point;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.getElementById('previewMore')?.addEventListener('click',()=>openModal());
document.getElementById('openFirstCase')?.addEventListener('click',()=>openModal(current));
cards.forEach((card,i)=>card.addEventListener('dblclick',()=>openModal(i)));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.getElementById('modalPrev')?.addEventListener('click',()=>openModal(current-1));
document.getElementById('modalNext')?.addEventListener('click',()=>openModal(current+1));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const nationwideRegions={"서울": ["강남구", "서초구", "송파구", "마포구", "영등포구", "강서구", "관악구", "노원구"], "부산": ["해운대구", "수영구", "동래구", "부산진구", "남구", "연제구", "금정구", "사상구", "사하구", "기장군"], "대구": ["수성구", "달서구", "달성군", "중구", "동구", "북구"], "인천": ["남동구", "연수구", "부평구", "서구", "미추홀구", "계양구"], "광주": ["광산구", "북구", "서구", "남구", "동구"], "대전": ["유성구", "서구", "중구", "동구", "대덕구"], "울산": ["남구", "중구", "북구", "동구", "울주군"], "세종": ["세종시"], "경기": ["수원시", "성남시", "용인시", "고양시", "화성시", "부천시", "남양주시", "안산시", "평택시", "김포시", "파주시", "시흥시"], "강원": ["춘천시", "원주시", "강릉시", "속초시", "동해시", "삼척시"], "충북": ["청주시", "충주시", "제천시", "진천군", "음성군"], "충남": ["천안시", "아산시", "서산시", "당진시", "공주시", "보령시"], "전북": ["전주시", "익산시", "군산시", "정읍시", "완주군"], "전남": ["목포시", "여수시", "순천시", "나주시", "광양시"], "경북": ["포항시", "경주시", "구미시", "경산시", "안동시", "김천시"], "경남": ["창원시", "김해시", "양산시", "진주시", "거제시", "통영시"], "제주": ["제주시", "서귀포시"]};const rp=document.getElementById('regionProvince'),rc=document.getElementById('regionCity'),rpl=document.getElementById('regionPlace'),pg=document.getElementById('provinceGrid');function fillRC(){rc.innerHTML=(nationwideRegions[rp.value]||[]).map(x=>`<option>${x}</option>`).join('');updateR()}function updateR(){if(!rp)return;let l=`${rp.value} ${rc.value}`,pl=rpl.value;regionHeadline.textContent=`${l} 무인자판기 설치 상담`;let k=[`${l} 무인자판기 설치`,`${l} 자판기 렌탈`,`${l} 냉동자판기`,`${l} 멀티자판기`,`${l} 무인판매기`,`${l} ${pl} 자판기`];regionKeywords.innerHTML=k.map(x=>`<span>${x}</span>`).join('');regionDescription.textContent=`${l} ${pl} 환경과 판매 상품에 맞는 무인판매 구성을 상담할 수 있습니다.`}if(rp){rp.innerHTML=Object.keys(nationwideRegions).map(x=>`<option>${x}</option>`).join('');rp.value='부산';fillRC();pg.innerHTML=Object.entries(nationwideRegions).map(([x,a])=>`<button data-p="${x}"><b>${x}</b><span>${a.length}개 주요 지역</span></button>`).join('');pg.querySelectorAll('button').forEach(b=>b.onclick=()=>{rp.value=b.dataset.p;fillRC()});rp.onchange=fillRC;rc.onchange=updateR;rpl.onchange=updateR;}