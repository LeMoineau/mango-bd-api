import { SourceName } from "../../../shared/src/types/primitives/Identifiers";

export namespace DefaultValues {
  export const LIFETIME = 60 * 1000; // 1min
  export const LONG_CACHE_LIFETIME = 4 * 60 * 60 * 1000; //4h
  export const FORMATTED_NAME_REGEX = new RegExp(`[^a-zA-Z0-9\ ]+`, "g");
  export const DIG_IN_NAME_MIN_LENGTH = 3;
  export const SOURCE_NAMES: SourceName[] = [
    "mangaplus",
    "mangasaki",
    "sailmg",
  ];

  // RESPONSE PAGE
  export const PAGE_SIZE: number = 20;
  export const MAX_PAGE_SIZE: number = 50;
  export const MIN_PAGE_SIZE: number = 1;

  export const MIN_SEARCH_LENGTH: number = 5;
}
