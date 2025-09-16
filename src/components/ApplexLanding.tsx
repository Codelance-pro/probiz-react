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
  Globe,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";
import heroMockup from "@/assets/mobiles.png";
import calendarMockup from "@/assets/calendar-mockup.jpg";
import customerTestimonial from "@/assets/customer-testimonial.jpg";
import { Link } from "react-router-dom";

export function ApplexLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="bg-gradient-card px-4 sm:px-6 ">
    

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 py-10 sm:py-16 lg:py-20 overflow-visible bg-[#d9c8fb] rounded-b-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
                AI-powered eB2B <span className="bg-gradient-primary bg-clip-text text-transparent">Cloud Infrastructure</span><br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">platform for Sales & Distribution Management</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Enhance project discussions and structure information effortlessly with Probiz,
                designed to boost collaboration, clarity, and productivity for teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 lg:mb-16 px-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center">
                  {/* <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> */}
                  Book a Demo
                </Button>
                {/* <Button variant="outline" size="lg" className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-border hover:bg-secondary flex items-center justify-center">
                  <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Download for playstore
                </Button> */}
              </div>
            </div>

            {/* Hero Phone Mockup with Floating Cards */}
            <div className="relative flex justify-center animate-bounce-in -mb-20 sm:-mb-32 lg:-mb-40">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src={heroMockup}
                  alt="Probiz mobile app interface"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl"
                />

                {/* Floating Feature Cards - Hidden on mobile, visible on larger screens */}
                <FloatingCard className="hidden lg:block absolute -left-24 xl:-left-32 top-8 w-40 xl:w-48" delay="0s">
                  <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Quick Chat</p>
                      <p className="text-xs text-muted-foreground">Team discussions</p>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard className="hidden lg:block absolute -right-24 xl:-right-32 top-16 w-40 xl:w-48" delay="1s">
                  <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Users className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Team Sync</p>
                      <p className="text-xs text-muted-foreground">Real-time collaboration</p>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard className="hidden lg:block absolute -left-28 xl:-left-40 bottom-20 w-44 xl:w-52" delay="2s">
                  <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Calendar className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Smart Scheduling</p>
                      <p className="text-xs text-muted-foreground">Automatic planning</p>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard className="hidden lg:block absolute -right-28 xl:-right-40 bottom-32 w-44 xl:w-52" delay="3s">
                  <div className="text-center p-2">
                    <div className="w-10 xl:w-12 h-10 xl:h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Star className="w-5 xl:w-6 h-5 xl:h-6 text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-xs xl:text-sm">4.9/5 Rating</p>
                    <p className="text-xs text-muted-foreground">User satisfaction</p>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 mt-10">Our Features</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Discover Probiz's advanced features to streamline workflow, enhance
              collaboration, and boost productivity.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* First Row - Straight */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
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
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto lg:ml-16">
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
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Complement your business growth and uncover new opportunities with some amazing capabilities that Probiz Connect offers.
                 The scalable solutions are designed with new-age technology models, allowing you to expand your horizons.<br></br>

                You will gain valuable insights into your sales trends and revenue generation through our robust reporting tools. <br></br>
                 Simplify the entire order management process with Probiz Connect's intuitive platform.<br></br>

                Dealers and distributors can place orders effortlessly, and your sales team can track their status in real-time.
                 Track the performance of your dealer network and sales force, and design rewards that matches your business goals. <br></br>
                 Establish a brand loyalty program for your partners to strengthen your market presence.<br></br>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center">
                  {/* <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> */}
                  Book a Demo
                </Button>
                {/* <Button variant="outline" size="lg" className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-border hover:bg-secondary flex items-center justify-center">
                  <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Download for playstore
                </Button> */}
              </div>
            </div>
            <div className="flex justify-center animate-bounce-in order-1 lg:order-2">
              <img
                src={calendarMockup}
                alt="Applex calendar interface"
                className="w-60 sm:w-72 lg:w-80 h-auto rounded-2xl sm:rounded-3xl shadow-floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Customer reviews</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Read how Applex has empowered businesses to streamline operations, enhance
              collaboration, and drive greater efficiency with our all-in-one solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* First Review */}
            <Card className="p-4 sm:p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <img
                  src={customerTestimonial}
                  alt="Tommy Johnson, Senior Developer"
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-soft mb-3 sm:mb-4"
                />
                <div className="flex justify-center mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-accent text-accent mr-1" />
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3 leading-relaxed">
                  "Applex transformed our team's collaboration and productivity with its intuitive interface and powerful features."
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Tommy Johnson</p>
                  <p className="text-muted-foreground text-xs">Senior Developer at TechCorp</p>
                </div>
              </div>
            </Card>

            {/* Second Review */}
            <Card className="p-4 sm:p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card animate-fade-in">
              <div className="flex flex-col items-center text-center">
                <img
                  src={customerTestimonial}
                  alt="Sarah Wilson, Product Manager"
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-soft mb-3 sm:mb-4"
                />
                <div className="flex justify-center mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-accent text-accent mr-1" />
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3 leading-relaxed">
                  "Game-changing solution that streamlined our workflow and enhanced team communication significantly."
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Sarah Wilson</p>
                  <p className="text-muted-foreground text-xs">Product Manager at InnovateCo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">GAIN 360° - Visibility & Control</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Stay updated with industry news, tips, and the latest productivity workflow
              optimization strategies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Sales Connect",
                excerpt: "We understand the challenges brands face in sales and distribution management. Our comprehensive solutions streamline operations and increase revenue with real-time order processing, inventory tracking, performance analytics, incentive management, seamless communication, route optimisation, and customisable stakeholder access.",
                date: "November 2022"
              },
              {
                title: "Dealer Connect",
                excerpt: "A Dealer & Distributor Management platform streamlines order processing, inventory tracking, performance analysis, and communication for managing your network. Probiz Connect provides detailed analytics and reports to identify top-performing dealers, enabling you to reward and motivate your dealer, distribution and retailer network.",
                date: "November 2022"
              },
              {
                title: "Employee Connect",
                excerpt: "At Probiz Connect, we understand the vital role field sales and distribution teams play in boosting revenue and fostering lasting customer relationships. That's why we've created a comprehensive empowerment solution that equips your team with the tools and technology to excel, while providing powerful reporting tools for valuable sales and revenue insights.",
                date: "November 2022"
              },
              {
                title: "Partner Connect",
                excerpt: "By leveraging influencers and rewarding loyalty programs, your brand can excel in a competitive market and leave a lasting impression on customers and partners.",
                date: "November 2022"
              },
              {
                title: "Reward Schemes",
                excerpt: "You can design rewards that match your business goals, choosing between points-based rewards or instant cash incentives according to your partner engagement strategy.",
                date: "November 2022"
              },
              {
                title: "Loyalty Program",
                excerpt: "Easily establish a brand loyalty program for your partners to strengthen your market presence. Reward points for actions like scanning coupons inside products.",
                date: "November 2022"
              }
            ].map((article, index) => (
              <Card key={index} className="p-4 sm:p-6 bg-card backdrop-blur-sm border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1 animate-fade-in group cursor-pointer">
                {/* <div className="mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm text-muted-foreground">{article.date}</span>
                </div> */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  Read more
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to get started?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">Join thousands of teams already using Probiz to boost their productivity.</p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center mx-auto">
              {/* <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> */}
              Book a Demo
            </Button>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2023 Probiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}