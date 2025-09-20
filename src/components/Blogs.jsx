import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from "@apollo/client/react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import likedAnimation from './liked.json';

// GraphQL queries
const GET_BLOG_POSTS = gql`
  query GetBlogPosts($trending: Boolean, $topic: String, $status: String) {
    blogPosts(trending: $trending, topic: $topic, status: $status) {
      id
      title
      shortDescription
      link
      photo
      topic
      trending
      order
      status
      createdAt
      likes
    }
  }
`;

const GET_BLOG_TOPICS = gql`
  query GetBlogTopics {
    blogTopics {
      id
      topic
      order
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

const Blogs = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [localLikes, setLocalLikes] = useState({});
  const [showLikedFeedback, setShowLikedFeedback] = useState({});
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

  const { loading, error, data, refetch } = useQuery(GET_BLOG_POSTS, {
    variables: { status: "published" }
  });

  const { data: topicsData } = useQuery(GET_BLOG_TOPICS);
  const topics = ['All', ...(topicsData ? topicsData.blogTopics.map(t => t.topic) : [])];

  const [likeBlogPost] = useMutation(LIKE_BLOG_POST, {
    onCompleted: (data) => {
      setLocalLikes(prev => ({
        ...prev,
        [data.likeBlogPost.id]: data.likeBlogPost.likes
      }));
    },
    onError: (error) => {
      console.error("Error liking post:", error);
    }
  });

  const handleLike = (postId, currentLikes) => {
    // Show feedback for this specific post
    setShowLikedFeedback(prev => ({ ...prev, [postId]: true }));

    // Update local likes count optimistically
    setLocalLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || currentLikes) + 1
    }));

    // Execute mutation
    likeBlogPost({ variables: { id: postId } });

    // Hide feedback after animation completes
    setTimeout(() => {
      setShowLikedFeedback(prev => ({ ...prev, [postId]: false }));
    }, 3000);
  };

  if (loading) return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500">Error loading blogs: {error.message}</p>
        </div>
      </div>
    </div>
  );

  const blogPosts = data.blogPosts || [];

  const trendingPosts = blogPosts
    .filter(post => post.trending)
    .sort((a, b) => b.order - a.order)
    .slice(0, 2);

  const otherPosts = blogPosts
    .filter(post => !post.trending || !trendingPosts.includes(post))
    .filter(post => selectedTopic === 'All' || post.topic === selectedTopic)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 md:py-12 px-4">
      <Helmet>
        <title>Blog Posts | Adventure Learning</title>
        <meta name="description" content="Explore our latest blog posts on technology, programming, and industry trends." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Adventure Learning Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore the latest trends, insights, and knowledge to enhance your learning journey
          </p>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTopic === topic
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {trendingPosts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm text-red-600 font-medium">Hot Topics</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${index === 0 ? 'md:col-span-2' : ''
                    }`}
                >
                  <div className="relative">
                    <img
                      src={post.photo}
                      alt={post.title}
                      className={`w-full object-cover ${index === 0 ? 'h-64' : 'h-48'}`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Trending
                      </span>
                    </div>
                    <button
                      onClick={() => handleLike(post.id, post.likes)}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                      aria-label="Like this post"
                    >
                      {/* Lottie Animation for Like Feedback */}
                      <AnimatePresence>
                        {showLikedFeedback[post.id] && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                            className="absolute -inset-4 flex items-center justify-center pointer-events-none"
                          >
                            <Lottie
                              animationData={animationData}
                              loop={false}
                              style={{ width: 60, height: 60 }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <svg
                        className="w-5 h-5 text-blue-500 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-semibold">
                      {post.topic.toUpperCase()}
                    </span>
                    <h3
                      className={`font-bold mt-2 ${index === 0 ? 'text-2xl' : 'text-xl'}`}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      By Adventure Learning · {formatDate(post.createdAt)} · 5 min read
                    </p>
                    <p
                      className="text-gray-600 mt-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.shortDescription }}
                    />
                    <div className="flex items-center justify-between mt-4">
                      <Link
                        to={`/subblogs/${post.link || post.id}`}
                        className="text-blue-600 font-semibold hover:underline flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </Link>
                      <div className="flex items-center text-gray-500">
                        <span className="text-sm mr-1">{localLikes[post.id] !== undefined ? localLikes[post.id] : post.likes}</span>
                        <span className="text-sm">likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedTopic === 'All' ? 'All Articles' : `${selectedTopic} Articles`}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({otherPosts.length} article{otherPosts.length !== 1 ? 's' : ''})
            </span>
          </h2>

          {otherPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={post.photo}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => handleLike(post.id, post.likes)}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors "
                      aria-label="Like this post"
                    >
                      {/* Lottie Animation for Like Feedback */}
                      <AnimatePresence>
                        {showLikedFeedback[post.id] && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                            className="absolute -inset-4 flex items-center justify-center pointer-events-none"
                          >
                            <Lottie
                              animationData={animationData}
                              loop={false}
                              style={{ width: 60, height: 60 }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <svg
                        className="w-5 h-5 text-gray-400 hover:text-blue-500 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full self-start">
                      {post.topic}
                    </span>
                    <h3
                      className="text-lg font-bold mt-3 mb-2 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <p className="text-sm text-gray-500 mb-3">
                      By Adventure Learning · {formatDate(post.createdAt)}
                    </p>
                    <p
                      className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.shortDescription }}
                    />
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        to={`/subblogs/${post.link || post.id}`}
                        className="text-blue-600 font-medium hover:underline text-sm flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </Link>
                      <div className="flex items-center text-gray-400 text-xs">
                        <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        {localLikes[post.id] !== undefined ? localLikes[post.id] : post.likes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-gray-600">No blog posts available in this category.</p>
              {selectedTopic !== 'All' && (
                <button
                  onClick={() => setSelectedTopic('All')}
                  className="mt-4 text-blue-600 hover:underline font-medium"
                >
                  View all articles
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;