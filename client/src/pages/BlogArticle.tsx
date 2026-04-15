import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { useParams, Link } from "wouter";
import { getArticleById, getRelatedArticles } from "@/lib/blog-data";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Individual Article Page
 * Design Philosophy: Industrial Precision + Modern Minimalism
 * - Clean, readable typography for long-form content
 * - Consistent with main website design
 * - Easy navigation and related content discovery
 */

export default function BlogArticle() {
  const params = useParams();
  const articleId = params.id as string;
  const article = getArticleById(articleId);
  const relatedArticles = getRelatedArticles(articleId, 3);
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl font-bold text-primary mb-4">
            Article Not Found
          </h1>
          <p className="text-foreground/70 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <a className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition">
              <ArrowLeft className="inline mr-2 w-4 h-4" /> Back to Blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Article link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      technology: "bg-blue-100 text-blue-800",
      "case-study": "bg-green-100 text-green-800",
      "industry-insights": "bg-purple-100 text-purple-800",
      "best-practices": "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-primary-foreground font-bold text-lg">
                  MT
                </span>
              </div>
              <span style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg text-primary hidden sm:inline">
                Maranti Trenchlesindo
              </span>
            </a>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition">Home</a>
            </Link>
            <Link href="/blog">
              <a className="text-primary font-bold">Blog</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-8 border-b border-border">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </a>
          </Link>

          <div className="mb-6">
            <Badge className={getCategoryColor(article.category)}>
              {article.category.replace("-", " ").toUpperCase()}
            </Badge>
          </div>

          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-foreground/70 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition ml-auto"
            >
              <Share2 className="w-4 h-4" />
              {copied ? "Copied!" : "Share"}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container max-w-3xl">
          <img src={article.image} alt={article.title} className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("#")) {
                const level = paragraph.match(/^#+/)?.[0].length || 1;
                const text = paragraph.replace(/^#+\s/, "");
                const headingClass = {
                  1: "text-4xl font-bold text-primary mt-8 mb-4",
                  2: "text-3xl font-bold text-primary mt-6 mb-3",
                  3: "text-2xl font-bold text-primary mt-4 mb-2",
                }[level] || "text-xl font-bold text-primary mt-3 mb-2";
                return (
                  <h2 key={index} style={{ fontFamily: "'Sora', sans-serif" }} className={headingClass}>
                    {text}
                  </h2>
                );
              } else if (paragraph.startsWith("|")) {
                // Simple table rendering
                const lines = paragraph.split("\n");
                return (
                  <div key={index} className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-border">
                      {lines.map((line, lineIndex) => (
                        <tr key={lineIndex} className={lineIndex === 1 ? "bg-primary/10" : ""}>
                          {line
                            .split("|")
                            .filter((cell) => cell.trim())
                            .map((cell, cellIndex) => (
                              <td key={cellIndex} className="border border-border px-4 py-2">
                                {cell.trim()}
                              </td>
                            ))}
                        </tr>
                      ))}
                    </table>
                  </div>
                );
              } else if (paragraph.startsWith("✓")) {
                return (
                  <div key={index} className="flex items-start gap-3 my-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span className="text-foreground">{paragraph.replace("✓ ", "")}</span>
                  </div>
                );
              } else if (paragraph.startsWith("-")) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4 text-foreground/80">
                    {paragraph.split("\n").map((item, itemIndex) => (
                      <li key={itemIndex}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <p key={index} className="text-foreground/80 leading-relaxed my-4">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-primary mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link key={tag} href="/blog">
                  <a
                    onClick={() => {
                      // In a real app, this would filter by tag
                    }}
                    className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-sm transition"
                  >
                    #{tag}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-primary/5 border-t border-b border-border">
          <div className="container">
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-primary mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.id}`}>
                  <a className="group">
                    <Card className="h-full border-2 border-border hover:border-accent transition-all hover:shadow-lg overflow-hidden">
                      <div className="relative h-40 overflow-hidden bg-gray-200">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg text-primary group-hover:text-accent transition line-clamp-2">
                          {relatedArticle.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/70 line-clamp-2 mb-4">{relatedArticle.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-foreground/60">
                          <span>{relatedArticle.readTime} min read</span>
                          <span className="text-accent">Read →</span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl lg:text-4xl font-bold mb-4">
            Interested in Our Services?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our trenchless technology solutions can benefit your infrastructure project.
          </p>
          <Link href="/">
            <a className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all hover:scale-105">
              Request a Consultation
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Trenchless Pipe Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Slope Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Pipe Roofing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/blog">
                    <a className="hover:text-accent transition">Blog</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Bekasi, Indonesia</li>
                <li>
                  <a href="mailto:info@maranti.co.id" className="hover:text-accent transition">
                    info@maranti.co.id
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-primary font-bold text-sm">
                  MT
                </span>
              </div>
              <span style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold">
                PT. Maranti Trenchlesindo Abadi
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">© 2026 Maranti Trenchlesindo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
