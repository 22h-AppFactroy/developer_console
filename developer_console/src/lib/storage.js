import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_NAME = 'dec_storage';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_NAME);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // read error
    alert('Error occured : Init data load failed\n please re open app');
    return [];
  }
};

const setData = async (data, cb) => {
  AsyncStorage.setItem(STORAGE_NAME, JSON.stringify(data), cb);
};

const StorageController = {
  getData,
  setData,
};

export default StorageController;
