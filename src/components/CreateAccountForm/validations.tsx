export const validEmail = (email: string): boolean => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const validPassword = (password: string): boolean => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,40})/.test(password);
};

export const nameIsLongEnough = (name: string): boolean => {
  return name.length >= 6;
};
