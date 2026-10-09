// All learning content lives here. Video details (title, channel, views, length) were collected
// from YouTube search results on 2026-10-09 (see research.md). Text descriptions are written
// from the video topic; re-check them after watching each video.

export type TrackId = 'main' | 'melbourne';

export interface Level {
  id: string;
  track: TrackId;
  number: number | null;
  name: string;
  tagline: string;
  goal: string;
}

export interface Lesson {
  slug: string;
  level: string;
  title: string;
  videoId: string;
  channel: string;
  minutes: number; // video length, rounded up
  summary: string;
  focus: string[];
  start?: number; // seconds
  end?: number; // seconds
}

export const VIEWS_AS_OF = '2026-10-09';

export const levels: Level[] = [
  {
    id: 'start-here',
    track: 'main',
    number: 0,
    name: 'Start Here',
    tagline: 'What shuffling is, and how to set up',
    goal: 'Know what you are learning, set up your space, and find the beat.',
  },
  {
    id: 'foundations',
    track: 'main',
    number: 1,
    name: 'Foundations',
    tagline: 'Running man and T-step',
    goal: 'Do the running man and the T-step without stopping between moves.',
  },
  {
    id: 'first-combos',
    track: 'main',
    number: 2,
    name: 'First Combos',
    tagline: 'Footwork and your first combinations',
    goal: 'Link several basic moves into a smooth, continuous combo.',
  },
  {
    id: 'cutting-shapes',
    track: 'main',
    number: 3,
    name: 'Cutting Shapes',
    tagline: 'The lighter, more technical style',
    goal: 'Learn the core cutting shapes moves, like the Charleston.',
  },
  {
    id: 'flow-routine',
    track: 'main',
    number: 4,
    name: 'Flow & Routine',
    tagline: 'Transitions, flow and short choreography',
    goal: 'Connect moves with transitions and dance a short routine to music.',
  },
  {
    id: 'melbourne',
    track: 'melbourne',
    number: null,
    name: 'Melbourne Track',
    tagline: 'The hardstyle-flavored original',
    goal: 'Pick up the basics of the Melbourne shuffle. Best after Level 2.',
  },
];

