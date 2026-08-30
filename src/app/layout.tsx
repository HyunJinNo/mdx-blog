import type { Metadata } from "next";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import "@hyunjinno/react-toc/style.css";
import { Sidebar } from "@/widgets/sidebar";
import localFont from "next/font/local";
import { Header } from "@/widgets/header";
import { RecentlyUpdatedPostList } from "@/widgets/recentlyUpdatedPostList";
import { TrendingTagList } from "@/widgets/trendingTagList";
import { ScrollToTopButton } from "@/features/scrollToTop";
import { Footer } from "@/widgets/footer";
import { SearchResultViewer } from "@/widgets/searchResultViewer";
import { getAllPostList } from "@/entities/post";
import { BottomNavigation } from "@/widgets/bottomNavigation";
import { Toc, TocProvider } from "@/entities/toc";
import { Geist } from "next/font/google";
import { cn } from "@/shared/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const pretendardFont = localFont({
  src: [
    {
      path: "./Pretendard-Light.subset.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Pretendard-Black.custom-subset.woff2",
      weight: "900",
      style: "Black",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "노현진's Blog",
    template: "%s | 노현진's Blog",
  },
  authors: [{ name: "HyunJinNo", url: "https://github.com/HyunJinNo" }],
  description: "Next.js로 만든 MDX 블로그입니다.",
  keywords: [
    "hyunjinno",
    "hyunjinno-dev",
    "mdx-blog",
    "블로그",
    "노현진",
    "노현진's Blog",
  ],
  metadataBase: new URL("https://hyunjinno-dev.com"),
  openGraph: {
    title: "노현진's Blog",
    description: "Next.js로 만든 MDX 블로그입니다.",
    url: "https://hyunjinno-dev.com",
    images: [{ url: "/images/background.avif", width: 640, height: 960 }],
    locale: "ko_KR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const postList = await getAllPostList();

  return (
    <html
      lang="ko"
      className={cn(pretendardFont.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="naver-site-verification"
          content="6ec4c644baa43419d9a3f9c3229d72d1e2706e46"
        />
        <link
          rel="icon"
          href="/images/icon/falling-star-logo.webp"
          sizes="any"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              try {
                const theme = localStorage.getItem("theme");

                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body className="flex flex-row">
        <Sidebar />
        <div className="desktop:pl-81 laptop:pl-74 desktop:pr-16 tablet:px-9 flex w-full flex-col bg-white px-3 transition-colors duration-100 dark:bg-black">
          <Header />
          <SearchResultViewer postList={postList}>
            <TocProvider>
              <div className="mt-12 flex w-full flex-row justify-between gap-8">
                <div className="flex w-full min-w-0 flex-col gap-12">
                  {children}
                  <Footer />
                </div>
                <div className="desktop:flex hidden w-70 flex-col gap-16">
                  <RecentlyUpdatedPostList />
                  <TrendingTagList />
                  <Toc />
                </div>
              </div>
            </TocProvider>
          </SearchResultViewer>
          <aside className="desktop:right-20 tablet:right-9 fixed right-3 bottom-15">
            <ScrollToTopButton />
          </aside>
          <BottomNavigation />
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
