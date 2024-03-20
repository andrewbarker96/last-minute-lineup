import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lastminutelineup.app',
  appName: 'Last Minute Lineup',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
