import { useState } from "react";
import { motion } from "framer-motion";
import { Pagination } from "@/components/pagination";
import { SectionWrapper } from "@/app/components/section-wrapper";

const PAGE_SIZE = 4;

export interface BlogPost {
  title: string;
  link: string;
  date: string;
  summary: string;
  image?: string;
  tags: string[];
}

export function PostSection({ blogs }: { blogs: BlogPost[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const visibleBlogs = blogs.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <SectionWrapper id="posts" title="Posts">
      <div className="divide-y">
        {visibleBlogs.map((post) => (
          <div
            key={post.title}
            className="flex flex-col transition-colors py-6"
          >
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 text-xs uppercase text-gray-400 pt-1">
                {post.date}
              </div>
              <div className="flex-1">
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg md:text-xl font-mono font-medium text-gray-900 hover:underline focus:underline transition group"
                  whileHover={{ x: 8 }}
                >
                  {post.title}
                </motion.a>
                <div className="font-sans text-[17px] text-gray-600 mb-2 mt-2">
                  {post.summary.length > 150
                    ? `${post.summary.substring(0, 150)}...`
                    : post.summary}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="inline-block bg-gray-200 text-xs md:text-sm font-mono text-gray-700 rounded px-2 py-0.5 leading-tight cursor-pointer"
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
                <div className="w-20 h-16 flex-shrink-0 ml-4">
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
