import { Theme } from '@emotion/react';

import { color, size, space } from './correspondings';
import { alignContent, alignItems, alignSelf } from './properties/align';
import {
  flex,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
} from './properties/flex';
import {
  columnGap,
  gap,
  gridAutoFlow,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  gridTemplateColumns,
  gridTemplateRows,
  rowGap,
} from './properties/grid';
import {
  justifyContent,
  justifyItems,
  justifySelf,
} from './properties/justify';
import { mX, sX, sY } from './properties/space';

const columns = {
  patterns: {
    number: '{{value}}',
    string: '{{value}}',
  },
  properties: 'columns',
};

const order = {
  patterns: {
    first: '-9999',
    last: '9999',
    none: '0',
    number: '{{value}}',
  },
  properties: 'order',
};

export const propertyValues: {
  [prop: string]: {
    parent?: string;
    patterns: { [key: string]: string };
    properties: string | string[];
  };
} = {
  alignContent,
  alignItems,
  alignSelf,
  columnGap,
  columns,
  flex,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  gap,
  gridAutoFlow,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  gridTemplateColumns,
  gridTemplateRows,
  justifyItems,
  justifySelf,
  mX,
  order,
  rowGap,
  sX,
  sY,
  col: gridColumn,
  colEnd: gridColumnEnd,
  cols: gridTemplateColumns,
  colStart: gridColumnStart,
  content: alignContent,
  direction: flexDirection,
  flow: gridAutoFlow,
  g: gap,
  grow: flexGrow,
  gX: columnGap,
  gY: rowGap,
  items: alignItems,
  justify: justifyContent,
  row: gridRow,
  rowEnd: gridRowEnd,
  rows: gridTemplateRows,
  rowStart: gridRowStart,
  self: alignSelf,
  shrink: flexShrink,
  wrap: flexWrap,
};

const transformValue = (key: string, value: any, theme: Theme): string => {
  if (space[key] && undefined !== theme.spacing[value]) {
    return theme.spacing[value];
  }

  if (size[key] && undefined !== theme.sizes[value]) {
    return theme.sizes[value];
  }

  if (color[key] && undefined !== theme.colors[value]) {
    return theme.colors[value];
  }

  return String(value);
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
        const properties = Array.isArray(propertyValue.properties)
          ? propertyValue.properties
          : [propertyValue.properties];

        values?.forEach((v, index) => {
          if (undefined !== v) {
            let pattern: string | undefined;
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
            } else if (['inherit', 'initial', 'unset'].includes(v)) {
              pattern = v;
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
                properties.forEach(property => {
                  if (pattern) {
                    tmp[`@media (min-width: ${breakpoints[index]})`][property] =
                      pattern.replace(
                        regex,
                        transformValue(key, v, props.theme),
                      );
                  }
                });
              } else {
                properties.forEach(property => {
                  if (pattern) {
                    tmp[property] = pattern.replace(
                      regex,
                      transformValue(key, v, props.theme),
                    );
                  }
                });
              }
            }
          }
        });
      }
    }
  });

  return styles;
};
