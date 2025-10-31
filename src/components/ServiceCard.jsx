import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, services, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group h-full">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
              <Icon className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <p className="text-gray-200 text-sm leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}