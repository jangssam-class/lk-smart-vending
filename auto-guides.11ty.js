const PLACE_INFO = {
  "헬스장": ["운동 전후 이용자가 집중되는 시간대를 확인하세요.", "음료·보충식품의 포장 크기와 보관 온도를 먼저 점검하세요.", "운동 기구와 출입 동선을 방해하지 않는 위치가 중요합니다."],
  "오피스": ["직원 수와 방문객 비중, 휴게시간을 기준으로 수요를 예상하세요.", "점심시간과 야근 시간의 구매 패턴을 따로 살펴보세요.", "공용 공간의 소음과 재고 보충 동선을 확인하세요."],
  "병원": ["방문객과 보호자가 이용하기 쉬운 위치를 검토하세요.", "위생 관리와 통행 동선, 상품 표시 정보를 확인하세요.", "병원 운영 규정과 시설 관리 담당자의 승인이 필요할 수 있습니다."],
  "학교·학원": ["학생 이용 시간과 시설 운영 방침을 확인하세요.", "판매 가능한 품목은 학교 규정과 관련 기준을 우선 검토하세요.", "학생 동선과 안전, 결제 편의성을 함께 고려하세요."],
  "공장": ["교대 근무 시간과 휴게공간 접근성을 확인하세요.", "먼지·온도 등 설치 환경이 기기 사용 조건에 맞는지 점검하세요.", "상품 보충 차량과 작업자 동선을 분리해 검토하세요."],
  "호텔·숙박": ["야간 이용객의 구매 수요와 설치 위치를 고려하세요.", "객실층과 로비의 소음 기준, 보충 접근성을 확인하세요.", "여행객이 쉽게 구매할 수 있는 품목 구성이 중요합니다."],
  "아파트": ["입주민 이용 동선과 공용공간 설치 허가를 확인하세요.", "관리사무소와 운영·전기·보충 책임 범위를 협의하세요.", "소음과 쓰레기 처리 방안을 미리 정하세요."],
  "무인매장": ["기존 판매 품목과 중복되지 않는 상품 구성을 검토하세요.", "원격 재고 확인과 결제 오류 대응 절차를 확인하세요.", "매장 내 동선과 도난·파손 방지 대책이 필요합니다."],
  "기타 시설": ["주요 이용자와 방문 시간대부터 파악하세요.", "공간·전원·반입 경로·상품 보충 가능 여부를 확인하세요.", "운영 책임자와 유지관리 범위를 미리 정하세요."]
};
const PRODUCT_INFO = {
  "냉동자판기": ["냉동 보관 온도와 상품별 적정 보관 조건을 확인하세요.", "전원 안정성과 정전 시 대응 방식이 중요합니다.", "냉동 상품의 포장 규격과 배출 방식의 호환성을 점검하세요."],
  "무인자판기": ["판매 품목 크기와 배출 구조의 호환성을 확인하세요.", "결제 수단과 원격 관리 기능은 제품 사양에 따라 다릅니다.", "재고 보충 주기와 장애 대응 담당자를 정하세요."],
  "멀티자판기": ["다양한 상품 크기를 수용할 수 있는지 확인하세요.", "칸별 배출 방식과 파손 위험을 검토하세요.", "품목별 판매량에 맞춰 진열 비율을 조정하세요."],
  "스마트자판기": ["실제 모델의 원격 모니터링·결제 지원 여부를 확인하세요.", "통신 환경과 관리자 접근 권한을 점검하세요.", "이용 화면과 상품 안내를 쉽게 구성하세요."],
  "무인판매기": ["판매 상품의 형태와 기기 규격을 먼저 비교하세요.", "결제 및 판매 기록 관리 방식은 모델별로 확인하세요.", "설치 이후 재고·고장·환불 대응 절차를 정하세요."]
};
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
export default class AutoGuides {
  data() {
    return {
      pagination: { data: "collections.autoGuides", size: 1, alias: "guide", addAllPagesToCollections: false },
      permalink: data => data.guide.url + "index.html",
      eleventyExcludeFromCollections: true
    };
  }
  render({guide, site}) {
    const place = guide.place, product = guide.product;
    const title = `${place} ${product} 설치 안내`;
    const checks = PLACE_INFO[place] || PLACE_INFO["기타 시설"];
    const specs = PRODUCT_INFO[product] || PRODUCT_INFO["무인자판기"];
    const list = arr => arr.map(t => `<li>${escapeHtml(t)}</li>`).join("\n");
    const articles = guide.posts.slice(0,12).map(post => `<li><a href="${escapeHtml(post.url)}">${escapeHtml(post.data.title)}</a></li>`).join("\n");
    const description = `${place}에 ${product}를 설치할 때 확인할 공간, 상품, 운영 관리와 관련 지역 포스팅 안내입니다.`;
    const schema = JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:title,description,url:site.url+guide.url});
    return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} | LK Smart Vending</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${escapeHtml(site.url+guide.url)}"><link rel="stylesheet" href="/style.css"><script type="application/ld+json">${schema.replace(/</g,"\\u003c")}</script><style>body{background:#f7f9fc;color:#17243a;font-family:system-ui,'Noto Sans KR',sans-serif;line-height:1.8}main{max-width:900px;margin:35px auto;padding:30px;background:white;border-radius:16px}h1{line-height:1.35}h2{margin-top:35px;font-size:1.35rem}li{margin:10px 0}a{color:#1358a2}.cta{display:inline-block;padding:12px 20px;background:#17345e;color:white;border-radius:8px;text-decoration:none}small{color:#54657a}</style></head><body><main><p><a href="/">LK Smart Vending 홈</a> · <a href="/posts/">설치 정보 포스팅</a></p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><p><small>이 페이지는 공개된 관련 포스팅의 장소·제품 분류를 기준으로 자동 구성됩니다. 특정 지역의 실제 설치 완료를 의미하지 않습니다.</small></p><h2>${escapeHtml(place)} 설치 공간 확인</h2><ul>${list(checks)}</ul><h2>${escapeHtml(product)} 기기 선택 시 확인사항</h2><ul>${list(specs)}</ul><h2>도입 전 확인할 항목</h2><p>설치 가능 공간과 반입 경로, 전원·통신 환경, 판매 상품 규격, 운영 주체와 상품 보충·환불 책임을 먼저 정리해 주세요. 실제 지원 기능과 비용은 기기 모델과 설치 조건에 따라 달라질 수 있습니다.</p><h2>관련 지역별 포스팅</h2><ul>${articles}</ul><h2>자주 묻는 질문</h2><h3>설치 전에 어떤 정보를 준비해야 하나요?</h3><p>설치 장소 사진, 출입문과 이동 통로 폭, 전원 위치, 판매할 상품 종류, 운영 예정 시간을 준비하면 상담이 수월합니다.</p><h3>설치 비용과 렌탈 여부는 어떻게 확인하나요?</h3><p>기기 종류, 설치 위치, 옵션, 유지관리 조건에 따라 달라집니다. 실제 공급 조건을 문의 접수 후 담당자에게 확인해 주세요.</p><p><a class="cta" href="${escapeHtml(site.consultUrl || '/')}">설치 문의 접수하기 →</a></p><p><small>문의 접수자: ${escapeHtml(site.manager || '박장근')} · 실제 상담 및 계약 조건은 담당자가 안내합니다.</small></p></main></body></html>`;
  }
}
