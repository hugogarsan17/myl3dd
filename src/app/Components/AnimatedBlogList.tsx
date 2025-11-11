"use client";

import { motion } from "framer-motion";

export function AnimatedBlogList({
  posts,
}: {
  posts: Array<{ id: string; title: string }>;
}) {
  return (
    <div className="space-y-4">
      {posts.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl border p-4"
        >
          <h3 className="text-lg font-medium">{p.title}</h3>
        </motion.article>
      ))}
    </div>
  );
}
