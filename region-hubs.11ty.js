const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const productLink = product => product === "냉동자판기" ? "/product-frozen.html" : "/product-smart.html";
export default class RegionHubs {
  data() {
    return {
      pagination: { data: "collections.regionHubs", size: 1, alias: "region", addAllPagesToCollections: false },
      permalink: data => data.region.url + "index.html",
      eleventyExcludeFromCollections: true
    };
  }
  render({region, site}) {
    const label = `${region.province} ${region.city}`;
    const title = `${label} 자판기 설치·렌탈 정보`;
    const description = `${label}의 스마트자판기·냉동자판기·무인자판기 관련 공개 포스팅과 제품 선택, 설치 전 확인사항을 모았습니다.`;
    const posts = region.posts.map(post => {
      const d = post.data;
      const tags = [d.district,d.product,d.place].filter(Boolean).map(escapeHtml).join(" · ");
      return `<li class="post-item"><a href="${escapeHtml(post.url)}"><strong>${escapeHtml(d.title)}</strong></a><p>${escapeHtml(d.description || "")}</p><small>${tags}</small></li>`;
    }).join("\n");
    const products = [...new Set(region.posts.map(post => post.data.product).filter(Boolean))].map(product => `<a class="chip" href="${productLink(product)}">${escapeHtml(product)} 제품 안내 ↗</a>`).join(" ");
    const schema = JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:title,description,url:site.url+region.url});
    return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} | LK Smart Vending</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${escapeHtml(site.url+region.url)}"><link rel="stylesheet" href="/style.css"><script type="application/ld+json">${schema.replace(/</g,"\\u003c")}</script><style>body{margin:0;background:#f5f8fc;color:#18283f;font-family:system-ui,'Noto Sans KR',sans-serif;line-height:1.75}header,main,footer{max-width:960px;margin:auto;padding:22px}header{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}a{color:#1260a7}main{background:white;border-radius:18px;margin:18px auto;padding:34px;box-sizing:border-box}h1{font-size:clamp(1.6rem,4vw,2.3rem);line-height:1.35}h2{margin-top:36px;font-size:1.3rem}.post-item{padding:16px 0;border-bottom:1px solid #e5ebf3}.post-item p{margin:5px 0}.post-item small{color:#5b697b}.chip{display:inline-block;margin:6px 8px 6px 0;padding:9px 13px;background:#eef5ff;border-radius:9px}.cta{display:inline-block;padding:12px 19px;background:#17345e;color:white;border-radius:8px;text-decoration:none}@media(max-width:700px){main{margin:10px;padding:20px}header{padding:16px}}</style></head><body><header><a href="/">LK Smart Vending 홈</a><nav><a href="/regions/">전국 지역 안내</a> · <a href="/posts/">정보 포스팅</a></nav></header><main><p>지역별 자판기 정보</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><p>이 페이지는 ${escapeHtml(label)} 관련 공개 포스팅을 모아 보여주는 안내 페이지입니다. 해당 지역에 실제 설치를 완료했거나 지점이 있다는 의미는 아닙니다.</p><h2>설치 전 확인할 사항</h2><p>자판기를 설치할 공간의 폭과 반입 경로, 전원·통신 환경, 판매할 상품의 크기와 보관 온도, 상품 보충 담당자를 먼저 확인하세요. 구매와 렌탈은 계약 기간, 유지보수 범위, 결제 기능과 실제 총비용을 함께 비교하는 것이 좋습니다.</p><h2>관련 제품 정보</h2>${products || '<a class="chip" href="/product-smart.html">스마트멀티밴딩머신 제품 안내</a>'}<h2>${escapeHtml(label)} 관련 포스팅 (${region.posts.length}건)</h2><ul style="list-style:none;padding:0">${posts}</ul><h2>자주 묻는 질문</h2><h3>설치 가능 여부는 어떻게 확인하나요?</h3><p>현장 사진과 설치 공간 크기, 반입 경로, 전원 위치, 판매 상품을 확인한 뒤 담당자와 설치 조건을 검토해야 합니다.</p><h3>렌탈 비용은 정해져 있나요?</h3><p>기기 모델, 옵션, 설치 환경, 계약 기간과 유지관리 조건에 따라 달라지므로 실제 조건을 확인해야 합니다.</p><h2>문의 접수</h2><p>접수자가 설치 관련 문의를 전달하며, 실제 제품 상담과 계약 조건은 담당자가 안내합니다.</p><a class="cta" href="${escapeHtml(site.consultUrl)}" target="_blank" rel="noopener noreferrer">설치·렌탈 문의 접수 →</a></main><footer>© LK Smart Vending · 접수자 ${escapeHtml(site.manager)}</footer></body></html>`;
  }
}
