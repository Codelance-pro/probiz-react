import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, Menu, X } from "lucide-react";
import about from "@/assets/about.jpg";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";



const About = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-background text-foreground px-4 sm:px-6  ">
            {/* Hero / Breadcrumb */}

            <header className="relative z-50 px-4 sm:px-6 py-4 bg-[#d9c8fb] rounded-t-2xl">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <img src={logo} alt="Probiz Logo" className="w-20 h-12 sm:w-24 sm:h-12" />

                            {/* Desktop Navigation - Fixed with explicit display classes */}
                            <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
                                <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                    Home
                                </a>
                                <Link to="/about" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                    About
                                </Link>
                                <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                    Pricing
                                </a>
                                <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                    Blog
                                </a>
                            </div>
                        </div>

                        {/* Desktop Download Button - Fixed with explicit display classes */}
                        <Button className="hidden sm:flex sm:bg-foreground sm:text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base">
                            Book a Demo
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            className="flex sm:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="block sm:hidden mt-2 rounded-2xl px-4 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
                            <div className="flex flex-col space-y-3">
                                <a href="#" className="text-foreground hover:text-foreground/80 transition-colors py-2">
                                    Home
                                </a>
                                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                                    About
                                </Link>
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                                    Pricing
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                                    Blog
                                </a>
                                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full flex items-center justify-center">
                                    Book a Demo
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <div className="bg-[#d9c8fb] py-12 px-6 sm:px-12 text-center rounded-b-2xl">
                <h1 className="text-4xl md:text-5xl mb-4 font-sans">Who Are We?</h1>

                {/* Who Are We */}
                <section className="section-1 py-16 px-6 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 gap-4 sm px-4 sm:px-6 py-10 sm:py-16 lg:py-20 rounded-b-2xl">
                    <div className="max-w-3xl mx-auto space-y-6 text-left">
                        <p className="text-2xl md:text-3xl font-semibold flex justify-start font-sans "> Welcome to Probiz Connect!</p>
                        <p className="flex  md:text-lg leading-relaxed text-muted-foreground font-sans">
                            We are an eB2B SaaS provider specialised in offering customised solutions for small and mid-<br></br>
                            sized businesses. Our skilled team of developers, designers, and project managers collaborates to<br></br>
                            deliver a high-quality eB2B SaaS platform tailored to each client's unique needs.<br></br>
                            Our mission is to empower businesses to efficiently manage operations at every growth stage
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold font-sans">Get in Touch</h3>
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-sans">To know more about our product, reach out<br></br>
                            to us today, and we'll be happy to <br></br>
                            demonstrate the product features.</p>
                        <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base mt-4">
                            Book a Demo
                        </Button>
                    </div>
                </section>
            </div>

            {/* Mission / Team / Commitment */}
            <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-card">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6 font-sans"> About Us</h2>
                        {/* <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                     Stay updated with industry news, tips, and the latest productivity workflow
                     optimization strategies.
                   </p> */}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            {
                                image: about1,
                                title: "Our Missiont",
                                excerpt: "Our mission is to provide top-quality SaaS product solutions to businesses of all sizes. We strive to exceed our clients' expectations and deliver innovative solutions that drive growth and success. Simplify sales and distribution for SME's across the globe.  Our mission is to empower businesses so that they can boost their sales. ",
                                date: "November 2022"
                            },
                            {
                                image: about2,
                                title: "Our Team",
                                excerpt: "Our team has experienced software architects, developers, designers, and project delivery managers who are dedicated to delivering exceptional results. We work collaboratively with our clients to ensure that their unique needs are met and that they receive the best possible services. ",
                                date: "November 2022"
                            },
                            {
                                image: about3,
                                title: "Our Commitment",
                                excerpt: "Deploying and maintaining software applications that meet the needs of our customers. This involves expertise in software architecture, coding, user interface design, and quality assurance. Deep understanding of technology, customer needs, business strategies, and a commitment to delivering high-quality software services that provide value to our subscribers",
                                date: "November 2022"
                            },

                        ].map((article, index) => (
                            <Card key={index} className="p-4 sm:p-6 bg-card bg-[#d9c8fb] backdrop-blur-sm border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1 animate-fade-in group cursor-pointer">
                                {/* <div className="mb-3 sm:mb-4">
                         <span className="text-xs sm:text-sm text-muted-foreground">{article.date}</span>
                       </div> */}
                                <img src={article.image} alt="About Image" className="w-full h-40 object-cover mb-4 rounded-lg shadow-lg" />
                                <h3 className="text-lg text-center sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                {/* <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                         Read more
                         <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                       </div> */}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet The Team */}
            <section className="py-16 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">Meet the Team</h2>
                    {/* <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Our strength lies in the diverse skills and shared passion of our
                        team members.
                    </p> */}
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* Team Member Card */}
                    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                        <img
                            src={team1}
                            alt="Team Member 1"
                            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover mb-4 rounded-full shadow-lg"
                        />

                        <h4 className="font-semibold text-lg mb-4">Siraj S - CEO</h4>
                        <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base mt-4">Linkedin</Button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                        <img
                            src={team1}
                            alt="Team Member 1"
                            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover mb-4 rounded-full shadow-lg"
                        />

                        <h4 className="font-semibold text-lg mb-4">Hanish - CTO</h4>
                        <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base mt-4">Linkedin</Button>
                    </div>

                    {/* <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                        <img
                            src="/images/member3.jpg"
                            alt="Team Member 3"
                            className="w-28 h-10 rounded-full object-cover mb-4"
                        />
                        <h4 className="font-semibold text-lg">Michael Lee</h4>
                        <p className="text-sm text-muted-foreground">Lead Engineer</p>
                    </div> */}
                </div>
            </section>

            {/* Call to Action */}
            <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-border/20 bg-[#d9c8fb] rounded-t-2xl">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to get started?</h2>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">Join thousands of teams already using Probiz to boost their productivity.</p>
                        <Button size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center mx-auto">
                            {/* <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> */}
                            Download now
                        </Button>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                        <p>&copy; 2023 Probiz. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
