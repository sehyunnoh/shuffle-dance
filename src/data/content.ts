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
  chapters?: string[]; // "m:ss Label", copied from the video's own chapters or timestamps
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
    tagline: 'Charleston, criss cross and more',
    goal: 'Learn the core cutting shapes moves, like the Charleston and the criss cross.',
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
    tagline: 'The original style from Melbourne',
    goal: 'Pick up the basics of the Melbourne shuffle. Best after Level 2.',
  },
];

// Summaries, focus points and chapters below were checked against each video's own chapters,
// timestamps or description (and the full transcript for the Marbiik running man and T-step videos).
// Videos with no chapters or timestamps (marked in comments) only have generic text.
export const lessons: Lesson[] = [
  // Level 0
  {
    slug: 'beginner-full-tutorial',
    level: 'start-here',
    title: 'How to Shuffle Dance for Beginners (Full Tutorial)',
    videoId: '1TVgrMtwG9M',
    channel: 'Tori Nishino',
    minutes: 19,
    summary: 'A full beginner walkthrough covering the running man, kickbacks, Polly Pocket, a Charleston variation and the T-step. Watch it through once to see where the path leads.',
    focus: [
      'Do not try to master everything today. Try each move once.',
      'Note which move feels hardest. You will come back to each one in the next levels.',
      'Pick a slow house or EDM track around 120 to 128 BPM for practice.',
    ],
    chapters: ['0:31 The running man', '5:41 Kickbacks', '8:05 Polly Pocket', '12:27 Charleston variation', '15:25 The T-step'],
  },
  {
    slug: 'ultimate-beginner-tutorial',
    level: 'start-here',
    title: 'The Ultimate Beginner Shuffle Tutorial',
    videoId: '5xOAJA598uk',
    channel: 'Tori Nishino',
    minutes: 12,
    summary: 'A shorter beginner tutorial that breaks down five foundational moves: running man, Polly Pocket, kickbacks, Charleston and T-step.',
    focus: [
      'Compare it with the previous lesson. The same moves, a different pace and explanation.',
      'Try the running man section first, since it comes up in every level.',
      'Practice in front of a mirror and wear shoes that slide on your floor.',
    ],
    chapters: ['0:54 Running man', '3:48 Polly Pocket', '6:20 Kickbacks', '7:28 Charleston', '9:23 T-step'],
  },
  {
    slug: 'learn-to-shuffle-in-5-minutes',
    level: 'start-here',
    title: 'Learn How to Shuffle in Only 5 Minutes',
    videoId: 'pddp8OLi7lo',
    channel: 'pigmie',
    minutes: 6,
    summary: 'A very fast intro to shuffling, then the basic running man by following along. It has been watched over 14 million times.',
    focus: [
      'Treat it as a quick confidence boost, not a full lesson.',
      'Follow along with the running man part, and rewatch it as many times as you need.',
    ],
    chapters: ['0:18 How to shuffle', '2:54 Running man'],
  },

  // Level 1
  {
    slug: 'shuffle-basics-running-man',
    level: 'foundations',
    title: 'Shuffle Tutorial Basics: Running Man, T-Step and Variations',
    videoId: 'Kt-Tb9gaOB8',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 14,
    summary: 'The two core moves, how to combine them, and a few variations. The most-watched basics tutorial in this guide.',
    focus: [
      'Spend the first half on the running man and the T-step separately.',
      'Then practice combining them without stopping between moves.',
      'Add variations only after the combination feels steady.',
    ],
    chapters: ['0:13 The running man', '2:46 The T-step', '7:25 Combining moves', '9:32 Adding variations'],
  },
  {
    slug: 'running-man-marbiik',
    level: 'foundations',
    title: 'Running Man (Beginner)',
    videoId: 'HUOjOJvPJc8',
    channel: 'Marbiik',
    minutes: 11,
    summary: 'A close breakdown of the running man into two positions, with notes on balance, foot placement, common mistakes and building speed.',
    focus: [
      'The running man is two positions repeated with each leg. The back foot goes up while the front foot comes to the middle, both at the same moment.',
      'Keep your weight centered between your feet, point your toes forward and bend your knees a little.',
      'If sliding is hard, hop instead of dragging your foot. It is also the easiest way to go faster.',
      'Find a speed you can hold, then push it up little by little. Do not alternate fast and slow.',
    ],
    chapters: ['1:02 Learning the steps', '2:57 Weight balance', '3:28 Foot placement', '4:54 Common mistakes and fixes', '6:49 Building speed and practice'],
  },
  {
    slug: 't-step-marbiik',
    level: 'foundations',
    title: 'T-Step (Beginner)',
    videoId: 'EdN8S2phxbs',
    channel: 'Marbiik',
    minutes: 8,
    summary: 'The T-step, described as the original shuffle step. It is taught as two isolated actions, a stomp and a pivot, which you then combine.',
    focus: [
      'Practice the stomp on its own, then the pivot on its own, before putting them together.',
      'Pay attention to where your weight sits during the move.',
      'Finish by practicing how to change direction with the T-step.',
    ],
    chapters: ['0:35 Pivot and drag technique', '1:06 Stomp isolation practice', '1:41 Pivot isolation practice', '2:13 Combining moves', '3:47 Weight placement', '4:50 Transitioning directions', '5:59 Practice tips'],
  },
  {
    slug: 'easiest-running-man',
    level: 'foundations',
    title: 'The Easiest Running Man Tutorial Ever',
    videoId: 'EP3Q3ttFwtU',
    channel: 'Caroline Kay',
    minutes: 8,
    summary: 'Builds up to the running man with a series of simple bounce drills. A good pick if the other running man videos felt too fast.',
    focus: [
      'Do the drills in order: jumping, hopping, alternating feet, double bounce and the up and down patterns.',
      'Only move on to the full running man once the drills feel easy.',
    ],
    chapters: ['0:27 Jumping', '0:59 Hopping', '1:28 Alternating feet', '1:46 Double bounce', '2:01 Up up up', '2:49 Down up up', '3:14 Down slide', '3:46 Running man'],
  },
  {
    slug: 'foundations-running-man-t-step',
    level: 'foundations',
    title: 'The Foundations: Running Man & T-step (Full Session)',
    videoId: 'b6075roLFmo',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 29,
    summary: 'A long review session. The first half covers the running man, common mistakes, variations and upper body. The T-step starts at 15:34.',
    focus: [
      'Day 1: running man, mistakes and variations (0:00 to 15:34).',
      'Day 2: the T-step (15:34 onward).',
      'Pause often and repeat each part before moving on.',
    ],
    chapters: ['0:36 Running man', '4:09 Common mistakes', '8:17 Variations', '13:00 Upper body', '15:34 T-step', '27:42 Outie 5000'],
  },

  // Level 2
  {
    slug: 'first-5-moves',
    level: 'first-combos',
    title: 'Shuffling for Beginners: Your First 5 Moves',
    videoId: 'F9wrAAAcQL4',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 14,
    summary: 'Five moves in one video: running woman, T-step, Charleston, Polly Pocket and a basic spin. A preview of what is coming in the next levels.',
    focus: [
      'You already know two of these from Level 1. Use them as a warm-up.',
      'Learn the Charleston, Polly Pocket and spin one at a time.',
      'Link two moves together and repeat for 8 counts.',
    ],
    chapters: ['0:05 Running woman', '3:17 T-step', '6:07 Charleston', '9:15 Polly Pocket', '11:17 Basic spin'],
  },
  {
    slug: '5-easy-footwork-steps',
    level: 'first-combos',
    title: '5 Easy Footwork Steps',
    videoId: 'BxOBhZBLOio',
    channel: 'Marbiik',
    minutes: 16,
    summary: 'Five of the easiest footwork steps in cutting shapes: criss cross, heel toe, W-step, scissors and toe switch.',
    focus: [
      'Learn each step on its own, then connect two of them.',
      'Spend your practice block on one or two steps, not all five in a day.',
    ],
    chapters: ['0:16 Criss cross', '2:14 Heel toe', '4:35 W-step', '8:05 Scissors', '11:46 Toe switch'],
  },
  {
    slug: 'beginner-class-video',
    level: 'first-combos',
    title: 'Shuffle Tutorial for Beginners (Class Video)',
    videoId: 'QG0ahY7kn0Y',
    channel: 'Shaira Bhan',
    minutes: 22,
    summary: 'A recording of a live class for people new to shuffling, with sliding drills, speed and tempo drills, diagonal steps, heel work and running man variations.',
    focus: [
      'Follow along as if you were in the room.',
      'Plan two days if you want to go through it all. The sliding and tempo drills are a good first session.',
    ],
    chapters: ['1:14 Front and back sliding', '2:30 Common sliding mistakes', '3:27 Speed and tempo drills', '4:37 Diagonal stepping', '6:45 Heel push techniques', '9:13 Incorporating the running man', '11:29 Traveling sequences', '14:40 Cross and open footwork'],
  },
  {
    slug: 'effortless-flow-combo',
    level: 'first-combos',
    title: 'Unlock Effortless Flow with this Shuffle Combo',
    videoId: '3P8FB7t0I1M',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 18,
    summary: 'A T-step based combo with tips, variations, the reverse T-step and arm movement.',
    focus: [
      'Get the basic combo steady before adding variations.',
      'Add the arms last, once your feet do not need your attention.',
    ],
    chapters: ['0:49 The basics', '2:23 Tips and tricks', '8:27 Variations', '9:11 Reverse T-step', '14:50 Arms'],
  },

  // Level 3
  {
    slug: 'everything-about-cutting-shapes',
    level: 'cutting-shapes',
    title: 'Everything You Need to Know About Cutting Shapes',
    videoId: 'yOanOaERq3A',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 6,
    summary: 'A short orientation. The creator explains that cutting shapes is often grouped with shuffling, but started as its own thing and grew alongside traditional Melbourne shuffling.',
    focus: [
      'Watch it first for context, then move on to the longer tutorials in this level.',
    ],
  },
  {
    slug: 'cutting-shapes-tutorial-beginner',
    level: 'cutting-shapes',
    title: 'The Cutting Shapes Tutorial I Wish I Had as a Beginner',
    videoId: 'OhG8r1gXFiY',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 23,
    summary: 'Covers how cutting shapes differs from shuffling, then teaches the Charleston, diamond / criss cross, V-step / happy feet and X-step / Polly Pocket.',
    focus: [
      'Spend most of your time on the Charleston, which takes the longest in this video.',
      'Plan two days: the Charleston first, then the other steps.',
    ],
    chapters: ['0:28 Cutting shapes vs shuffling', '1:20 The Charleston', '7:12 Diamond / criss cross', '9:56 V-step / happy feet', '13:24 X-step / Polly Pocket'],
  },
  {
    slug: 'charleston-beginner',
    level: 'cutting-shapes',
    title: 'Charleston (Beginner) - Cutting Shapes',
    videoId: '4YhzRZDatn8',
    channel: 'Marbiik',
    minutes: 7,
    summary: 'The Charleston, a basic cutting shapes step. It starts with a semicircle drill before the step itself.',
    focus: [
      'Do the semicircle first. It is the lead-in to the Charleston.',
      'Practice at half speed until it is smooth.',
    ],
    chapters: ['0:14 Semicircle', '2:25 Charleston'],
  },
  {
    slug: 'cutting-shapes-quick',
    level: 'cutting-shapes',
    title: 'Cutting Shapes Tutorial',
    videoId: 'xSx8nM4DFOE',
    channel: 'How to Dance',
    minutes: 3,
    summary: 'A very short cutting shapes tutorial. The lesson itself is about two minutes long.',
    focus: ['Use it as a quick refresher or warm-up before the longer lessons.'],
    chapters: ['0:21 Tutorial'],
  },

  // Level 4
  {
    slug: 'shuffle-transitions',
    level: 'flow-routine',
    title: 'Shuffle Transitions: Steps, Kicks and Combos',
    videoId: '8eKQTRG4-q4',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 19,
    summary: 'Ways to get from one move to the next: glide, T-step, and kick and turn transitions, ending in advanced kick combinations and a final combo.',
    focus: [
      'Pick one transition per session and practice it between two moves you already know.',
      'Slow it down until the switch feels effortless.',
    ],
    chapters: ['1:00 Foundation and basic movement', '2:42 The reverse running man', '4:49 Stomping forward', '6:32 Glide transitions', '8:29 T-step transitions', '11:06 Kick and turn transitions', '14:07 Advanced kick combinations', '16:05 Final combo'],
  },
  {
    slug: 'footwork-creativity',
    level: 'flow-routine',
    title: 'Footwork Creativity for Shuffling',
    videoId: 'lXHjxJ5kTzs',
    channel: 'Marbiik',
    minutes: 7,
    summary: 'How to build your own footwork patterns from five T-steps, change orientation, and fit the patterns into routines.',
    focus: [
      'Make your own pattern from the five T-steps, then repeat it until it flows.',
      'Record yourself and keep the parts you like.',
    ],
    chapters: ['0:55 Creating custom patterns', '1:37 Executing the five T-steps', '2:38 Adding orientation shifts', '3:50 Integrating into routines', '4:56 Pattern practice and tips'],
  },
  {
    slug: 'festival-season-level-up',
    level: 'flow-routine',
    title: 'Level Up for Festival Season with this Shuffle Combo',
    videoId: 'C33XxmVKT1U',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 15,
    summary: 'An intermediate combo built from the T-step and switch, the reverse T-step and a crescent glide transition, with a music practice section at the end.',
    focus: [
      'Learn the parts first, then follow the full combo walkthrough.',
      'Practice with music and try mirroring the combo to the other side.',
    ],
    chapters: ['0:34 T-step and switch basics', '1:35 Reverse T-step technique', '3:50 Crescent glide transition', '7:32 Full combo walkthrough', '9:22 Practice with music', '10:22 Mirroring the combo'],
  },
  {
    slug: 'easy-shuffle-choreo',
    level: 'flow-routine',
    title: 'Learn this Easy Shuffle Choreo (Shades by Tchami)',
    videoId: '9h6YaTKPFTE',
    channel: 'Emylee x The Shuffle Vault',
    minutes: 9,
    summary: 'A beginner choreography for people who are unsure how to combine their moves: a ski running man, a T-step and glide, then the full combo.',
    focus: [
      'Learn it in two parts, then run the full combo.',
      'Film a final take to see how far you have come.',
    ],
    chapters: ['1:01 Ski running man', '3:24 T-step and glide', '6:09 Full combo walkthrough'],
  },

  // Melbourne
  {
    slug: 'basic-melbourne-shuffle',
    level: 'melbourne',
    title: 'Basic Melbourne Shuffle Tutorial',
    videoId: 'rrbUkYmOKL0',
    channel: 'Abby Castro',
    minutes: 7,
    summary: 'A quick Melbourne shuffle tutorial: running man, T-step, rock, combining the basics, sliding techniques and practice to music.',
    focus: [
      'The moves overlap with Level 1, so this one should feel familiar.',
      'Finish with the music practice section.',
    ],
    chapters: ['0:34 The running man', '1:30 The T-step', '2:38 Incorporating rock', '3:10 Combining basic moves', '3:40 Sliding techniques', '4:31 Music practice'],
  },
  {
    slug: 'hardstyle-shuffle-tutorial',
    level: 'melbourne',
    title: 'How to Hardstyle Shuffle Tutorial (2010)',
    videoId: 'AAY5J5bwRDU',
    channel: 'YoAlanKun',
    minutes: 8,
    summary: 'An older hardstyle shuffle tutorial. The creator says he made it because most Melbourne shuffle and hardstyle tutorials at the time were poor quality.',
    focus: [
      'The video is from 2010, so expect a different look and style from the newer videos.',
      'Practice the core steps until they are steady.',
    ],
  },
  {
    slug: 'melbourne-basics-and-advanced',
    level: 'melbourne',
    title: 'How to Do the Melbourne Shuffle: Basics and Advanced',
    videoId: 'BRpGh9L-nBc',
    channel: 'JustAPhysicist',
    minutes: 16,
    summary: 'Covers the running man, T-step, transitioning, spinning, gliding and the reverse step, in basic and advanced sections.',
    focus: [
      'Spend the first session on the basic moves (0:00 to 7:05).',
      'Come back for the advanced moves and the full combination another day.',
    ],
    chapters: ['0:00 Basic shuffling moves', '7:05 Advanced shuffling moves', '12:58 Putting it all together'],
  },
  {
    slug: 'best-melbourne-tutorial',
    level: 'melbourne',
    title: 'The Best Melbourne Shuffle Tutorial Ever',
    videoId: 'Yoolneu0twk',
    channel: 'FRANCIS VO',
    minutes: 10,
    summary: 'Another Melbourne shuffle tutorial to round out the track.',
    focus: [
      'Compare it with the earlier Melbourne lessons and keep what works for you.',
      'Practice the moves to a faster, harder track.',
    ],
  },
];

