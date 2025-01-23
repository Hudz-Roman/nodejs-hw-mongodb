const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;

  const isType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

const parseIsFavourite = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  if (value.toLocaleLowerCase() === 'true') return true;
  if (value.toLocaleLowerCase() === 'false') return false;

  return;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
