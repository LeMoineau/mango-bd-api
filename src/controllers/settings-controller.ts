import { ApiSettings } from "../../../shared/src/types/config/ApiSettings";
import { Lang } from "../../../shared/src/types/primitives/Identifiers";
import config from "../config/config";
import { DefaultValues } from "../config/default-values";
import { PrismaClient } from "../config/prisma/generated/client";

class SettingsController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async get(): Promise<ApiSettings> {
    return {
      scrapersEnabled: config.getEnabledSources(),
      languagesSupported: await this.getLanguagesSupported(),
    };
  }

  private async getLanguagesSupported(): Promise<Lang[]> {
    const langs = await this.prisma.chapter.groupBy({
      by: ["lang"],
      having: {
        NOT: {
          lang: null,
        },
      },
    });
    return langs.map((l) => l.lang ?? DefaultValues.CHAPTER_LANG);
  }
}

export default new SettingsController();
