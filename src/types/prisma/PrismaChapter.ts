import { Identified } from "../../../../shared/src/types/attributes/Identified";
import { Source } from "../../config/prisma/generated/client";

export interface PrismaChapter extends Identified {
  id: string;
  endpoint: string;
  src: Source;
  url: string;
  number: string;
  title: string;
  image: string | null;
  releaseDate: Date | null;
}
