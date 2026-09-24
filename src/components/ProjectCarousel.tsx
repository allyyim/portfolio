import { useRef, useState } from 'react';
import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectCarouselProps {
  projects: Project[];
}

const SWIPE_THRESHOLD = 60;

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);

  const total = projects.length;
  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const endDrag = () => {
    if (Math.abs(dragX) > SWIPE_THRESHOLD) {
      if (dragX < 0) next(); else prev();
    }
    setDragging(false);
    setDragX(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        onClick={prev}
        aria-label="Previous project"
      >
        ←
      </button>

      <div
        className="carousel-viewport"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={() => dragging && endDrag()}
      >
        <div
          className={`carousel-card ${dragging ? 'dragging' : ''}`}
          style={{ transform: `translateX(${dragX}px) rotate(${dragX / 40}deg)` }}
        >
          <ProjectCard project={projects[index]} />
        </div>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={next}
        aria-label="Next project"
      >
        →
      </button>

      <div className="carousel-dots">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`carousel-dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.title}`}
          />
        ))}
      </div>
    </div>
  );
}
