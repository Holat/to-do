import AsyncStorage from "@react-native-async-storage/async-storage";
import { listProp } from "../types/type";

const getRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex].toString();
};

/**
 *
 * @returns  a random number to be used for the key
 */
const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber.toString();
};

const formatTwoDigits = (number: number) => {
  return number < 10 ? "0" + number : number;
};
/**
 *
 * @returns return current date and time
 */
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

/**
 *
 * @param key its the key used to store the array of objects in asyncStorage eg "itemData" & "history"
 * @returns all the data item in the array
 * #Note : the "key" param is not the key for each item in the array
 * the key for each item is stored in "item.key"
 */
const fetchTaskItems = async (key: string) => {
  try {
    const existingData = await AsyncStorage.getItem(key);
    if (existingData) {
      return JSON.parse(existingData);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const getTaskItem = async (key: string, itemKey: string) => {
  try {
    const existingData = await AsyncStorage.getItem(key);
    if (existingData) {
      return JSON.parse(existingData);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const deleteItem = async (key: string, itemKey: string) => {
  try {
    const existingData = await AsyncStorage.getItem(key);
    let DataArray = existingData ? JSON.parse(existingData) : [];

    const updatedData = DataArray.filter(
      (item: listProp) => item.key !== itemKey
    );

    await AsyncStorage.setItem("itemData", JSON.stringify(updatedData));
  } catch (error) {
    console.log(error);
  }
};

const setHistory = async (item: listProp) => {
  try {
    const historyData = await AsyncStorage.getItem("history");
    const itemData = await AsyncStorage.getItem("itemData");

    let historyArray = historyData ? JSON.parse(historyData) : [];
    let itemArray = itemData ? JSON.parse(itemData) : [];

    const completedItem = itemArray.find(
      (item1: listProp) => item1.key === item.key
    );

    if (completedItem) {
      itemArray = itemArray.filter((item1: listProp) => item1.key !== item.key);
      historyArray.push(completedItem);

      await AsyncStorage.setItem("itemData", JSON.stringify(itemArray));
      await AsyncStorage.setItem("history", JSON.stringify(historyArray));

      return itemArray;
    }
  } catch (error) {
    console.log("somthing went wrong");
    return [];
  }
};

const historyDelete = async (item: listProp) => {
  try {
    const existingData = await AsyncStorage.getItem("itemData");
    let DataArray = existingData ? JSON.parse(existingData) : [];

    const updatedData = DataArray.filter(
      (item1: listProp) => item1.key !== item.key
    );
    await AsyncStorage.setItem("itemData", JSON.stringify(updatedData));
    return updatedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export {
  getRandomLetter,
  getRandomNumber,
  getCurrentDateAndTime,
  fetchTaskItems,
  deleteItem,
  getTaskItem,
  setHistory,
  historyDelete,
};
