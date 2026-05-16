import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { ChevronDown, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client, writeClient } from "@/lib/sanity";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { seo } from "@/data/seo";

const QAPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    question: "",
    category: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Only fetch published Q&As with answers
    const query = `*[_type == "qaQuestion" && isPublished == true && defined(answer)] | order(askedAt desc) {
      _id,
      question,
      askedBy,
      askedAt,
      answer,
      category
    }`;

    client
      .fetch(query)
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.question.trim()) return;

    setSubmitting(true);

    // Submit question to Sanity as an unpublished document
    // You'll see it in your dashboard and can answer + publish it
    try {
      await writeClient.create({
        _type: "qaQuestion",
        question: formData.question,
        askedBy: formData.name || "Anonymous",
        askedAt: new Date().toISOString(),
        category: formData.category || "general",
        isPublished: false,
      });

      toast({
        title: "Question submitted! 🎉",
        description: "We'll answer your question and publish it here soon.",
        duration: 5000,
      });

      setFormData({ name: "", question: "", category: "" });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const portableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="text-gray-700 leading-relaxed mb-3">{children}</p>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
    },
  };

  return (
    <>
      <Helmet>
        <title>{seo.qa.title}</title>
        <meta name="description" content={seo.qa.description} />
        <meta property="og:title" content={seo.qa.title} />
        <meta property="og:description" content={seo.qa.description} />
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
              Questions & Answers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Got a question about industrial automation? Ask us — we publish
              answers for everyone to benefit from.
            </motion.p>
          </div>
        </div>

        <main className="container mx-auto px-6 py-16 max-w-4xl">
          {/* Submit a Question Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ask a Question
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              We'll answer your question and publish it here so others can
              benefit too.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Anonymous"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a category...</option>
                    <option value="robotic-automation">
                      Robotic Automation
                    </option>
                    <option value="iot-integration">IoT Integration</option>
                    <option value="smart-factory">Smart Factory</option>
                    <option value="predictive-analytics">
                      Predictive Analytics
                    </option>
                    <option value="general">General</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.question}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      question: e.target.value,
                    }))
                  }
                  rows={4}
                  required
                  placeholder="What would you like to know about industrial automation?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Submit Question"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Published Q&As */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Answered Questions
            </h2>

            {loading && (
              <div className="text-center py-12">
                <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            )}

            {!loading && questions.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
                <p className="text-gray-500">
                  No answered questions yet — be the first to ask!
                </p>
              </div>
            )}

            {!loading && questions.length > 0 && (
              <div className="space-y-4">
                {questions.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    {/* Question header — clickable to expand */}
                    <button
                      onClick={() =>
                        setOpenId(openId === item._id ? null : item._id)
                      }
                      className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        {item.category && (
                          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2 capitalize">
                            {item.category.replace("-", " ")}
                          </span>
                        )}
                        <p className="font-semibold text-gray-900">
                          {item.question}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Asked by {item.askedBy || "Anonymous"}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                          openId === item._id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer — expands when clicked */}
                    <AnimatePresence>
                      {openId === item._id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-emerald-50">
                            <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-3">
                              Answer from Preaumate
                            </p>
                            <PortableText
                              value={item.answer}
                              components={portableTextComponents}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default QAPage;
