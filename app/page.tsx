import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import FlashcardComponent from "@/components/ui/flashcard";

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-hidden "> 
      <div className="shrink-0">
        <h1 className="text-xl m-4">DoceoDecks</h1> 
      </div>
      <div className="flex-grow flex items-center justify-center">
        <FlashcardComponent flashcard={{front: "porto", back: "i carry" }} />
      </div>
   </main>
  );
}
