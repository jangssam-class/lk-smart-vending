# LK Smart Vending V1.9 — Publishing CMS + Naver-ready SEO

핵심 추가:
- `/admin/` 웹 관리자에서 포스팅 작성/수정/발행
- Decap CMS + Git Gateway 구조
- GitHub 커밋 → Netlify 자동 배포
- Markdown 포스팅 → 정적 HTML 자동 생성(Eleventy)
- `/posts/` 포스팅 목록 자동 생성
- 포스팅마다 고유 title / description / canonical / OG / Article 구조화데이터
- sitemap.xml 자동 갱신
- rss.xml 자동 갱신(본문 포함)
- robots.txt 자동 생성
- 관리자/마케팅도구 noindex
- 기존 전국 제목 생성기 marketing.html 유지
- 비공개 샘플 포스팅 포함

주의:
- `_data/site.json`의 URL은 Netlify 실제 주소가 생긴 뒤 한 번 수정해야 합니다.
- 네이버 검색 노출은 검색로봇의 수집/색인/랭킹 결과이므로 보장할 수 없습니다.
