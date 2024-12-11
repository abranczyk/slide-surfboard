import React, { useState } from "react";
import { Search } from "../components/Search";
import { CarouselCard } from "../components/CarouselCard";
import { carousels } from "../data/carousels";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCarousels = carousels.filter(
    (carousel) =>
      carousel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      carousel.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      carousel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Educational Carousels
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover and learn through interactive slideshows
          </p>
          <Search onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCarousels.map((carousel) => (
            <CarouselCard key={carousel.id} carousel={carousel} />
          ))}
        </div>

        {filteredCarousels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No carousels found for "{searchQuery}"
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;