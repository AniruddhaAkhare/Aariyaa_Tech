import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { 
  Brain, GraduationCap, Briefcase, Code, Lightbulb, 
  Rocket, Users, Target, Zap, Award, ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "../components/AnimatedBackground";
import ServiceCard from "../components/ServiceCard";
import PricingSection from "../components/PricingSection";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI & Technology Solutions",
      description: "Bespoke technology solutions designed to solve complex problems, drive efficiency, and fuel innovation.",
      services: [
        "Custom AI Model Development - Chatbots, ML models, predictive analytics",
        "Full-Stack Application Development - Web and mobile from concept to deployment",
        "Workflow Automation - Python, N8N, Zapier integration",
        "Data Visualization - Interactive dashboards and reporting",
        "API Integration & Custom Tooling"
      ]
    },
    {
      icon: GraduationCap,
      title: "Academic & Student Project Services",
      description: "Expert guidance and development support to turn project ideas into high-quality, impactful realities.",
      services: [
        "Final Year Projects - End-to-end support in AI, ML, IoT, Web, Cloud",
        "Mini Projects & Research Guidance",
        "Complete Project Package - Reports, presentations, source code",
        "Internship & Career Preparation",
        "AI-Powered Communication Training"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Acceleration & Personal Branding",
      description: "Modern tools and strategies to build a powerful personal brand and navigate the competitive job market.",
      services: [
        "AI Resume & Job Fit Analysis",
        "Portfolio Website Development",
        "LinkedIn Profile Optimization",
        "AI Career Guidance Chatbot",
        "Professional Communication Suite"
      ]
    },
    {
      icon: Code,
      title: "Practical Learning & Skill Development",
      description: "Hands-on, project-based learning experiences for students and freelancers to acquire in-demand tech skills.",
      services: [
        "AI-Powered Learning Games",
        "Practical Tech Courses - Python, React, ML, Automation",
        "Weekend Bootcamps - Intensive 2-day workshops",
        "Project-Based Workshops",
        "Hackathon Training"
      ]
    },
    {
      icon: Lightbulb,
      title: "Business Consulting & Digital Strategy",
      description: "Strategic consulting to help startups and businesses leverage technology for growth and market impact.",
      services: [
        "Tech Stack Consulting",
        "AI Integration Strategy",
        "Workflow Automation Setup - CRMs, email marketing, N8N",
        "Complete Branding & Web Design",
        "AI-Assisted Business Documents"
      ]
    }
  ];

  const pricingData = [
    {
      category: "AI & Technology Solutions",
      tiers: [
        {
          name: "Basic",
          description: "MVP or prototype with single core feature",
          price: "₹10,000 - ₹25,000",
          priceUSD: "$120 - $300",
          features: ["Single core feature", "Basic implementation", "Documentation included"]
        },
        {
          name: "Pro",
          description: "Full-feature application or comprehensive ML model",
          price: "₹25,000 - ₹75,000",
          priceUSD: "$300 - $900",
          featured: true,
          features: ["Multiple features", "Advanced implementation", "Testing & deployment", "30-day support"]
        },
        {
          name: "Enterprise",
          description: "End-to-end custom system with ongoing support",
          price: "₹1,00,000+",
          priceUSD: "$1,200+",
          features: ["Complete system", "Ongoing maintenance", "Priority support", "Scalability planning"]
        }
      ]
    },
    {
      category: "Academic Projects",
      tiers: [
        {
          name: "Mini Project",
          description: "Guidance for smaller academic tasks",
          price: "₹1,000 - ₹3,000",
          priceUSD: "$12 - $35"
        },
        {
          name: "Major Project",
          description: "Complete development support",
          price: "₹3,000 - ₹8,000",
          priceUSD: "$35 - $95",
          featured: true
        },
        {
          name: "Full Package",
          description: "Report + Code + PPT",
          price: "₹5,000 - ₹10,000",
          priceUSD: "$60 - $120"
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Brand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="h-px w-16 bg-gradient-to-r from-cyan-500 to-transparent" />
                  </div>
                </motion.div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
                  Aariyaa<br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Tech
                  </span>
                </h1>
                
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                
                <p className="text-xl md:text-2xl text-cyan-300 font-light tracking-wide">
                  Empowering Intelligence.<br />Enabling Growth.
                </p>
              </div>
            </motion.div>

            {/* Right: Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  At Aariyaa Tech, we bridge the gap between ambition and achievement. Our mission is to provide an integrated ecosystem of technology solutions, expert guidance, and skill development resources.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We empower students, professionals, and businesses to thrive in a digitally-driven world. We consult, we create, and we help you conquer your goals.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                    Where Tech Meets Guidance
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                    Consult. Create. Conquer.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section id = "services" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive solutions across technology, education, career development, and business strategy
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Smart Tools Section */}
        <section id = "tools"className="py-24 px-6 md:px-12 lg:px-24 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Signature <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Smart Tools</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "AI Project Idea Generator",
                  description: "Discover and define academic projects instantly with AI-powered suggestions, abstracts, and tech stacks."
                },
                {
                  icon: Award,
                  title: "AI Interview Simulator",
                  description: "Build confidence with NeuroPrep - real-time feedback on speech, expressions, and performance analysis."
                },
                {
                  icon: Rocket,
                  title: "Premium Consulting",
                  description: "Direct access to experts for personalized guidance on tech projects, careers, and business strategy."
                }
              ].map((tool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <tool.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id = "pricing" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Pricing <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Plans</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Flexible pricing options designed to meet your needs
              </p>
            </motion.div>

            {pricingData.map((pricing, idx) => (
              <PricingSection key={idx} {...pricing} />
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section id = "founders" className="py-24 px-6 md:px-12 lg:px-24 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Founders</span>
              </h2>
              <p className="text-gray-300 text-lg">The visionaries behind Aariyaa Tech</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                { name: "Riya", role: "Co-Founder" },
                { name: "Aniruddha", role: "Co-Founder" }
              ].map((founder, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="text-center"
                >
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-4 border-cyan-500/30 flex items-center justify-center">
                    <Users className="w-24 h-24 text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{founder.name}</h3>
                  <p className="text-cyan-300 text-lg">{founder.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Aariyaa Tech</span>
            </div>
            <p className="text-gray-400 mb-4">Empowering Intelligence. Enabling Growth.</p>
            <p className="text-gray-500 text-sm">© 2024 Aariyaa Tech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}