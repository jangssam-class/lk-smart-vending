const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export default class RegionsIndex {
  data() { return {permalink:"/regions/index.html",eleventyExcludeFromCollections:true}; }
  render({collections,site}) {
    const regions = collections.regionHubs || [];
    const links = regions.map(r=>`<li><a href="${esc(r.url)}">${esc(r.province)} ${esc(r.city)} 자판기 설치 정보</a> <small>(${r.posts.length}건)</small></li>`).join("\n");
    return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>전국 지역별 자판기 설치 정보 | LK Smart Vending</title><meta name="description" content="공개된 지역별 자판기 설치·렌탈 포스팅과 제품 안내를 지역별로 찾아보세요."><link rel="canonical" href="${esc(site.url)}/regions/"><link rel="stylesheet" href="/style.css"><style>body{background:#f6f9fc;color:#192b42;font-family:system-ui,'Noto Sans KR',sans-serif;line-height:1.8}main{max-width:880px;margin:30px auto;padding:28px;background:#fff;border-radius:15px}li{padding:12px 0;border-bottom:1px solid #edf0f4}a{color:#145d9e}@media(max-width:700px){main{margin:12px;padding:20px}}</style></head><body><main><a href="/">← LK Smart Vending 홈</a><h1>전국 지역별 자판기 설치 정보</h1><p>현재 발행된 포스팅이 있는 지역만 표시합니다. 실제 설치 완료 지역이나 지점 목록이 아닌 정보성 콘텐츠 모음입니다.</p><ul>${links}</ul><p><a href="/posts/">전체 포스팅 보기 →</a></p></main></body></html>`;
  }
}
