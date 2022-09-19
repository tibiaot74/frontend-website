export const isEmpty = (s: string) => {
  return s === "";
};

export const isNotParseable = (s: string) => {
  return isNaN(parseInt(s));
};
