import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from "@apollo/client/react";
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AlertCircle, ThumbsUp, Clock, Calendar, User, ArrowLeft, Share2, Bookmark, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import likedAnimation from './liked.json';

// GraphQL queries and mutations
const GET_BLOG_POST = gql`
  query GetBlogPost($id: ID!) {
    blogPost(id: $id) {
      id
      title
      shortDescription
      description
      link
      photo
      topic
      subtitles {
        subtitle
        content
      }
      trending
      order
      likes
      createdAt
      status
    }
  }
`;

const GET_BLOG_POST_BY_LINK = gql`
  query GetBlogPostByLink($link: String!) {
    blogPostByLink(link: $link) {
      id
      title
      shortDescription
      description
      link
      photo
      topic
      subtitles {
        subtitle
        content
      }
      trending
      order
      likes
      createdAt
      status
    }
  }
`;

const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    blogPosts(status: "published") {
      id
      title
      shortDescription
      link
      photo
      topic
      createdAt
      likes
    }
  }
`;

const LIKE_BLOG_POST = gql`
  mutation LikeBlogPost($id: ID!) {
    likeBlogPost(id: $id) {
      id
      likes
    }
  }
`;

const SubBlogs = () => {
  const { id } = useParams();
  const [localLikes, setLocalLikes] = useState({});
  const [showLikedFeedback, setShowLikedFeedback] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
 const [animationData, setAnimationData] = useState(null);

  // Load animation data with fallback
  useEffect(() => {
    try {
      // First try to use the imported animation
      setAnimationData(likedAnimation);
    } catch (error) {
      console.warn('Could not import animation, trying to fetch:', error);
      // Fallback to fetching from public directory
      fetch('/liked.json')
        .then(response => response.json())
        .then(data => setAnimationData(data))
        .catch(err => console.error('Error loading animation:', err));
    }
  }, []);
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);

  const { loading, error, data } = useQuery(
    isObjectId ? GET_BLOG_POST : GET_BLOG_POST_BY_LINK,
    {
      variables: isObjectId ? { id } : { link: id }
    }
  );

  // Fetch all blog posts to filter for related content
  const { data: allBlogsData, loading: allBlogsLoading } = useQuery(GET_ALL_BLOG_POSTS);

  const [likeBlogPost] = useMutation(LIKE_BLOG_POST);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-96">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">Error loading blog: {error.message}</p>
            <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const blogPost = isObjectId ? data.blogPost : data.blogPostByLink;

  if (!blogPost) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Browse All Blogs
          </Link>
        </motion.div>
      </div>
    </div>
  );

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";

    const date = new Date(Number(dateString));
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const renderHTML = (htmlString) => {
    if (!htmlString) return { __html: '' };
    return { __html: htmlString };
  };

  const handleLike = async () => {
    try {
      setShowLikedFeedback(true);

      setLocalLikes(prev => ({
        ...prev,
        [blogPost.id]: (prev[blogPost.id] || blogPost.likes) + 1
      }));

      await likeBlogPost({
        variables: { id: blogPost.id },
        optimisticResponse: {
          likeBlogPost: {
            id: blogPost.id,
            likes: blogPost.likes + 1,
            __typename: 'Blog'
          }
        }
      });

      setTimeout(() => setShowLikedFeedback(false), 3000);
    } catch (error) {
      console.error("Error liking blog:", error);
      setLocalLikes(prev => ({
        ...prev,
        [blogPost.id]: blogPost.likes
      }));
      setShowLikedFeedback(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title.replace(/<[^>]*>/g, ''),
        text: blogPost.shortDescription.replace(/<[^>]*>/g, ''),
        url: window.location.href,
      })
        .catch(error => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Filter related blogs by topic from all available blogs
  const relatedBlogs = allBlogsData?.blogPosts?.filter(blog =>
    blog.topic === blogPost.topic && blog.id !== blogPost.id
  ) || [];

  const hasRelatedBlogs = relatedBlogs.length > 0;
  const currentLikes = localLikes[blogPost.id] !== undefined ? localLikes[blogPost.id] : blogPost.likes;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <Helmet>
        <title>{blogPost.title.replace(/<[^>]*>/g, '')} | Adventure Learning</title>
        <meta name="description" content={blogPost.shortDescription.replace(/<[^>]*>/g, '')} />
        <meta property="og:title" content={blogPost.title.replace(/<[^>]*>/g, '')} />
        <meta property="og:description" content={blogPost.shortDescription.replace(/<[^>]*>/g, '')} />
        {blogPost.photo && <meta property="og:image" content={blogPost.photo} />}
      </Helmet>

      {/* Liked Feedback Animation with Lottie */}
      <AnimatePresence>
        {showLikedFeedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-white bg-opacity-90 rounded-full p-2 shadow-2xl">
              <Lottie
                animationData={animationData}
                loop={false}
                style={{ width: 200, height: 200 }}
                onComplete={() => setTimeout(() => setShowLikedFeedback(false), 100)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </Link>
        </motion.div>

        <div className={`${hasRelatedBlogs ? 'lg:flex gap-8' : ''}`}>
          {/* Main content */}
          <motion.div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden ${hasRelatedBlogs ? "lg:w-2/3" : "w-full"}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <article className="p-8">
              <motion.header className="mb-8" variants={itemVariants}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {blogPost.topic}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(blogPost.createdAt)}
                  </div>
                </div>

                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                  variants={itemVariants}
                  dangerouslySetInnerHTML={renderHTML(blogPost.title)}
                />

                <motion.div
                  className="text-xl text-gray-600 mb-6 leading-relaxed font-serif"
                  variants={itemVariants}
                  dangerouslySetInnerHTML={renderHTML(blogPost.shortDescription)}
                />

                <motion.div className="flex flex-wrap justify-between items-center pt-6 border-t border-gray-100" variants={itemVariants}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adventure Learning</p>
                      <p className="text-sm text-gray-500">Content Creator</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <button
                      onClick={handleShare}
                      className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
                      aria-label="Share this post"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    {/*                     
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 transition-colors rounded-full ${isBookmarked ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'}`}
                      aria-label="Bookmark this post"
                    >
                      <Bookmark className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} />
                    </button> */}

                    <button
                      onClick={handleLike}
                      className="flex items-center space-x-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors group"
                    >
                      <ThumbsUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{currentLikes}</span>

                      {showLikedFeedback && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        />
                      )}
                    </button>
                  </div>
                </motion.div>
              </motion.header>

              {blogPost.photo && (
                <motion.figure className="mb-10 rounded-xl overflow-hidden shadow-lg" variants={itemVariants}>
                  <img
                    src={blogPost.photo}
                    alt="blog banner"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </motion.figure>
              )}

              <motion.div
                className="prose prose-lg max-w-none mb-10 text-justify"
                variants={itemVariants}
              >
                <div dangerouslySetInnerHTML={renderHTML(blogPost.description)} />
              </motion.div>

              {blogPost.subtitles && blogPost.subtitles.map((subtitle, index) => (
                <motion.section key={index} className="mb-10" variants={itemVariants}>
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
                    dangerouslySetInnerHTML={renderHTML(subtitle.subtitle)}
                  />
                  <div
                    className="prose prose-lg max-w-none text-justify"
                    dangerouslySetInnerHTML={renderHTML(subtitle.content)}
                  />
                </motion.section>
              ))}

              <motion.section
                className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Key Takeaways
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Thank you for reading this article. We hope you found it informative and helpful for your learning journey.
                </p>
              </motion.section>
            </article>
          </motion.div>

          {/* Sidebar with related blogs - only show if there are related blogs */}
          {hasRelatedBlogs && (
            <motion.aside
              className="lg:w-1/3 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-14">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                  Related Reads
                </h3>

                {allBlogsLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {relatedBlogs.slice(0, 5).map(blog => (
                      <article key={blog.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                        <Link
                          to={`/subblogs/${blog.link || blog.id}`}
                          className="block group hover:no-underline"
                        >
                          <div className="flex items-start space-x-4">
                            {blog.photo && (
                              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-sm">
                                <img
                                  src={blog.photo}
                                  alt={blog.title.replace(/<[^>]*>/g, '')}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1" dangerouslySetInnerHTML={renderHTML(blog.title)} />
                              <div className="flex items-center text-sm text-gray-500 space-x-3">
                                <span>{formatDate(blog.createdAt)}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                )}
              </div>
              {/* 
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full">
                    {blogPost.topic}
                  </span>
                </div>
              </div> */}

              {/* <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-6 mt-6 text-white">
                <h3 className="text-xl font-bold mb-3">Subscribe to our Newsletter</h3>
                <p className="text-blue-100 mb-4">Get the latest updates, tips, and resources delivered to your inbox.</p>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div> */}
            </motion.aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubBlogs;