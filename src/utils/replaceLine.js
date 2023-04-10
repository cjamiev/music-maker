const SEPERATOR = '|';
const GLOBAL_MODIFIER = 'g';

const replaceLine = (line, mapper) => {
  const aggregateKeysRegex = Object.keys(mapper).join(SEPERATOR);

  if (!aggregateKeysRegex) {
    return line;
  }

  const regex = RegExp(aggregateKeysRegex, GLOBAL_MODIFIER);

  return line.replace(regex, matchedKey => mapper[matchedKey]);
};

export {
  replaceLine
};
