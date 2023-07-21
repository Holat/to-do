import AsyncStorage from "@react-native-async-storage/async-storage";

const getRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex].toString();
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber.toString();
};

const formatTwoDigits = (number: number) => {
  return number < 10 ? "0" + number : number;
};

const getCurrentDateAndTime = () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = formatTwoDigits(currentDate.getMonth() + 1);
  const currentDay = formatTwoDigits(currentDate.getDate());
  const currentHours = formatTwoDigits(currentDate.getHours());
  const currentMinutes = formatTwoDigits(currentDate.getMinutes());

  const date = `${currentDay}/${currentMonth}/${currentYear}`;
  const time = `${currentHours}:${currentMinutes}`;

  return { date, time };
};

const getAllData = async () => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const allItems = await AsyncStorage.multiGet(allKeys);

    // Transform the array of arrays to an array of objects
    const allData = allItems.map(([key, value]) => {
      if (key !== null && value !== null) {
        return { key, data: JSON.parse(value) };
      } else return null;
    });

    return allData;
  } catch (error) {
    console.error("Error getting all data:", error);
    return [];
  }
};

export { getRandomLetter, getRandomNumber, getCurrentDateAndTime, getAllData };
