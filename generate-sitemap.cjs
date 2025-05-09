const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const routes = [
  "/", "/course/full-stack-development", "/course/software-testing",
  "/course/embedded-system", "/course/data-science", "/course/data-analytics",
  "/course/cloud-computing", "/contact", "/blogs", "/Blogs/subblogs/1",
  "/onlinetraining", "/corporate", "/article1", "/Article2", "/Article3",
  "/Register", "/TandC", "/PrivacyPolicy"
];

const sitemap = new SitemapStream({ hostname: "https://www.adventurelearning.in" }); // replace with your real domain
const writeStream = createWriteStream("./public/sitemap.xml");

// ✅ pipe the sitemap stream into the file
sitemap.pipe(writeStream);

// ✅ write each route
routes.forEach((url) => {
  sitemap.write({ url, changefreq: "monthly", priority: 0.8 });
});

// ✅ end the stream and wait for it to finish
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ Sitemap generated successfully!");
});
