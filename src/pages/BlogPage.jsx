import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client, urlFor } from '@/lib/sanity';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GROQ query — Sanity's query language
    // Fetches all blog posts, newest first
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      category
    }`;

    client.fetch(query)
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog — Preaumate</title>
        <meta name="description" content="Insights, case studies and updates from Preaumate on industrial automation and Industry 4.0." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Page Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Preaumate Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Insights, case studies and updates on industrial automation and Industry 4.0
            </motion.p>
          </div>
        </div>

        {/* Blog Posts */}
        <main className="container mx-auto px-6 py-16">

          {/* Loading state */}
          {loading && (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading posts...</p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-500">Failed to load posts. Please try again later.</p>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No posts published yet. Check back soon!</p>
            </div>
          )}

          {/* Posts grid */}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Post Image */}
                  {post.mainImage && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* No image placeholder */}
                  {!post.mainImage && (
                    <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold opacity-30">P</span>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Category badge */}
                    {post.category && (
                      <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    )}

                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">
                        {formatDate(post.publishedAt)}
                      </span>
                      <Link
                        to={`/blog/${post.slug.current}`}
                        className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold flex items-center gap-1"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;