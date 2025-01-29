import { join, StyleReg, loadFontFace } from '~/shared/ui/styler';
import { getValidityStyles } from './getValidityStyles';



loadFontFace(
  'Playwrite HU',
  "url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",
  {
    'font-optical-sizing': 'auto',
    'font-weight': '400',
    'font-style': 'normal',
  },
);



/**
 * Is there really a usecase for having theme constants as Js
 * in addition to custom props? The narrow usage is doing Js computations,
 * but this can also be extracted back from the browser.
 *
 * Maybe the only real usecase is a DX lookup list of design-token definitions?
 */
const theme = {
  colorPrimary: 'var(--gifo-color-primary)',
  colorOnPrimary: 'var(--gifo-color-on-primary)',
  colorAccent: 'var(--gifo-color-accent)',
  fontSizeLg: '2rem',
  fontSizeMd: '1.2rem',
  fontSizeSm: '1.0rem',
  breakPointSm: '600px',
  gapMd: 'var(--sl-spacing-medium)',
} as const;

export type Theme = typeof theme;

const styler = new StyleReg<Theme>(theme, 'gifo');

styler.setGlobals((theme: Theme) => ({
  ':root': {
    '--breakpoint-sm': theme.breakPointSm,
  },
  /* Global scrollbar styles */
  '::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent thumb
    borderRadius: '4px', // Rounded edges for the thumb
    transition: 'background-color 0.2s', // Smooth transition
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker thumb on hover
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent', // Fully transparent track
  },
  /* Firefox-specific scrollbar styles */
  '.scrollable-element': {
    scrollbarWidth: 'thin', // Thin scrollbar
    scrollbarColor: 'rgba(0, 0, 0, 0.5) transparent', // Thumb and track colors
  },
  'a, a:hover, a:visited': {
    textDecoration: 'none',
    color: theme.colorOnPrimary,
  },
  fieldset: {
    border: '2px solid',
    borderColor: 'var(--gifo-color-primary)',
    borderRadius: '5px',
  },
  ...getValidityStyles(theme)
}));

/**
 * Exports
 */
const addCss = styler.css.bind(styler);

const withTheme = styler.withTheme.bind(styler);

const resolveStylesToString = () =>
  [styler.resolveGlobals(), styler.resolveStyles()].join('\n');

export { join, addCss, withTheme, resolveStylesToString };