export const lessons: Lesson[] = [
  // Level 0
  {
    slug: 'beginner-full-tutorial',
    level: 'start-here',
    title: 'How to Shuffle Dance for Beginners (Full Tutorial)',
    videoId: '1TVgrMtwG9M',
    channel: 'Tori Nishino',
    minutes: 19,
    summary: 'A start-to-finish overview of shuffling. Watch it once through to see where this journey is heading.',
    focus: [
      'Notice the two core moves: the running man and the T-step.',
      'Do not try to master anything today. Just try each move once.',
      'Pick a slow house or EDM track around 120 to 128 BPM for practice.',
    ],
  },
  {
    slug: 'ultimate-beginner-tutorial',
    level: 'start-here',
    title: 'The Ultimate Beginner Shuffle Tutorial',
    videoId: '5xOAJA598uk',
    channel: 'Tori Nishino',
    minutes: 12,
    summary: 'A shorter beginner tutorial on the foundational moves. A good second pass before diving into Level 1.',
    focus: [
      'Practice in front of a mirror, and wear shoes that slide on your floor.',
      'Keep your upper body relaxed and your steps light.',
      'Count steady beats out loud while you move.',
    ],
  },
  {
    slug: 'learn-to-shuffle-in-5-minutes',
    level: 'start-here',
    title: 'Learn How to Shuffle in Only 5 Minutes',
    videoId: 'pddp8OLi7lo',
    channel: 'pigmie',
    minutes: 6,
    summary: 'A very fast intro that has been watched over 14 million times. Use it as a quick confidence boost.',
    focus: [
      'Treat this as a taste test, not a lesson plan.',
      'Rewatch parts you did not catch and try them slowly.',
    ],
  },

  // Level 1
  {
    slug: 'shuffle-basics-running-man',
    level: 'foundations',
    title: 'Shuffle Tutorial Basics: Running Man and More',
    videoId: 'Kt-Tb9gaOB8',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 14,
    summary: 'The most-watched basics tutorial in this guide. Start building the base moves here.',
    focus: [
      'Get the running man rhythm steady before adding anything else.',
      'Do not pause between moves. Keep the beat going.',
      'Play the video at a slower speed if it helps.',
    ],
  },
  {
    slug: 'running-man-marbiik',
    level: 'foundations',
    title: 'Running Man (Beginner)',
    videoId: 'HUOjOJvPJc8',
    channel: 'Marbiik',
    minutes: 11,
    summary: 'A focused breakdown of the running man. Compare it with the previous lesson and keep what clicks.',
    focus: [
      'Your foot has only a few places to land. Keep the placement consistent.',
      'Listen to your shoes: the sound should land on a steady beat.',
    ],
  },
  {
    slug: 't-step-marbiik',
    level: 'foundations',
    title: 'T-Step (Beginner)',
    videoId: 'EdN8S2phxbs',
    channel: 'Marbiik',
    minutes: 8,
    summary: 'The T-step is how you travel sideways. Learn it slowly and cleanly.',
    focus: [
      'Your feet form a T: one foot points forward, the other sits behind it.',
      'Pivot on the heel and toe while the other leg lifts and lowers.',
      'Slow down until the timing is even, then speed up.',
    ],
  },
  {
    slug: 'easiest-running-man',
    level: 'foundations',
    title: 'The Easiest Running Man Tutorial Ever',
    videoId: 'EP3Q3ttFwtU',
    channel: 'Caroline Kay',
    minutes: 8,
    summary: 'Another take on the running man for anyone still struggling. A different explanation can unlock it.',
    focus: [
      'If the earlier videos felt too fast, use this one as a gentler pace.',
      'Practice for several minutes without stopping.',
    ],
  },
  {
    slug: 'foundations-running-man-t-step',
    level: 'foundations',
    title: 'The Foundations: Running Man & T-step (Full Session)',
    videoId: 'b6075roLFmo',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 29,
    summary: 'A long, in-depth review session on both foundation moves. Plan two days for this one.',
    focus: [
      'Pause often and repeat each part before moving on.',
      'Day 1: running man. Day 2: T-step and linking them.',
      'Finish by alternating both moves for a full song.',
    ],
  },

  // Level 2
  {
    slug: 'first-5-moves',
    level: 'first-combos',
    title: 'Shuffling for Beginners: Your First 5 Moves',
    videoId: 'F9wrAAAcQL4',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 14,
    summary: 'Five moves to add after the basics. Learn them one at a time.',
    focus: [
      'Add one move at a time and keep it smooth.',
      'Repeat each move 8 counts, then switch to the running man.',
    ],
  },
  {
    slug: '5-easy-footwork-steps',
    level: 'first-combos',
    title: '5 Easy Footwork Steps',
    videoId: 'BxOBhZBLOio',
    channel: 'Marbiik',
    minutes: 16,
    summary: 'Five footwork steps to widen your vocabulary. Over 10 million views.',
    focus: [
      'Learn each step on its own first, then connect two of them.',
      'Keep your torso upright and centered.',
    ],
  },
  {
    slug: 'beginner-class-video',
    level: 'first-combos',
    title: 'Shuffle Tutorial for Beginners (Class Video)',
    videoId: 'QG0ahY7kn0Y',
    channel: 'Shaira Bhan',
    minutes: 22,
    summary: 'A class-style session that practices the basics together. Plan a full practice day.',
    focus: [
      'Follow along as if you were in the room.',
      'Repeat the combo at the end until it feels automatic.',
    ],
  },
  {
    slug: 'effortless-flow-combo',
    level: 'first-combos',
    title: 'Unlock Effortless Flow with this Shuffle Combo',
    videoId: '3P8FB7t0I1M',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 18,
    summary: 'A combo built for flow. Focus on staying relaxed and continuous.',
    focus: [
      'Smoothness matters more than speed.',
      'Run the combo to a full song without stopping.',
    ],
  },

  // Level 3
  {
    slug: 'everything-about-cutting-shapes',
    level: 'cutting-shapes',
    title: 'Everything You Need to Know About Cutting Shapes',
    videoId: 'yOanOaERq3A',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 6,
    summary: 'A short orientation to cutting shapes before the longer tutorials.',
    focus: [
      'Cutting shapes is the lighter, more technical style, popular at EDM festivals.',
      'Watch first, then try the ideas in the next lesson.',
    ],
  },
  {
    slug: 'cutting-shapes-tutorial-beginner',
    level: 'cutting-shapes',
    title: 'The Cutting Shapes Tutorial I Wish I Had as a Beginner',
    videoId: 'OhG8r1gXFiY',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 23,
    summary: 'A beginner-oriented cutting shapes tutorial. Plan a full session.',
    focus: [
      'Move slowly and focus on clean foot placement.',
      'Combine new cutting shapes moves with the running man and T-step you already know.',
    ],
  },
  {
    slug: 'charleston-beginner',
    level: 'cutting-shapes',
    title: 'Charleston (Beginner) - Cutting Shapes',
    videoId: '4YhzRZDatn8',
    channel: 'Marbiik',
    minutes: 7,
    summary: 'The Charleston is a classic cutting shapes move. Learn it step by step.',
    focus: [
      'Practice at half speed first.',
      'Add the Charleston into your running man loop.',
    ],
  },
  {
    slug: 'cutting-shapes-quick',
    level: 'cutting-shapes',
    title: 'Cutting Shapes Tutorial',
    videoId: 'xSx8nM4DFOE',
    channel: 'How to Dance',
    minutes: 3,
    summary: 'A quick refresher you can replay as a warm-up.',
    focus: ['Use it as a warm-up before practicing the longer lessons.'],
  },

  // Level 4
  {
    slug: 'shuffle-transitions',
    level: 'flow-routine',
    title: 'Shuffle Transitions: Steps, Kicks and More',
    videoId: '8eKQTRG4-q4',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 19,
    summary: 'Transitions glue separate moves together. This is what makes your dancing look continuous.',
    focus: [
      'Pick two moves you know and practice only the connection between them.',
      'Slow it down until the switch feels effortless.',
    ],
  },
  {
    slug: 'footwork-creativity',
    level: 'flow-routine',
    title: 'Footwork Creativity for Shuffling',
    videoId: 'lXHjxJ5kTzs',
    channel: 'Marbiik',
    minutes: 7,
    summary: 'Ideas for making your own footwork. Start personalizing your dancing.',
    focus: [
      'Mix moves you know in new orders.',
      'Record yourself and keep the parts you like.',
    ],
  },
  {
    slug: 'festival-season-level-up',
    level: 'flow-routine',
    title: 'Level Up for Festival Season',
    videoId: 'C33XxmVKT1U',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 15,
    summary: 'Intermediate material to prepare for dancing at a festival.',
    focus: [
      'Practice with a full-length song.',
      'Keep your energy steady from start to finish.',
    ],
  },
  {
    slug: 'easy-shuffle-choreo',
    level: 'flow-routine',
    title: 'Learn this Easy Shuffle Choreo',
    videoId: '9h6YaTKPFTE',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 9,
    summary: 'A short choreography to put everything together to music.',
    focus: [
      'Learn it in sections, then run the whole thing.',
      'Film a final take to see how far you have come.',
    ],
  },

  // Melbourne
  {
    slug: 'basic-melbourne-shuffle',
    level: 'melbourne',
    title: 'Basic Melbourne Shuffle Tutorial',
    videoId: 'rrbUkYmOKL0',
    channel: 'Abby Castro',
    minutes: 7,
    summary: 'An introduction to the Melbourne shuffle basics.',
    focus: [
      'Compare the feel with the cutting shapes lessons.',
      'Try it to a faster, harder track.',
    ],
  },
  {
    slug: 'hardstyle-shuffle-tutorial',
    level: 'melbourne',
    title: 'How to Hardstyle Shuffle Tutorial',
    videoId: 'AAY5J5bwRDU',
    channel: 'YoAlanKun',
    minutes: 8,
    summary: 'An older but widely watched hardstyle shuffle tutorial (from 2010).',
    focus: [
      'The video is older, so expect a different look to the moves.',
      'Practice the core steps until they are steady.',
    ],
  },
];

