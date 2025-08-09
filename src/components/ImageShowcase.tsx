import React from 'react';

interface ImageShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ImageShowcase({ 
  title = "KNOW YOUR REAL COLLEGE CHANCES",
  subtitle = "LINK IN BIO",
  className = "" 
}: ImageShowcaseProps) {
  return (
    <div className={`relative bg-gradient-to-br from-[#1B1E3B] to-[#2D2F63] rounded-3xl p-8 max-w-md mx-auto ${className}`}>
      {/* Background with rounded corners */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1E3B] to-[#2D2F63] rounded-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            KNOW YOUR REAL
          </h1>
          <h1 className="text-2xl font-bold text-white mb-4">
            COLLEGE CHANCES
          </h1>
          {/* Underline for "REAL" */}
          <div className="w-16 h-1 bg-[#FF7A1A] mx-auto rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Left Image */}
          <div className="relative">
            <div className="w-full h-48 bg-white rounded-2xl border-2 border-[#FF7A1A] overflow-hidden shadow-lg">
              <img 
                src="/creative/Fragrance_Finder_Slide_4_V2.png" 
                alt="Fragrance Finder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-full h-48 bg-white rounded-2xl border-2 border-[#FF7A1A] overflow-hidden shadow-lg">
              <img 
                src="/creative/CTA 3.png" 
                alt="Call to Action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="flex justify-between mb-6">
          <div className="w-16 h-0.5 bg-white/30 rounded-full"></div>
          <div className="w-16 h-0.5 bg-white/30 rounded-full"></div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-white mb-2">APP ADVISOR</h2>
          <p className="text-sm text-white/80 mb-4">APPADVISOR.COM</p>
          <div className="inline-block bg-[#FF7A1A] text-white font-bold px-6 py-2 rounded-full">
            {subtitle}
          </div>
        </div>

        {/* Accent Elements */}
        <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-[#FF7A1A] to-[#FF6A00] rounded-full"></div>
        <div className="absolute bottom-20 left-6 w-3 h-3 bg-gradient-to-r from-[#FF7A1A] to-[#FF6A00] rounded-full opacity-70"></div>
      </div>
    </div>
  );
} 