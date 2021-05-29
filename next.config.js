
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['7rLVbniy3Cy3G7aFGszq77'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  