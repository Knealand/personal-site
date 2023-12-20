module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('scripts')
    eleventyConfig.addPassthroughCopy('fonts')
    eleventyConfig.addPassthroughCopy('images')
    return {
      passthroughFileCopy: true
    }
  }