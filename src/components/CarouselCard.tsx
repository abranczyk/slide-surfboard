import React from "react";
import { Carousel } from "../types/carousel";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface CarouselCardProps {
  carousel: Carousel;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ carousel }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in max-w-[280px] mx-auto"
      onClick={() => navigate(`/carousel/${carousel.id}`)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={carousel.thumbnail}
          alt={carousel.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-secondary text-primary">
          {carousel.topic}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          {carousel.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {carousel.description}
        </p>
      </div>
    </Card>
  );
};