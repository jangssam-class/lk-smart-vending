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


## V2.2 Netlify 배포 오류 수정
- CMS에 URL ID(slug_id) 필드 추가
- URL ID는 영문 소문자/숫자/하이픈만 허용
- 게시글 URL은 날짜 + 안전한 slug_id로 생성
- 루트 문서 Markdown 파일을 Eleventy 빌드 대상에서 제외
- 특수문자(#, ?)가 URL/파일명으로 들어가는 문제 방지
- marketing.html에 안전한 URL ID 생성/복사 기능 추가

예시:
표시 제목: 부산 재송동 냉동자판기 설치 렌탈 무인 멀티자판기 운영사례 음료 간식
URL ID: busan-jaesong-vending
실제 URL: /posts/20260812-busan-jaesong-vending/
