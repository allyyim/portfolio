import { useRef, useState } from 'react';
import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectCarouselProps {
  projects: Project[];
}

const SWIPE_THRESHOLD = 50;

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const tracking = useRef(false);

  const total = projects.length;
  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    tracking.current = true;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!tracking.current) return;
    tracking.current = false;
    const deltaX = e.clientX - startX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) next(); else prev();
    }
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
        onPointerUp={onPointerUp}
        onPointerCancel={() => { tracking.current = false; }}
      >
        <div className="carousel-card" key={projects[index].id}>
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
