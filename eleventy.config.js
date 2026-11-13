export default function(eleventyConfig) {
  eleventyConfig.ignores.add("V2.*.md");
  eleventyConfig.ignores.add("V1.9_*.md");
  eleventyConfig.addPassthroughCopy({"index.html": "index.html"});
  eleventyConfig.addPassthroughCopy({"guides": "guides"});
  eleventyConfig.addPassthroughCopy({"style.css": "style.css"});
  eleventyConfig.addPassthroughCopy({"posts.css": "posts.css"});
  eleventyConfig.addPassthroughCopy({"script.js": "script.js"});
  eleventyConfig.addPassthroughCopy({"images": "images"});
  eleventyConfig.addPassthroughCopy({"videos": "videos"});
  eleventyConfig.addPassthroughCopy({"marketing.html": "marketing.html"});
  eleventyConfig.addPassthroughCopy({"media-check.html": "media-check.html"});
  eleventyConfig.addPassthroughCopy({"product-smart.html": "product-smart.html"});
  eleventyConfig.addPassthroughCopy({"product-frozen.html": "product-frozen.html"});
  eleventyConfig.addPassthroughCopy({"admin": "admin"});
  eleventyConfig.addPassthroughCopy({"_redirects": "_redirects"});
  eleventyConfig.addPassthroughCopy({"favicon.ico": "favicon.ico"});
  eleventyConfig.addPassthroughCopy({"favicon.png": "favicon.png"});
  eleventyConfig.addPassthroughCopy({"apple-touch-icon.png": "apple-touch-icon.png"});
  eleventyConfig.addPassthroughCopy({"android-chrome-192x192.png": "android-chrome-192x192.png"});
  eleventyConfig.addPassthroughCopy({"android-chrome-512x512.png": "android-chrome-512x512.png"});
  eleventyConfig.addPassthroughCopy({"site.webmanifest": "site.webmanifest"});

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

  // CMS 발행 글의 장소 + 제품 조합별로 안내 페이지를 하나만 생성합니다.
  eleventyConfig.addCollection("autoGuides", collectionApi => {
    const groups = new Map();
    for (const post of collectionApi.getFilteredByTag("posts")) {
      if (post.data.published === false) continue;
      const place = String(post.data.place || "").trim();
      const product = String(post.data.product || "").trim();
      if (!place || !product) continue;
      const key = `${place}::${product}`;
      if (!groups.has(key)) groups.set(key, { place, product, posts: [] });
      groups.get(key).posts.push(post);
    }
    return [...groups.values()].map(group => ({
      ...group,
      url: `/guides/topics/${encodeURIComponent(group.place)}-${encodeURIComponent(group.product)}/`,
      posts: group.posts.sort((a,b) => new Date(b.data.date || b.date) - new Date(a.data.date || a.date))
    }));
  });
  eleventyConfig.addFilter("autoGuideUrl", (place, product) => {
    if (!place || !product) return "";
    return `/guides/topics/${encodeURIComponent(String(place).trim())}-${encodeURIComponent(String(product).trim())}/`;
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
