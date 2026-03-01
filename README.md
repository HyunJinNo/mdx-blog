# mdx-blog

<div align="center">
  <img src="https://github.com/user-attachments/assets/58419133-3522-4980-b1a8-e061d7aa1d9a" alt="mdx-blog" />
</div>

<br />

<div align="center">
  <a href="https://github.com/HyunJinNo/mdx-blog/wiki" target="_blank"><img src="https://img.shields.io/badge/GitHub%20Wiki-181717?logo=github&logoColor=white"></a>
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

| 태그 이름 | 설명                                                              |
| --------- | ----------------------------------------------------------------- |
| bug       | 버그가 발생한 경우                                                |
| chore     | 빌드 설정, 의존성 업데이트 등의 사소한 작업을 수행한 경우         |
| comment   | 주석을 작성하거나 변경한 경우                                     |
| design    | UI 관련 작업을 수행한 경우                                        |
| docs      | 문서를 추가하거나, 삭제, 또는 변경한 경우                         |
| feat      | 새로운 기능을 추가한 경우                                         |
| fix       | 버그를 고친 경우                                                  |
| refactor  | 기능 변경 없이 코드 리팩토링을 수행한 경우                        |
| release   | 배포를 수행한 경우                                                |
| remove    | 파일 또는 폴더를 삭제한 경우                                      |
| rename    | 파일 또는 폴더 명을 수정하거나 파일을 옮기는 작업만을 수행한 경우 |
| test      | 테스트를 추가하거나 테스트 리팩토링을 수행한 경우                 |

<br />
<br />

## 📚 기술 스택

| 분류                | 기술 스택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FE                  | ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?logo=npm&logoColor=white) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white) ![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=Next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-443E38?logo=react&logoColor=ffffff) |
| Infrastructure      | ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=GitHub%20Actions&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/Github%20Pages-121013?logo=github&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Collaboration Tools | ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=GitHub&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
