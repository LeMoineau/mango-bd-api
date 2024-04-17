import {
  IntersiteManga,
  IntersiteMangaCore,
} from "../../../shared/src/types/IntersiteManga";
import { UUID } from "../../../shared/src/types/primitives/id";
import {
  isUUID,
  MangaFormattedName,
} from "../../../shared/src/types/primitives/Identifiers";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";

class IntersiteMangasController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async get(
    props: UUID | { formattedName: MangaFormattedName }
  ): Promise<IntersiteManga | undefined> {
    let where = {};
    if (isUUID(props)) {
      where = { id: props };
    } else {
      where = { formattedName: props.formattedName };
    }
    const intersiteManga = await this.prisma.intersiteManga.findFirst({
      where,
      include: {
        mangas: true,
      },
    });
    return intersiteManga === null
      ? undefined
      : PrismaConverterService.PrismaIntersiteMangaToIntersiteManga(
          intersiteManga,
          intersiteManga.mangas
        );
  }

  public async save(
    intersiteMangaCore: IntersiteMangaCore
  ): Promise<IntersiteManga> {
    const res = await this.prisma.intersiteManga.create({
      data: {
        ...intersiteMangaCore,
      },
    });
    return {
      ...res,
      mangas: [],
    };
  }
}

export default new IntersiteMangasController();
