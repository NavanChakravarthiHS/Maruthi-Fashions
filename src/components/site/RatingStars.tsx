import { Star } from "lucide-react";

export function RatingStars({ rating, className = "" }: { rating: number; className?: string }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars.map((value) => (
        <Star
          key={value}
          className={`h-4 w-4 ${value <= Math.round(rating) ? "fill-gold text-gold" : "text-ivory/25"}`}
        />
      ))}
    </div>
  );
}

