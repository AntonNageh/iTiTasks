import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistence = getReactNativePersistence(AsyncStorage);