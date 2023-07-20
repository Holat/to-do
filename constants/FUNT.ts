const getRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex].toString();
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber.toString();
};

export { getRandomLetter, getRandomNumber };
