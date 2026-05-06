# Source Notes

요청 URL:
- https://yozm.wishket.com/magazine/detail/3647 — 검색 결과 제목: “12분 49초 만에 한 달치 기획이 나왔다: 콘텐츠 AX 실험기”
- https://yozm.wishket.com/magazine/detail/3695 — 검색 결과 제목: “콘텐츠 AX, ‘프롬프트’ 말고 ‘파일’을 보세요: 콘텐츠 AX 실험기 2”
- https://yozm.wishket.com/magazine/detail/3739 — 검색 결과 제목: “두 달 꼬박 기업용 에이전트 만들며 배운 것: 콘텐츠 AX 실험기 3”

직접 원문 URL은 실행 환경에서 CloudFront 403으로 차단되어 원문 전문 추출은 실패했다. 재현성 확보를 위해 차단 응답과 DuckDuckGo 검색 결과 HTML을 docs/source/search/에 보존했다.

보조 근거:
- https://github.com/wapj/yozm-ai-agent — 요즘IT AI Agent 실험/연재와 연결된 공개 코드 저장소로 보이며, OpenAI Agent SDK, Google ADK, LangGraph, MCP, A2A, multi-agent workflow 예제가 포함되어 있다.
- getdesign.md IBM DESIGN.md: docs/source/ibm-DESIGN.md

작성 원칙:
- 원문 전문을 직접 인용하지 않고, 제목·공개 코드 저장소 구조·엔터프라이즈 에이전트 개발 일반 원칙을 종합했다.
- 기업 적용 가이드로 재구성하며, 실패 패턴/주의사항/고려사항/운영 체크리스트를 중심으로 작성했다.
