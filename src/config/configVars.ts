import axios from 'axios';
class Config {
  private config: Object = {};

  constructor() {
    this.set('CLOUD_CONFIG_URI', process.env.CLOUD_CONFIG_URI || 'http://cloud-config-uri.com/express-boiler-plate');
  }

  public async loadFromConfigServer(): Promise<void> {
    try {
      const configFromServer = (await axios.get(this.config['CLOUD_CONFIG_URI'])).data;
      this.set('APP_PORT', configFromServer.app.port || 3000);
    } catch (error) {
      new Error('An error ocurred while loading configuration from cloud config server');
    }
  }

  public loadFromEnvironment(): void {
    this.set('APP_PORT', process.env.APP_PORT || 3000);
  }

  private set(key: string, value: string | number): void {
    this.config[key] = value;
    Object.defineProperty(this, key, {
      get: () => {
        return this.config[key];
      },
      set: (value: any) => {}
    });
  }
}
export default new Config();
