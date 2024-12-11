import React, { useState } from "react";
import { Carousel } from "../types/carousel";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselViewerProps {
  carousel: Carousel;
}

export const CarouselViewer: React.FC<CarouselViewerProps> = ({ carousel }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carousel.slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carousel.slides.length) % carousel.slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
        <img
          src={carousel.slides[currentSlide].image}
          alt={carousel.slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              {carousel.slides[currentSlide].title}
            </h2>
            <p className="text-lg">
              {carousel.slides[currentSlide].content}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm"
          onClick={previousSlide}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </Button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {carousel.slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-4" : "bg-secondary"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};