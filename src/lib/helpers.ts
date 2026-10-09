import { levels, lessons, type Lesson, type Level } from '../data/content';

export const SITE_NAME = 'Shuffle Lab';

/** Prefix a site-relative path with the configured base (needed for GitHub Pages). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export function absoluteUrl(path = ''): string {
  const site = (import.meta.env.SITE ?? '').replace(/\/$/, '');
  return `${site}${url(path)}`;
}

export const mainLevels = levels.filter((l) => l.track === 'main');
export const melbourneLevel = levels.find((l) => l.track === 'melbourne')!;

export function lessonsOf(levelId: string): Lesson[] {
  return lessons.filter((l) => l.level === levelId);
}

export function levelOf(lesson: Lesson): Level {
  return levels.find((l) => l.id === lesson.level)!;
}

export function levelLabel(level: Level): string {
  return level.number === null ? level.name : `Level ${level.number}`;
}

/** Lessons in the order a learner should do them: main track levels, then Melbourne. */
export const orderedLessons: Lesson[] = [...mainLevels, melbourneLevel].flatMap((lv) => lessonsOf(lv.id));

export function neighbors(lesson: Lesson): { prev?: Lesson; next?: Lesson } {
  const i = orderedLessons.findIndex((l) => l.slug === lesson.slug);
  return { prev: orderedLessons[i - 1], next: orderedLessons[i + 1] };
}

export function thumb(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
}

export interface SessionPlan {
  warmup: number;
  watch: number;
  practice: number;
  days: number;
}

/** Build a 30-minute practice plan around a video of the given length. */
export function sessionPlan(minutes: number): SessionPlan {
  const days = minutes > 20 ? 2 : 1;
  const warmup = 5;
  const watch = days === 2 ? 15 : Math.min(minutes, 12);
  const practice = Math.max(30 - warmup - watch, 5);
  return { warmup, watch, practice, days };
}
