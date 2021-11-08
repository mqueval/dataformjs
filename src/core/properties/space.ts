export const mX = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['margin-left', 'margin-right'],
};

export const mY = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['margin-top', 'margin-bottom'],
};

export const pX = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['padding-left', 'padding-right'],
};

export const pY = {
  patterns: {
    '*': '{{value}}',
  },
  properties: ['padding-top', 'padding-bottom'],
};

export const sX = {
  parent: '& > :not([hidden]) ~ :not([hidden])',
  patterns: {
    '*': '{{value}}',
  },
  properties: 'margin-left',
};

export const sY = {
  parent: '& > :not([hidden]) ~ :not([hidden])',
  patterns: {
    '*': '{{value}}',
  },
  properties: 'margin-top',
};