// Extra tutorials from other creators, shown under each lesson's main video.
// Lengths are rounded up to whole minutes.
export interface ExtraVideo {
  videoId: string;
  title: string;
  channel: string;
  minutes: number;
}

const X = {
  jchangtime: { videoId: 'J35OLTyr0YI', title: 'How to Shuffle Dance (Best Tutorial Ever)', channel: 'JCHangtime', minutes: 11 },
  mavis: { videoId: 'v-fsbZ5VgTU', title: 'How to Shuffle: Getting Up to Speed', channel: 'Mavis Everett', minutes: 3 },
  catsKilos: { videoId: 'W5oHDTBbg58', title: 'Shuffle Dance Tutorial for Beginners: An Easy T-Step', channel: 'Cats and Kilos', minutes: 5 },
  tuzelity3: { videoId: 'RFOpdD5zuKs', title: '3 Easy Shuffle Steps', channel: 'tuzelity SHUFFLE', minutes: 2 },
  rm2min: { videoId: 'k22Bm2pMyD4', title: 'Running Man: Learn in 2 Minutes', channel: 'Jayden Rodrigues', minutes: 3 },
  rmDncr: { videoId: 'ZpTgAZBYNrU', title: 'How to Do the Running Man (Beginner)', channel: 'DNCR Dance Tutorials', minutes: 5 },
  rmZanouji: { videoId: 'WymXz-1JJQc', title: 'Running Man Lesson (Dancerush Stardom)', channel: 'Zanouji', minutes: 2 },
  rm3types: { videoId: 'SfM49r6gX0g', title: '3 Types of Running Man', channel: 'Shuffle Dance Academy', minutes: 9 },
  rmTips: { videoId: 'MRjzecRlVGc', title: 'Tips to Improve Your Running Man', channel: 'Emylee x The Shuffle Vault', minutes: 15 },
  rmTstep: { videoId: 'FW79-ldvYag', title: 'Running Man & T-Step for Beginners', channel: 'CykoMelody', minutes: 13 },
  tDncr: { videoId: 'P9HIwHoLc2Q', title: 'Beginner Shuffle Dance Tutorial (T-Step)', channel: 'DNCR Dance Tutorials', minutes: 3 },
  tCaroline: { videoId: 'jSfFnJWCuR4', title: 'T-Step Shuffle Tutorial (Series 2/5)', channel: 'Caroline Kay', minutes: 9 },
  tNatalia: { videoId: 'iWnWiYe2HiE', title: 'Beginner T-Step Shuffle Dance Tutorial, Step by Step', channel: 'Natalia & Waffles', minutes: 7 },
  tShufflea: { videoId: 'IoZEKPE2Ins', title: 'Shuffle Tutorial 3/7: T Step', channel: 'Shufflea', minutes: 2 },
  tKento: { videoId: 'xOmEkqD2oOY', title: 'Day 2 of 10: T-Step', channel: 'Kento Moriguchi', minutes: 19 },
  moves47: { videoId: 'p2JrE6JICKk', title: '47 Shuffle Dance Moves in 3 Minutes', channel: 'Zanouji', minutes: 4 },
  combos2: { videoId: 'QW1RF8eurBY', title: '2 Favorite Shuffle Combos to Add to Your Flow', channel: 'Emylee x The Shuffle Vault', minutes: 15 },
  levelUpTransition: { videoId: 'ScpHFFbyzms', title: 'Shuffle Step Level Up: Top Rock Transitions', channel: 'Pie Chien Teddie', minutes: 5 },
  csHarrison: { videoId: 'mb-nLc0Lrp8', title: 'Cutting Shapes Beginner Tutorial #1', channel: 'Harrison', minutes: 6 },
  csGetDance: { videoId: 'gQU0vqVD87Y', title: 'Cutting Shapes: 3 Moves for Beginners', channel: 'Get Dance', minutes: 5 },
  csWillyG: { videoId: 'vvocT-g31Zc', title: 'Cutting Shapes Basic/Advanced Tutorial', channel: 'WillyGee 123', minutes: 5 },
  csGina: { videoId: 'wvp7aSdaVTc', title: 'How to Cut Shapes for Beginners', channel: 'Gina Rego', minutes: 13 },
  csKento: { videoId: 'f8fozVcwUH8', title: 'Cutting Shapes Combo Tutorial', channel: 'Kento Moriguchi', minutes: 8 },
  charlAcademy: { videoId: '30lGUtZvhs4', title: 'Charleston Shuffle Dance Tutorial', channel: 'Shuffle Dance Academy', minutes: 12 },
  charlDncr: { videoId: 'bBz0DE7liKY', title: 'Beginner Shuffle Dance Tutorial (The Charleston)', channel: 'DNCR Dance Tutorials', minutes: 3 },
  sofia: { videoId: 'foNMb_LjnNU', title: 'How to Shuffle / Cutting Shapes: Running Man and Polly Pocket', channel: 'SOFÍA', minutes: 2 },
  transMarbiik: { videoId: 'PrADhgIAMfA', title: 'Basic Shuffle Transitions', channel: 'Marbiik', minutes: 17 },
  transEmylee: { videoId: 'VWZMOD9CiQo', title: 'Transitions, Cutting Shapes, Spins', channel: 'Emylee x The Shuffle Vault', minutes: 12 },
  freestyle: { videoId: 'PLStwju8i-Y', title: 'A Freestyling Guide for Shufflers: How to Enter a Flow', channel: 'Emylee x The Shuffle Vault', minutes: 9 },
  melbPhysicist: { videoId: 'BRpGh9L-nBc', title: 'How to Do the Melbourne Shuffle: Basics and Advanced', channel: 'JustAPhysicist', minutes: 16 },
  melbKnee: { videoId: 'Zpjh77rXENQ', title: 'Melbourne Shuffle Tutorial', channel: 'KneeCole76', minutes: 4 },
  melbFrancis: { videoId: 'Yoolneu0twk', title: 'The Best Melbourne Shuffle Tutorial Ever', channel: 'FRANCIS VO', minutes: 10 },
  hardKeven: { videoId: '4pdoAqLnTkQ', title: 'Shuffle Tutorial of Hardstyle', channel: 'Keven Hernandez', minutes: 8 },
  melbSagames: { videoId: 'oB8-b7YO9CM', title: 'Melbourne Shuffle Tutorial, Part 1', channel: 'Sagames Psnstore', minutes: 8 },
  hardSports: { videoId: '07KjROB0gUc', title: 'How to Do the Hardstyle Shuffle', channel: 'Sports and Fitness', minutes: 4 },
  melbSpin: { videoId: 'mgGyaeWYvjM', title: 'Melbourne Shuffle Spin Tutorial & Kick Tip', channel: 'T0ny', minutes: 6 },
  ausBasics: { videoId: 'Kni3KUAaIIQ', title: 'Aus Style Tutorial: Basics and Foundation', channel: 'Souffley Man', minutes: 8 },
  aus2019: { videoId: 'slE9fOB99Hk', title: 'Aus Style Tutorial 2019 (Melbourne Shuffle)', channel: 'Souffley Man', minutes: 6 },
};

