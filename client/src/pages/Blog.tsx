import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Calendar, User, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "wouter";
import { blogArticles, BlogArticle } from "@/lib/blog-data";

/**
 * Blog Listing Page
 * Design Philosophy: Industrial Precision + Modern Minimalism
 * - Consistent with main website design
 * - Navy blue (#0F2847) headers and accents
 * - Burnt orange (#E67E22) for CTAs and highlights
 */

type CategoryFilter = "all" | "technology" | "case-study" | "industry-insights" | "best-practices";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Articles" },
    { value: "technology", label: "Technology" },
    { value: "case-study", label: "Case Studies" },
    { value: "industry-insights", label: "Industry Insights" },
    { value: "best-practices", label: "Best Practices" },
  ];

  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold mb-4">
            Blog & Resources
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Explore in-depth articles about trenchless technology, case studies, industry insights, and best practices for underground infrastructure development.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="container">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
              <Input
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-white border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-sm text-foreground/70">
              Showing {filteredArticles.length} of {blogArticles.length} articles
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <a className="group">
                    <Card className="h-full border-2 border-border hover:border-accent transition-all hover:shadow-lg overflow-hidden">
                      {/* Article Image */}
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category.replace("-", " ").toUpperCase()}
                          </Badge>
                          <span className="text-xs text-foreground/60 whitespace-nowrap">{article.readTime} min read</span>
                        </div>
                        <CardTitle style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl text-primary group-hover:text-accent transition">
                          {article.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex flex-col gap-4">
                        <p className="text-foreground/70 line-clamp-3">{article.excerpt}</p>

                        {/* Article Metadata */}
                        <div className="space-y-2 text-sm text-foreground/60 border-t border-border pt-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More Button */}
                        <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold mt-auto group-hover:translate-x-1 transition-transform">
                          Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/70 mb-4">No articles found matching your search.</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your infrastructure needs and discover how trenchless technology can benefit your project.
          </p>
          <Link href="/">
            <a className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all hover:scale-105">
              Request a Consultation <ArrowRight className="inline ml-2 w-5 h-5" />
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
