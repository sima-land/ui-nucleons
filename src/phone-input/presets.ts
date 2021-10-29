import russiaPNG from './images/russia.png';
import kazakhstanPNG from './images/kazakhstan.png';
import armeniaPNG from './images/armenia.png';
import belarusPNG from './images/belarus.png';
import kyrgyzstanPNG from './images/kyrgyzstan.png';
import azerbaijanPNG from './images/azerbaijan.png';
import georgiaPNG from './images/georgia.png';
import moldovaPNG from './images/moldova.png';
import tajikistanPNG from './images/tajikistan.png';
import turkmenistanPNG from './images/turkmenistan.png';
import uzbekistanPNG from './images/uzbekistan.png';
import ukrainePNG from './images/ukraine.png';
import otherPNG from './images/other.png';
import { keyBy } from 'lodash';

export interface Country {
  id: string;
  name: string;
  code: string;
  codeChars: string;
  mask: string;
  imageSrc: string;
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
};

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
};

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
};

const IMAGES = {
  [IDS.russia]: russiaPNG,
  [IDS.kazakhstan]: kazakhstanPNG,
  [IDS.armenia]: armeniaPNG,
  [IDS.belarus]: belarusPNG,
  [IDS.kyrgyzstan]: kyrgyzstanPNG,
  [IDS.azerbaijan]: azerbaijanPNG,
  [IDS.georgia]: georgiaPNG,
  [IDS.moldova]: moldovaPNG,
  [IDS.tajikistan]: tajikistanPNG,
  [IDS.turkmenistan]: turkmenistanPNG,
  [IDS.uzbekistan]: uzbekistanPNG,
  [IDS.ukraine]: ukrainePNG,
  [IDS.other]: otherPNG,
};

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
};

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
];

export const countriesList: Country[] = ORDER.map(id => ({
  id,
  name: NAMES[id],
  code: CODES[id],
  codeChars: CODES[id].replace(/\D/g, ''),
  mask: MASKS[id],
  imageSrc: IMAGES[id],
}));

export const countries = keyBy(countriesList, data => data.id);
