export default {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    permalink: data => {
      if (data.published === false) return false;
      const raw = String(data.slug_id || data.page?.fileSlug || "post").toLowerCase();
      const safe = raw
        .normalize("NFKD")
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") || "post";
      const date = new Date(data.date || Date.now());
      const y = String(date.getFullYear());
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `/posts/${y}${m}${d}-${safe}/index.html`;
    },
    eleventyExcludeFromCollections: data => data.published === false
  }
};
