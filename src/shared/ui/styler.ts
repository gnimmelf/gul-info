import postcss from 'postcss';
import postcssJs from 'postcss-js';
import postcssNested from 'postcss-nested';

interface Context {
  prefix: string;
  theme: Record<string, any>;
}

type _StyleDec = Record<string, string>;
type StyleDecs = _StyleDec | Record<string, _StyleDec>;

type Resolver<Theme> = (theme: Theme) => StyleDecs;

/**
 * Joins classname strings into a space separated string
 * @returns Passed classnames as a single string
 */
export const join = (...classnames: string[]) => {
  return classnames.join(' ');
};

/**
 * A css styling singleton for modularized style-classes.
 * Uses postcss to render css from css-in-js object literals.
 */
export class StyleReg<Theme> {
  private globalStyles: Map<string, object>;
  private moduleStyles: Map<string, object>;
  private styleCounter: number = 0;
  private prefix: string;
  private theme: Theme;

  constructor(theme: Theme, prefix = 'styler') {
    this.moduleStyles = new Map();
    this.globalStyles = new Map();
    this.prefix = prefix;
    this.theme = Object.freeze(theme);
  }

  // Generate a class name using the counter
  private generateClassName(key: string): string {
    return `${this.prefix}-${key}-${this.styleCounter++}`;
  }

  /**
   * Wrapper to run a callback with `theme`
   * @param producer callback function to curry with theme
   * @returns result of callback
   */
  public withTheme(callback: Resolver<Theme>) {
    return () => callback(this.theme);
  }

  /**
   * Add global styling.
   * @param getter
   */
  public setGlobals(resolver: Resolver<Theme>): void {
    if (this.globalStyles.size) {
      throw new Error('gobalStyles can only be set once');
    }

    for (const [selector, styleDec] of Object.entries(resolver(this.theme))) {
      // Add the generated CSS to the global store
      this.globalStyles.set(selector, styleDec);
    }
  }

  /**
   * Add modularized styling. Returns an object of key:classnames to apply classname by key in markup.
   * @param styles Object with values as styles or function returning styles
   * @returns Object with modularized classnames as values
   */
  public css(styles: Record<string, object | Resolver<Theme>>): Record<string, string> {
    const classNames: Record<string, string> = {};

    for (const [key, styleDec] of Object.entries(styles)) {
      const className = this.generateClassName(key);

      // Add the generated CSS to the global store
      this.moduleStyles.set(className, styleDec);

      classNames[key] = className;
    }

    return classNames;
  }

  /**
   * Mimics Stitches' `globalStyles` function
   * @returns All css as a single string
   */
  public resolveGlobals(): string {
    const declarations: Record<string, any> = {};
    this.globalStyles.forEach((declaration, selector) => {
      declarations[selector] = declaration;
    });

    const parsed = postcss([postcssNested]).process(declarations, {
      //@ts-expect-error
      parser: postcssJs,
    });

    return parsed.css;
  }

  /**
   * Mimics Stitches' `getCssText` function
   * @returns All generated CSS as a single string
   */
  public resolveStyles(): string {
    const styles: string[] = [];
    this.moduleStyles.forEach((declaration, className) => {
      // Resolve styles if a function is provided
      const resolvedDeclaration =
        typeof declaration === 'function' ? declaration(this.theme) : declaration;

      const wrappedStyles = { [`.${className}`]: resolvedDeclaration };

      // Process styles with postcss-js
      const result = postcss([postcssNested]).process(wrappedStyles, {
        //@ts-expect-error
        parser: postcssJs,
      });
      styles.push(result.css);
    });

    return styles.join('\n');
  }
}

export const loadFontFace = (
  name: string,
  source: string,
  descriptors: Record<string, string> = {},
) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API
  const font = new FontFace(name, source, descriptors);
  // Add to the document.fonts (FontFaceSet)
  document.fonts.add(font);
};