export type Style = 'melbourne' | 'cutting-shapes' | 'general';

export interface Highlight {
  videoId: string;
  title: string;
  channel: string;
  views: number;
  style: Style;
  isShort: boolean;
  blurb: string;
}

export const highlights: Highlight[] = [
  // Full videos
  { videoId: 'Ee2hKlGXrDs', title: 'Cutting Shapes vs Melbourne Shuffle', channel: 'Boosted Society', views: 3_350_830, style: 'general', isShort: false, blurb: 'A side-by-side look at the two big styles.' },
  { videoId: 'XgDNAO2IDjE', title: '2015 Melbourne Shuffle Compilation', channel: 'HardStyleNation', views: 2_252_202, style: 'melbourne', isShort: false, blurb: 'A compilation of Melbourne shuffle dancers.' },
  { videoId: 'XDuIrqcRdpc', title: 'How 7 Years of Shuffling Changed Me', channel: 'Emylee x The Shuffle Vault', views: 1_446_948, style: 'general', isShort: false, blurb: 'A story about progress over seven years. Perfect when you need motivation.' },
  { videoId: 'wcTiil8W1Nc', title: 'Festival Shuffle Compilation', channel: 'Marktore', views: 1_405_674, style: 'cutting-shapes', isShort: false, blurb: 'Shuffling on festival dance floors.' },
  { videoId: '-HfcakYYaWY', title: 'Cutting Shapes: Renegade Master', channel: 'Aidan Queen', views: 1_121_379, style: 'cutting-shapes', isShort: false, blurb: 'A cutting shapes clip to a classic track.' },
  { videoId: 'UmOifgmi3gg', title: '2021 Melbourne Shuffle Tournament', channel: 'HXSI shuffle', views: 679_772, style: 'melbourne', isShort: false, blurb: 'A clip from a Melbourne shuffle tournament.' },
  { videoId: 's6MiKJSWbzI', title: 'I Spent 8 Years Shuffling', channel: 'Emylee x The Shuffle Vault', views: 278_448, style: 'general', isShort: false, blurb: 'Lessons from eight years of shuffling.' },
  { videoId: '_V0RRfA7EEw', title: 'Top 5 Shuffling Videos of 2021', channel: 'Emylee x The Shuffle Vault', views: 260_041, style: 'general', isShort: false, blurb: 'A look at standout shuffling videos from 2021.' },

  // Shorts
  { videoId: 'geIPPUQBUh8', title: 'Mini Shuffle Tutorial with Slow Motion', channel: 'Vanessa Victoria (viva_vici)', views: 33_125_649, style: 'general', isShort: true, blurb: 'A very quick slow-motion look at a shuffle move.' },
  { videoId: 'URTvDkfCE40', title: 'Shuffle Dance Tutorial p18', channel: 'PhonyFamous', views: 21_135_647, style: 'general', isShort: true, blurb: 'A short tutorial clip.' },
  { videoId: 'iaKObRWbkvw', title: 'Shuffle Dance Tutorial', channel: 'Dance Fitness with An Le', views: 16_317_558, style: 'general', isShort: true, blurb: 'A short tutorial clip.' },
  { videoId: 'esGZTeb_AiM', title: 'Easy Shuffle Move for Beginners', channel: 'Simple Weekend', views: 13_782_910, style: 'general', isShort: true, blurb: 'A beginner-friendly short.' },
  { videoId: 'IYm-n-vwhnw', title: "World's Biggest Running Man Challenge", channel: 'tuzelity SHUFFLE', views: 12_716_780, style: 'general', isShort: true, blurb: 'The running man, shared by thousands.' },
  { videoId: 'B8YiMaPKK8E', title: 'Polly Pocket Shuffle Dance Tutorial', channel: 'Shuffling Studio', views: 7_614_974, style: 'cutting-shapes', isShort: true, blurb: 'A short on the popular Polly Pocket move.' },
  { videoId: 'RVIsSRa_FAE', title: 'Spongebob Shuffle Tutorial', channel: 'Zanouji', views: 3_820_106, style: 'general', isShort: true, blurb: 'A short tutorial clip.' },
  { videoId: 'qR_itaRdwMc', title: 'Criss Cross Tutorial', channel: 'Shuffle Academy', views: 2_434_089, style: 'cutting-shapes', isShort: true, blurb: 'A criss cross short.' },
  { videoId: 'ckzBKoZdIpc', title: 'Quick Running Man Shuffle Dance Tutorial', channel: 'Shuffling Studio', views: 1_428_427, style: 'cutting-shapes', isShort: true, blurb: 'A quick running man short.' },
  { videoId: 'Saz4GuHpiUY', title: 'I Love This Cutting Shapes Combo', channel: 'Emylee x The Shuffle Vault', views: 282_111, style: 'cutting-shapes', isShort: true, blurb: 'A cutting shapes combo.' },
  { videoId: 'MtDBW9WGszo', title: 'Cutting Shapes Combo from My Class', channel: 'Emylee x The Shuffle Vault', views: 226_704, style: 'cutting-shapes', isShort: true, blurb: 'A combo from a class.' },
];
