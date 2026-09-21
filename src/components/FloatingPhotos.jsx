import { useMemo } from "react";
import "../styles/FloatingPhotos.css";

const FLOATING_PHOTOS = [
  {
    id: "social-slide",
    src: "/hero/social-slide.png",
    top: "10%",
    left: "85%",
    size: 100,
    delay: 1.2,
  },
];

function Stars({ count = 28 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: `star-${i}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
        duration: `${(2.2 + Math.random() * 2).toFixed(2)}s`,
        size: Math.random() > 0.8 ? 3 : 2,
      })),
    [count],
  );

  return (
    <div className="floating-photos__stars" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="floating-photos__star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function FloatingPhotos() {
  return (
    <div className="floating-photos" aria-hidden="true">
      <Stars />

      {FLOATING_PHOTOS.map((photo) => (
        <div
          className="floating-photos__item"
          key={photo.id}
          style={{
            top: photo.top,
            left: photo.left,
            width: photo.size,
            height: photo.size,
            "--float-delay": `${photo.delay}s`,
          }}
        >
          <img src={photo.src} alt="" />
        </div>
      ))}
    </div>
  );
}
