// is next line needed?
"use client";
import NavBar from "../../../../_components/blog/navigation/NavBar";
import Header from "../../../../_components/blog/posts/header/Header";
import Content from "../../../../_components/blog/posts/web-related-terms/Content";
import TableOfContents from "../../../../_components/blog/posts/web-related-terms/TableOfContents";
import Footer from "../../../../_components/blog/footer/Footer";

export default function WebRelatedTerms() {
  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      <Header />
      <div className="flex w-full gap-4 pt-[56px] px-6 pb-4 mx-auto md:max-w-[686px] md:px-0 xl:max-w-[1100px] xl:px-8">
        <Content />
        <TableOfContents />
      </div>
      <Footer />
    </main>
  );
}
