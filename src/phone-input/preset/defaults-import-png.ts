import type { PhoneInputMask } from '../types';
import russia from '../images/russia.png';
import kazakhstan from '../images/kazakhstan.png';
import armenia from '../images/armenia.png';
import belarus from '../images/belarus.png';
import kyrgyzstan from '../images/kyrgyzstan.png';
import azerbaijan from '../images/azerbaijan.png';
import georgia from '../images/georgia.png';
import moldova from '../images/moldova.png';
import tajikistan from '../images/tajikistan.png';
import turkmenistan from '../images/turkmenistan.png';
import uzbekistan from '../images/uzbekistan.png';
import ukraine from '../images/ukraine.png';
import other from '../images/other.png';

export const masks: PhoneInputMask[] = [
  {
    id: 'russia',
    title: 'Россия',
    mask: '+7 (___) ___-__-__',
    optionImageSrc: russia,
    optionEndContent: '+7',
  },
  {
    id: 'kazakhstan',
    title: 'Казахстан',
    mask: '+7 (___) ___-__-__',
    optionImageSrc: kazakhstan,
    optionEndContent: '+7',
  },
  {
    id: 'armenia',
    title: 'Армения',
    mask: '+374-__-___-___',
    optionImageSrc: armenia,
    optionEndContent: '+374',
  },
  {
    id: 'belarus',
    title: 'Беларусь',
    mask: '+375 (__) ___-__-__',
    optionImageSrc: belarus,
    optionEndContent: '+375',
  },
  {
    id: 'kyrgyzstan',
    title: 'Кыргызстан',
    mask: '+996 (___) ___-___',
    optionImageSrc: kyrgyzstan,
    optionEndContent: '+996',
  },
  {
    id: 'azerbaijan',
    title: 'Азербайджан',
    mask: '+994-__-___-__-__',
    optionImageSrc: azerbaijan,
    optionEndContent: '+994',
  },
  {
    id: 'georgia',
    title: 'Грузия',
    mask: '+995 (___) ___-___',
    optionImageSrc: georgia,
    optionEndContent: '+995',
  },
  {
    id: 'moldova',
    title: 'Молдова',
    mask: '+373-____-____',
    optionImageSrc: moldova,
    optionEndContent: '+373',
  },
  {
    id: 'tajikistan',
    title: 'Таджикистан',
    mask: '+992-__-___-____',
    optionImageSrc: tajikistan,
    optionEndContent: '+992',
  },
  {
    id: 'turkmenistan',
    title: 'Туркмения',
    mask: '+993-_-___-____',
    optionImageSrc: turkmenistan,
    optionEndContent: '+993',
  },
  {
    id: 'uzbekistan',
    title: 'Узбекистан',
    mask: '+998-__-___-____',
    optionImageSrc: uzbekistan,
    optionEndContent: '+998',
  },
  {
    id: 'ukraine',
    title: 'Украина',
    mask: '+380 (__) ___-__-__',
    optionImageSrc: ukraine,
    optionEndContent: '+380',
  },
  {
    id: 'other',
    title: 'Другое',
    mask: '_______________',
    needRestPlaceholder: false,
    optionImageSrc: other,
  },
];
