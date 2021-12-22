import Storage from '@react-native-async-storage/async-storage';

export const getItem = async (key: string): Promise<object | null> => {
  try {
    const dataString = await Storage.getItem(key);
    if (dataString) {
      return JSON.parse(dataString);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setItem = async (key: string, value: object) => {
  try {
    await Storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeItem = async (key: string) => {
  await Storage.removeItem(key);
};
