import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SidebarLink = ({ href, children }: SidebarLinkProps) => {
  return (
    <Link
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white text-black/50 duration-300 hover:bg-white/50 hover:text-white"
      href={href}
    >
      {children}
    </Link>
  );
};
