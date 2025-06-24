'use client';

import React from 'react';
import { MapPin, Tag } from 'lucide-react';
import { Button } from './ui/button';

interface ArtistProps {
  name: string;
  category: string;
  priceRange: string;
  location: string;
}

export default function ArtistCard({ name, category, priceRange, location }: ArtistProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col justify-between h-full border border-gray-200">
      {/* Artist Name */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-blue-600 font-medium">{category}</p>
      </div>

      {/* Location & Price */}
      <div className="mb-4 space-y-1 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-500" />
          {location}
        </p>
        <p className="flex items-center gap-2">
          <Tag size={16} className="text-gray-500" />
          ₹{priceRange}
        </p>
      </div>

      {/* CTA Button */}
      <Button>
        Ask for Quote
      </Button>
    </div>
  );
}
