# Enterprise Agent Guide HTML Report

기업용 AI 에이전트 개발 시 자주 실패하는 지점, 주의사항, 설계 원칙, 운영 체크리스트를 정리한 standalone HTML 리포트입니다.

## Sources
- https://yozm.wishket.com/magazine/detail/3647
- https://yozm.wishket.com/magazine/detail/3695
- https://yozm.wishket.com/magazine/detail/3739
- https://github.com/wapj/yozm-ai-agent
- https://getdesign.md/design-md/ibm/DESIGN.md

## Design
- getdesign.md `ibm` DESIGN.md를 참고했습니다.
- IBM 로고/상표 자산은 사용하지 않았습니다.
- 폰트는 `Noto Sans KR`로 통일했습니다.
- Carbon 계열의 엔터프라이즈 블루/그리드/명확한 정보 구조에 글래스모피즘 표면을 섞었습니다.

## Run locally
```bash
cd /opt/data/repos/enterprise-agent-guide-html/src
python3 -m http.server 8791
```
Then open http://127.0.0.1:8791/

## Files
- `src/index.html`, `src/styles.css`, `src/app.js`: source artifact
- `docs/`: GitHub Pages-ready copy
- `docs/source/`: collected sources and notes
- `AGENT.md`, `DESIGN.md`, `SKILLS.md`: maintenance docs
