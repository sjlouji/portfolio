import { useState } from "react";
import { motion } from "framer-motion";
import { Pagination } from "@/components/pagination";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { ExternalLink } from "lucide-react";

const PAGE_SIZE = 4;

export interface BlogPost {
  title: string;
  link: string;
  date: string;
  summary: string;
  image?: string;
  tags: string[];
}

export function PostSection({
  blogs,
  loadFailed = false,
  mediumProfileUrl = "https://medium.com/@sjlouji10",
}: {
  blogs: BlogPost[];
  loadFailed?: boolean;
  mediumProfileUrl?: string;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const visibleBlogs = blogs.slice(startIdx, startIdx + PAGE_SIZE);

  if (loadFailed && blogs.length === 0) {
    return (
      <SectionWrapper id="posts" title="Posts">
        <div className="rounded-lg border border-border bg-muted/30 px-6 py-10 text-center">
          <p className="font-sans text-[17px] text-muted-foreground">
            There was trouble loading blog posts from Medium.
          </p>
          <p className="mt-2 font-sans text-[17px] text-muted-foreground">
            Try navigating to{" "}
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              {mediumProfileUrl}
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="posts" title="Posts">
      <div className="divide-y">
        {visibleBlogs.map((post) => (
          <div
            key={post.title}
            className="flex flex-col transition-colors py-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0">
              <div className="w-full sm:w-24 flex-shrink-0 text-xs uppercase text-muted-foreground pt-1">
                {post.date}
              </div>
              <div className="flex-1 min-w-0">
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg sm:text-xl font-mono font-medium text-foreground hover:underline focus:underline transition group break-words"
                  whileHover={{ x: 8 }}
                >
                  {post.title}
                </motion.a>
                <div className="font-sans text-[17px] text-muted-foreground mb-2 mt-2">
                  {post.summary.length > 150
                    ? `${post.summary.substring(0, 150)}...`
                    : post.summary}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="inline-block bg-secondary text-xs md:text-sm font-mono text-secondary-foreground rounded px-2 py-0.5 leading-tight cursor-pointer"
                      whileHover={{
                        scale: 1.12,
                        backgroundColor: "#dbeafe",
                        color: "#1e40af",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              {post.image && (
                <div className="w-full sm:w-20 h-32 sm:h-16 flex-shrink-0 sm:ml-4 mt-2 sm:mt-0 order-last sm:order-none">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={64}
                    className="w-full h-full object-cover rounded-lg shadow-sm"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </SectionWrapper>
  );
}
