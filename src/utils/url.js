const PROTOCOL_REGEXP = /^([a-z]+\:(\/\/)?)/i;

export const getURL = value => {
  if (!value) return '';

  if (getIsSrcDest(value)) return value; // don't modify it if it is a destination

  if (typeof value === 'string' && !value.match(PROTOCOL_REGEXP)) {
    return `http://${value}`;
  }

  return value;
};

export const getIsSrcDest = src => src[0] === '#';

export const setLink = node => {
  const { top, left, width, height } = node.getAbsoluteLayout();

  const instanceMethod = getIsSrcDest(node.src) ? 'goTo' : 'link';
  const nodeSrc = getIsSrcDest(node.src) ? node.src.slice(1) : node.src;

  node.root.instance[instanceMethod](left, top, width, height, nodeSrc);
};
