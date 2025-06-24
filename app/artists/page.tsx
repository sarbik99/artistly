"use client";

import { useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import ArtistCard from "@/components/ArtistCards";
import data from "@/data/artists.json";
import Header from "@/components/Header";

export default function ArtistsPage() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    maxPrice: "", 
  });

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredArtists = data.filter((artist) => {
    const matchesCategory = filters.category
      ? artist.category === filters.category
      : true;

    const matchesLocation = filters.location
      ? artist.location === filters.location
      : true;

    const matchesPrice = filters.maxPrice
      ? parseInt(artist["price-range"].split("-")[0]) <= parseInt(filters.maxPrice)
      : true;

    return matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <>
      <Header />
      <main className="px-6 py-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Browse Artists
        </h1>

        {/* Filters */}
        <FilterPanel filters={filters} onChange={handleFilterChange} />

        {/* Artist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                {...artist}
                priceRange={artist["price-range"]}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No artists match the selected filters.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
