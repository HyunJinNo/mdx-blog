import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export const SidebarLink = ({
  href,
  ariaLabel,
  children,
}: SidebarLinkProps) => {
  return (
    <Link className="custom-button-link" href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};
