import Parser from "rss-parser";

export type MediumPost = {
  title: string;
  link: string;
  date: string;
  summary: string;
  image?: string;
  tags: string[];
};

export async function fetchMediumPosts(
  username: string,
  limit = 20
): Promise<{ posts: MediumPost[]; failed?: boolean }> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);
    const posts = feed.items.slice(0, limit).map((item) => {
      let image = "";
      if (item?.enclosure?.url) {
        image = item.enclosure.url;
      } else if (item?.["content:encoded"]) {
        const imgMatch = item?.["content:encoded"].match(
          /<img[^>]+src="([^"]+)"/,
        );
        if (imgMatch) {
          image = imgMatch[1];
        }
      }

      return {
        title: item.title ?? "",
        link: item.link ?? "",
        date: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "",
        summary: item?.["content:encodedSnippet"] ?? "",
        image: image,
        tags: item.categories || [],
      };
    });
    return { posts };
  } catch (error) {
    console.warn("Failed to fetch Medium posts:", error);
    return { posts: [], failed: true };
  }
}

const MEDIUM_PROFILE_URL = "https://medium.com/@sjlouji10";

export function getMediumProfileUrl() {
  return MEDIUM_PROFILE_URL;
}