const moreVideos: Record<string, ExtraVideo[]> = {
  'beginner-full-tutorial': [X.jchangtime, X.mavis],
  'ultimate-beginner-tutorial': [X.catsKilos, X.tuzelity3],
  'learn-to-shuffle-in-5-minutes': [X.jchangtime, X.tuzelity3],
  'shuffle-basics-running-man': [X.rm2min, X.rmDncr, X.rmZanouji],
  'running-man-marbiik': [X.rm3types, X.rm2min, X.rmDncr],
  't-step-marbiik': [X.tDncr, X.tCaroline, X.tNatalia, X.tShufflea],
  'easiest-running-man': [X.rm3types, X.rmZanouji, X.rmTips],
  'foundations-running-man-t-step': [X.rmTstep, X.tKento, X.rmTips],
  'first-5-moves': [X.moves47, X.tuzelity3, X.jchangtime],
  '5-easy-footwork-steps': [X.moves47, X.tuzelity3],
  'beginner-class-video': [X.jchangtime, X.catsKilos],
  'effortless-flow-combo': [X.combos2, X.levelUpTransition, X.moves47],
  'everything-about-cutting-shapes': [X.csHarrison, X.csGetDance, X.csWillyG],
  'cutting-shapes-tutorial-beginner': [X.csGina, X.csHarrison, X.csKento],
  'charleston-beginner': [X.charlAcademy, X.charlDncr, X.sofia],
  'cutting-shapes-quick': [X.csGetDance, X.csWillyG, X.csHarrison],
  'shuffle-transitions': [X.transMarbiik, X.transEmylee, X.levelUpTransition],
  'footwork-creativity': [X.freestyle, X.levelUpTransition],
  'festival-season-level-up': [X.combos2, X.freestyle, X.csKento],
  'easy-shuffle-choreo': [X.combos2, X.freestyle],
  'basic-melbourne-shuffle': [X.melbKnee, X.hardKeven, X.hardSports],
  'hardstyle-shuffle-tutorial': [X.melbSagames, X.aus2019, X.melbSpin],
  'melbourne-basics-and-advanced': [X.ausBasics, X.melbKnee],
  'best-melbourne-tutorial': [X.melbSagames, X.melbSpin],
};

