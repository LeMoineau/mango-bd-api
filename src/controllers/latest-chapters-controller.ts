import IntersiteChapter from "@shared/types/intersite/IntersiteChapter";
import { SourceName } from "@shared/types/primitives/id";
import { PrismaClient } from "./../config/prisma/generated/client";

class LatestChaptersController {
  // prisma = new PrismaClient();
  // public constructor() {}
  // public async get({
  //   srcs,
  // }: {
  //   srcs?: SourceName[];
  // }): Promise<IntersiteChapter[]> {
  //   const chaptersBySrc: { [src in SourceName]?: Chapter[] } = {};
  //   const chapters = this.prisma.chapter.findMany({
  //     where: {
  //       src: { in: srcs },
  //       OR: [{ releaseDate: { gte: new Date() } }, { releaseDate: null }],
  //     },
  //   });
  //   console.log(chapters);
  //   return [];
  // }
}

export default new LatestChaptersController();
