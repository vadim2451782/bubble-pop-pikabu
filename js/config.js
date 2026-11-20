/**
 * Global game configuration: colours, boosters, scoring, storage keys.
 * Pure data — safe to import from tests and from the service worker era.
 */

/** Columns in an even grid row. Odd rows are staggered and hold COLS - 1. */
export const COLS = 11;

/** Bubble colours. `base` is the main tone, `light` the highlight and
 *  `dark`/`deep` the shaded rim. All bubbles are drawn as glossy 3D spheres. */
export const COLORS = [
  { id: 'red', base: '#ff3d5f', light: '#ffb3c2', dark: '#c40036', deep: '#65001c', glow: '#ff6b86' },
  { id: 'blue', base: '#2f8cff', light: '#a9d8ff', dark: '#0a55c9', deep: '#062a6e', glow: '#63b0ff' },
  { id: 'green', base: '#2fd06d', light: '#a6f5c2', dark: '#0d9147', deep: '#04512a', glow: '#5cf094' },
  { id: 'yellow', base: '#ffcf3d', light: '#fff3b0', dark: '#cf9000', deep: '#6f4a00', glow: '#ffe373' },
  { id: 'purple', base: '#a95bff', light: '#e2c8ff', dark: '#6f1bc9', deep: '#39076e', glow: '#c58bff' },
  { id: 'orange', base: '#ff8434', light: '#ffc9a3', dark: '#c94b00', deep: '#6b2600', glow: '#ffa966' },
];

export const COLOR_BY_ID = Object.fromEntries(COLORS.map((c) => [c.id, c]));

export const RAINBOW = 'rainbow';

/** Boosters and their shop prices (in coins). */
export const BOOSTERS = {
  bomb: {
    id: 'bomb',
    name: 'Бомба',
    desc: 'Взрывает выбранный шарик и всех соседей вокруг него.',
    price: 70,
    color: '#ff6b5e',
  },
  lightning: {
    id: 'lightning',
    name: 'Молния',
    desc: 'Уничтожает на поле все шарики выбранного цвета.',
    price: 100,
    color: '#7dd3ff',
  },
  rainbow: {
    id: 'rainbow',
    name: 'Радужный шар',
    desc: 'Следующий выстрел подходит к шарику любого цвета.',
    price: 90,
    color: '#f0a6ff',
  },
  rocket: {
    id: 'rocket',
    name: 'Ракета',
    desc: 'Заряжается как снаряд: при попадании сжигает весь вертикальный столбец.',
    price: 80,
    color: '#ffa94d',
  },
};

export const BOOSTER_ORDER = ['bomb', 'lightning', 'rainbow', 'rocket'];

/** Scoring rules. Coins are much rarer than bubbles: 1 per 4 popped/fallen,
 *  and the level-completion bonus is also reduced fourfold. */
export const SCORE = {
  bubble: 10,
  clusterBonus: 10,
  falling: 15,
  boosterBubble: 5,
  winBase: 10,
  winPerStar: 5,
};

/** How many bubbles must be cleared to earn one coin. */
export const BUBBLES_PER_COIN = 4;

export const START_COINS = 50;
export const START_BOOSTERS = { bomb: 1, lightning: 1, rainbow: 1, rocket: 1 };

export const MAX_LEVEL = 100;

export const STORAGE_KEY = 'bubblepop.save.v1';
export const SAVE_VERSION = 1;
/** Bumped when the 100-level catalogue is reordered, so old star records can
 *  be remapped by their stable source id instead of landing on other levels. */
export const CATALOG_VERSION = 2;

/** Physics / presentation tuning. */
export const TUNING = {
  shotSpeed: 1350, // px per second along the traced path
  maxTraceSteps: 20000, // safety valve for malformed angles
  minAngle: 0.2, // radians away from horizontal (~11.5 degrees)
  collisionInset: 4, // px shaved from each bubble for the circle intersection
};
