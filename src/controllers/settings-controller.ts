import config from "../config/config";

class SettingsController {
  public get() {
    return {
      scrapersEnabled: config.getEnabledSources(),
    };
  }
}

export default new SettingsController();