export function moreOf(slug: string): ExtraVideo[] {
  return moreVideos[slug] ?? [];
}

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

// Highlights are for motivation: performances, freestyle and cool moves. Tutorials belong in lessons.
// View counts come from YouTube search results on VIEWS_AS_OF and are rounded for the larger ones.
export const highlights: Highlight[] = [
  // Full videos
  { videoId: 'ZPaMdxC6CQI', title: 'Melbourne Shuffle Compilation 3', channel: 'jack40k', views: 42_260_000, style: 'melbourne', isShort: false, blurb: 'A compilation of Melbourne shuffle dancers.' },
  { videoId: 'nmXT-cC5op4', title: 'Shuffle Performance (Choreography)', channel: 'Morlokx', views: 4_460_000, style: 'general', isShort: false, blurb: 'A choreographed shuffle performance.' },
  { videoId: 'Ee2hKlGXrDs', title: 'Cutting Shapes vs Melbourne Shuffle vs Jumpstyle', channel: 'Boosted Society', views: 3_350_830, style: 'general', isShort: false, blurb: 'A side-by-side look at the big styles.' },
  { videoId: '8k5WtNRlBcE', title: 'Melbourne Shuffle Compilation', channel: 'jack40k', views: 2_190_000, style: 'melbourne', isShort: false, blurb: 'More Melbourne shuffle from the same channel.' },
  { videoId: 'XgDNAO2IDjE', title: '2015 Melbourne Shuffle Compilation Mix 3', channel: 'HardStyleNation', views: 2_252_202, style: 'melbourne', isShort: false, blurb: 'Melbourne shuffle at hardstyle events.' },
  { videoId: 'S9gdrP4PWnI', title: 'Cutting Shapes | Shuffle Dance Choreography', channel: 'Женя Локтев', views: 1_720_000, style: 'cutting-shapes', isShort: false, blurb: 'A cutting shapes choreography.' },
  { videoId: 'L_ffF-weExs', title: 'Cutting Shapes Compilation #4 [House Shuffle]', channel: 'Marktore', views: 1_710_000, style: 'cutting-shapes', isShort: false, blurb: 'House-music cutting shapes from many dancers.' },
  { videoId: 'XDuIrqcRdpc', title: 'How 7 Years of Shuffling Changed Me', channel: 'Emylee x The Shuffle Vault', views: 1_446_948, style: 'general', isShort: false, blurb: 'Seven years of progress. Great when you need a push.' },
  { videoId: 'wcTiil8W1Nc', title: 'Festival Shuffle Compilation [Cutting Shapes]', channel: 'Marktore', views: 1_405_674, style: 'cutting-shapes', isShort: false, blurb: 'Shuffling on festival dance floors.' },
  { videoId: '-HfcakYYaWY', title: 'Cutting Shapes: Renegade Master', channel: 'Aidan Queen', views: 1_121_379, style: 'cutting-shapes', isShort: false, blurb: 'Cutting shapes to a classic track.' },
  { videoId: 'UmOifgmi3gg', title: '2021 Melbourne Shuffle Tournament', channel: 'HXSI shuffle', views: 679_772, style: 'melbourne', isShort: false, blurb: 'A clip from a Melbourne shuffle tournament in Guangzhou.' },
  { videoId: 'R2dSlYmYmHo', title: 'Cutting Shapes / Techno Rave Shuffle Compilation', channel: 'Konijnendansjes NL', views: 580_000, style: 'cutting-shapes', isShort: false, blurb: 'Rave shuffle clips.' },

  // Shorts
  { videoId: 'tHiD7QOgiBc', title: 'Clap Clap. Shuffle / Cutting Shapes', channel: 'SOFÍA', views: 39_000_000, style: 'cutting-shapes', isShort: true, blurb: 'Smooth cutting shapes.' },
  { videoId: 'WyHFh0xWc7o', title: 'Shuffle Dance, but in Public at the LA Santa Monica Pier', channel: 'Erik Hu', views: 25_000_000, style: 'general', isShort: true, blurb: 'Shuffling in front of a real crowd.' },
  { videoId: '3CwlB1U1uxM', title: 'Boney M. "Rasputin" but in Public', channel: 'Shuffolution', views: 20_000_000, style: 'cutting-shapes', isShort: true, blurb: 'Shuffling and cutting shapes in public.' },
  { videoId: '_kY3hPOf3Vc', title: "Watch the Crowd's Reaction When Andy (51) Starts Shuffling", channel: 'Andy | Shuffle Dance', views: 17_000_000, style: 'general', isShort: true, blurb: 'Proof you are never too old to start.' },
  { videoId: 'BF5i1bHlkyw', title: 'The Best Shuffle Dance for a Cloudy Day', channel: 'Simple Weekend', views: 6_500_000, style: 'general', isShort: true, blurb: 'A feel-good shuffle.' },
  { videoId: '_zKCEBELz28', title: 'We Salute You! This Is for Those About to Rave', channel: 'Scooter', views: 5_600_000, style: 'general', isShort: true, blurb: 'Rave energy.' },
  { videoId: 'zbd8lPOSW24', title: 'Rave Girl Festival Shuffle', channel: 'Mainset Music', views: 4_600_000, style: 'general', isShort: true, blurb: 'Festival shuffling.' },
  { videoId: 'DWxa1FvOX8s', title: 'Rasputin Shuffle Dance', channel: 'Lizzie', views: 3_700_000, style: 'general', isShort: true, blurb: 'A duo dancing to Rasputin.' },
  { videoId: 'WsxJsgYKrSE', title: 'Started Shuffling at 40 and Now 51 Owning the Dance Floor', channel: 'Andy | Shuffle Dance', views: 3_100_000, style: 'general', isShort: true, blurb: 'A late start, and still going strong.' },
  { videoId: 'TXSGQR51Td4', title: 'Melbourne Shuffle', channel: 'IANROCKS', views: 2_900_000, style: 'melbourne', isShort: true, blurb: 'A short Melbourne shuffle clip.' },
  { videoId: 'W-jKGWTthm8', title: 'Shuffle Dance / Cutting Shapes: Rasputin', channel: 'Ana Gum', views: 2_800_000, style: 'cutting-shapes', isShort: true, blurb: 'Cutting shapes to Rasputin.' },
  { videoId: 'yG8-L69PO6E', title: 'Fast Cutting Shapes!', channel: 'Erika Gutierrez', views: 444_000, style: 'cutting-shapes', isShort: true, blurb: 'Fast, sharp footwork.' },
];
