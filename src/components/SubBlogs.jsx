import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SubBlogs = () => {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blogContent = data.find(blog => blog.id === blogId);

  const parsedContent = blogContent?.content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const renderLine = (line, index) => {
    // 1. Title line: **Title Text**
    if (/^\*\*.*\*\*$/.test(line)) {
      const headingText = line.replace(/\*\*/g, '').trim();
      return (
        <motion.h2
          key={index}
          className="text-xl md:text-2xl font-semibold text-[#0057D3] mt-8 mb-4 text-justify"
          variants={itemVariants}
        >
          {headingText}
        </motion.h2>
      );
    }

    // 2. Subtitle + content: * **Subtitle**: Content
    if (/^\*\s+\*\*.*\*\*:\s+/.test(line)) {
      const subtitleMatch = line.match(/^\*\s+\*\*(.*?)\*\*:\s+(.*)/);
      const subtitle = subtitleMatch?.[1]?.trim();
      const content = subtitleMatch?.[2]?.trim();

      return (
        <div key={index} className="mt-6">
          <motion.h3
            className="text-lg font-medium text-gray-800 mb-2 "
            variants={itemVariants}
          >
            {subtitle}
          </motion.h3>
          <motion.p
  className="ml-8 mr-8 leading-relaxed text-justify"
  variants={itemVariants}
>
  {content}
</motion.p>

        </div>
      );
    }

    // 3. Bullet point: * Something (not subtitle format)
    if (/^\*\s(?!\*\*).*/.test(line)) {
      return (
        <motion.li
          key={index}
          className="list-disc list-inside text-gray-800 leading-relaxed mt-2 text-justify"
          variants={itemVariants}
        >
          {line.replace(/^\*\s*/, '')}
        </motion.li>
      );
    }

    // 4. Regular paragraph
    return (
      <motion.p
        key={index}
        className="text-gray-700 leading-relaxed mt-4 text-justify"
        variants={itemVariants}
      >
        {line}
      </motion.p>
    );
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogContent ? (
        <>
          <motion.h1
            className="text-2xl lg:text-3xl font-bold text-center text-[#0057D3] mb-6"
            variants={itemVariants}
          >
            {blogContent.Title}
          </motion.h1>

          <motion.img
            src={blogContent.image}
            alt="blog-img"
            className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
            variants={itemVariants}
          />

          <motion.p
            className="text-lg text-gray-600 mb-6 text-center font-medium leading-relaxed"
            variants={itemVariants}
          >
            {blogContent.Subtitle}
          </motion.p>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-justify"
            variants={containerVariants}
          >
            {parsedContent && parsedContent.map((line, idx) => renderLine(line, idx))}
          </motion.div>

          <motion.div
            className="mt-10 p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-[#0057D3] mb-2 ">Conclusion</h3>
            <p className="ml-8 leading-relaxed text-justify">
              {blogContent.conclusion || 'No conclusion provided.'}
            </p>
          </motion.div>
        </>
      ) : (
        <div className="text-center mt-20">
          <AlertCircle className="w-10 h-10 mx-auto text-gray-500 mb-2" />
          <p className="text-xl text-gray-600">Blog content not found.</p>
        </div>
      )}
    </motion.div>
  );
};

export default SubBlogs;
