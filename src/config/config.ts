import { SourceName } from "@shared/types/primitives/id";
import axios from "axios";
import { Env } from "./../types/Env";
import { ArrayUtils } from "./../../../shared/src/utils/array-utils";

class Config {
  private enabledSources: SourceName[] = [];

  constructor() {
    axios
      .get(`${this.getEnv().MANGO_SCRAPING_API_URL}/settings`)
      .then((res) => {
        if (res.data && res.data.scrapersEnabled) {
          this.enabledSources = res.data.scrapersEnabled;
          console.log("source enabled loaded");
        }
      })
      .catch(() => {
        console.error("can't connect to mango scraping api");
      });
  }

  public getEnv(): Env {
    return {
      MANGO_SCRAPING_API_URL: process.env.MANGO_SCRAPING_API_URL!,
    };
  }

  public getEnabledSources(): SourceName[] {
    return this.enabledSources;
  }

  public isValidSrc(querySrc: string): boolean {
    return this.getEnabledSources().includes(querySrc as SourceName);
  }

  public areValidSrcs(querySrcs: string[]): boolean {
    return ArrayUtils.includesAll(this.getEnabledSources(), querySrcs);
  }
}

export default new Config();