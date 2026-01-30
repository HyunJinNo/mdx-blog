export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <main className="flex w-full flex-col">{children}</main>;
}
