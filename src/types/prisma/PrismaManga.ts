import { Source } from "../../config/prisma/generated/client";

export interface PrismaManga {
  id: string;
  endpoint: string;
  src: Source;
  url: string;
  title: string;
  image: string | null;
  author: string | null;
}
