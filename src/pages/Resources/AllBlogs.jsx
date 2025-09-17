import { Helmet } from "react-helmet";
import Blogs from "../../components/Blogs";
function AllBlogs() {
  return (
    <>
      <Helmet>
        <title>Educational Blogs on Tech Courses | Career Tips & Insights</title>
        <meta
          name="description"
          content="Explore Adventure Learning’s blogs on IT courses, career tips, data science, cloud, full stack & more. Stay updated with the latest tech trends & insights"
        />
        <meta
          property="og:title"
          content="Top Blogs on Tech Education & Career Growth"
        />
        <meta
          property="og:description"
          content="Explore valuable insights, tutorials, and career advice across our top tech training programs. Learn from real-world experiences and expert guidance."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.adventurelearning.in/blogs"
        />
        <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
        <meta
          property="og:image:alt"
          content="Adventure Learning Blogs"
        />
      </Helmet>

      <Blogs />
    </>
  );
}

export default AllBlogs;
