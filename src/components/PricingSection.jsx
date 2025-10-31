import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";

export default function PricingSection({ category, tiers }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
        {category}
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <Card 
            key={idx}
            className={`bg-white/5 backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
              tier.featured 
                ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                : 'border-cyan-500/20 hover:border-cyan-500/40'
            }`}
          >
            <CardHeader className="pb-4">
              {tier.featured && (
                <Badge className="bg-cyan-500 text-white mb-2 w-fit">Most Popular</Badge>
              )}
              <h4 className="text-xl font-bold text-white">{tier.name}</h4>
              <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Rocket className="w-5 h-5" />
                  <span className="text-lg font-semibold">To be launched soon</span>
                </div>
              </div>
              
              {tier.features && (
                <div className="space-y-2">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}