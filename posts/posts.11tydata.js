export default {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    permalink: data => data.published === false
      ? false
      : `/posts/${data.page.fileSlug}/index.html`,
    eleventyExcludeFromCollections: data => data.published === false
  }
};
