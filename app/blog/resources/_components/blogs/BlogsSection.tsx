import { resources as resourcesData } from "@/app/_data/blog/resourcesData";
import Blog from "./Blog";

export default function BlogsSection() {
  return (
    <section className="relative w-full border-t-2 border-neutral-200 dark:border-neutral-500 xl:max-w-[760px]">
      <p
        id="blogs"
        className="absolute top-[-22px] left-[10px] px-[6px] bg-neutral-600 dark:bg-neutral-100 text-3xl font-bold xl:top-[-97px] xl:pt-[74px]"
      >
        Blogs
      </p>

      <ul
        className="flex flex-col gap-20 max-w-[400px] mt-[50px] mx-auto md:gap-16 md:max-w-[785px] md:mt-[80px] lg:gap-16 lg:mt-20"
        role="list"
        aria-labelledby="blogs"
      >
        {resourcesData.blogs.map((blog) => (
          <Blog key={blog.id} {...{ blog }} />
        ))}
      </ul>
    </section>
  );
}
