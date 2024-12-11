import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CarouselViewer } from "../components/CarouselViewer";
import { carousels } from "../data/carousels";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

const CarouselDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carousel = carousels.find((c) => c.id === id);

  if (!carousel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Carousel not found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-8 px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Carousels
        </Button>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            {carousel.title}
          </h1>
          <p className="text-lg text-muted-foreground">{carousel.description}</p>
        </div>
        <CarouselViewer carousel={carousel} />
      </main>
    </div>
  );
};

export default CarouselDetail;