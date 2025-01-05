import { authorize } from 'react-native-app-auth';

const authConfig = {
  issuer: 'http://localhost:8080/realms/betteru',
  clientId: 'betteru-mobile',
  redirectUrl: 'ai.betteru:/oauth2callback',
  scopes: ['openid', 'profile', 'email'],
};

export const loginWithKeycloak = async () => {
  try {
    const result = await authorize(authConfig);
    console.log('Auth result:', result);
    return result;
  } catch (error) {
    console.error('Auth error:', error);
    throw error;
  }
};