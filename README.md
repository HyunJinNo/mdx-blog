# mdx-blog

<div align="center">
  <img src="https://github.com/user-attachments/assets/58419133-3522-4980-b1a8-e061d7aa1d9a" alt="mdx-blog" />
</div>

> 배포 링크 <br/> **https://hyunjinno-dev.com**

<br />

<div align="center">
   <a href="https://github.com/users/HyunJinNo/projects/3" target="blank"><img src="https://img.shields.io/badge/🎯Backlog%20-02B78F?logo=none&logoColor=white"></a>
</div>

<br />
<br />

## 목차

- [📖 프로젝트 소개](#-프로젝트-소개)
  - [개요](#개요)
  - [프로젝트 인원](#프로젝트-인원)
  - [프로젝트 기간](#프로젝트-기간)
- [✏️ 개발 기록](#️-개발-기록)
- [📔 Git Branch Rule - GitHub Flow](#-git-branch-rule---github-flow)
- [💬 Git Commit Message Rule](#-git-commit-message-rule)
- [📚 기술 스택](#-기술-스택)

<br />
<br />

## 📖 프로젝트 소개

### 개요

Next.js(App Router)와 MDX 기반으로 제작한 개인 블로그입니다. 기존에 사용한 Jekyll 기반 블로그의 유지보수가 어려워 새로 제작하였습니다. 이전 블로그 저장소는 다음 링크에서 확인하실 수 있습니다.

[HyunJinNo/HyunJinNo.github.io](https://github.com/HyunJinNo/HyunJinNo.github.io)

<br />

### 프로젝트 인원

`1명 (HyunJinNo)`

<br />

### 프로젝트 기간

`2026. 01. 20. ~ `

<br />
<br />

## ✏️ 개발 기록

| 제목                                                                                                                          | 작성 날짜     |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [[트러블슈팅] Next.js + Module not found](https://hyunjinno-dev.com/posts/2026-02-20-troubleshooting-nextjs-module-not-found) | 2026. 02. 20. |
| [Next.js Giscus 사용 방법](https://hyunjinno-dev.com/posts/2026-02-22-nextjs-giscus)                                          | 2026. 02. 22. |
| [[개발 기록] Next.js 목차 기능 구현 방법](https://hyunjinno-dev.com/posts/2026-02-25-nextjs-table-of-contents)                | 2026. 02. 25. |
| [Next.js GitHub Pages 정적 배포하기](https://hyunjinno-dev.com/posts/2026-02-26-nextjs-static-export)                         | 2026. 02. 26. |
| [Next.js 클립보드 복사 기능 구현 방법](https://hyunjinno-dev.com/posts/2026-02-28-clipboard-api)                              | 2026. 02. 28. |
| [Next.js GitHub Pages 커스텀 도메인 적용 방법](https://hyunjinno-dev.com/posts/2026-02-28-github-pages-custom-domain)         | 2026. 02. 28. |
| [[트러블슈팅] Next.js + react-photo-view](https://hyunjinno-dev.com/posts/2026-02-28-troubleshooting-react-photo-view)        | 2026. 02. 28. |
| [서브셋 폰트로 웹 성능 개선하기](https://hyunjinno-dev.com/posts/2026-03-01-subset-font)                                      | 2026. 03. 01. |

<br />
<br />

## 📔 Git Branch Rule - GitHub Flow

![github_flow](https://github.com/user-attachments/assets/fc06c792-7fd8-4dfc-aade-aee4fba26ade)

| Branch | Description                                                                                                                             | Naming Examples |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| main   | 출시 가능한 프로덕션 코드를 모아두는 브랜치입니다. 배포된 각 버전을 Tag를 사용하여 표시해둡니다. Tag Naming은 v1.0.1과 같이 표시합니다. | v1.0.1          |
| dev    | 기능 개발을 위한 코드를 모아두는 브랜치입니다. 기능 개발이 완료된 경우 main 브랜치로 merge 합니다.                                      | dev/#1          |

<br />
<br />

## 💬 Git Commit Message Rule

| type     | Description                                                                                        | Commit Message Example                        |
| -------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| build    | 빌드 시스템이나 외부 종속성 관련 파일 수정 (Changes to build system or dependencies)               | build: configure webpack settings             |
| chore    | 빌드 작업, 패키지 매니저 설정 등 기타 수정 (Other maintenance tasks)                               | chore: update dependencies                    |
| ci       | CI/CD 설정 변경 (Changes to CI/CD configuration)                                                   | ci: add GitHub Actions workflow               |
| docs     | 문서 추가 및 수정 (Documentation changes)                                                          | docs: update README installation guide        |
| feat     | 새로운 기능 추가 (New feature)                                                                     | feat: add user login feature                  |
| fix      | 버그 수정 (Bug fix)                                                                                | fix: resolve login API error                  |
| perf     | 성능 향상을 위한 코드 변경 (Performance improvements)                                              | perf: optimize image loading                  |
| refactor | 버그 수정이나 기능 추가 없는 코드 리팩토링 (Code refactoring without feature changes or bug fixes) | refactor: simplify auto logic                 |
| revert   | 이전 commit 되돌리기 (Revert previous commit)                                                      | revert: revert "feat: add user login feature" |
| style    | 코드 포맷팅, 세미콜론 누락 등 코드 스타일 변경 (Code style changes, formatting only)               | style: format code with prettier              |
| test     | 테스트 코드 추가 및 수정 (Adding or updating tests)                                                | test: add unit tests for login service        |

<br />
<br />

## 📚 기술 스택

| 분류                | 기술 스택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FE                  | ![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?logo=pnpm&logoColor=f69220) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white) ![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=Next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-443E38?logo=react&logoColor=ffffff) |
| Infrastructure      | ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=GitHub%20Actions&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/Github%20Pages-121013?logo=github&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Collaboration Tools | ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=GitHub&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
