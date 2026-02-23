"use client";

import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

export const TableOfContents = () => {
  const pathname = usePathname();
  const [headingList, setHeadingList] = useState<
    { tagName: string; textContent: string; id: string }[]
  >([]);

  const updateHeadingList = useEffectEvent(
    (arr: { tagName: string; textContent: string; id: string }[]) => {
      setHeadingList(arr);
    },
  );

  useEffect(() => {
    const arr = [];

    for (const element of document.body.getElementsByTagName("main")[0]
      .children) {
      if (["H2", "H3", "H4", "H5", "H6"].includes(element.tagName)) {
        arr.push({
          tagName: element.tagName,
          textContent: element.textContent,
          id: element.id,
        });
      }
    }

    console.log(arr);
    updateHeadingList(arr);
  }, []);

  if (!pathname.startsWith("/posts")) {
    return null;
  }

  return (
    <section className="animate-fade-up sticky top-12 flex w-full flex-col gap-4 border-l border-gray-200 pb-4 pl-4">
      <h2 className="font-medium text-[#585858]">Contents</h2>
      <nav>
        <ul className="text-custom-gray flex flex-col gap-2.5 text-sm">
          {headingList.map((heading) => (
            <li key={heading.id}>
              <a
                className="hover:text-custom-blue"
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();

                  const element = document.getElementById(heading.id);

                  if (element) {
                    // 요소의 위치를 얻어서 위로 스크롤 조정
                    const offset = 30;
                    const elementTop = element.getBoundingClientRect().top;
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;

                    window.scrollTo({
                      top: scrollTop + elementTop - offset,
                      behavior: "smooth",
                    });

                    window.history.pushState(null, "", `#${heading.id}`);
                  }
                }}
              >
                {heading.textContent}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );

  // return (
  //   <section id="toc-wrapper" className="position-sticky ps-0 pe-4 pb-4">
  //     <h2 className="panel-heading mb-0 ps-3 pb-2">Contents</h2>
  //     <nav id="toc">
  //       <ul className="toc-list">
  //         <li className="toc-list-item is-active-li">
  //           <a href="#1-개요" className="toc-link node-name--H2 is-active-link">
  //             1. 개요
  //           </a>
  //         </li>
  //         <li className="toc-list-item">
  //           <a href="#2-qr-코드" className="toc-link node-name--H2">
  //             2. QR 코드
  //           </a>
  //           <ul className="toc-list is-collapsible is-collapsed">
  //             <li className="toc-list-item">
  //               <a href="#21-qr-코드란" className="toc-link node-name--H3">
  //                 2.1. QR 코드란?
  //               </a>
  //             </li>
  //             <li className="toc-list-item">
  //               <a href="#22-qr-코드의-특징" className="toc-link node-name--H3">
  //                 2.2. QR 코드의 특징
  //               </a>
  //             </li>
  //             <li className="toc-list-item">
  //               <a href="#23-qr-코드의-구조" className="toc-link node-name--H3">
  //                 2.3. QR 코드의 구조
  //               </a>
  //               <ul className="toc-list is-collapsible is-collapsed">
  //                 <li className="toc-list-item">
  //                   <a
  //                     href="#231-위치-탐지-패턴-finder-pattern"
  //                     className="toc-link node-name--H4"
  //                   >
  //                     2.3.1. 위치 탐지 패턴 (Finder Pattern)
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a
  //                     href="#232-정렬-패턴-alignment-pattern"
  //                     className="toc-link node-name--H4"
  //                   >
  //                     2.3.2. 정렬 패턴 (Alignment Pattern)
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a
  //                     href="#233-타이밍-패턴-timing-pattern"
  //                     className="toc-link node-name--H4"
  //                   >
  //                     2.3.3. 타이밍 패턴 (Timing Pattern)
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a href="#234-버전-정보" className="toc-link node-name--H4">
  //                     2.3.4. 버전 정보
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a
  //                     href="#235-포맷-정보-format-information"
  //                     className="toc-link node-name--H4"
  //                   >
  //                     2.3.5. 포맷 정보 (Format Information)
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a
  //                     href="#236-데이터-영역"
  //                     className="toc-link node-name--H4"
  //                   >
  //                     2.3.6. 데이터 영역
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a href="#237-여백" className="toc-link node-name--H4">
  //                     2.3.7. 여백
  //                   </a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="toc-list-item">
  //               <a
  //                 href="#24-react에서-qr-코드-생성하기"
  //                 className="toc-link node-name--H3"
  //               >
  //                 2.4. React에서 QR 코드 생성하기
  //               </a>
  //               <ul className="toc-list is-collapsible is-collapsed">
  //                 <li className="toc-list-item">
  //                   <a href="#241-qrcode" className="toc-link node-name--H4">
  //                     2.4.1. qrcode
  //                   </a>
  //                 </li>
  //                 <li className="toc-list-item">
  //                   <a
  //                     href="#242-qrcodereact"
  //                     className="toc-link node-name--H4"
  //                   >
  //                     2.4.2. qrcode.react
  //                   </a>
  //                 </li>
  //               </ul>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="toc-list-item">
  //           <a href="#3-참고-자료" className="toc-link node-name--H2">
  //             3. 참고 자료
  //           </a>
  //         </li>
  //       </ul>
  //     </nav>
  //   </section>
  // );
};
