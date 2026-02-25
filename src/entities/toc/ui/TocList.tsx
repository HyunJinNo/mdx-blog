import { TocNode } from "../model/tocNode";

interface TocListProps {
  activeId: string;
  tocNode: TocNode;
}

export const TocList = ({ activeId, tocNode }: TocListProps) => {
  const containsActive = (tocNode: TocNode): boolean => {
    if (activeId === tocNode.id) {
      return true;
    }

    return tocNode.children.some((child) => containsActive(child));
  };

  return (
    <li key={tocNode.id} className="flex flex-col gap-2.5">
      <a
        className={[
          tocNode.tagName === "H2" && "pl-4",
          tocNode.tagName === "H3" && "pl-7",
          tocNode.tagName === "H4" && "pl-10",
          tocNode.tagName === "H5" && "pl-13",
          activeId === tocNode.id &&
            "text-custom-blue border-custom-blue -ml-px border-l font-medium dark:border-blue-300 dark:text-blue-300",
          "hover:text-custom-blue truncate hover:dark:text-blue-300",
        ].join(" ")}
        href={`#${tocNode.id}`}
        onClick={(e) => {
          e.preventDefault();

          const element = document.getElementById(tocNode.id);

          if (element) {
            // 요소의 위치를 얻어서 위로 스크롤 조정
            window.scrollTo({
              top: element.offsetTop - 30,
              behavior: "smooth",
            });

            window.history.pushState(null, "", `#${tocNode.id}`);
          }
        }}
      >
        {tocNode.textContent}
      </a>
      {tocNode.children.length !== 0 && containsActive(tocNode) && (
        <ul className={["flex flex-col gap-2.5"].join(" ")}>
          {tocNode.children.map((child) => (
            <TocList key={child.id} activeId={activeId} tocNode={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
