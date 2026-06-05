module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  return {
    pathPrefix: "/smartkin/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
