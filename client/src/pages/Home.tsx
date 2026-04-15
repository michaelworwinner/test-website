import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, CheckCircle2, Zap, Shield, Cog, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

/**
 * Design Philosophy: Industrial Precision + Modern Minimalism
 * - Deep Navy (#0F2847) for trust and engineering precision
 * - Burnt Orange (#E67E22) for construction energy and forward momentum
 * - Asymmetric layouts with intentional negative space
 * - Typography: Sora (headlines), Inter (body), Roboto Mono (technical)
 */

const displayFont = "font-bold";
const headingClass = `${displayFont} text-primary`;

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Consultation request sent! We'll contact you soon.");
    setFormData({ name: "", company: "", phone: "", email: "", projectType: "", message: "" });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
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
            <Link href="/blog">
              <a className="text-foreground hover:text-primary transition font-medium">Blog</a>
            </Link>
            <Button
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-white font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Text Content - Left */}
          <div className="px-6 sm:px-8 lg:px-12 py-16 lg:py-0 flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-xl">
              <h1
                style={{ fontFamily: "'Sora', sans-serif" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
              >
                Build Underground Infrastructure Without Destroying the Surface
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Advanced trenchless solutions for pipelines, slope protection, and underground construction — faster, safer, and environmentally responsible.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">No road excavation → minimal disruption</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">Faster project completion</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">High safety & precision standards</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg cta-pulse"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Request a Project Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a
                  href="https://wa.me/62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image - Right */}
          <div className="relative h-96 lg:h-screen order-1 lg:order-2 overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/hero-trenchless-machinery-idRWeeKs9n66Qd293nwv43.webp"
              alt="Trenchless pipe jacking machinery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                100+
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold text-primary mb-2">
                Projects Completed
              </h3>
              <p className="text-foreground/70">Successfully delivered across Indonesia</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                4
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold text-primary mb-2">
                Core Pillars
              </h3>
              <p className="text-foreground/70">Precision, Teamwork, Safety, Technology</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                24/7
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold text-primary mb-2">
                Support
              </h3>
              <p className="text-foreground/70">Professional engineering team ready</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border">
            <p className="text-lg text-foreground italic text-center">
              "Reliable partner for complex underground projects with minimal disruption. Their expertise in trenchless technology has transformed our infrastructure development approach."
            </p>
            <p className="text-center text-foreground/60 mt-4">— Infrastructure Development Partner</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive trenchless solutions tailored to your infrastructure needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <Card className="border-2 border-border hover:border-accent transition-colors hover:shadow-lg">
              <CardHeader>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/services-pipe-jacking-K3rBLekiUHQa5bGFQ3j6F3.webp"
                  alt="Pipe Jacking"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl text-primary">
                  Trenchless Pipe Installation
                </CardTitle>
                <CardDescription className="text-base">Pipe Jacking & Guided Auger Boring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Diameter 100mm–600mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Water pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Wastewater systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Oil & gas applications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-2 border-border hover:border-accent transition-colors hover:shadow-lg">
              <CardHeader>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/services-slope-protection-cvD6etqXTpZ5QjmdTUZnRn.webp"
                  alt="Slope Protection"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl text-primary">
                  Slope Protection
                </CardTitle>
                <CardDescription className="text-base">Soil Nailing & Stabilization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">
                  Advanced soil nailing methods to improve slope stability and prevent erosion. Engineered solutions for hillside reinforcement and terrain stabilization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>Enhanced slope stability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>Erosion prevention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>Long-term durability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-2 border-border hover:border-accent transition-colors hover:shadow-lg">
              <CardHeader>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/services-pipe-roofing-cDX7iMKe7ox6qLN9B9yA3H.webp"
                  alt="Pipe Roofing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl text-primary">
                  Pipe Roofing
                </CardTitle>
                <CardDescription className="text-base">Tunnel & Underpass Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">
                  Reinforced pipe roofing systems for underground structural support. Ensures excavation safety and provides reliable tunnel protection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>Excavation safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>Structural integrity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>Precision engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Request a Project Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold mb-4 text-center">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary-foreground/80 text-center mb-16 max-w-2xl mx-auto">
            Four pillars of excellence that define our commitment to every project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold mb-3">
                Precision & Accuracy
              </h3>
              <p className="text-primary-foreground/80">Engineering excellence in every measurement and execution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold mb-3">
                Strong Teamwork
              </h3>
              <p className="text-primary-foreground/80">Collaborative expertise delivering results on time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold mb-3">
                HSE / Safety First
              </h3>
              <p className="text-primary-foreground/80">Highest safety standards and environmental responsibility</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-primary" />
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold mb-3">
                Modern Technology
              </h3>
              <p className="text-primary-foreground/80">State-of-the-art equipment and innovative solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
            Our proven 4-step process ensures project success from start to finish
          </p>

          <div className="mb-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/process-timeline-cDX7iMKe7ox6qLN9B9yA3H.webp"
              alt="Process Timeline"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="diagonal-accent">
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-primary mb-2">
                Consultation & Site Analysis
              </h3>
              <p className="text-foreground/70">Comprehensive site evaluation and project planning</p>
            </div>
            <div className="diagonal-accent">
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-primary mb-2">
                Engineering Design
              </h3>
              <p className="text-foreground/70">Detailed blueprints and technical specifications</p>
            </div>
            <div className="diagonal-accent">
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-primary mb-2">
                Execution
              </h3>
              <p className="text-foreground/70">Precision installation using trenchless methods</p>
            </div>
            <div className="diagonal-accent">
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-primary mb-2">
                Quality Control & Delivery
              </h3>
              <p className="text-foreground/70">Final inspection and project handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="lead-form" className="py-16 lg:py-24 bg-primary/5">
        <div className="container max-w-2xl">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Start Your Project With Expert Consultation
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-12">
            Fill out the form below and our team will contact you within 24 hours
          </p>

          <Card className="border-2 border-accent">
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl text-primary">
                Project Consultation Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                      Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleFormChange("name", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleFormChange("company", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                      Phone / WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+62..."
                      value={formData.phone}
                      onChange={(e) => handleFormChange("phone", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleFormChange("email", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType" className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Project Type
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleFormChange("projectType", value)}>
                    <SelectTrigger id="projectType" className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pipe-installation">Trenchless Pipe Installation</SelectItem>
                      <SelectItem value="slope-protection">Slope Protection</SelectItem>
                      <SelectItem value="pipe-roofing">Pipe Roofing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => handleFormChange("message", e.target.value)}
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Request a Project Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
            Visit Us
          </h2>
          <p className="text-lg text-foreground/70 text-center mb-12">
            Located in Bekasi, Indonesia — serving infrastructure projects nationwide
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8247079822326!2d107.1742517!3d-6.2807876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sPT.%20Maranti%20Trenchlesindo%20Abadi!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg text-primary mb-2">
                    Office Address
                  </h3>
                  <p className="text-foreground/70">
                    Bekasi, Indonesia<br />
                    Serving infrastructure & industrial sectors nationwide
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg text-primary mb-2">
                    Phone
                  </h3>
                  <a href="tel:+62" className="text-accent hover:underline">
                    +62 (Contact for details)
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg text-primary mb-2">
                    Email
                  </h3>
                  <a href="mailto:info@maranti.co.id" className="text-accent hover:underline">
                    info@maranti.co.id
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/62"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg inline-flex items-center justify-center"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Chat on WhatsApp <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
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
                Company
              </h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Contact
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

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/62"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
        title="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.505-2.337 1.236-3.256 2.154-1.798 1.798-2.807 4.195-2.807 6.74 0 2.544 1.009 4.941 2.807 6.74 1.798 1.798 4.195 2.807 6.74 2.807 2.544 0 4.941-1.009 6.74-2.807 1.798-1.798 2.807-4.195 2.807-6.74 0-2.544-1.009-4.941-2.807-6.74-1.798-1.798-4.195-2.807-6.74-2.807zm0-2.167C12.883 4.812 22 13.929 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
        </svg>
      </a>
    </div>
  );
}
