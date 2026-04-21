import deckData from './deckData.json';
import { createDeckSlides } from './deckSlides';

export const deckMeta = {
  ...deckData.deck,
  date: 'Wednesday, April 22, 2026',
  footer: 'Executive Readout for Product, Engineering, and Finance Leadership',
};

export const slides = createDeckSlides(deckData, deckMeta);

export default deckData;
