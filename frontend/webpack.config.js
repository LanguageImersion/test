var path = require("path");
module.exports = {
  entry: {
    app: [
      "./entry.js",
      "./objects.js"
    ]
  },
  output: {
    publicPath: "/",
    filename: "bundle.js"
  },
  watch: true
};