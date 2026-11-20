(()=>{
'use strict';
if(document.getElementById('lk-helper'))return;
const R={"서울":["강남구","서초구","송파구","마포구","영등포구","강서구","관악구","노원구"],"부산":["해운대구","수영구","동래구","부산진구","남구","연제구","금정구","사상구","사하구","기장군"],"대구":["수성구","달서구","달성군","중구","동구","북구"],"인천":["남동구","연수구","부평구","서구","미추홀구","계양구"],"광주":["광산구","북구","서구","남구","동구"],"대전":["유성구","서구","중구","동구","대덕구"],"울산":["남구","중구","북구","동구","울주군"],"세종":["세종시"],"경기":["수원시","성남시","용인시","고양시","화성시","부천시","남양주시","안산시","평택시","김포시","파주시","시흥시"],"강원":["춘천시","원주시","강릉시","속초시","동해시","삼척시"],"충북":["청주시","충주시","제천시","진천군","음성군"],"충남":["천안시","아산시","서산시","당진시","공주시","보령시"],"전북":["전주시","익산시","군산시","정읍시","완주군"],"전남":["목포시","여수시","순천시","나주시","광양시"],"경북":["포항시","경주시","구미시","경산시","안동시","김천시"],"경남":["창원시","김해시","양산시","진주시","거제시","통영시"],"제주":["제주시","서귀포시"]};
const LOCALITIES={"서울|강남구": ["역삼동", "삼성동", "논현동", "대치동", "청담동", "압구정동", "개포동", "수서동", "세곡동"], "서울|서초구": ["서초동", "반포동", "방배동", "잠원동", "양재동", "우면동", "내곡동"], "서울|송파구": ["잠실동", "신천동", "가락동", "문정동", "방이동", "석촌동", "삼전동", "오금동"], "서울|마포구": ["공덕동", "아현동", "합정동", "서교동", "연남동", "상암동", "망원동"], "서울|영등포구": ["여의도동", "영등포동", "당산동", "문래동", "신길동", "대림동"], "서울|강서구": ["화곡동", "등촌동", "가양동", "마곡동", "방화동", "염창동"], "서울|관악구": ["봉천동", "신림동", "남현동"], "서울|노원구": ["상계동", "중계동", "하계동", "월계동", "공릉동"], "부산|해운대구": ["우동", "중동", "좌동", "송정동", "반여동", "반송동", "재송동"], "부산|수영구": ["광안동", "민락동", "남천동", "수영동", "망미동"], "부산|동래구": ["명륜동", "온천동", "사직동", "안락동", "낙민동", "수안동"], "부산|부산진구": ["부전동", "전포동", "양정동", "범천동", "개금동", "가야동", "당감동"], "부산|남구": ["대연동", "용호동", "문현동", "감만동", "우암동"], "부산|연제구": ["연산동", "거제동"], "부산|금정구": ["장전동", "부곡동", "구서동", "남산동", "서동", "금사동"], "부산|사상구": ["괘법동", "감전동", "주례동", "학장동", "모라동", "덕포동"], "부산|사하구": ["하단동", "당리동", "괴정동", "다대동", "장림동", "신평동"], "부산|기장군": ["기장읍", "정관읍", "일광읍", "장안읍", "철마면"], "대구|수성구": ["범어동", "만촌동", "수성동", "황금동", "지산동", "범물동", "두산동"], "대구|달서구": ["월성동", "상인동", "진천동", "대곡동", "감삼동", "두류동", "송현동", "용산동"], "대구|달성군": ["화원읍", "다사읍", "논공읍", "유가읍", "현풍읍", "옥포읍", "구지면"], "대구|중구": ["동인동", "삼덕동", "대신동", "남산동"], "대구|동구": ["신암동", "신천동", "효목동", "동촌동", "방촌동", "불로동"], "대구|북구": ["침산동", "산격동", "복현동", "태전동", "관음동", "구암동", "동천동"], "인천|남동구": ["구월동", "간석동", "만수동", "논현동", "서창동"], "인천|연수구": ["송도동", "연수동", "동춘동", "옥련동", "청학동"], "인천|부평구": ["부평동", "산곡동", "삼산동", "갈산동", "청천동"], "인천|서구": ["청라동", "가정동", "석남동", "가좌동", "검암동"], "인천|미추홀구": ["주안동", "용현동", "학익동", "도화동", "숭의동"], "인천|계양구": ["계산동", "작전동", "효성동", "병방동", "임학동"], "광주|광산구": ["수완동", "신창동", "월곡동", "우산동", "첨단동", "장덕동"], "광주|북구": ["용봉동", "일곡동", "두암동", "오치동", "운암동"], "광주|서구": ["치평동", "상무동", "화정동", "풍암동", "금호동"], "광주|남구": ["봉선동", "주월동", "진월동", "백운동"], "광주|동구": ["충장동", "계림동", "산수동", "학동"], "대전|유성구": ["봉명동", "궁동", "관평동", "전민동", "원신흥동", "노은동"], "대전|서구": ["둔산동", "탄방동", "월평동", "관저동", "도안동"], "대전|중구": ["은행동", "대흥동", "문화동", "태평동", "오류동"], "대전|동구": ["가오동", "용전동", "판암동", "자양동"], "대전|대덕구": ["송촌동", "법동", "중리동", "오정동", "신탄진동"], "울산|남구": ["삼산동", "달동", "신정동", "옥동", "무거동"], "울산|중구": ["성남동", "태화동", "우정동", "복산동"], "울산|북구": ["화봉동", "송정동", "호계동", "매곡동"], "울산|동구": ["일산동", "방어동", "화정동", "전하동"], "울산|울주군": ["범서읍", "언양읍", "온산읍", "온양읍", "청량읍", "삼남읍"], "세종|세종시": ["조치원읍", "연기면", "연동면", "부강면", "금남면", "장군면", "연서면", "전의면", "전동면", "소정면", "한솔동", "도담동", "아름동", "종촌동", "고운동", "보람동", "새롬동", "대평동", "소담동", "다정동", "해밀동"], "경기|수원시": ["인계동", "영통동", "매탄동", "정자동", "권선동", "광교동"], "경기|성남시": ["서현동", "정자동", "야탑동", "판교동", "수내동", "복정동"], "경기|용인시": ["죽전동", "보정동", "동백동", "상현동", "풍덕천동"], "경기|고양시": ["화정동", "행신동", "백석동", "마두동", "주엽동", "대화동"], "경기|화성시": ["동탄동", "병점동", "봉담읍", "향남읍", "남양읍"], "경기|부천시": ["중동", "상동", "심곡동", "역곡동", "소사동"], "경기|남양주시": ["다산동", "별내동", "호평동", "평내동", "진접읍", "와부읍"], "경기|안산시": ["고잔동", "초지동", "선부동", "본오동", "사동"], "경기|평택시": ["비전동", "세교동", "고덕동", "안중읍", "팽성읍"], "경기|김포시": ["장기동", "구래동", "운양동", "풍무동", "양촌읍"], "경기|파주시": ["금촌동", "야당동", "동패동", "문산읍", "조리읍"], "경기|시흥시": ["정왕동", "배곧동", "은행동", "대야동", "목감동"], "강원|춘천시": ["퇴계동", "석사동", "후평동", "온의동", "신북읍"], "강원|원주시": ["단계동", "무실동", "반곡동", "관설동", "지정면"], "강원|강릉시": ["교동", "포남동", "입암동", "주문진읍"], "강원|속초시": ["조양동", "교동", "청학동"], "강원|동해시": ["천곡동", "북삼동", "발한동"], "강원|삼척시": ["남양동", "교동", "도계읍"], "충북|청주시": ["복대동", "가경동", "율량동", "오창읍", "오송읍"], "충북|충주시": ["연수동", "칠금동", "호암동", "주덕읍"], "충북|제천시": ["하소동", "장락동", "청전동", "봉양읍"], "충북|진천군": ["진천읍", "덕산읍", "광혜원면"], "충북|음성군": ["음성읍", "금왕읍", "대소면", "맹동면"], "충남|천안시": ["불당동", "두정동", "백석동", "신방동", "성정동"], "충남|아산시": ["배방읍", "탕정면", "온천동", "둔포면"], "충남|서산시": ["동문동", "예천동", "대산읍"], "충남|당진시": ["읍내동", "송악읍", "합덕읍"], "충남|공주시": ["신관동", "월송동", "유구읍"], "충남|보령시": ["대천동", "동대동", "웅천읍"], "전북|전주시": ["효자동", "송천동", "서신동", "인후동", "중화산동"], "전북|익산시": ["영등동", "모현동", "부송동", "어양동"], "전북|군산시": ["수송동", "나운동", "조촌동", "미룡동"], "전북|정읍시": ["수성동", "상동", "시기동"], "전북|완주군": ["봉동읍", "삼례읍", "이서면"], "전남|목포시": ["상동", "옥암동", "용해동", "연산동"], "전남|여수시": ["학동", "웅천동", "여서동", "소호동"], "전남|순천시": ["조례동", "연향동", "왕지동", "해룡면"], "전남|나주시": ["빛가람동", "송월동", "남평읍"], "전남|광양시": ["중동", "광영동", "금호동", "광양읍"], "경북|포항시": ["양덕동", "장성동", "대잠동", "이동", "오천읍"], "경북|경주시": ["황성동", "용강동", "동천동", "안강읍"], "경북|구미시": ["인동동", "진평동", "옥계동", "형곡동"], "경북|경산시": ["중방동", "옥산동", "하양읍", "진량읍"], "경북|안동시": ["옥동", "송현동", "용상동", "풍산읍"], "경북|김천시": ["율곡동", "신음동", "부곡동", "아포읍"], "경남|창원시": ["상남동", "중앙동", "팔용동", "봉곡동"], "경남|김해시": ["장유동", "내외동", "삼계동", "진영읍"], "경남|양산시": ["물금읍", "동면", "덕계동", "평산동"], "경남|진주시": ["평거동", "충무공동", "가좌동", "초전동"], "경남|거제시": ["고현동", "옥포동", "장평동", "아주동"], "경남|통영시": ["무전동", "광도면", "봉평동"], "제주|제주시": ["노형동", "연동", "이도동", "아라동", "애월읍", "조천읍", "한림읍", "구좌읍"], "제주|서귀포시": ["서귀동", "동홍동", "대정읍", "남원읍", "성산읍", "안덕면", "표선면"]};
const PLACE={
'오피스':['직원 휴게시간에 접근하기 쉬운 위치','근무 인원과 방문객 비중','휴게실과 사무실 출입 동선','재고 보충 담당자와 복지용·유료 판매 여부'],
'병원':['환자·보호자 동선과 진료구역 구분','대기 시간대와 방문객 규모','통행 안전과 위생 관리','시설 담당자 승인 및 판매 가능 품목'],
'헬스장':['운동 전후 집중되는 구매 시간','생수와 운동용 음료 등 보관 조건','습기·샤워실과 기기의 거리','야간 운영 및 운동 소모품 출고 규격'],
'학교·학원':['학생 이용 시간과 시설 규정','연령에 맞는 판매 품목','복도 통행 안전과 감독','시설 관리자 승인 및 제한 상품 확인'],
'공장':['교대근무 시간과 휴게시간','작업장 안전구역과 휴게실 구분','먼지·온도·전원 등 현장 환경','교대별 재고 보충과 담당자 지정'],
'호텔·숙박':['야간 체크인과 투숙객 동선','개별 포장 생필품과 음료','로비 소음 및 객실 구역과의 거리','프런트 대응 체계와 재고 확인'],
'아파트':['입주민 공용공간 이용 규칙','주민 동선과 통행 안전','관리사무소 승인과 전기료 정산','민원 대응 및 야간 소음 점검'],
'무인매장':['무인 운영 중 결제와 출고 확인','기존 판매 상품과 중복 여부','출입 보안과 기기 관리','원격 재고 확인 및 장애 대응'],
'기타 시설':['이용자 연령과 체류 시간','실내외 환경과 전원 조건','판매 품목별 보관 온도','관리 주체와 상품 보충 주기']};
const PRODUCT={
'냉동자판기':'냉동 보관이 필요한 상품은 목표 보관 온도, 해동 위험, 상품 포장 형태와 실제 기기 사양을 우선 확인해야 합니다. 냉동 기능이 필요 없는 품목만 판매한다면 다른 유형과도 비교하는 편이 좋습니다.',
'무인자판기':'무인 운영에서는 결제 성공 여부와 상품 출고 확인, 장애 발생 시 안내 방식, 재고 보충 책임이 중요합니다. 기기별 지원 기능은 상담 단계에서 확인해야 합니다.',
'멀티자판기':'서로 크기가 다른 상품을 혼합 판매한다면 진열 칸 크기와 출고 방식, 무게 제한을 실제 상품 샘플로 확인해야 합니다.',
'스마트자판기':'관리 화면과 결제 기능이 필요한 경우 통신 환경, 원격 재고 확인 가능 여부, 운영자 권한을 제품별로 확인해야 합니다.',
'무인판매기':'판매 상품이 다양하다면 보관 방식과 출고 규격을 먼저 정하고 결제 및 유지관리 방식을 비교해야 합니다.'};
const productNames=['냉동자판기','무인자판기','멀티자판기','스마트자판기','무인판매기'];
const places=['오피스','병원','헬스장','학교·학원','공장','호텔·숙박','아파트','무인매장','PC방','스터디카페','애견샵','기타 시설'];
const uses=['음료 간식','간편식','생활용품','위생용품','캐릭터 굿즈','맞춤상품'];
const box=document.createElement('section');box.id='lk-helper';
box.innerHTML=`<button type="button" id="lk-toggle" aria-expanded="true">✦ LK 포스팅 자동작성 <span>접기 ▴</span></button><div id="lk-content"><p class="lk-note">지역·상품·설치 장소를 선택하세요. 읍·면·동은 대표 지역 목록에서 선택하거나 직접 입력할 수 있습니다.</p><label class="lk-full">포스팅 구분<select id="lk-mode"><option value="regional">지역별 설치 안내</option><option value="info">정보성 포스팅</option></select></label><div id="lk-info-options" style="display:none"><label>정보성 카테고리<select id="lk-category"><option>자판기 창업 정보</option><option>구매·렌탈 비교</option><option>자판기 운영 관리</option><option>제품별 정보</option><option>설치 준비 가이드</option></select></label><label>상세 주제<select id="lk-topic"></select></label></div><div id="lk-regional-options"><div class="lk-grid"><label>시·도<select id="lk-province"></select></label><label>시·군·구<select id="lk-city"></select></label><label>읍·면·동<select id="lk-district"><option value="">선택 안 함</option></select><input id="lk-district-manual" placeholder="목록에 없으면 직접 입력" aria-label="읍면동 직접 입력"></label><label>제품<select id="lk-product"></select></label><label>설치 장소<select id="lk-place"></select></label><label>판매 상품<select id="lk-use"></select></label><label>글 유형<select id="lk-type"><option>설치 안내형</option><option>렌탈 비교형</option><option>운영 정보형</option></select></label></div></div><div class="lk-keywords"><strong>추천 검색 키워드</strong><div id="lk-tags"></div><label>직접 추가할 키워드<input id="lk-extra" placeholder="예: 월성동 자판기 렌탈"></label></div><label class="lk-full">추천 제목<select id="lk-title"></select></label><div class="lk-preview"><strong>자동작성 본문 미리보기 <small id="lk-count"></small></strong><textarea id="lk-draft" spellcheck="false"></textarea></div><div class="lk-buttons"><button type="button" id="lk-fill">✦ CMS 입력란 자동 채우기</button><button type="button" id="lk-copy">본문 복사</button></div><p id="lk-status" role="status" aria-live="polite">검색량·상위노출은 보장되지 않습니다. 현장 조건과 제품 지원 기능을 확인하고 발행하세요.</p></div>`;
const style=document.createElement('style');style.textContent=`#lk-helper{position:relative;z-index:1;width:100%;max-width:100%;margin:0 0 18px;padding:0;background:#f2f7ff;color:#14243d;border:2px solid #3278ff;border-radius:12px;box-shadow:none;font:13px/1.55 system-ui,'Malgun Gothic',sans-serif}#lk-helper *{box-sizing:border-box}#lk-toggle{display:flex;justify-content:space-between;width:100%;padding:13px 16px;background:#1869e8;color:#fff;font-size:16px;font-weight:800;border:0;cursor:pointer}#lk-content{padding:14px}#lk-helper .lk-note{margin:0 0 12px;color:#4b607b}#lk-helper .lk-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}#lk-helper label{display:block;font-weight:700;min-width:0}#lk-helper select,#lk-helper input,#lk-helper textarea{display:block;width:100%;margin-top:4px;padding:8px;border:1px solid #b9c7d8;border-radius:6px;background:#fff;color:#17253c;font:inherit}#lk-helper #lk-district-manual{margin-top:6px}#lk-helper .lk-full,#lk-helper .lk-keywords,#lk-helper .lk-preview{display:block;margin-top:12px}#lk-tags{display:flex;flex-wrap:wrap;gap:5px;margin:7px 0}#lk-tags span{padding:3px 6px;border:1px solid #d7a05e;background:#fff7e9;border-radius:20px;font-size:11px}#lk-draft{height:190px;resize:vertical;line-height:1.7}#lk-helper .lk-buttons{display:flex;gap:7px;margin-top:10px}#lk-helper .lk-buttons button{padding:10px;border:1px solid #1768e8;background:#fff;color:#1454ac;border-radius:6px;font-weight:800;cursor:pointer}#lk-fill{flex:1;background:#1768e8!important;color:white!important}#lk-status{margin:9px 0 0;color:#39536c}#lk-helper.lk-collapsed #lk-content{display:none}@media(max-width:800px){#lk-helper .lk-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:480px){#lk-helper .lk-grid{grid-template-columns:1fr}#lk-helper .lk-buttons{flex-wrap:wrap}}`;
document.head.append(style);
function mount(){
  // Place inside the editable content column, never floating above the form.
  const fields=document.querySelector('[id="title-field"], [name="title"]');
  const label=[...document.querySelectorAll('label')].find(n=>n.textContent.trim().startsWith('포스팅 제목'));
  const target=fields||label;
  if(!target)return;
  let container=target.closest('[class*="ControlContainer"], [class*="ControlPane"], [class*="Field"]')||target.parentElement;
  if(container&&container.parentElement){
    // Insert immediately before the first field wrapper, in the same column.
    if(box.parentElement!==container.parentElement||box.nextElementSibling!==container)container.parentElement.insertBefore(box,container);
  }
}
const mountObserver=new MutationObserver(()=>{if(!box.isConnected||box.parentElement===document.body)mount()});
mountObserver.observe(document.body,{childList:true,subtree:true});
mount();

const el=id=>box.querySelector('#'+id);let titleTouched=false;
const opt=(select,arr)=>select.innerHTML=arr.map(x=>`<option value="${x}">${x}</option>`).join('');
opt(el('lk-province'),Object.keys(R));opt(el('lk-product'),productNames);opt(el('lk-place'),places);opt(el('lk-use'),uses);
function districts(){const key=el('lk-province').value+'|'+el('lk-city').value;opt(el('lk-district'),['',...(LOCALITIES[key]||[])]);el('lk-district').options[0].text='선택 안 함 / 직접 입력';generate()}
function cities(){opt(el('lk-city'),R[el('lk-province').value]||[]);districts()}
function data(){let province=el('lk-province').value,city=el('lk-city').value,district=(el('lk-district-manual').value.trim()||el('lk-district').value.trim()),product=el('lk-product').value,place=el('lk-place').value,use=el('lk-use').value,type=el('lk-type').value;let area=[province,city,district].filter(Boolean).join(' ');return {province,city,district,product,place,use,type,area}}
const INFO_TOPICS={
'자판기 창업 정보':['무인자판기 창업 전 비용과 운영 구조','무인자판기 창업 장소 선정과 수요 조사','자판기 창업 시 계약 전에 확인할 사항'],
'구매·렌탈 비교':['자판기 구매와 렌탈 총비용 비교','냉동자판기 렌탈 계약 전 확인사항','무인자판기 구매 후 유지보수 비용'],
'자판기 운영 관리':['자판기 상품 보충 주기와 재고 관리','무인자판기 결제 오류와 고객 응대','자판기 매출 관리와 판매 상품 조정'],
'제품별 정보':['냉동자판기와 냉장자판기 차이','멀티자판기 상품 구성과 출고 방식','스마트자판기 원격 관리 기능 확인'],
'설치 준비 가이드':['자판기 설치 전 전기와 통신 점검','자판기 설치 공간과 반입 경로 확인','자판기 설치 장소별 운영 체크리스트']};
const isInfo=()=>el('lk-mode').value==='info';
function updateTopics(){opt(el('lk-topic'),INFO_TOPICS[el('lk-category').value]||[]);generate()}
function infoDraft(v){
 const topic=el('lk-topic').value,cat=el('lk-category').value,product=v.product;
 const isRental=/렌탈|구매|계약|비용/.test(topic);
 const isOperation=/운영|보충|재고|매출|결제|응대/.test(topic);
 const isInstall=/설치|공간|전기|통신|반입/.test(topic);
 const opening=`${topic}을 알아볼 때는 기기 가격이나 기능 한 가지만 비교하기보다 판매 상품, 이용 환경, 계약 조건과 운영 책임을 함께 확인해야 합니다. 이 글에서는 ${cat}을 검토하는 분들이 실제로 점검할 내용을 정리합니다. 개별 업체의 견적과 기종 사양은 다를 수 있으므로 최종 결정 전에 확인이 필요합니다.`;
 const sections=[
 ['먼저 결정해야 할 기준',`판매하려는 상품의 크기와 보관 조건, 이용자 수, 예상 구매 시간대를 정리하세요. 특히 ${product}를 검토한다면 해당 기기의 실제 온도 범위와 출고 방식이 판매 품목에 적합한지 확인해야 합니다. 예상 매출을 확정하기 어려운 경우에는 임의의 수익률을 가정하기보다 보수적인 판매량으로 계산하는 편이 안전합니다.`],
 ['비용과 계약 조건',`구매는 초기 지출과 소유권을 확인해야 하고, 렌탈은 월 납부액뿐 아니라 약정 기간과 총 납부액, 중도 해지 및 철거 조건까지 비교해야 합니다. 결제 수수료와 유지보수 범위, 소모품 부담 주체도 계약서에서 확인하세요. 공개된 견적 없이 구체적인 비용을 단정할 수는 없습니다.`],
 ['설치 환경과 기기 선택',`설치 장소의 폭·깊이·높이, 출입문과 엘리베이터 반입 경로, 전원·통신·환기 조건을 먼저 점검하세요. 냉장·냉동이 필요한 상품은 적정 보관 온도와 온도 이탈 시 대응 방법도 확인해야 합니다. 시설 관리자의 승인이 필요한 공간이라면 계약 전 협의하는 것이 좋습니다.`],
 ['운영 관리와 고객 대응',`상품 보충 담당자와 주기, 유통기한 확인 방법, 결제 실패·출고 오류 시 고객 연락 경로를 정해 두세요. 원격 관리나 재고 알림은 모든 기기에서 동일하게 제공되는 기능이 아니므로 모델별 지원 여부를 확인해야 합니다.`]
 ];
 if(isOperation)sections[0][1]+=' 판매 시간대별 수요와 품절 빈도를 기록하고 판매가 적은 품목은 정기적으로 조정하세요.';
 if(isInstall)sections[2][1]+=' 설치 위치가 통행을 방해하거나 피난 동선에 영향을 주지 않는지도 점검해야 합니다.';
 if(isRental)sections[1][1]+=' 같은 기간을 기준으로 구매 총비용과 렌탈 총비용을 나란히 계산해야 비교가 가능합니다.';
 const table=`<div class="lk-post-table-wrap"><table class="lk-post-table"><thead><tr><th>점검 항목</th><th>확인할 내용</th></tr></thead><tbody><tr><td>상품</td><td>규격, 보관 온도, 보충 주기</td></tr><tr><td>설치</td><td>공간, 전기, 통신, 반입 경로</td></tr><tr><td>비용</td><td>초기 비용, 총 납부액, 수수료</td></tr><tr><td>관리</td><td>A/S, 재고 보충, 오류 대응</td></tr></tbody></table></div>`;
 const faq=[['구매와 렌탈 중 어떤 방식이 적합한가요?','예상 운영 기간과 초기 예산, 유지보수 범위, 계약 종료 조건을 같은 기준으로 비교해야 합니다.'],['설치 전에 무엇을 준비해야 하나요?','설치 장소 사진과 공간 크기, 전원·통신 조건, 판매 상품 목록을 준비하면 검토에 도움이 됩니다.'],['판매 상품은 어떻게 정해야 하나요?','이용자의 구매 목적과 보관 조건을 기준으로 소수 품목부터 검토하고 실제 판매 결과에 따라 조정하세요.'],['원격 재고 관리가 가능한가요?','기기별 지원 기능이 다르므로 선택한 모델의 사양과 통신 조건을 확인해야 합니다.']];
 return [opening,...sections.map(([h,t])=>`${h}\n\n${t}`),`실무 점검표\n\n${table}`,'자주 묻는 질문',...faq.map(([q,a])=>`${q}\n\n${a}`),'관련 제품 정보\n\n스마트 멀티자판기: /product-smart\n냉동자판기: /product-frozen','마무리\n\n'+topic+'을 검토할 때는 상품 적합성, 설치 조건, 계약 범위와 운영 책임을 함께 확인하는 것이 중요합니다. 실제 비용과 지원 기능은 기종 및 계약에 따라 달라집니다.'].join('\n\n');
}
function candidates(v){
 const a=v.area,p=v.product,l=v.place;
 const angle=v.type==='렌탈 비교형'?'렌탈과 구매 조건 비교':v.type==='운영 정보형'?'상품 구성과 운영 관리':'설치 전 확인사항';
 const byPlace={'오피스':'직원 이용 동선과 상품 구성','병원':'대기 공간과 설치 조건','헬스장':'운동 전후 상품 구성','학교·학원':'이용 시간과 설치 기준','공장':'교대근무와 휴게 공간','호텔·숙박':'투숙객 이용 동선','아파트':'공용 공간 설치 조건','무인매장':'결제와 재고 관리','기타 시설':'공간별 설치 조건'};
 const titles=[`${a} ${l} ${p} 설치, ${angle}`,`${a} ${p} 도입, ${byPlace[l]||'설치 조건'} 확인하기`,`${a} ${l} ${p}, 구매·렌탈 전 점검할 내용`,`${a} ${p} 설치 안내, ${l} 운영 준비`];
 return [...new Set(titles)].map(t=>t.slice(0,65));
}
function keywords(v){return [...new Set([`${v.area} ${v.product}`,`${v.area} 자판기 설치`,`${v.city} ${v.product}`,`${v.place} 자판기`,`${v.use} 자판기`,el('lk-extra').value.trim()].filter(Boolean))]}
const CONTEXT={
'오피스':['점심시간과 오후 휴식 시간에 수요가 몰릴 수 있으므로 실제 근무 인원과 외부 방문객 수를 구분해 파악하세요.','직원 복지용 무료 제공인지 개인 결제 방식인지에 따라 결제 설정과 정산 방식이 달라집니다.'],
'병원':['대기실과 진료 구역을 구분하고 환자 및 보호자의 통행을 방해하지 않는 위치를 먼저 살펴보세요.','위생 관리와 판매 가능 품목에 관한 병원 내부 규정을 확인하고 청소·보충 담당자를 정해 두세요.'],
'헬스장':['운동 전후 이용 시간이 집중되는지, 생수·이온음료 같은 상품의 실제 수요가 있는지 확인하세요.','운동 공간의 습기와 출입 동선을 고려하고 기기 주변에 충분한 관리 공간을 확보하세요.'],
'학교·학원':['학생의 연령대와 이용 시간을 파악하고 학교·학원 내부 판매 제한 품목과 관리 규정을 먼저 확인하세요.','복도 통행과 안전을 우선하고 관리자 승인 및 결제 민원 대응 체계를 마련하세요.'],
'공장':['교대근무와 야간 휴게시간을 고려하면 보충 주기와 상품 구성이 달라질 수 있습니다.','작업 구역과 휴게 구역을 구분하고 먼지·온도·안전 기준에 맞는 위치인지 확인하세요.'],
'호텔·숙박':['심야 시간대 투숙객이 필요로 하는 생수와 소형 생필품 등부터 검토해 보세요.','로비와 객실 동선을 구분하고 소음·결제 오류 발생 시 프런트 대응 방식을 정해 두세요.'],
'아파트':['입주민의 이용 편의뿐 아니라 공용공간 사용 승인과 전기료 정산 기준이 먼저입니다.','관리사무소와 보충 시간·야간 소음·민원 대응 기준을 사전에 협의하세요.'],
'무인매장':['기존 매대와 자판기의 판매 품목이 겹치지 않도록 역할을 분리하는 편이 좋습니다.','무인 시간대 출고 오류와 결제 문의에 대응할 연락처·환불 절차를 준비하세요.'],
'PC방':['장시간 이용 고객의 구매 동선과 직원의 상품 보충 가능 시간을 함께 확인하세요.','기존 매점과 중복 판매되는 품목은 수익성을 비교하고 결제 안내를 명확하게 표시하세요.'],
'스터디카페':['조용한 학습 환경을 해치지 않는 설치 위치와 출고 소음을 우선 검토하세요.','휴게공간에 설치하고 쓰레기 처리 및 보충 시간을 학습 동선과 분리하는 것이 좋습니다.'],
'애견샵':['반려동물 간식이나 용품의 포장 규격, 보관 조건과 이용자의 구매 동선을 확인하세요.','반려동물이 기기에 접근하는 상황을 고려해 안전한 설치 위치와 위생 관리 기준을 정하세요.']};
const USE_CONTEXT={'음료 간식':'냉장 음료와 상온 간식은 보관 방식이 다를 수 있으니 품목별 적정 온도와 소비기한을 확인하세요.','간편식':'간편식은 포장 크기, 냉장·냉동 보관 기준, 소비기한 관리와 보충 주기가 핵심입니다.','생활용품':'생활용품은 규격과 무게가 다양하므로 실제 샘플로 진열과 출고 가능 여부를 확인하세요.','위생용품':'위생용품은 개별 포장 상태와 청결한 보관 공간, 재고 회전 속도를 확인하세요.','캐릭터 굿즈':'굿즈는 정품 유통 여부와 판매 권한, 포장 손상 방지, 출고 규격을 먼저 확인하세요.','맞춤상품':'맞춤상품은 실제 상품 샘플의 무게·크기·파손 가능성과 기기 출고 방식을 비교하세요.'};
function draft(v){
const a=v.area,site=v.place,product=v.product,ctx=CONTEXT[site]||['이용자의 방문 시간과 이동 동선을 관찰하고 판매할 상품을 정하세요.','시설 관리자의 승인과 전기·통신 환경을 먼저 확인하세요.'];
const productInfo=PRODUCT[product]||PRODUCT['무인자판기'];
const useInfo=USE_CONTEXT[v.use]||USE_CONTEXT['맞춤상품'];
const opening=`${a}에서 ${site}용 ${product}를 알아보고 있다면 기기 가격만 비교하기보다 실제로 어떤 상품을 누구에게 판매할지부터 정하는 것이 좋습니다. 설치 위치와 운영 인력, 보충 주기에 따라 적합한 방식이 달라지기 때문입니다. 이 글은 설치 검토를 위한 일반 정보이며 해당 지역에 실제 설치 사례가 있다는 뜻은 아닙니다.`;
const common=`${ctx[0]} ${ctx[1]}`;
const sectionA=`판매할 ${v.use} 상품은 처음부터 종류를 많이 늘리기보다 자주 찾는 품목을 중심으로 구성해 보세요. ${useInfo} 예상 판매량을 확정하기 어렵다면 소량으로 시작해 실제 구매 패턴을 확인하는 방식도 고려할 수 있습니다.`;
const siteCheck=`설치 장소의 가로·세로·높이와 출입문 폭, 엘리베이터 이용 가능 여부를 먼저 측정하세요. 전원 콘센트와 전기 용량, 통신 연결, 환기 공간, 고객 이동 동선도 함께 확인해야 합니다. 시설 담당자의 설치 승인이 필요한 곳이라면 반입 일정 전에 확인하는 것이 좋습니다.`;
const rental=`구매는 초기 지출이 크지만 계약 조건이 비교적 단순할 수 있고, 렌탈은 초기 부담을 나누는 대신 약정 기간과 월 납부액을 확인해야 합니다. 실제 조건은 공급업체와 기종에 따라 다르므로 월 요금만 보지 말고 총 납부액, 소모품, 결제 수수료, A/S 범위, 중도 해지 및 철거 비용을 함께 비교하세요. 공개된 견적 없이 특정 금액을 단정하기는 어렵습니다.`;
const operations=`설치 후에는 상품 보충 담당자, 청소 주기, 결제 실패·출고 오류에 대한 연락 방법을 정해 두는 것이 좋습니다. 원격 관리 기능이 필요하다면 선택한 기종에서 실제 지원하는지 확인하세요. 판매가 적은 품목은 줄이고 구매 시간대별 수요에 맞춰 구성을 조정할 수 있습니다.`;
const typeSections={
'설치 안내형':[['이용 환경부터 확인하기',common],['판매 상품과 기기 선택',`${sectionA}\n\n${productInfo}`],['현장 설치 전 점검',siteCheck],['구매와 렌탈 비교',rental],['설치 후 관리',operations]],
'렌탈 비교형':[['렌탈 전에 필요한 조건 정리',`${common}\n\n${sectionA}`],['구매와 렌탈의 총비용',rental],['기기 사양과 상품 적합성',productInfo],['설치 환경과 계약 확인',siteCheck],['운영 중 관리 책임',operations]],
'운영 정보형':[['이용자와 판매 시간 파악',common],['품목 구성과 보충 계획',sectionA],['결제·재고·장애 대응',operations],['기기 사양과 설치 조건',`${productInfo}\n\n${siteCheck}`],['운영 비용 점검',rental]]};
const sections=typeSections[v.type]||typeSections['설치 안내형'];
const faq=[['설치 가능 여부는 어떻게 확인하나요?',`기기 규격과 ${site}의 전기·통신·통행 조건, 시설 관리자의 승인 여부를 확인한 뒤 판단할 수 있습니다.`],['어떤 상품부터 판매하는 것이 좋나요?',`${v.use} 중 실제 이용자가 자주 찾는 품목을 먼저 선정하고 포장·보관 조건을 점검해 보세요.`],['구매와 렌탈 중 어느 쪽이 유리한가요?','초기 비용뿐 아니라 계약 기간, 월 납부액, 유지보수 및 철거 비용까지 포함한 총비용을 비교해야 합니다.'],['문의 전에 무엇을 준비하면 되나요?',`설치 장소 사진, 가용 공간 크기, 판매할 상품 목록, 희망 운영 시간과 ${site} 담당자 확인 사항을 준비하면 좋습니다.`]];
const table=(headers,rows)=>`<div class="lk-post-table-wrap"><table class="lk-post-table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const placement=table(['설치 위치','운영 시 장점','사전 확인사항'],[
 [`${site} 휴게 공간`,'이용자가 머무는 시간에 접근하기 편리','통행 동선, 전원, 소음 및 관리 승인'],
 ['출입구 인근','방문객이 발견하기 쉬움','반입 경로, 안전 기준, 날씨 영향'],
 ['공용 로비','여러 이용자가 접근 가능','시설 관리자 승인, 전기료·보충 책임']]);
const costs=table(['비교 항목','구매','렌탈·대여'],[
 ['초기 비용','일시불 또는 할부 조건 확인','보증금과 월 납부액 확인'],
 ['운영 기간','유지보수·소유 비용 확인','약정 기간과 총 납부액 확인'],
 ['계약 종료','기기 소유권과 처분 방식 확인','반납·인수·철거 조건 확인'],
 ['A/S','제조사·판매처의 보증 범위 확인','계약서의 관리 범위 확인']]);
const steps=`설치 전 확인 순서\n\n1. 설치 장소 사진과 반입 경로를 확인합니다.\n2. 판매 상품의 크기와 보관 온도를 정합니다.\n3. 기기 사양과 결제·관리 방식을 비교합니다.\n4. 계약 조건과 설치 가능 여부를 담당자에게 확인합니다.`;
const related=`함께 확인하면 좋은 안내\n\n- [스마트 멀티자판기 제품 안내](/product-smart)\n- [냉동자판기 제품 안내](/product-frozen)\n- [전체 포스팅 보기](/posts/)`;
return [opening,...sections.map(([h,t])=>`${h}\n\n${t}`),`${site} 자판기 설치 위치 비교\n\n${placement}`,`구매와 렌탈 조건 비교\n\n${costs}`,`설치 진행 순서\n\n${steps}`,`자주 묻는 질문`,...faq.map(([q,answer])=>`${q}\n\n${answer}`),related,`마무리\n\n${a} ${site}의 ${product} 도입은 판매 상품과 설치 환경을 먼저 확인하는 것에서 시작합니다. 실제 설치 가능 여부, 기종별 지원 기능과 계약 조건은 상담 시 확인해야 합니다. 이 글은 일반적인 설치 검토 정보이며 해당 지역의 실제 설치 실적을 의미하지 않습니다.`].join('\n\n');
}
function generate(){const v=data(),ts=isInfo()?[el('lk-topic').value+' | LK Smart Vending']:candidates(v),previous=el('lk-title').value;opt(el('lk-title'),ts);if(titleTouched&&ts.includes(previous))el('lk-title').value=previous;const kws=isInfo()?[el('lk-topic').value,el('lk-category').value,v.product]:keywords(v);el('lk-tags').replaceChildren(...kws.map(k=>{const s=document.createElement('span');s.textContent=k;return s}));el('lk-draft').value=isInfo()?infoDraft(v):draft(v);el('lk-count').textContent=el('lk-draft').value.length+'자'}
function slug(v){if(isInfo()){const topicIndex=(INFO_TOPICS[el('lk-category').value]||[]).indexOf(el('lk-topic').value)+1;const catIndex=Object.keys(INFO_TOPICS).indexOf(el('lk-category').value)+1;return `guide-${catIndex}-${topicIndex}-${v.product==='냉동자판기'?'frozen':'vending'}`;}const pm={서울:'seoul',부산:'busan',대구:'daegu',인천:'incheon',광주:'gwangju',대전:'daejeon',울산:'ulsan',세종:'sejong',경기:'gyeonggi',강원:'gangwon',충북:'chungbuk',충남:'chungnam',전북:'jeonbuk',전남:'jeonnam',경북:'gyeongbuk',경남:'gyeongnam',제주:'jeju'};const L=['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'],V=['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'],T=['','k','k','ks','n','nj','nh','t','l','lk','lm','lb','ls','lt','lp','lh','m','p','ps','t','t','ng','t','t','k','t','p','h'];function roman(s){return [...s].map(c=>{const n=c.charCodeAt(0)-44032;if(n<0||n>11171)return /[a-zA-Z0-9]/.test(c)?c:'-';return L[Math.floor(n/588)]+V[Math.floor(n%588/28)]+T[n%28]}).join('').replace(/-+/g,'-').replace(/^-|-$/g,'').toLowerCase()}const product={냉동자판기:'frozen',무인자판기:'unmanned',멀티자판기:'multi',스마트자판기:'smart',무인판매기:'retail'};return [pm[v.province],roman(v.city),roman(v.district),product[v.product],roman(v.place)].filter(Boolean).join('-')}
// Decap CMS 3 renders field wrappers differently across widgets and versions.
// Locate the real editor control, never a control inside the helper.
function fieldContainer(name,label){
 const ids=[`${name}-field`,`${name}-field-wrapper`,`${name}-control`];
 for(const id of ids){const e=document.getElementById(id);if(e&&!box.contains(e))return e.closest('[class*="ControlContainer"], [class*="Field"], [class*="Widget"]')||e.parentElement||e;}
 const inputs=[...document.querySelectorAll(`[name="${name}"], [id*="${name}-field"]`)].filter(e=>!box.contains(e));
 if(inputs.length)return inputs[0].closest('[class*="ControlContainer"], [class*="Field"], [class*="Widget"]')||inputs[0].parentElement;
 const nodes=[...document.querySelectorAll('label,div,span')].filter(e=>!box.contains(e)&&e.children.length<4&&e.textContent.trim()===label);
 for(const n of nodes){
  let p=n;
  for(let i=0;i<5&&p;i++,p=p.parentElement){
   if(p.querySelector('input:not([type="hidden"]),textarea,select,[contenteditable="true"],[role="textbox"]')||p.querySelector('button'))return p;
  }
 }
 return null;
}
function locate(name,label){
 const direct=[...document.querySelectorAll(`[id="${name}-field"], [name="${name}"]`)].find(e=>!box.contains(e));
 if(direct){if(direct.matches('input,textarea,select,[contenteditable="true"]'))return direct;
 const inner=direct.querySelector('input:not([type="hidden"]),textarea,select,[contenteditable="true"]');if(inner)return inner;}
 const c=fieldContainer(name,label);return c?.querySelector('input:not([type="hidden"]),textarea,select,[contenteditable="true"],[role="textbox"]')||null;
}
// The title widget is a Decap string field; its visible label is more reliable
// than generic name lookups, which can match hidden React elements.
function locateTitleInput(){
 const candidates=[...document.querySelectorAll('input:not([type="hidden"]):not([type="checkbox"]),textarea')].filter(n=>!box.contains(n));
 const exact=candidates.find(n=>n.getAttribute('name')==='title' || n.id==='title-field');
 if(exact)return exact;
 const wrapper=document.getElementById('title-field');
 if(wrapper){const found=wrapper.querySelector('input,textarea');if(found&&!box.contains(found))return found;}
 for(const n of [...document.querySelectorAll('label')].filter(n=>!box.contains(n))){
  const labelText=(n.textContent||'').replace(/\s+/g,' ').trim();
  if(!labelText.startsWith('포스팅 제목'))continue;
  const id=n.getAttribute('for');if(id){const byId=document.getElementById(id);if(byId&&byId.matches('input,textarea'))return byId;}
  for(let parent=n.parentElement,depth=0;parent&&depth<5;parent=parent.parentElement,depth++){
   const inputs=[...parent.querySelectorAll('input:not([type="hidden"]),textarea')].filter(e=>!box.contains(e));
   if(inputs.length===1)return inputs[0];
  }
 }
 return null;
}
async function fillTitle(value){
 const node=locateTitleInput();if(!node)return false;
 node.focus();setInput(node,value);
 await pause(180);
 // A controlled CMS widget can revert its DOM value after React rerenders.
 if(node.value!==value){setInput(node,value);await pause(180);}
 return node.value===value;
}
function setInput(node,value){
 if(!node)return false;
 if(node.matches('input,textarea')){
  const proto=node.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;
  const setter=Object.getOwnPropertyDescriptor(proto,'value')?.set;
  if(setter)setter.call(node,String(value));else node.value=String(value);
  node.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:String(value)}));
  node.dispatchEvent(new Event('change',{bubbles:true}));return true;
 }
 if(node.tagName==='SELECT'){
  node.value=value;node.dispatchEvent(new Event('change',{bubbles:true}));return node.value===value;
 }
 if(node.isContentEditable){node.focus();node.textContent=String(value);node.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:String(value)}));node.dispatchEvent(new Event('blur',{bubbles:true}));return true}
 return false;
}
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function markDownMode(){
 const c=fieldContainer('body','본문');if(!c)return;
 const switches=[...c.querySelectorAll('button,[role="switch"],input[type="checkbox"]')];
 const toggle=switches.find(x=>/마크다운|markdown/i.test(x.textContent||x.getAttribute('aria-label')||''));
 if(toggle)toggle.click();
}
async function fillBody(body){
 const c=fieldContainer('body','본문');if(!c)return false;
 let node=locate('body','본문');
 if(node?.matches('textarea'))return setInput(node,body);
 // Decap markdown widget uses a rich-text editor by default. Switch to Markdown mode.
 const buttons=[...c.querySelectorAll('button,[role="button"],label')];
 const md=buttons.find(x=>/^(마크다운|Markdown)$/i.test(x.textContent.trim()));
 if(md && !c.querySelector('textarea')){md.click();await pause(250)}
 node=c.querySelector('textarea')||locate('body','본문');
 return node?.matches('textarea')?setInput(node,body):false;
}
async function fillKeywords(values){
 const c=fieldContainer('keywords','연관 키워드');if(!c)return false;
 let items=values.filter(Boolean);
 // Decap list widgets have one input per item, not a comma-separated textarea.
 let inputs=[...c.querySelectorAll('input:not([type="hidden"]),textarea')];
 if(!inputs.length){const add=[...c.querySelectorAll('button')].find(x=>/추가|add|\+/i.test(x.textContent+' '+(x.getAttribute('aria-label')||'')));if(add){add.click();await pause(130)}}
 for(let i=0;i<items.length;i++){
  inputs=[...c.querySelectorAll('input:not([type="hidden"]),textarea')];
  if(!inputs[i]){const add=[...c.querySelectorAll('button')].find(x=>/추가|add|\+/i.test(x.textContent+' '+(x.getAttribute('aria-label')||'')));if(!add)return false;add.click();await pause(130);inputs=[...c.querySelectorAll('input:not([type="hidden"]),textarea')]}
  if(!inputs[i]||!setInput(inputs[i],items[i]))return false;
 }
 return true;
}
function localDate(){const d=new Date();const offset=d.getTimezoneOffset()*60000;return new Date(d.getTime()-offset).toISOString().slice(0,16)}
async function fillDate(name,label){
 const c=fieldContainer(name,label);if(!c)return false;
 const dateInput=c.querySelector('input[type="datetime-local"],input[type="date"]');
 if(dateInput)return setInput(dateInput,dateInput.type==='date'?localDate().slice(0,10):localDate());
 const button=[...c.querySelectorAll('button')].find(x=>/현재시간/.test(x.textContent));
 if(button){button.click();await pause(100);return true}
 return false;
}
async function fill(){
 const status=el('lk-status');const button=el('lk-fill');button.disabled=true;
 status.textContent='CMS 입력란을 확인하고 있습니다…';
 try{
 const v=data(),body=el('lk-draft').value;
 const description=isInfo()?`${el('lk-topic').value}에 필요한 비용·설치·상품 구성·운영 관리의 핵심 점검사항을 안내합니다.`:`${v.area} ${v.place}에서 ${v.product} 설치와 렌탈을 검토할 때 필요한 상품 구성, 설치 환경, 계약 및 운영 관리 사항을 안내합니다.`;
 const fields=[['category','포스팅 카테고리',isInfo()?el('lk-category').value:'지역별 설치 안내'],['title','포스팅 제목',el('lk-title').value],['slug_id','URL ID',slug(v)],['description','검색결과 설명문',description],['province','시·도',isInfo()?'':v.province],['city','시·군·구',isInfo()?'':v.city],['district','읍·면·동',isInfo()?'':v.district],['product','제품 키워드',v.product],['place','설치 공간',v.place]];
 const ok=[],missing=[]; if(!locateTitleInput()){status.textContent='CMS 입력칸을 찾지 못했습니다. 관리자 편집 화면이 열린 상태인지 확인하세요. 이 버전에서는 자동입력을 중단합니다.';status.style.color='#b42318';return;}
 for(const [name,label,value] of fields){
  if(isInfo()&&['province','city','district','place'].includes(name))continue; if(name==='district'&&!value)continue;
  if(name==='title'){if(await fillTitle(value))ok.push(label);else missing.push(label+'(입력 실패)');continue;}
  const node=locate(name,label);
  if(setInput(node,value)){await pause(100);if(node&&('value' in node)&&String(node.value)!==String(value))missing.push(label+'(값 유지 실패)');else ok.push(label)}else missing.push(label);
  await pause(65);
 }
 if(await fillDate('date','발행일'))ok.push('발행일');else missing.push('발행일');
 if(await fillDate('updated','수정일'))ok.push('수정일');else missing.push('수정일');
 if(await fillKeywords(isInfo()?[el('lk-topic').value,el('lk-category').value,v.product]:keywords(v)))ok.push('연관 키워드');else missing.push('연관 키워드');
 if(await fillBody(body))ok.push('본문');else missing.push('본문');
 const finalTitle=locateTitleInput();
 if(!finalTitle||finalTitle.value!==el('lk-title').value){
  if(await fillTitle(el('lk-title').value))ok.push('포스팅 제목 재확인');
  else missing.push('포스팅 제목(최종 검증 실패)');
 }
 // Optional image fields are never invented. Preserve existing images.
 status.textContent=`입력 시도 ${ok.length}개: ${ok.join(', ')}. ${missing.length?'수동 확인 필요: '+missing.join(', ')+'. ':''}대표 이미지·ALT는 기존 값을 유지하거나 직접 선택하세요. 저장 전 모든 필드와 본문을 반드시 확인하세요.`;
 status.style.color=missing.length?'#a24a10':'#087b43';
 }catch(e){status.textContent='자동 입력 중 오류: '+e.message+' — 저장하지 말고 입력란을 확인하세요.';status.style.color='#a24a10'}
 finally{button.disabled=false}
}
for(const id of ['lk-province','lk-city','lk-district','lk-district-manual','lk-product','lk-place','lk-use','lk-type','lk-extra'])el(id).addEventListener(id==='lk-district-manual'||id==='lk-extra'?'input':'change',id==='lk-province'?cities:id==='lk-city'?districts:generate);
el('lk-mode').addEventListener('change',()=>{el('lk-info-options').style.display=isInfo()?'block':'none';el('lk-regional-options').style.display=isInfo()?'none':'block';titleTouched=false;generate()});el('lk-category').addEventListener('change',()=>{titleTouched=false;updateTopics()});el('lk-topic').addEventListener('change',()=>{titleTouched=false;generate()});updateTopics();el('lk-title').addEventListener('change',()=>titleTouched=true);el('lk-draft').addEventListener('input',()=>el('lk-count').textContent=el('lk-draft').value.length+'자');el('lk-fill').addEventListener('click',fill);el('lk-copy').addEventListener('click',()=>navigator.clipboard.writeText(el('lk-draft').value).then(()=>el('lk-status').textContent='본문을 복사했습니다.').catch(()=>el('lk-status').textContent='복사 권한을 확인해 주세요.'));el('lk-toggle').addEventListener('click',()=>{box.classList.toggle('lk-collapsed');el('lk-toggle').setAttribute('aria-expanded', !box.classList.contains('lk-collapsed'));});cities();
})();