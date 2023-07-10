// GENERATED FILE - DO NOT CHANGE IT MANUALLY

const collection = {
  // basic
  'basic-blue': '#1f84db',
  'basic-gray87': '#212121',
  'basic-gray76': '#3a3a3b',
  'basic-gray66': '#545455',
  'basic-gray54': '#757575',
  'basic-gray38': '#9e9e9e',
  'basic-gray24': '#c2c2c2',
  'basic-gray12': '#e0e0e0',
  'basic-gray8': '#ebebeb',
  'basic-gray4': '#f5f5f5',
  'basic-gray2': '#fafafa',
  'basic-white': '#fff',

  // additional
  'additional-deep-red': '#d50000',
  'additional-red': '#fb3a2f',
  'additional-light-red': '#feebea',
  'additional-teal': '#09ab8b',
  'additional-green': '#00c853',
  'additional-light-green': '#64dd17',
  'additional-lime': '#aeea00',
  'additional-faded-green': '#eff9ea',
  'additional-pink': '#e82e5c',
  'additional-purple': '#b52ea8',
  'additional-violet': '#902bd0',
  'additional-deep-purple': '#634bdf',
  'additional-electric-blue': '#2962ff',
  'additional-light-blue': '#0091ea',
  'additional-cyan': '#00b8d4',
  'additional-sky': '#e4f1f9',
  'additional-deep-orange': '#ff7200',
  'additional-amber': '#ffab00',
  'additional-yellow': '#ffd600',
  'additional-gold': '#d5a43b',
  'additional-brown': '#795548',
  'additional-blue-gray': '#607d8b',
  'additional-deep-blue': '#00599d',
  'additional-dark-blue': '#002b41',
} as const;

export type Token = keyof typeof collection;
export const COLORS = new Map(Object.entries(collection)) as Map<Token, string>;