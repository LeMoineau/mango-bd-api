import { DefaultValues } from "../config/default-values";

class AdditionalPropsService {
  private toMinLengthString(str?: string): string | undefined {
    return str && str.length < DefaultValues.MIN_SEARCH_LENGTH
      ? undefined
      : str;
  }

  public page(props: { pageNumber?: number; pageSize?: number }): {
    pageNumber: number;
    pageSize: number;
    skip: number;
    take: number;
  } {
    const pageSize = props.pageSize
      ? props.pageSize > DefaultValues.MAX_PAGE_SIZE
        ? DefaultValues.MAX_PAGE_SIZE
        : props.pageSize < DefaultValues.MIN_PAGE_SIZE
          ? DefaultValues.MIN_PAGE_SIZE
          : props.pageSize
      : DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber
      ? props.pageNumber <= 0
        ? 1
        : props.pageNumber
      : 1;
    return {
      pageSize,
      pageNumber,
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    };
  }

  public mangaQuery(props: { title?: string; author?: string }) {
    return {
      title: this.toMinLengthString(props.title),
      author: this.toMinLengthString(props.author),
    };
  }

  public chapterQuery(props: {
    title?: string;
    number?: string;
    mangaTitle?: string;
  }) {
    return {
      title: this.toMinLengthString(props.title),
      number: props.number,
      mangaTitle: this.toMinLengthString(props.mangaTitle),
    };
  }

  public intersiteMangasQuery(props: {
    mangaTitle?: string;
    mangaAuthor?: string;
  }) {
    return {
      mangaTitle: this.toMinLengthString(props.mangaTitle),
      mangaAuthor: this.toMinLengthString(props.mangaAuthor),
    };
  }

  public intersiteChaptersQuery(props: {
    chapterTitle?: string;
    chapterNumber?: string;
  }) {
    return {
      chapterTitle: this.toMinLengthString(props.chapterTitle),
      chapterNumber: props.chapterNumber,
    };
  }
}

export default new AdditionalPropsService();
