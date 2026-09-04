export default function(eleventyConfig) {
  eleventyConfig.ignores.add("V2.*.md");
  eleventyConfig.ignores.add("V1.9_*.md");
  eleventyConfig.addPassthroughCopy({"index.html": "index.html"});
  eleventyConfig.addPassthroughCopy({"style.css": "style.css"});
  eleventyConfig.addPassthroughCopy({"posts.css": "posts.css"});
  eleventyConfig.addPassthroughCopy({"script.js": "script.js"});
  eleventyConfig.addPassthroughCopy({"images": "images"});
  eleventyConfig.addPassthroughCopy({"marketing.html": "marketing.html"});
  eleventyConfig.addPassthroughCopy({"product-smart.html": "product-smart.html"});
  eleventyConfig.addPassthroughCopy({"product-frozen.html": "product-frozen.html"});
  eleventyConfig.addPassthroughCopy({"admin": "admin"});
  eleventyConfig.addPassthroughCopy({"_redirects": "_redirects"});

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("VERSION.txt");
  eleventyConfig.ignores.add("V2.1_설치및운영가이드.md");
  eleventyConfig.ignores.add("V1.9_설치및운영가이드.md");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("_site/**");

  eleventyConfig.addFilter("isoDate", value => {
    try { return new Date(value).toISOString(); } catch { return ""; }
  });
  eleventyConfig.addFilter("rfc822", value => {
    try { return new Date(value).toUTCString(); } catch { return ""; }
  });
  eleventyConfig.addFilter("dateKo", value => {
    try {
      return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric", month: "long", day: "numeric",
        timeZone: "Asia/Seoul"
      }).format(new Date(value));
    } catch { return ""; }
  });
  eleventyConfig.addFilter("xmlEscape", value => String(value ?? "")
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;"));

  eleventyConfig.addCollection("publishedPosts", collectionApi => {
    return collectionApi.getFilteredByTag("posts")
      .filter(item => item.data.published !== false)
      .sort((a, b) => new Date(b.data.date || b.date) - new Date(a.data.date || a.date));
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: false
  };
}
