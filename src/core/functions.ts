export const propertyValues: {
  [prop: string]: { patterns: { [key: string]: string }; property: string };
} = {
  colAuto: {
    patterns: {
      boolean: 'auto',
    },
    property: 'gridColumn',
  },
  colEnd: {
    patterns: {
      number: '{{value}}',
      string: '{{value}}',
    },
    property: 'gridColumnEnd',
  },
  cols: {
    patterns: {
      number: 'repeat({{value}}, minmax(0, 1fr))',
      string: '{{value}}',
    },
    property: 'gridTemplateColumns',
  },
  colSpan: {
    patterns: {
      full: '1 / -1',
      number: 'span {{value}} / span {{value}}',
    },
    property: 'gridColumn',
  },
  colStart: {
    patterns: {
      number: '{{value}}',
      string: '{{value}}',
    },
    property: 'gridColumnStart',
  },
  flow: {
    patterns: {
      'col-dense': 'col dense',
      column: 'column',
      dense: 'dense',
      inherit: 'inherit',
      initial: 'initial',
      row: 'row',
      'row-dense': 'row dense',
      unset: 'unset',
    },
    property: 'gridAutoFlow',
  },
  rowAuto: {
    patterns: {
      boolean: 'auto',
    },
    property: 'gridRow',
  },
  rowEnd: {
    patterns: {
      number: '{{value}}',
      string: '{{value}}',
    },
    property: 'gridRowEnd',
  },
  rows: {
    patterns: {
      number: 'repeat({{value}}, minmax(0, 1fr))',
      string: '{{value}}',
    },
    property: 'gridTemplateRows',
  },
  rowStart: {
    patterns: {
      number: '{{value}}',
      string: '{{value}}',
    },
    property: 'gridRowStart',
  },
};

export const createStyles = (
  props: { [key: string]: any },
  breakpoints?: string[],
): any => {
  let values: any[] | undefined;

  const styles: { [key: string]: any } = {};
  Object.keys(props).forEach(key => {
    if (Object.keys(propertyValues).includes(key)) {
      const value = props[key];
      if (undefined !== value) {
        values = !Array.isArray(value) ? [value] : value;

        const regex = /{{value}}/gi;

        const propertyValue = propertyValues[key];

        values?.forEach((v, index) => {
          if (undefined !== v) {
            let pattern;
            if (
              'string' === typeof v &&
              Object.keys(propertyValue.patterns).includes(v)
            ) {
              pattern = propertyValue.patterns[v];
            } else if ('string' === typeof v && propertyValue.patterns.string) {
              pattern = propertyValue.patterns.string;
            } else if ('number' === typeof v && propertyValue.patterns.number) {
              pattern = propertyValue.patterns.number;
            } else if (
              'boolean' === typeof v &&
              propertyValue.patterns.boolean
            ) {
              pattern = propertyValue.patterns.boolean;
            }

            if (pattern) {
              if (index > 0 && breakpoints && breakpoints[index]) {
                if (!styles[`@media (min-width: ${breakpoints[index]})`]) {
                  styles[`@media (min-width: ${breakpoints[index]})`] = {};
                }
                styles[`@media (min-width: ${breakpoints[index]})`][
                  propertyValue.property
                ] = pattern.replace(regex, v);
              } else {
                styles[propertyValue.property] = pattern.replace(regex, v);
              }
            }
          }
        });
      }
    }
  });

  return styles;
};
