import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FeatureCard } from "./FeatureCard";
import { FloatingCard } from "./FloatingCard";
import { 
  Download, 
  Smartphone, 
  RefreshCw, 
  Settings, 
  Users, 
  Calendar,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe
} from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";
import calendarMockup from "@/assets/calendar-mockup.jpg";
import customerTestimonial from "@/assets/customer-testimonial.jpg";

export function ApplexLanding() {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-foreground">Applex</h1>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              </div>
            </div>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              <Download className="w-4 h-4 mr-2" />
              Download for iOS
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              The ultimate project<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">and collaboration tool</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Enhance project discussions and structure information effortlessly with Applex, 
              designed to boost collaboration, clarity, and productivity for teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-4 text-lg border-border hover:bg-secondary">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for playstore
              </Button>
            </div>
          </div>

          {/* Hero Phone Mockup with Floating Cards */}
          <div className="relative flex justify-center animate-bounce-in">
            <div className="relative">
              <img 
                src={heroPhoneMockup} 
                alt="Applex mobile app interface" 
                className="w-80 h-auto rounded-3xl shadow-floating"
              />
              
              {/* Floating Feature Cards */}
              <FloatingCard className="absolute -left-32 top-8 w-48" delay="0s">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Quick Chat</p>
                    <p className="text-xs text-muted-foreground">Team discussions</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -right-32 top-16 w-48" delay="1s">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Team Sync</p>
                    <p className="text-xs text-muted-foreground">Real-time collaboration</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -left-40 bottom-20 w-52" delay="2s">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Smart Scheduling</p>
                    <p className="text-xs text-muted-foreground">Automatic planning</p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="absolute -right-40 bottom-32 w-52" delay="3s">
                <div className="text-center p-2">
                  <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-sm">4.9/5 Rating</p>
                  <p className="text-xs text-muted-foreground">User satisfaction</p>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover Applex's advanced features to streamline workflow, enhance 
              collaboration, and boost productivity.
            </p>
          </div>

          <div className="space-y-8">
            {/* First Row - Straight */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FeatureCard
                icon={RefreshCw}
                title="Instant Sync"
                description="Applex seamlessly synchronizes and advanced technology to craft exceptional digital experiences."
                className="animate-fade-in"
              />
              <FeatureCard
                icon={Settings}
                title="Effortless Management"
                description="Effortlessly organize tasks, projects, and ideas to boost efficiency and stay on track."
                className="animate-fade-in"
              />
            </div>
            
            {/* Second Row - Shuffled/Offset */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto md:ml-16">
              <FeatureCard
                icon={Globe}
                title="Seamless Connectivity"
                description="Applex creativity, innovation, and advanced technology to craft exceptional digital experiences."
                className="animate-fade-in"
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Experience blazing fast performance with optimized workflows and instant responses."
                className="animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero with Calendar */}
      <section className="px-6 py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Start with Applex, unlock seamless productivity
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Manage creativity, innovation, and advanced technology 
                to transform your digital workflow experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-secondary">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download for playstore
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-bounce-in">
              <img 
                src={calendarMockup} 
                alt="Applex calendar interface" 
                className="w-80 h-auto rounded-3xl shadow-floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Customer reviews</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read how Applex has empowered businesses to streamline operations, enhance 
              collaboration, and drive greater efficiency with our all-in-one solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First Review */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={customerTestimonial} 
                  alt="Tommy Johnson, Senior Developer" 
                  className="w-20 h-20 rounded-full object-cover shadow-soft mb-4"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent mr-1" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground mb-3 leading-relaxed">
                  "Applex transformed our team's collaboration and productivity with its intuitive interface and powerful features."
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground text-sm">Tommy Johnson</p>
                  <p className="text-muted-foreground text-xs">Senior Developer at TechCorp</p>
                </div>
              </div>
            </Card>

            {/* Second Review */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={customerTestimonial} 
                  alt="Sarah Wilson, Product Manager" 
                  className="w-20 h-20 rounded-full object-cover shadow-soft mb-4"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent mr-1" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground mb-3 leading-relaxed">
                  "Game-changing solution that streamlined our workflow and enhanced team communication significantly."
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground text-sm">Sarah Wilson</p>
                  <p className="text-muted-foreground text-xs">Product Manager at InnovateCo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="px-6 py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Recent articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with industry news, tips, and the latest productivity workflow 
              optimization strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mastering Team Collaboration in 2024",
                excerpt: "Discover the latest strategies for effective team collaboration and productivity enhancement.",
                date: "November 2022"
              },
              {
                title: "Project Management Best Practices",
                excerpt: "Learn how to streamline your project management workflow with proven methodologies.",
                date: "November 2022"
              },
              {
                title: "The Future of Digital Workspaces",
                excerpt: "Explore emerging trends in digital workspace design and remote team collaboration.",
                date: "November 2022"
              }
            ].map((article, index) => (
              <Card key={index} className="p-6 bg-card backdrop-blur-sm border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1 animate-fade-in group cursor-pointer">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">Join thousands of teams already using Applex to boost their productivity.</p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-8">
              <Download className="w-5 h-5 mr-2" />
              Download now
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 Applex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}