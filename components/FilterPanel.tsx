'use client';

import React from 'react';

interface FilterPanelProps {
  filters: {
    category: string;
    location: string;
    maxPrice: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4 justify-center sm:justify-start">
      {/* Category Filter */}
      <select
        className="border border-gray-300 rounded px-3 py-2 text-sm"
        value={filters.category}
        onChange={(e) => onChange('category', e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      {/* Location Filter */}
      <select
        className="border border-gray-300 rounded px-3 py-2 text-sm"
        value={filters.location}
        onChange={(e) => onChange('location', e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      {/* Max Price Input */}
      <input
        type="number"
        placeholder="Max Price (₹)"
        className="border border-gray-300 rounded px-3 py-2 text-sm w-40"
        value={filters.maxPrice}
        onChange={(e) => onChange('maxPrice', e.target.value)}
      />
    </div>
  );
}
