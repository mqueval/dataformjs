const alignContent = {
  patterns: {
    '*': '{{value}}',
  },
  property: 'alignContent',
};

const alignItems = {
  patterns: {
    '*': '{{value}}',
  },
  property: 'alignItems',
};

const columnGap = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'columnGap',
};

const columns = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'columns',
};

const flex = {
  patterns: {
    string: '{{value}}',
  },
  property: 'flexFlow',
};

const flexDirection = {
  patterns: {
    string: '{{value}}',
  },
  property: 'flexDirection',
};

const flexFlow = {
  patterns: {
    string: '{{value}}',
  },
  property: 'flexFlow',
};

const gap = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'gap',
};

const gridAutoFlow = {
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
};

const gridColumnStart = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'gridColumnStart',
};

const gridRowEnd = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'gridRowEnd',
};

const gridRowStart = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'gridRowStart',
};

const gridTemplateColumns = {
  patterns: {
    number: 'repeat({{value}}, minmax(0, 1fr))',
    string: '{{value}}',
  },
  property: 'gridTemplateColumns',
};

const gridTemplateRows = {
  patterns: {
    number: 'repeat({{value}}, minmax(0, 1fr))',
    string: '{{value}}',
  },
  property: 'gridTemplateRows',
};

const justifyContent = {
  patterns: {
    '*': '{{value}}',
  },
  property: 'justify-content',
};

const justifyItems = {
  patterns: {
    '*': '{{value}}',
  },
  property: 'justify-items',
};

const justifySelf = {
  patterns: {
    '*': '{{value}}',
  },
  property: 'justify-self',
};

const order = {
  patterns: {
    first: '-9999',
    last: '9999',
    none: '0',
    number: '{{value}}',
  },
  property: 'order',
};

const rowGap = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  property: 'rowGap',
};

const spaceX = {
  parent: '& > :not([hidden]) ~ :not([hidden])',
  patterns: {
    '*': '{{value}}',
  },
  property: 'margin-left',
};

const spaceY = {
  parent: '& > :not([hidden]) ~ :not([hidden])',
  patterns: {
    '*': '{{value}}',
  },
  property: 'margin-top',
};

export const propertyValues: {
  [prop: string]: {
    parent?: string;
    patterns: { [key: string]: string };
    property: string;
  };
} = {
  alignContent,
  alignItems,
  columnGap,
  columns,
  flex,
  flexDirection,
  flexFlow,
  gap,
  gridAutoFlow,
  gridColumnStart,
  gridRowEnd,
  gridRowStart,
  gridTemplateColumns,
  gridTemplateRows,
  justifyItems,
  justifySelf,
  order,
  rowGap,
  spaceX,
  spaceY,
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
  cols: gridTemplateColumns,
  colSpan: {
    patterns: {
      full: '1 / -1',
      number: 'span {{value}} / span {{value}}',
    },
    property: 'gridColumn',
  },
  colStart: gridColumnStart,
  content: alignContent,
  direction: flexDirection,
  flow: gridAutoFlow,
  gapX: columnGap,
  gapY: rowGap,
  items: alignItems,
  justify: justifyContent,
  rowAuto: {
    patterns: {
      boolean: 'auto',
    },
    property: 'gridRow',
  },
  rowEnd: gridRowEnd,
  rows: gridTemplateRows,
  rowStart: gridRowStart,
};

export const createStyles = (props: { [key: string]: any }): any => {
  const breakpoints: string[] = props.theme?.breakpoints;

  let values: any[] | undefined;
  const styles: { [key: string]: any } = {};

  Object.keys(props).forEach(key => {
    if (propertyValues[key]) {
      const value = props[key];
      if (undefined !== value) {
        values = !Array.isArray(value) ? [value] : value;

        const regex = /{{value}}/gi;

        const propertyValue = propertyValues[key];

        values?.forEach((v, index) => {
          if (undefined !== v) {
            let pattern;
            if ('string' === typeof v && propertyValue.patterns[v]) {
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
            } else if (propertyValue.patterns['*']) {
              pattern = propertyValue.patterns['*'];
            }

            if (pattern) {
              let tmp = styles;
              if (propertyValue.parent) {
                if (!styles[propertyValue.parent]) {
                  styles[propertyValue.parent] = {};
                }
                tmp = styles[propertyValue.parent];
              }
              if (index > 0 && breakpoints && breakpoints[index]) {
                if (!styles[`@media (min-width: ${breakpoints[index]})`]) {
                  tmp[`@media (min-width: ${breakpoints[index]})`] = {};
                }
                tmp[`@media (min-width: ${breakpoints[index]})`][
                  propertyValue.property
                ] = pattern.replace(regex, v);
              } else {
                tmp[propertyValue.property] = pattern.replace(regex, v);
              }
            }
          }
        });
      }
    }
  });

  console.info('styles', styles);

  return styles;
};
