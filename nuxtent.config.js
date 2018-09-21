module.exports = {
  content: [
    [
      "posts",
      {
        page: "/_slug",
        permalink: "/blog/:slug",
        isPost: false,
        generate: ["get", "getAll"]
      }
    ]
  ],

  api: function(isStatic) {
    return { browserBaseURL: isStatic ? "https://influx-agence.netlify.com" : "" };
  }
};
