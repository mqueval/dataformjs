export const mX = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['marginLeft', 'marginRight'],
};

export const mY = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['marginTop', 'marginBottom'],
};

export const pX = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['paddingLeft', 'paddingRight'],
};

export const pY = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['paddingTop', 'paddingBottom'],
};

export const sX = {
  parent: '& > :not([hidden]) ~ :not([hidden])',
  patterns: {
    '*': '{{value}}',
  },
  properties: 'marginLeft',
};

export const sY = {
  parent: '& > :not([hidden]) ~ :not([hidden])',
  patterns: {
    '*': '{{value}}',
  },
  properties: 'marginTop',
};
