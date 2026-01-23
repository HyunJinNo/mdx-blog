export const Footer = () => {
  return (
    <footer className="text-custom-gray h-20 w-full border-t border-gray-200 py-4 text-xs">
      <p>
        © <time>2026</time> {/* TODO */}
        <a
          className="font-medium underline-offset-4 hover:text-teal-500 hover:underline"
          href="https://github.com/HyunJinNo"
        >
          {"HyunJinNo. "}
        </a>
        <span className="group relative">
          Some rights reserved.
          <span className="after:content-[' '] invisible absolute bottom-5 left-1/2 w-50 -translate-x-1/2 rounded-xl bg-black p-2 text-white group-hover:visible after:absolute after:top-full after:left-1/2 after:-ml-1.25 after:border-[0.3125rem] after:border-t-black">
            Except where otherwise noted, the blog posts on this site are
            licensed under the Creative Commons Attribution 4.0 International
            (CC BY 4.0) License by the author.
          </span>
        </span>
      </p>
    </footer>
  );
};
