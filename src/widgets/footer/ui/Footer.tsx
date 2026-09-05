import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-custom-gray h-20 w-full border-t border-gray-200 py-4 text-xs">
      <p>
        © <time>{year}</time>
        <a
          className="font-medium underline-offset-4 hover:text-teal-500 hover:underline"
          href="https://github.com/HyunJinNo"
        >
          {" HyunJinNo. "}
        </a>
        <Tooltip>
          <TooltipTrigger render={<span>Some rights reserved.</span>} />
          <TooltipContent className="w-50">
            <p>
              Except where otherwise noted, the blog posts on this site are
              licensed under the Creative Commons Attribution 4.0 International
              (CC BY 4.0) License by the author.
            </p>
          </TooltipContent>
        </Tooltip>
      </p>
    </footer>
  );
};
