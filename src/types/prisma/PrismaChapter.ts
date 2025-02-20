import { Identified } from "../../../../shared/src/types/attributes/Identified";

export interface PrismaChapter extends Identified {
  id: string;
  endpoint: string;
  src: string;
  url: string;
  number: string;
  title: string;
  image: string | null;
  releaseDate: Date | null;
}
