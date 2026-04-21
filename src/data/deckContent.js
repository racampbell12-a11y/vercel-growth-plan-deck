import deckData from './deckData.json';
import { createDeckSlides } from './deckSlides';
import speakerNotes from './deckSpeakerNotes';

export const deckMeta = {
  ...deckData.deck,
  date: 'Wednesday, April 22, 2026',
  footer: 'Executive Readout for Product, Engineering, and Finance Leadership',
};

export const slides = createDeckSlides(deckData, deckMeta).map((slide) => ({
  ...slide,
  speakerNotes: speakerNotes[slide.id] ?? null,
}));

export default deckData;
