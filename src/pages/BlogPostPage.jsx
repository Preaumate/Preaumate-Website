import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client, urlFor } from '@/lib/sanity';

const BlogPostPage = () => {
  const { slug } = useParams();
  // useParams reads the URL — if URL is /blog/my-first-post
  // then slug = "my-first-post"

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the specific post that matches this slug
    const query = `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      publishedAt,
      mainImage,
      body,
      category,
      excerpt
    }`;

    client.fetch(query, { slug })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Custom components for rendering rich text
  const portableTextComponents = {
    block: {
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
      ),
      normal: ({ children }) => (
        <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-gray-600 my-6">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => (
        <a href={value.href} className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <Helmet>
        <title>{post ? `${post.title} — Preaumate Blog` : 'Loading...'}</title>
        <meta name="description" content={post?.excerpt || ''} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {loading && (
          <div className="text-center py-40">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        )}

        {error && (
          <div className="text-center py-40">
            <p className="text-red-500">Failed to load post.</p>
            <Link to="/blog" className="text-emerald-600 mt-4 inline-block">← Back to Blog</Link>
          </div>
        )}

        {!loading && !error && post && (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Image */}
            {post.mainImage ? (
              <div className="h-96 overflow-hidden">
                <img
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-64 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900" />
            )}

            {/* Post Content */}
            <div className="container mx-auto px-6 py-12 max-w-3xl">

              {/* Back link */}
              <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mb-8 inline-block">
                ← Back to Blog
              </Link>

              {/* Category */}
              {post.category && (
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 capitalize">
                  {post.category.replace('-', ' ')}
                </span>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              {/* Date */}
              <p className="text-gray-400 text-sm mb-10">
                Published {formatDate(post.publishedAt)}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-10" />

              {/* Body */}
              <div className="prose max-w-none">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>

            </div>
          </motion.article>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;