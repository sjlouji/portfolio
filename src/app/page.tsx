import { LandingPage } from "@/app/landing-page";
import { portfolioData } from "@/lib/data";
import { fetchMediumPosts, getMediumProfileUrl } from "@/lib/fetchMedium";

export default async function Page() {
  let blogs: Awaited<ReturnType<typeof fetchMediumPosts>>["posts"] = [];
  let blogsLoadFailed = false;
  try {
    const result = await fetchMediumPosts("sjlouji10");
    blogs = result.posts;
    blogsLoadFailed = result.failed ?? false;
  } catch (error) {
    console.warn("Failed to fetch blogs in page:", error);
    blogsLoadFailed = true;
  }

  return (
    <LandingPage
      initialData={portfolioData}
      blogs={blogs}
      blogsLoadFailed={blogsLoadFailed}
      mediumProfileUrl={getMediumProfileUrl()}
    />
  );
}
