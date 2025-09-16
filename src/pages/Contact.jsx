import React from "react";
import { Button } from "../components/ui/button";
import contact from "@/assets/contact.webp";

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 text-center rounded-b-2xl">
      <section className="bg-[#d9c8fb] text-black px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left Form */}
          <div className="flex-1">
            <h3 className="text-xl mb-6">Drop us a line!</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b-2 border-gray-700 placeholder-gray-600 text-black py-3 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full bg-transparent border-b-2 border-gray-700 placeholder-gray-600 text-black py-3 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full bg-transparent border-b-2 border-gray-700 placeholder-gray-600 text-black py-3 focus:outline-none"
              ></textarea>

              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Sign up for our email list for updates, promotions, and more.
              </label>

              <Button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-4 hover:bg-gray-700 transition rounded-md"
              >
                SEND
              </Button>
            </form>
            <p className="text-xs text-center mt-6 opacity-80">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>

          {/* Right Info */}
          <div className="flex-1 space-y-5">
            <Button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition rounded-md">
              💬 CHAT WITH US!
            </Button>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Probiz Technologies Pvt Ltd
              </h3>
              <p className="mb-3">
                Unit-3F-03, Level 3, Century Central, Mango Garden Layout,
                Bikasipura, Kanakapura Main Road, Bengaluru-560062
              </p>
              <p className="font-bold">9900029602</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">Hours</h4>
              <p>Open today 09:00 am – 05:00 pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent text-black px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        <h2 className="text-5xl font-sans text-center mb-10">HQ Bengaluru</h2>
        <img src={contact} alt="contact" width={700} className=" mx-auto"  />
        </section>

          <footer className=" bg-gray-500 px-4 sm:px-6 py-8 sm:py-12 border-t border-border/20">
                <div className="max-w-7xl mx-auto text-center">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl text-white sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to get started?</h2>
                    <p className="text-sm text-white sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">Join thousands of teams already using Probiz to boost their productivity.</p>
                    <Button size="lg" className="bg-black text-white hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center mx-auto">
                      {/* <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> */}
                      Book a Demo
                    </Button>
                  </div>
                  <div className="text-xs text-black sm:text-sm text-muted-foreground">
                    <p>&copy; 2023 Probiz. All rights reserved.</p>
                  </div>
                </div>
              </footer>
    </div>
  );
};

export default Contact;
