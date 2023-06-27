import russiaSrc from './images/russia.png';
import kazakhstanSrc from './images/kazakhstan.png';
import armeniaSrc from './images/armenia.png';
import belarusSrc from './images/belarus.png';
import kyrgyzstanSrc from './images/kyrgyzstan.png';
import azerbaijanSrc from './images/azerbaijan.png';
import georgiaSrc from './images/georgia.png';
import moldovaSrc from './images/moldova.png';
import tajikistanSrc from './images/tajikistan.png';
import turkmenistanSrc from './images/turkmenistan.png';
import uzbekistanSrc from './images/uzbekistan.png';
import ukraineSrc from './images/ukraine.png';
import otherSrc from './images/other.png';

export interface Country {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly codeChars: string;
  readonly mask: string;
  readonly imageSrc: string;
}

export const IDS = {
  russia: 'russia',
  kazakhstan: 'kazakhstan',
  armenia: 'armenia',
  belarus: 'belarus',
  kyrgyzstan: 'kyrgyzstan',
  azerbaijan: 'azerbaijan',
  georgia: 'georgia',
  moldova: 'moldova',
  tajikistan: 'tajikistan',
  turkmenistan: 'turkmenistan',
  uzbekistan: 'uzbekistan',
  ukraine: 'ukraine',
  other: 'other',
} as const;

const NAMES = {
  [IDS.russia]: 'Россия',
  [IDS.kazakhstan]: 'Казахстан',
  [IDS.armenia]: 'Армения',
  [IDS.belarus]: 'Беларусь',
  [IDS.kyrgyzstan]: 'Кыргызстан',
  [IDS.azerbaijan]: 'Азербайджан',
  [IDS.georgia]: 'Грузия',
  [IDS.moldova]: 'Молдова',
  [IDS.tajikistan]: 'Таджикистан',
  [IDS.turkmenistan]: 'Туркмения',
  [IDS.uzbekistan]: 'Узбекистан',
  [IDS.ukraine]: 'Украина',
  [IDS.other]: 'Другое',
} as const;

const MASKS = {
  [IDS.russia]: '+7 (___) ___-__-__',
  [IDS.kazakhstan]: '+7 (___) ___-__-__',
  [IDS.armenia]: '+374-__-___-___',
  [IDS.belarus]: '+375 (__) ___-__-__',
  [IDS.kyrgyzstan]: '+996 (___) ___-___',
  [IDS.azerbaijan]: '+994-__-___-__-__',
  [IDS.georgia]: '+995 (___) ___-___',
  [IDS.moldova]: '+373-____-____',
  [IDS.tajikistan]: '+992-__-___-____',
  [IDS.turkmenistan]: '+993-_-___-____',
  [IDS.uzbekistan]: '+998-__-___-____',
  [IDS.ukraine]: '+380 (__) ___-__-__',
  [IDS.other]: '_______________',
} as const;

const IMAGES = {
  [IDS.russia]: russiaSrc,
  [IDS.kazakhstan]: kazakhstanSrc,
  [IDS.armenia]: armeniaSrc,
  [IDS.belarus]: belarusSrc,
  [IDS.kyrgyzstan]: kyrgyzstanSrc,
  [IDS.azerbaijan]: azerbaijanSrc,
  [IDS.georgia]: georgiaSrc,
  [IDS.moldova]: moldovaSrc,
  [IDS.tajikistan]: tajikistanSrc,
  [IDS.turkmenistan]: turkmenistanSrc,
  [IDS.uzbekistan]: uzbekistanSrc,
  [IDS.ukraine]: ukraineSrc,
  [IDS.other]: otherSrc,
} as const;

// @todo <Flag country='russia' /> под капотом оптимизация для флагов состоящих только из полос
// (простые флаги можно сделать на css чтобы не хранить лишние png)

const CODES = {
  [IDS.russia]: '+7',
  [IDS.kazakhstan]: '+7',
  [IDS.armenia]: '+374',
  [IDS.belarus]: '+375',
  [IDS.kyrgyzstan]: '+996',
  [IDS.azerbaijan]: '+994',
  [IDS.georgia]: '+995',
  [IDS.moldova]: '+373',
  [IDS.tajikistan]: '+992',
  [IDS.turkmenistan]: '+993',
  [IDS.uzbekistan]: '+998',
  [IDS.ukraine]: '+380',
  [IDS.other]: '',
} as const;

const ORDER = [
  IDS.russia,
  IDS.kazakhstan,
  IDS.armenia,
  IDS.belarus,
  IDS.kyrgyzstan,
  IDS.azerbaijan,
  IDS.georgia,
  IDS.moldova,
  IDS.tajikistan,
  IDS.turkmenistan,
  IDS.uzbekistan,
  IDS.ukraine,
  IDS.other,
] as const;

export const countriesList: ReadonlyArray<Country> = ORDER.map(id => ({
  id,
  name: NAMES[id],
  code: CODES[id],
  codeChars: CODES[id].replace(/\D/g, ''),
  mask: MASKS[id],
  imageSrc: IMAGES[id],
}));

export const countries = countriesList.reduce<Readonly<Record<string, Country>>>(
  (acc, item) => ({ ...acc, [item.id]: item }),
  {},
);
