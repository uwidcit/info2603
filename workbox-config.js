module.exports = {
  "globDirectory": "site/",
  "globPatterns": [
    "**/*.{css,png,html,pdf}"
  ],
  "swDest": "docs\\sw.js",
	clientsClaim:true,
	skipWaiting: true,
	maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
};
