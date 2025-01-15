import postcss from 'postcss';
import postcssJs from 'postcss-js';
import postcssNested from 'postcss-nested';

interface Context {
  prefix: string;
  theme: Record<string, any>;
}

/**
 * Joins classname strings into a space separated string
 * @returns Passed classnames as a single string
 */
export const join = (...classnames: string[]) => {
  return classnames.join(' ');
};

class StyleReg {
  private globalStyles: Map<string, object | Function>;
  private moduleStyles: Map<string, object | Function>;
  private styleCounter: number = 0;
  private context: Context;

  constructor(initialContext: Partial<Context> = {}) {
    this.moduleStyles = new Map();
    this.globalStyles = new Map();
    this.context = {
      prefix: 'css',
      theme: {},
      ...initialContext,
    };
  }

  // Generate a class name using the counter
  private generateClassName(key: string): string {
    return `${this.context.prefix}-${key}-${this.styleCounter++}`;
  }

  /**
   * Set the global context, including the theme
   * @param newContext - The new context to set
   */
  public setContext(newContext: Partial<Context>) {
    this.context = {
      ...this.context,
      ...newContext,
    };
    return this;
  }

  /**
   * Add global styling.
   * @param styles - Object with keys as css-selectors and values as styles or function returning styles
   */
  public globals<T extends Context>(
    styles: Record<string, object | ((context: T) => object)>,
  ) {
    if (this.globalStyles.size) {
      throw new Error('gobalStyles can only be set once');
    }
    for (const [selector, styleDec] of Object.entries(styles)) {
      // Add the generated CSS to the global store
      this.globalStyles.set(selector, styleDec);
    }
    return this;
  }

  /**
   * Add modularized styling. Returns an object of key:classnames to apply classname by key in markup.
   * @param styles Object with values as styles or function returning styles
   * @returns Object with modularized classnames as values
   */
  public css<T extends Context>(
    styles: Record<string, object | ((context: T) => object)>,
  ): Record<string, string> {
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
   * @returns All generated CSS as a single string
   */
  public resolveGlobals(): string {
    const styles: string[] = [];
    this.globalStyles.forEach((declaration, selector) => {
      // Resolve styles if a function is provided
      const resolvedDeclaration =
        typeof declaration === 'function'
          ? declaration(this.context)
          : declaration;

      const wrappedStyles = { [selector]: resolvedDeclaration };

      // Process styles with postcss-js
      const result = postcss([postcssNested]).process(wrappedStyles, {
        //@ts-expect-error
        parser: postcssJs,
      });
      styles.push(result.css);
    });

    return styles.join('\n');
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
        typeof declaration === 'function'
          ? declaration(this.context)
          : declaration;

      const wrappedStyles = { [`.${className}`]: resolvedDeclaration };

      // Process styles with postcss-js
      const result = postcss([postcssNested]).process(wrappedStyles, {
        parser: postcssJs,
      });
      styles.push(result.css);
    });

    return styles.join('\n');
  }
}

// Instantiate an instance and export it
export const styler = new StyleReg();

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
