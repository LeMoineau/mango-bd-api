
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Manga
 * 
 */
export type Manga = $Result.DefaultSelection<Prisma.$MangaPayload>
/**
 * Model IntersiteChapter
 * 
 */
export type IntersiteChapter = $Result.DefaultSelection<Prisma.$IntersiteChapterPayload>
/**
 * Model IntersiteManga
 * 
 */
export type IntersiteManga = $Result.DefaultSelection<Prisma.$IntersiteMangaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chapters
 * const chapters = await prisma.chapter.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chapters
   * const chapters = await prisma.chapter.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs>;

  /**
   * `prisma.manga`: Exposes CRUD operations for the **Manga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manga
    * const manga = await prisma.manga.findMany()
    * ```
    */
  get manga(): Prisma.MangaDelegate<ExtArgs>;

  /**
   * `prisma.intersiteChapter`: Exposes CRUD operations for the **IntersiteChapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntersiteChapters
    * const intersiteChapters = await prisma.intersiteChapter.findMany()
    * ```
    */
  get intersiteChapter(): Prisma.IntersiteChapterDelegate<ExtArgs>;

  /**
   * `prisma.intersiteManga`: Exposes CRUD operations for the **IntersiteManga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntersiteMangas
    * const intersiteMangas = await prisma.intersiteManga.findMany()
    * ```
    */
  get intersiteManga(): Prisma.IntersiteMangaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Chapter: 'Chapter',
    Manga: 'Manga',
    IntersiteChapter: 'IntersiteChapter',
    IntersiteManga: 'IntersiteManga'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'chapter' | 'manga' | 'intersiteChapter' | 'intersiteManga'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>,
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Manga: {
        payload: Prisma.$MangaPayload<ExtArgs>
        fields: Prisma.MangaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          findFirst: {
            args: Prisma.MangaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          findMany: {
            args: Prisma.MangaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>[]
          }
          create: {
            args: Prisma.MangaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          createMany: {
            args: Prisma.MangaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MangaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          update: {
            args: Prisma.MangaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          deleteMany: {
            args: Prisma.MangaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MangaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MangaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          aggregate: {
            args: Prisma.MangaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManga>
          }
          groupBy: {
            args: Prisma.MangaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MangaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaCountArgs<ExtArgs>,
            result: $Utils.Optional<MangaCountAggregateOutputType> | number
          }
        }
      }
      IntersiteChapter: {
        payload: Prisma.$IntersiteChapterPayload<ExtArgs>
        fields: Prisma.IntersiteChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntersiteChapterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntersiteChapterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>
          }
          findFirst: {
            args: Prisma.IntersiteChapterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntersiteChapterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>
          }
          findMany: {
            args: Prisma.IntersiteChapterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>[]
          }
          create: {
            args: Prisma.IntersiteChapterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>
          }
          createMany: {
            args: Prisma.IntersiteChapterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IntersiteChapterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>
          }
          update: {
            args: Prisma.IntersiteChapterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>
          }
          deleteMany: {
            args: Prisma.IntersiteChapterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IntersiteChapterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IntersiteChapterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteChapterPayload>
          }
          aggregate: {
            args: Prisma.IntersiteChapterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIntersiteChapter>
          }
          groupBy: {
            args: Prisma.IntersiteChapterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IntersiteChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntersiteChapterCountArgs<ExtArgs>,
            result: $Utils.Optional<IntersiteChapterCountAggregateOutputType> | number
          }
        }
      }
      IntersiteManga: {
        payload: Prisma.$IntersiteMangaPayload<ExtArgs>
        fields: Prisma.IntersiteMangaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntersiteMangaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntersiteMangaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>
          }
          findFirst: {
            args: Prisma.IntersiteMangaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntersiteMangaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>
          }
          findMany: {
            args: Prisma.IntersiteMangaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>[]
          }
          create: {
            args: Prisma.IntersiteMangaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>
          }
          createMany: {
            args: Prisma.IntersiteMangaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IntersiteMangaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>
          }
          update: {
            args: Prisma.IntersiteMangaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>
          }
          deleteMany: {
            args: Prisma.IntersiteMangaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IntersiteMangaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IntersiteMangaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IntersiteMangaPayload>
          }
          aggregate: {
            args: Prisma.IntersiteMangaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIntersiteManga>
          }
          groupBy: {
            args: Prisma.IntersiteMangaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IntersiteMangaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntersiteMangaCountArgs<ExtArgs>,
            result: $Utils.Optional<IntersiteMangaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MangaCountOutputType
   */

  export type MangaCountOutputType = {
    chapters: number
  }

  export type MangaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | MangaCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes

  /**
   * MangaCountOutputType without action
   */
  export type MangaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCountOutputType
     */
    select?: MangaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MangaCountOutputType without action
   */
  export type MangaCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }



  /**
   * Count Type IntersiteChapterCountOutputType
   */

  export type IntersiteChapterCountOutputType = {
    chapters: number
  }

  export type IntersiteChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | IntersiteChapterCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes

  /**
   * IntersiteChapterCountOutputType without action
   */
  export type IntersiteChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapterCountOutputType
     */
    select?: IntersiteChapterCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IntersiteChapterCountOutputType without action
   */
  export type IntersiteChapterCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }



  /**
   * Count Type IntersiteMangaCountOutputType
   */

  export type IntersiteMangaCountOutputType = {
    mangas: number
    intersiteChapter: number
  }

  export type IntersiteMangaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | IntersiteMangaCountOutputTypeCountMangasArgs
    intersiteChapter?: boolean | IntersiteMangaCountOutputTypeCountIntersiteChapterArgs
  }

  // Custom InputTypes

  /**
   * IntersiteMangaCountOutputType without action
   */
  export type IntersiteMangaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteMangaCountOutputType
     */
    select?: IntersiteMangaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IntersiteMangaCountOutputType without action
   */
  export type IntersiteMangaCountOutputTypeCountMangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaWhereInput
  }


  /**
   * IntersiteMangaCountOutputType without action
   */
  export type IntersiteMangaCountOutputTypeCountIntersiteChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntersiteChapterWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    src: string | null
    endpoint: string | null
    url: string | null
    title: string | null
    number: string | null
    lang: string | null
    image: string | null
    releaseDate: Date | null
    mangaId: string | null
    intersiteChapterId: string | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    src: string | null
    endpoint: string | null
    url: string | null
    title: string | null
    number: string | null
    lang: string | null
    image: string | null
    releaseDate: Date | null
    mangaId: string | null
    intersiteChapterId: string | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    src: number
    endpoint: number
    url: number
    title: number
    number: number
    lang: number
    image: number
    releaseDate: number
    mangaId: number
    intersiteChapterId: number
    _all: number
  }


  export type ChapterMinAggregateInputType = {
    id?: true
    src?: true
    endpoint?: true
    url?: true
    title?: true
    number?: true
    lang?: true
    image?: true
    releaseDate?: true
    mangaId?: true
    intersiteChapterId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    src?: true
    endpoint?: true
    url?: true
    title?: true
    number?: true
    lang?: true
    image?: true
    releaseDate?: true
    mangaId?: true
    intersiteChapterId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    src?: true
    endpoint?: true
    url?: true
    title?: true
    number?: true
    lang?: true
    image?: true
    releaseDate?: true
    mangaId?: true
    intersiteChapterId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationAndSearchRelevanceInput | ChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang: string | null
    image: string | null
    releaseDate: Date | null
    mangaId: string
    intersiteChapterId: string | null
    _count: ChapterCountAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    endpoint?: boolean
    url?: boolean
    title?: boolean
    number?: boolean
    lang?: boolean
    image?: boolean
    releaseDate?: boolean
    mangaId?: boolean
    intersiteChapterId?: boolean
    manga?: boolean | Chapter$mangaArgs<ExtArgs>
    intersiteChapter?: boolean | Chapter$intersiteChapterArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    src?: boolean
    endpoint?: boolean
    url?: boolean
    title?: boolean
    number?: boolean
    lang?: boolean
    image?: boolean
    releaseDate?: boolean
    mangaId?: boolean
    intersiteChapterId?: boolean
  }

  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manga?: boolean | Chapter$mangaArgs<ExtArgs>
    intersiteChapter?: boolean | Chapter$intersiteChapterArgs<ExtArgs>
  }


  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      manga: Prisma.$MangaPayload<ExtArgs> | null
      intersiteChapter: Prisma.$IntersiteChapterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      src: string
      endpoint: string
      url: string
      title: string
      number: string
      lang: string | null
      image: string | null
      releaseDate: Date | null
      mangaId: string
      intersiteChapterId: string | null
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }


  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChapterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chapter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChapterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChapterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
    **/
    create<T extends ChapterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chapters.
     *     @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     *     @example
     *     // Create many Chapters
     *     const chapter = await prisma.chapter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChapterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
    **/
    delete<T extends ChapterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChapterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChapterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChapterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
    **/
    upsert<T extends ChapterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>
    ): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    manga<T extends Chapter$mangaArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$mangaArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    intersiteChapter<T extends Chapter$intersiteChapterArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$intersiteChapterArgs<ExtArgs>>): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Chapter model
   */ 
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly src: FieldRef<"Chapter", 'String'>
    readonly endpoint: FieldRef<"Chapter", 'String'>
    readonly url: FieldRef<"Chapter", 'String'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly number: FieldRef<"Chapter", 'String'>
    readonly lang: FieldRef<"Chapter", 'String'>
    readonly image: FieldRef<"Chapter", 'String'>
    readonly releaseDate: FieldRef<"Chapter", 'DateTime'>
    readonly mangaId: FieldRef<"Chapter", 'String'>
    readonly intersiteChapterId: FieldRef<"Chapter", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationAndSearchRelevanceInput | ChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }


  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationAndSearchRelevanceInput | ChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }


  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationAndSearchRelevanceInput | ChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }


  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }


  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
  }


  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }


  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
  }


  /**
   * Chapter.manga
   */
  export type Chapter$mangaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    where?: MangaWhereInput
  }


  /**
   * Chapter.intersiteChapter
   */
  export type Chapter$intersiteChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    where?: IntersiteChapterWhereInput
  }


  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
  }



  /**
   * Model Manga
   */

  export type AggregateManga = {
    _count: MangaCountAggregateOutputType | null
    _min: MangaMinAggregateOutputType | null
    _max: MangaMaxAggregateOutputType | null
  }

  export type MangaMinAggregateOutputType = {
    id: string | null
    src: string | null
    endpoint: string | null
    url: string | null
    title: string | null
    lang: string | null
    author: string | null
    image: string | null
    intersiteMangaId: string | null
  }

  export type MangaMaxAggregateOutputType = {
    id: string | null
    src: string | null
    endpoint: string | null
    url: string | null
    title: string | null
    lang: string | null
    author: string | null
    image: string | null
    intersiteMangaId: string | null
  }

  export type MangaCountAggregateOutputType = {
    id: number
    src: number
    endpoint: number
    url: number
    title: number
    lang: number
    author: number
    image: number
    intersiteMangaId: number
    _all: number
  }


  export type MangaMinAggregateInputType = {
    id?: true
    src?: true
    endpoint?: true
    url?: true
    title?: true
    lang?: true
    author?: true
    image?: true
    intersiteMangaId?: true
  }

  export type MangaMaxAggregateInputType = {
    id?: true
    src?: true
    endpoint?: true
    url?: true
    title?: true
    lang?: true
    author?: true
    image?: true
    intersiteMangaId?: true
  }

  export type MangaCountAggregateInputType = {
    id?: true
    src?: true
    endpoint?: true
    url?: true
    title?: true
    lang?: true
    author?: true
    image?: true
    intersiteMangaId?: true
    _all?: true
  }

  export type MangaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manga to aggregate.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationAndSearchRelevanceInput | MangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manga
    **/
    _count?: true | MangaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaMaxAggregateInputType
  }

  export type GetMangaAggregateType<T extends MangaAggregateArgs> = {
        [P in keyof T & keyof AggregateManga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManga[P]>
      : GetScalarType<T[P], AggregateManga[P]>
  }




  export type MangaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaWhereInput
    orderBy?: MangaOrderByWithAggregationInput | MangaOrderByWithAggregationInput[]
    by: MangaScalarFieldEnum[] | MangaScalarFieldEnum
    having?: MangaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaCountAggregateInputType | true
    _min?: MangaMinAggregateInputType
    _max?: MangaMaxAggregateInputType
  }

  export type MangaGroupByOutputType = {
    id: string
    src: string
    endpoint: string
    url: string
    title: string
    lang: string | null
    author: string | null
    image: string | null
    intersiteMangaId: string | null
    _count: MangaCountAggregateOutputType | null
    _min: MangaMinAggregateOutputType | null
    _max: MangaMaxAggregateOutputType | null
  }

  type GetMangaGroupByPayload<T extends MangaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaGroupByOutputType[P]>
            : GetScalarType<T[P], MangaGroupByOutputType[P]>
        }
      >
    >


  export type MangaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    endpoint?: boolean
    url?: boolean
    title?: boolean
    lang?: boolean
    author?: boolean
    image?: boolean
    intersiteMangaId?: boolean
    chapters?: boolean | Manga$chaptersArgs<ExtArgs>
    intersiteManga?: boolean | Manga$intersiteMangaArgs<ExtArgs>
    _count?: boolean | MangaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manga"]>

  export type MangaSelectScalar = {
    id?: boolean
    src?: boolean
    endpoint?: boolean
    url?: boolean
    title?: boolean
    lang?: boolean
    author?: boolean
    image?: boolean
    intersiteMangaId?: boolean
  }

  export type MangaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | Manga$chaptersArgs<ExtArgs>
    intersiteManga?: boolean | Manga$intersiteMangaArgs<ExtArgs>
    _count?: boolean | MangaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MangaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manga"
    objects: {
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      intersiteManga: Prisma.$IntersiteMangaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      src: string
      endpoint: string
      url: string
      title: string
      lang: string | null
      author: string | null
      image: string | null
      intersiteMangaId: string | null
    }, ExtArgs["result"]["manga"]>
    composites: {}
  }


  type MangaGetPayload<S extends boolean | null | undefined | MangaDefaultArgs> = $Result.GetResult<Prisma.$MangaPayload, S>

  type MangaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MangaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MangaCountAggregateInputType | true
    }

  export interface MangaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manga'], meta: { name: 'Manga' } }
    /**
     * Find zero or one Manga that matches the filter.
     * @param {MangaFindUniqueArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MangaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MangaFindUniqueArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Manga that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MangaFindUniqueOrThrowArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MangaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MangaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Manga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindFirstArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MangaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MangaFindFirstArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Manga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindFirstOrThrowArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MangaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MangaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Manga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manga
     * const manga = await prisma.manga.findMany()
     * 
     * // Get first 10 Manga
     * const manga = await prisma.manga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaWithIdOnly = await prisma.manga.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MangaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MangaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Manga.
     * @param {MangaCreateArgs} args - Arguments to create a Manga.
     * @example
     * // Create one Manga
     * const Manga = await prisma.manga.create({
     *   data: {
     *     // ... data to create a Manga
     *   }
     * })
     * 
    **/
    create<T extends MangaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MangaCreateArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Manga.
     *     @param {MangaCreateManyArgs} args - Arguments to create many Manga.
     *     @example
     *     // Create many Manga
     *     const manga = await prisma.manga.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MangaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MangaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manga.
     * @param {MangaDeleteArgs} args - Arguments to delete one Manga.
     * @example
     * // Delete one Manga
     * const Manga = await prisma.manga.delete({
     *   where: {
     *     // ... filter to delete one Manga
     *   }
     * })
     * 
    **/
    delete<T extends MangaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MangaDeleteArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Manga.
     * @param {MangaUpdateArgs} args - Arguments to update one Manga.
     * @example
     * // Update one Manga
     * const manga = await prisma.manga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MangaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MangaUpdateArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Manga.
     * @param {MangaDeleteManyArgs} args - Arguments to filter Manga to delete.
     * @example
     * // Delete a few Manga
     * const { count } = await prisma.manga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MangaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MangaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manga
     * const manga = await prisma.manga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MangaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MangaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manga.
     * @param {MangaUpsertArgs} args - Arguments to update or create a Manga.
     * @example
     * // Update or create a Manga
     * const manga = await prisma.manga.upsert({
     *   create: {
     *     // ... data to create a Manga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manga we want to update
     *   }
     * })
    **/
    upsert<T extends MangaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MangaUpsertArgs<ExtArgs>>
    ): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaCountArgs} args - Arguments to filter Manga to count.
     * @example
     * // Count the number of Manga
     * const count = await prisma.manga.count({
     *   where: {
     *     // ... the filter for the Manga we want to count
     *   }
     * })
    **/
    count<T extends MangaCountArgs>(
      args?: Subset<T, MangaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangaAggregateArgs>(args: Subset<T, MangaAggregateArgs>): Prisma.PrismaPromise<GetMangaAggregateType<T>>

    /**
     * Group by Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaGroupByArgs['orderBy'] }
        : { orderBy?: MangaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manga model
   */
  readonly fields: MangaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chapters<T extends Manga$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Manga$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findMany'> | Null>;

    intersiteManga<T extends Manga$intersiteMangaArgs<ExtArgs> = {}>(args?: Subset<T, Manga$intersiteMangaArgs<ExtArgs>>): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Manga model
   */ 
  interface MangaFieldRefs {
    readonly id: FieldRef<"Manga", 'String'>
    readonly src: FieldRef<"Manga", 'String'>
    readonly endpoint: FieldRef<"Manga", 'String'>
    readonly url: FieldRef<"Manga", 'String'>
    readonly title: FieldRef<"Manga", 'String'>
    readonly lang: FieldRef<"Manga", 'String'>
    readonly author: FieldRef<"Manga", 'String'>
    readonly image: FieldRef<"Manga", 'String'>
    readonly intersiteMangaId: FieldRef<"Manga", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Manga findUnique
   */
  export type MangaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where: MangaWhereUniqueInput
  }


  /**
   * Manga findUniqueOrThrow
   */
  export type MangaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where: MangaWhereUniqueInput
  }


  /**
   * Manga findFirst
   */
  export type MangaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationAndSearchRelevanceInput | MangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manga.
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manga.
     */
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }


  /**
   * Manga findFirstOrThrow
   */
  export type MangaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationAndSearchRelevanceInput | MangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manga.
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manga.
     */
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }


  /**
   * Manga findMany
   */
  export type MangaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationAndSearchRelevanceInput | MangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manga.
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }


  /**
   * Manga create
   */
  export type MangaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * The data needed to create a Manga.
     */
    data: XOR<MangaCreateInput, MangaUncheckedCreateInput>
  }


  /**
   * Manga createMany
   */
  export type MangaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manga.
     */
    data: MangaCreateManyInput | MangaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Manga update
   */
  export type MangaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * The data needed to update a Manga.
     */
    data: XOR<MangaUpdateInput, MangaUncheckedUpdateInput>
    /**
     * Choose, which Manga to update.
     */
    where: MangaWhereUniqueInput
  }


  /**
   * Manga updateMany
   */
  export type MangaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manga.
     */
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyInput>
    /**
     * Filter which Manga to update
     */
    where?: MangaWhereInput
  }


  /**
   * Manga upsert
   */
  export type MangaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * The filter to search for the Manga to update in case it exists.
     */
    where: MangaWhereUniqueInput
    /**
     * In case the Manga found by the `where` argument doesn't exist, create a new Manga with this data.
     */
    create: XOR<MangaCreateInput, MangaUncheckedCreateInput>
    /**
     * In case the Manga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaUpdateInput, MangaUncheckedUpdateInput>
  }


  /**
   * Manga delete
   */
  export type MangaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter which Manga to delete.
     */
    where: MangaWhereUniqueInput
  }


  /**
   * Manga deleteMany
   */
  export type MangaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manga to delete
     */
    where?: MangaWhereInput
  }


  /**
   * Manga.chapters
   */
  export type Manga$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationAndSearchRelevanceInput | ChapterOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }


  /**
   * Manga.intersiteManga
   */
  export type Manga$intersiteMangaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    where?: IntersiteMangaWhereInput
  }


  /**
   * Manga without action
   */
  export type MangaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
  }



  /**
   * Model IntersiteChapter
   */

  export type AggregateIntersiteChapter = {
    _count: IntersiteChapterCountAggregateOutputType | null
    _min: IntersiteChapterMinAggregateOutputType | null
    _max: IntersiteChapterMaxAggregateOutputType | null
  }

  export type IntersiteChapterMinAggregateOutputType = {
    id: string | null
    formattedName: string | null
    intersiteMangaId: string | null
  }

  export type IntersiteChapterMaxAggregateOutputType = {
    id: string | null
    formattedName: string | null
    intersiteMangaId: string | null
  }

  export type IntersiteChapterCountAggregateOutputType = {
    id: number
    formattedName: number
    intersiteMangaId: number
    _all: number
  }


  export type IntersiteChapterMinAggregateInputType = {
    id?: true
    formattedName?: true
    intersiteMangaId?: true
  }

  export type IntersiteChapterMaxAggregateInputType = {
    id?: true
    formattedName?: true
    intersiteMangaId?: true
  }

  export type IntersiteChapterCountAggregateInputType = {
    id?: true
    formattedName?: true
    intersiteMangaId?: true
    _all?: true
  }

  export type IntersiteChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntersiteChapter to aggregate.
     */
    where?: IntersiteChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteChapters to fetch.
     */
    orderBy?: IntersiteChapterOrderByWithRelationAndSearchRelevanceInput | IntersiteChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntersiteChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntersiteChapters
    **/
    _count?: true | IntersiteChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntersiteChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntersiteChapterMaxAggregateInputType
  }

  export type GetIntersiteChapterAggregateType<T extends IntersiteChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateIntersiteChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntersiteChapter[P]>
      : GetScalarType<T[P], AggregateIntersiteChapter[P]>
  }




  export type IntersiteChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntersiteChapterWhereInput
    orderBy?: IntersiteChapterOrderByWithAggregationInput | IntersiteChapterOrderByWithAggregationInput[]
    by: IntersiteChapterScalarFieldEnum[] | IntersiteChapterScalarFieldEnum
    having?: IntersiteChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntersiteChapterCountAggregateInputType | true
    _min?: IntersiteChapterMinAggregateInputType
    _max?: IntersiteChapterMaxAggregateInputType
  }

  export type IntersiteChapterGroupByOutputType = {
    id: string
    formattedName: string
    intersiteMangaId: string
    _count: IntersiteChapterCountAggregateOutputType | null
    _min: IntersiteChapterMinAggregateOutputType | null
    _max: IntersiteChapterMaxAggregateOutputType | null
  }

  type GetIntersiteChapterGroupByPayload<T extends IntersiteChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntersiteChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntersiteChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntersiteChapterGroupByOutputType[P]>
            : GetScalarType<T[P], IntersiteChapterGroupByOutputType[P]>
        }
      >
    >


  export type IntersiteChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formattedName?: boolean
    intersiteMangaId?: boolean
    intersiteManga?: boolean | IntersiteChapter$intersiteMangaArgs<ExtArgs>
    chapters?: boolean | IntersiteChapter$chaptersArgs<ExtArgs>
    _count?: boolean | IntersiteChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intersiteChapter"]>

  export type IntersiteChapterSelectScalar = {
    id?: boolean
    formattedName?: boolean
    intersiteMangaId?: boolean
  }

  export type IntersiteChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intersiteManga?: boolean | IntersiteChapter$intersiteMangaArgs<ExtArgs>
    chapters?: boolean | IntersiteChapter$chaptersArgs<ExtArgs>
    _count?: boolean | IntersiteChapterCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IntersiteChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntersiteChapter"
    objects: {
      intersiteManga: Prisma.$IntersiteMangaPayload<ExtArgs> | null
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formattedName: string
      intersiteMangaId: string
    }, ExtArgs["result"]["intersiteChapter"]>
    composites: {}
  }


  type IntersiteChapterGetPayload<S extends boolean | null | undefined | IntersiteChapterDefaultArgs> = $Result.GetResult<Prisma.$IntersiteChapterPayload, S>

  type IntersiteChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IntersiteChapterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IntersiteChapterCountAggregateInputType | true
    }

  export interface IntersiteChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntersiteChapter'], meta: { name: 'IntersiteChapter' } }
    /**
     * Find zero or one IntersiteChapter that matches the filter.
     * @param {IntersiteChapterFindUniqueArgs} args - Arguments to find a IntersiteChapter
     * @example
     * // Get one IntersiteChapter
     * const intersiteChapter = await prisma.intersiteChapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IntersiteChapterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteChapterFindUniqueArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IntersiteChapter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IntersiteChapterFindUniqueOrThrowArgs} args - Arguments to find a IntersiteChapter
     * @example
     * // Get one IntersiteChapter
     * const intersiteChapter = await prisma.intersiteChapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IntersiteChapterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteChapterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IntersiteChapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterFindFirstArgs} args - Arguments to find a IntersiteChapter
     * @example
     * // Get one IntersiteChapter
     * const intersiteChapter = await prisma.intersiteChapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IntersiteChapterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteChapterFindFirstArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IntersiteChapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterFindFirstOrThrowArgs} args - Arguments to find a IntersiteChapter
     * @example
     * // Get one IntersiteChapter
     * const intersiteChapter = await prisma.intersiteChapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IntersiteChapterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteChapterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IntersiteChapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntersiteChapters
     * const intersiteChapters = await prisma.intersiteChapter.findMany()
     * 
     * // Get first 10 IntersiteChapters
     * const intersiteChapters = await prisma.intersiteChapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intersiteChapterWithIdOnly = await prisma.intersiteChapter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IntersiteChapterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteChapterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IntersiteChapter.
     * @param {IntersiteChapterCreateArgs} args - Arguments to create a IntersiteChapter.
     * @example
     * // Create one IntersiteChapter
     * const IntersiteChapter = await prisma.intersiteChapter.create({
     *   data: {
     *     // ... data to create a IntersiteChapter
     *   }
     * })
     * 
    **/
    create<T extends IntersiteChapterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteChapterCreateArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IntersiteChapters.
     *     @param {IntersiteChapterCreateManyArgs} args - Arguments to create many IntersiteChapters.
     *     @example
     *     // Create many IntersiteChapters
     *     const intersiteChapter = await prisma.intersiteChapter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IntersiteChapterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteChapterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IntersiteChapter.
     * @param {IntersiteChapterDeleteArgs} args - Arguments to delete one IntersiteChapter.
     * @example
     * // Delete one IntersiteChapter
     * const IntersiteChapter = await prisma.intersiteChapter.delete({
     *   where: {
     *     // ... filter to delete one IntersiteChapter
     *   }
     * })
     * 
    **/
    delete<T extends IntersiteChapterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteChapterDeleteArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IntersiteChapter.
     * @param {IntersiteChapterUpdateArgs} args - Arguments to update one IntersiteChapter.
     * @example
     * // Update one IntersiteChapter
     * const intersiteChapter = await prisma.intersiteChapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IntersiteChapterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteChapterUpdateArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IntersiteChapters.
     * @param {IntersiteChapterDeleteManyArgs} args - Arguments to filter IntersiteChapters to delete.
     * @example
     * // Delete a few IntersiteChapters
     * const { count } = await prisma.intersiteChapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IntersiteChapterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteChapterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntersiteChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntersiteChapters
     * const intersiteChapter = await prisma.intersiteChapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IntersiteChapterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteChapterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IntersiteChapter.
     * @param {IntersiteChapterUpsertArgs} args - Arguments to update or create a IntersiteChapter.
     * @example
     * // Update or create a IntersiteChapter
     * const intersiteChapter = await prisma.intersiteChapter.upsert({
     *   create: {
     *     // ... data to create a IntersiteChapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntersiteChapter we want to update
     *   }
     * })
    **/
    upsert<T extends IntersiteChapterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteChapterUpsertArgs<ExtArgs>>
    ): Prisma__IntersiteChapterClient<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IntersiteChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterCountArgs} args - Arguments to filter IntersiteChapters to count.
     * @example
     * // Count the number of IntersiteChapters
     * const count = await prisma.intersiteChapter.count({
     *   where: {
     *     // ... the filter for the IntersiteChapters we want to count
     *   }
     * })
    **/
    count<T extends IntersiteChapterCountArgs>(
      args?: Subset<T, IntersiteChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntersiteChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntersiteChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntersiteChapterAggregateArgs>(args: Subset<T, IntersiteChapterAggregateArgs>): Prisma.PrismaPromise<GetIntersiteChapterAggregateType<T>>

    /**
     * Group by IntersiteChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntersiteChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntersiteChapterGroupByArgs['orderBy'] }
        : { orderBy?: IntersiteChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntersiteChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntersiteChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntersiteChapter model
   */
  readonly fields: IntersiteChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntersiteChapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntersiteChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    intersiteManga<T extends IntersiteChapter$intersiteMangaArgs<ExtArgs> = {}>(args?: Subset<T, IntersiteChapter$intersiteMangaArgs<ExtArgs>>): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    chapters<T extends IntersiteChapter$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, IntersiteChapter$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IntersiteChapter model
   */ 
  interface IntersiteChapterFieldRefs {
    readonly id: FieldRef<"IntersiteChapter", 'String'>
    readonly formattedName: FieldRef<"IntersiteChapter", 'String'>
    readonly intersiteMangaId: FieldRef<"IntersiteChapter", 'String'>
  }
    

  // Custom InputTypes

  /**
   * IntersiteChapter findUnique
   */
  export type IntersiteChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteChapter to fetch.
     */
    where: IntersiteChapterWhereUniqueInput
  }


  /**
   * IntersiteChapter findUniqueOrThrow
   */
  export type IntersiteChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteChapter to fetch.
     */
    where: IntersiteChapterWhereUniqueInput
  }


  /**
   * IntersiteChapter findFirst
   */
  export type IntersiteChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteChapter to fetch.
     */
    where?: IntersiteChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteChapters to fetch.
     */
    orderBy?: IntersiteChapterOrderByWithRelationAndSearchRelevanceInput | IntersiteChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntersiteChapters.
     */
    cursor?: IntersiteChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntersiteChapters.
     */
    distinct?: IntersiteChapterScalarFieldEnum | IntersiteChapterScalarFieldEnum[]
  }


  /**
   * IntersiteChapter findFirstOrThrow
   */
  export type IntersiteChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteChapter to fetch.
     */
    where?: IntersiteChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteChapters to fetch.
     */
    orderBy?: IntersiteChapterOrderByWithRelationAndSearchRelevanceInput | IntersiteChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntersiteChapters.
     */
    cursor?: IntersiteChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntersiteChapters.
     */
    distinct?: IntersiteChapterScalarFieldEnum | IntersiteChapterScalarFieldEnum[]
  }


  /**
   * IntersiteChapter findMany
   */
  export type IntersiteChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteChapters to fetch.
     */
    where?: IntersiteChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteChapters to fetch.
     */
    orderBy?: IntersiteChapterOrderByWithRelationAndSearchRelevanceInput | IntersiteChapterOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntersiteChapters.
     */
    cursor?: IntersiteChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteChapters.
     */
    skip?: number
    distinct?: IntersiteChapterScalarFieldEnum | IntersiteChapterScalarFieldEnum[]
  }


  /**
   * IntersiteChapter create
   */
  export type IntersiteChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a IntersiteChapter.
     */
    data: XOR<IntersiteChapterCreateInput, IntersiteChapterUncheckedCreateInput>
  }


  /**
   * IntersiteChapter createMany
   */
  export type IntersiteChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntersiteChapters.
     */
    data: IntersiteChapterCreateManyInput | IntersiteChapterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IntersiteChapter update
   */
  export type IntersiteChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a IntersiteChapter.
     */
    data: XOR<IntersiteChapterUpdateInput, IntersiteChapterUncheckedUpdateInput>
    /**
     * Choose, which IntersiteChapter to update.
     */
    where: IntersiteChapterWhereUniqueInput
  }


  /**
   * IntersiteChapter updateMany
   */
  export type IntersiteChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntersiteChapters.
     */
    data: XOR<IntersiteChapterUpdateManyMutationInput, IntersiteChapterUncheckedUpdateManyInput>
    /**
     * Filter which IntersiteChapters to update
     */
    where?: IntersiteChapterWhereInput
  }


  /**
   * IntersiteChapter upsert
   */
  export type IntersiteChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the IntersiteChapter to update in case it exists.
     */
    where: IntersiteChapterWhereUniqueInput
    /**
     * In case the IntersiteChapter found by the `where` argument doesn't exist, create a new IntersiteChapter with this data.
     */
    create: XOR<IntersiteChapterCreateInput, IntersiteChapterUncheckedCreateInput>
    /**
     * In case the IntersiteChapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntersiteChapterUpdateInput, IntersiteChapterUncheckedUpdateInput>
  }


  /**
   * IntersiteChapter delete
   */
  export type IntersiteChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    /**
     * Filter which IntersiteChapter to delete.
     */
    where: IntersiteChapterWhereUniqueInput
  }


  /**
   * IntersiteChapter deleteMany
   */
  export type IntersiteChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntersiteChapters to delete
     */
    where?: IntersiteChapterWhereInput
  }


  /**
   * IntersiteChapter.intersiteManga
   */
  export type IntersiteChapter$intersiteMangaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    where?: IntersiteMangaWhereInput
  }


  /**
   * IntersiteChapter.chapters
   */
  export type IntersiteChapter$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationAndSearchRelevanceInput | ChapterOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }


  /**
   * IntersiteChapter without action
   */
  export type IntersiteChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
  }



  /**
   * Model IntersiteManga
   */

  export type AggregateIntersiteManga = {
    _count: IntersiteMangaCountAggregateOutputType | null
    _min: IntersiteMangaMinAggregateOutputType | null
    _max: IntersiteMangaMaxAggregateOutputType | null
  }

  export type IntersiteMangaMinAggregateOutputType = {
    id: string | null
    formattedName: string | null
  }

  export type IntersiteMangaMaxAggregateOutputType = {
    id: string | null
    formattedName: string | null
  }

  export type IntersiteMangaCountAggregateOutputType = {
    id: number
    formattedName: number
    _all: number
  }


  export type IntersiteMangaMinAggregateInputType = {
    id?: true
    formattedName?: true
  }

  export type IntersiteMangaMaxAggregateInputType = {
    id?: true
    formattedName?: true
  }

  export type IntersiteMangaCountAggregateInputType = {
    id?: true
    formattedName?: true
    _all?: true
  }

  export type IntersiteMangaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntersiteManga to aggregate.
     */
    where?: IntersiteMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteMangas to fetch.
     */
    orderBy?: IntersiteMangaOrderByWithRelationAndSearchRelevanceInput | IntersiteMangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntersiteMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteMangas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntersiteMangas
    **/
    _count?: true | IntersiteMangaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntersiteMangaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntersiteMangaMaxAggregateInputType
  }

  export type GetIntersiteMangaAggregateType<T extends IntersiteMangaAggregateArgs> = {
        [P in keyof T & keyof AggregateIntersiteManga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntersiteManga[P]>
      : GetScalarType<T[P], AggregateIntersiteManga[P]>
  }




  export type IntersiteMangaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntersiteMangaWhereInput
    orderBy?: IntersiteMangaOrderByWithAggregationInput | IntersiteMangaOrderByWithAggregationInput[]
    by: IntersiteMangaScalarFieldEnum[] | IntersiteMangaScalarFieldEnum
    having?: IntersiteMangaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntersiteMangaCountAggregateInputType | true
    _min?: IntersiteMangaMinAggregateInputType
    _max?: IntersiteMangaMaxAggregateInputType
  }

  export type IntersiteMangaGroupByOutputType = {
    id: string
    formattedName: string
    _count: IntersiteMangaCountAggregateOutputType | null
    _min: IntersiteMangaMinAggregateOutputType | null
    _max: IntersiteMangaMaxAggregateOutputType | null
  }

  type GetIntersiteMangaGroupByPayload<T extends IntersiteMangaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntersiteMangaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntersiteMangaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntersiteMangaGroupByOutputType[P]>
            : GetScalarType<T[P], IntersiteMangaGroupByOutputType[P]>
        }
      >
    >


  export type IntersiteMangaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formattedName?: boolean
    mangas?: boolean | IntersiteManga$mangasArgs<ExtArgs>
    intersiteChapter?: boolean | IntersiteManga$intersiteChapterArgs<ExtArgs>
    _count?: boolean | IntersiteMangaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intersiteManga"]>

  export type IntersiteMangaSelectScalar = {
    id?: boolean
    formattedName?: boolean
  }

  export type IntersiteMangaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | IntersiteManga$mangasArgs<ExtArgs>
    intersiteChapter?: boolean | IntersiteManga$intersiteChapterArgs<ExtArgs>
    _count?: boolean | IntersiteMangaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IntersiteMangaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntersiteManga"
    objects: {
      mangas: Prisma.$MangaPayload<ExtArgs>[]
      intersiteChapter: Prisma.$IntersiteChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formattedName: string
    }, ExtArgs["result"]["intersiteManga"]>
    composites: {}
  }


  type IntersiteMangaGetPayload<S extends boolean | null | undefined | IntersiteMangaDefaultArgs> = $Result.GetResult<Prisma.$IntersiteMangaPayload, S>

  type IntersiteMangaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IntersiteMangaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IntersiteMangaCountAggregateInputType | true
    }

  export interface IntersiteMangaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntersiteManga'], meta: { name: 'IntersiteManga' } }
    /**
     * Find zero or one IntersiteManga that matches the filter.
     * @param {IntersiteMangaFindUniqueArgs} args - Arguments to find a IntersiteManga
     * @example
     * // Get one IntersiteManga
     * const intersiteManga = await prisma.intersiteManga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IntersiteMangaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteMangaFindUniqueArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IntersiteManga that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IntersiteMangaFindUniqueOrThrowArgs} args - Arguments to find a IntersiteManga
     * @example
     * // Get one IntersiteManga
     * const intersiteManga = await prisma.intersiteManga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IntersiteMangaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteMangaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IntersiteManga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaFindFirstArgs} args - Arguments to find a IntersiteManga
     * @example
     * // Get one IntersiteManga
     * const intersiteManga = await prisma.intersiteManga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IntersiteMangaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteMangaFindFirstArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IntersiteManga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaFindFirstOrThrowArgs} args - Arguments to find a IntersiteManga
     * @example
     * // Get one IntersiteManga
     * const intersiteManga = await prisma.intersiteManga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IntersiteMangaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteMangaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IntersiteMangas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntersiteMangas
     * const intersiteMangas = await prisma.intersiteManga.findMany()
     * 
     * // Get first 10 IntersiteMangas
     * const intersiteMangas = await prisma.intersiteManga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intersiteMangaWithIdOnly = await prisma.intersiteManga.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IntersiteMangaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteMangaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IntersiteManga.
     * @param {IntersiteMangaCreateArgs} args - Arguments to create a IntersiteManga.
     * @example
     * // Create one IntersiteManga
     * const IntersiteManga = await prisma.intersiteManga.create({
     *   data: {
     *     // ... data to create a IntersiteManga
     *   }
     * })
     * 
    **/
    create<T extends IntersiteMangaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteMangaCreateArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IntersiteMangas.
     *     @param {IntersiteMangaCreateManyArgs} args - Arguments to create many IntersiteMangas.
     *     @example
     *     // Create many IntersiteMangas
     *     const intersiteManga = await prisma.intersiteManga.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IntersiteMangaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteMangaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IntersiteManga.
     * @param {IntersiteMangaDeleteArgs} args - Arguments to delete one IntersiteManga.
     * @example
     * // Delete one IntersiteManga
     * const IntersiteManga = await prisma.intersiteManga.delete({
     *   where: {
     *     // ... filter to delete one IntersiteManga
     *   }
     * })
     * 
    **/
    delete<T extends IntersiteMangaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteMangaDeleteArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IntersiteManga.
     * @param {IntersiteMangaUpdateArgs} args - Arguments to update one IntersiteManga.
     * @example
     * // Update one IntersiteManga
     * const intersiteManga = await prisma.intersiteManga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IntersiteMangaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteMangaUpdateArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IntersiteMangas.
     * @param {IntersiteMangaDeleteManyArgs} args - Arguments to filter IntersiteMangas to delete.
     * @example
     * // Delete a few IntersiteMangas
     * const { count } = await prisma.intersiteManga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IntersiteMangaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IntersiteMangaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntersiteMangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntersiteMangas
     * const intersiteManga = await prisma.intersiteManga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IntersiteMangaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteMangaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IntersiteManga.
     * @param {IntersiteMangaUpsertArgs} args - Arguments to update or create a IntersiteManga.
     * @example
     * // Update or create a IntersiteManga
     * const intersiteManga = await prisma.intersiteManga.upsert({
     *   create: {
     *     // ... data to create a IntersiteManga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntersiteManga we want to update
     *   }
     * })
    **/
    upsert<T extends IntersiteMangaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IntersiteMangaUpsertArgs<ExtArgs>>
    ): Prisma__IntersiteMangaClient<$Result.GetResult<Prisma.$IntersiteMangaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IntersiteMangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaCountArgs} args - Arguments to filter IntersiteMangas to count.
     * @example
     * // Count the number of IntersiteMangas
     * const count = await prisma.intersiteManga.count({
     *   where: {
     *     // ... the filter for the IntersiteMangas we want to count
     *   }
     * })
    **/
    count<T extends IntersiteMangaCountArgs>(
      args?: Subset<T, IntersiteMangaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntersiteMangaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntersiteManga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntersiteMangaAggregateArgs>(args: Subset<T, IntersiteMangaAggregateArgs>): Prisma.PrismaPromise<GetIntersiteMangaAggregateType<T>>

    /**
     * Group by IntersiteManga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntersiteMangaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntersiteMangaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntersiteMangaGroupByArgs['orderBy'] }
        : { orderBy?: IntersiteMangaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntersiteMangaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntersiteMangaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntersiteManga model
   */
  readonly fields: IntersiteMangaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntersiteManga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntersiteMangaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mangas<T extends IntersiteManga$mangasArgs<ExtArgs> = {}>(args?: Subset<T, IntersiteManga$mangasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, 'findMany'> | Null>;

    intersiteChapter<T extends IntersiteManga$intersiteChapterArgs<ExtArgs> = {}>(args?: Subset<T, IntersiteManga$intersiteChapterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntersiteChapterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IntersiteManga model
   */ 
  interface IntersiteMangaFieldRefs {
    readonly id: FieldRef<"IntersiteManga", 'String'>
    readonly formattedName: FieldRef<"IntersiteManga", 'String'>
  }
    

  // Custom InputTypes

  /**
   * IntersiteManga findUnique
   */
  export type IntersiteMangaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteManga to fetch.
     */
    where: IntersiteMangaWhereUniqueInput
  }


  /**
   * IntersiteManga findUniqueOrThrow
   */
  export type IntersiteMangaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteManga to fetch.
     */
    where: IntersiteMangaWhereUniqueInput
  }


  /**
   * IntersiteManga findFirst
   */
  export type IntersiteMangaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteManga to fetch.
     */
    where?: IntersiteMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteMangas to fetch.
     */
    orderBy?: IntersiteMangaOrderByWithRelationAndSearchRelevanceInput | IntersiteMangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntersiteMangas.
     */
    cursor?: IntersiteMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteMangas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntersiteMangas.
     */
    distinct?: IntersiteMangaScalarFieldEnum | IntersiteMangaScalarFieldEnum[]
  }


  /**
   * IntersiteManga findFirstOrThrow
   */
  export type IntersiteMangaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteManga to fetch.
     */
    where?: IntersiteMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteMangas to fetch.
     */
    orderBy?: IntersiteMangaOrderByWithRelationAndSearchRelevanceInput | IntersiteMangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntersiteMangas.
     */
    cursor?: IntersiteMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteMangas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntersiteMangas.
     */
    distinct?: IntersiteMangaScalarFieldEnum | IntersiteMangaScalarFieldEnum[]
  }


  /**
   * IntersiteManga findMany
   */
  export type IntersiteMangaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * Filter, which IntersiteMangas to fetch.
     */
    where?: IntersiteMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntersiteMangas to fetch.
     */
    orderBy?: IntersiteMangaOrderByWithRelationAndSearchRelevanceInput | IntersiteMangaOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntersiteMangas.
     */
    cursor?: IntersiteMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntersiteMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntersiteMangas.
     */
    skip?: number
    distinct?: IntersiteMangaScalarFieldEnum | IntersiteMangaScalarFieldEnum[]
  }


  /**
   * IntersiteManga create
   */
  export type IntersiteMangaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * The data needed to create a IntersiteManga.
     */
    data: XOR<IntersiteMangaCreateInput, IntersiteMangaUncheckedCreateInput>
  }


  /**
   * IntersiteManga createMany
   */
  export type IntersiteMangaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntersiteMangas.
     */
    data: IntersiteMangaCreateManyInput | IntersiteMangaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IntersiteManga update
   */
  export type IntersiteMangaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * The data needed to update a IntersiteManga.
     */
    data: XOR<IntersiteMangaUpdateInput, IntersiteMangaUncheckedUpdateInput>
    /**
     * Choose, which IntersiteManga to update.
     */
    where: IntersiteMangaWhereUniqueInput
  }


  /**
   * IntersiteManga updateMany
   */
  export type IntersiteMangaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntersiteMangas.
     */
    data: XOR<IntersiteMangaUpdateManyMutationInput, IntersiteMangaUncheckedUpdateManyInput>
    /**
     * Filter which IntersiteMangas to update
     */
    where?: IntersiteMangaWhereInput
  }


  /**
   * IntersiteManga upsert
   */
  export type IntersiteMangaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * The filter to search for the IntersiteManga to update in case it exists.
     */
    where: IntersiteMangaWhereUniqueInput
    /**
     * In case the IntersiteManga found by the `where` argument doesn't exist, create a new IntersiteManga with this data.
     */
    create: XOR<IntersiteMangaCreateInput, IntersiteMangaUncheckedCreateInput>
    /**
     * In case the IntersiteManga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntersiteMangaUpdateInput, IntersiteMangaUncheckedUpdateInput>
  }


  /**
   * IntersiteManga delete
   */
  export type IntersiteMangaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
    /**
     * Filter which IntersiteManga to delete.
     */
    where: IntersiteMangaWhereUniqueInput
  }


  /**
   * IntersiteManga deleteMany
   */
  export type IntersiteMangaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntersiteMangas to delete
     */
    where?: IntersiteMangaWhereInput
  }


  /**
   * IntersiteManga.mangas
   */
  export type IntersiteManga$mangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MangaInclude<ExtArgs> | null
    where?: MangaWhereInput
    orderBy?: MangaOrderByWithRelationAndSearchRelevanceInput | MangaOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: MangaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }


  /**
   * IntersiteManga.intersiteChapter
   */
  export type IntersiteManga$intersiteChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteChapter
     */
    select?: IntersiteChapterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteChapterInclude<ExtArgs> | null
    where?: IntersiteChapterWhereInput
    orderBy?: IntersiteChapterOrderByWithRelationAndSearchRelevanceInput | IntersiteChapterOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: IntersiteChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntersiteChapterScalarFieldEnum | IntersiteChapterScalarFieldEnum[]
  }


  /**
   * IntersiteManga without action
   */
  export type IntersiteMangaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntersiteManga
     */
    select?: IntersiteMangaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IntersiteMangaInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    src: 'src',
    endpoint: 'endpoint',
    url: 'url',
    title: 'title',
    number: 'number',
    lang: 'lang',
    image: 'image',
    releaseDate: 'releaseDate',
    mangaId: 'mangaId',
    intersiteChapterId: 'intersiteChapterId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const MangaScalarFieldEnum: {
    id: 'id',
    src: 'src',
    endpoint: 'endpoint',
    url: 'url',
    title: 'title',
    lang: 'lang',
    author: 'author',
    image: 'image',
    intersiteMangaId: 'intersiteMangaId'
  };

  export type MangaScalarFieldEnum = (typeof MangaScalarFieldEnum)[keyof typeof MangaScalarFieldEnum]


  export const IntersiteChapterScalarFieldEnum: {
    id: 'id',
    formattedName: 'formattedName',
    intersiteMangaId: 'intersiteMangaId'
  };

  export type IntersiteChapterScalarFieldEnum = (typeof IntersiteChapterScalarFieldEnum)[keyof typeof IntersiteChapterScalarFieldEnum]


  export const IntersiteMangaScalarFieldEnum: {
    id: 'id',
    formattedName: 'formattedName'
  };

  export type IntersiteMangaScalarFieldEnum = (typeof IntersiteMangaScalarFieldEnum)[keyof typeof IntersiteMangaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ChapterOrderByRelevanceFieldEnum: {
    id: 'id',
    src: 'src',
    endpoint: 'endpoint',
    url: 'url',
    title: 'title',
    number: 'number',
    lang: 'lang',
    image: 'image',
    mangaId: 'mangaId',
    intersiteChapterId: 'intersiteChapterId'
  };

  export type ChapterOrderByRelevanceFieldEnum = (typeof ChapterOrderByRelevanceFieldEnum)[keyof typeof ChapterOrderByRelevanceFieldEnum]


  export const MangaOrderByRelevanceFieldEnum: {
    id: 'id',
    src: 'src',
    endpoint: 'endpoint',
    url: 'url',
    title: 'title',
    lang: 'lang',
    author: 'author',
    image: 'image',
    intersiteMangaId: 'intersiteMangaId'
  };

  export type MangaOrderByRelevanceFieldEnum = (typeof MangaOrderByRelevanceFieldEnum)[keyof typeof MangaOrderByRelevanceFieldEnum]


  export const IntersiteChapterOrderByRelevanceFieldEnum: {
    id: 'id',
    formattedName: 'formattedName',
    intersiteMangaId: 'intersiteMangaId'
  };

  export type IntersiteChapterOrderByRelevanceFieldEnum = (typeof IntersiteChapterOrderByRelevanceFieldEnum)[keyof typeof IntersiteChapterOrderByRelevanceFieldEnum]


  export const IntersiteMangaOrderByRelevanceFieldEnum: {
    id: 'id',
    formattedName: 'formattedName'
  };

  export type IntersiteMangaOrderByRelevanceFieldEnum = (typeof IntersiteMangaOrderByRelevanceFieldEnum)[keyof typeof IntersiteMangaOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    src?: StringFilter<"Chapter"> | string
    endpoint?: StringFilter<"Chapter"> | string
    url?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    number?: StringFilter<"Chapter"> | string
    lang?: StringNullableFilter<"Chapter"> | string | null
    image?: StringNullableFilter<"Chapter"> | string | null
    releaseDate?: DateTimeNullableFilter<"Chapter"> | Date | string | null
    mangaId?: StringFilter<"Chapter"> | string
    intersiteChapterId?: StringNullableFilter<"Chapter"> | string | null
    manga?: XOR<MangaNullableRelationFilter, MangaWhereInput> | null
    intersiteChapter?: XOR<IntersiteChapterNullableRelationFilter, IntersiteChapterWhereInput> | null
  }

  export type ChapterOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    number?: SortOrder
    lang?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    mangaId?: SortOrder
    intersiteChapterId?: SortOrderInput | SortOrder
    manga?: MangaOrderByWithRelationAndSearchRelevanceInput
    intersiteChapter?: IntersiteChapterOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ChapterOrderByRelevanceInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    src?: StringFilter<"Chapter"> | string
    endpoint?: StringFilter<"Chapter"> | string
    url?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    number?: StringFilter<"Chapter"> | string
    lang?: StringNullableFilter<"Chapter"> | string | null
    image?: StringNullableFilter<"Chapter"> | string | null
    releaseDate?: DateTimeNullableFilter<"Chapter"> | Date | string | null
    mangaId?: StringFilter<"Chapter"> | string
    intersiteChapterId?: StringNullableFilter<"Chapter"> | string | null
    manga?: XOR<MangaNullableRelationFilter, MangaWhereInput> | null
    intersiteChapter?: XOR<IntersiteChapterNullableRelationFilter, IntersiteChapterWhereInput> | null
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    number?: SortOrder
    lang?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    mangaId?: SortOrder
    intersiteChapterId?: SortOrderInput | SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    src?: StringWithAggregatesFilter<"Chapter"> | string
    endpoint?: StringWithAggregatesFilter<"Chapter"> | string
    url?: StringWithAggregatesFilter<"Chapter"> | string
    title?: StringWithAggregatesFilter<"Chapter"> | string
    number?: StringWithAggregatesFilter<"Chapter"> | string
    lang?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    image?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Chapter"> | Date | string | null
    mangaId?: StringWithAggregatesFilter<"Chapter"> | string
    intersiteChapterId?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
  }

  export type MangaWhereInput = {
    AND?: MangaWhereInput | MangaWhereInput[]
    OR?: MangaWhereInput[]
    NOT?: MangaWhereInput | MangaWhereInput[]
    id?: StringFilter<"Manga"> | string
    src?: StringFilter<"Manga"> | string
    endpoint?: StringFilter<"Manga"> | string
    url?: StringFilter<"Manga"> | string
    title?: StringFilter<"Manga"> | string
    lang?: StringNullableFilter<"Manga"> | string | null
    author?: StringNullableFilter<"Manga"> | string | null
    image?: StringNullableFilter<"Manga"> | string | null
    intersiteMangaId?: StringNullableFilter<"Manga"> | string | null
    chapters?: ChapterListRelationFilter
    intersiteManga?: XOR<IntersiteMangaNullableRelationFilter, IntersiteMangaWhereInput> | null
  }

  export type MangaOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lang?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    intersiteMangaId?: SortOrderInput | SortOrder
    chapters?: ChapterOrderByRelationAggregateInput
    intersiteManga?: IntersiteMangaOrderByWithRelationAndSearchRelevanceInput
    _relevance?: MangaOrderByRelevanceInput
  }

  export type MangaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpoint?: string
    AND?: MangaWhereInput | MangaWhereInput[]
    OR?: MangaWhereInput[]
    NOT?: MangaWhereInput | MangaWhereInput[]
    src?: StringFilter<"Manga"> | string
    url?: StringFilter<"Manga"> | string
    title?: StringFilter<"Manga"> | string
    lang?: StringNullableFilter<"Manga"> | string | null
    author?: StringNullableFilter<"Manga"> | string | null
    image?: StringNullableFilter<"Manga"> | string | null
    intersiteMangaId?: StringNullableFilter<"Manga"> | string | null
    chapters?: ChapterListRelationFilter
    intersiteManga?: XOR<IntersiteMangaNullableRelationFilter, IntersiteMangaWhereInput> | null
  }, "id" | "endpoint">

  export type MangaOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lang?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    intersiteMangaId?: SortOrderInput | SortOrder
    _count?: MangaCountOrderByAggregateInput
    _max?: MangaMaxOrderByAggregateInput
    _min?: MangaMinOrderByAggregateInput
  }

  export type MangaScalarWhereWithAggregatesInput = {
    AND?: MangaScalarWhereWithAggregatesInput | MangaScalarWhereWithAggregatesInput[]
    OR?: MangaScalarWhereWithAggregatesInput[]
    NOT?: MangaScalarWhereWithAggregatesInput | MangaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Manga"> | string
    src?: StringWithAggregatesFilter<"Manga"> | string
    endpoint?: StringWithAggregatesFilter<"Manga"> | string
    url?: StringWithAggregatesFilter<"Manga"> | string
    title?: StringWithAggregatesFilter<"Manga"> | string
    lang?: StringNullableWithAggregatesFilter<"Manga"> | string | null
    author?: StringNullableWithAggregatesFilter<"Manga"> | string | null
    image?: StringNullableWithAggregatesFilter<"Manga"> | string | null
    intersiteMangaId?: StringNullableWithAggregatesFilter<"Manga"> | string | null
  }

  export type IntersiteChapterWhereInput = {
    AND?: IntersiteChapterWhereInput | IntersiteChapterWhereInput[]
    OR?: IntersiteChapterWhereInput[]
    NOT?: IntersiteChapterWhereInput | IntersiteChapterWhereInput[]
    id?: StringFilter<"IntersiteChapter"> | string
    formattedName?: StringFilter<"IntersiteChapter"> | string
    intersiteMangaId?: StringFilter<"IntersiteChapter"> | string
    intersiteManga?: XOR<IntersiteMangaNullableRelationFilter, IntersiteMangaWhereInput> | null
    chapters?: ChapterListRelationFilter
  }

  export type IntersiteChapterOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    formattedName?: SortOrder
    intersiteMangaId?: SortOrder
    intersiteManga?: IntersiteMangaOrderByWithRelationAndSearchRelevanceInput
    chapters?: ChapterOrderByRelationAggregateInput
    _relevance?: IntersiteChapterOrderByRelevanceInput
  }

  export type IntersiteChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    formattedName?: string
    AND?: IntersiteChapterWhereInput | IntersiteChapterWhereInput[]
    OR?: IntersiteChapterWhereInput[]
    NOT?: IntersiteChapterWhereInput | IntersiteChapterWhereInput[]
    intersiteMangaId?: StringFilter<"IntersiteChapter"> | string
    intersiteManga?: XOR<IntersiteMangaNullableRelationFilter, IntersiteMangaWhereInput> | null
    chapters?: ChapterListRelationFilter
  }, "id" | "formattedName">

  export type IntersiteChapterOrderByWithAggregationInput = {
    id?: SortOrder
    formattedName?: SortOrder
    intersiteMangaId?: SortOrder
    _count?: IntersiteChapterCountOrderByAggregateInput
    _max?: IntersiteChapterMaxOrderByAggregateInput
    _min?: IntersiteChapterMinOrderByAggregateInput
  }

  export type IntersiteChapterScalarWhereWithAggregatesInput = {
    AND?: IntersiteChapterScalarWhereWithAggregatesInput | IntersiteChapterScalarWhereWithAggregatesInput[]
    OR?: IntersiteChapterScalarWhereWithAggregatesInput[]
    NOT?: IntersiteChapterScalarWhereWithAggregatesInput | IntersiteChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntersiteChapter"> | string
    formattedName?: StringWithAggregatesFilter<"IntersiteChapter"> | string
    intersiteMangaId?: StringWithAggregatesFilter<"IntersiteChapter"> | string
  }

  export type IntersiteMangaWhereInput = {
    AND?: IntersiteMangaWhereInput | IntersiteMangaWhereInput[]
    OR?: IntersiteMangaWhereInput[]
    NOT?: IntersiteMangaWhereInput | IntersiteMangaWhereInput[]
    id?: StringFilter<"IntersiteManga"> | string
    formattedName?: StringFilter<"IntersiteManga"> | string
    mangas?: MangaListRelationFilter
    intersiteChapter?: IntersiteChapterListRelationFilter
  }

  export type IntersiteMangaOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    formattedName?: SortOrder
    mangas?: MangaOrderByRelationAggregateInput
    intersiteChapter?: IntersiteChapterOrderByRelationAggregateInput
    _relevance?: IntersiteMangaOrderByRelevanceInput
  }

  export type IntersiteMangaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    formattedName?: string
    AND?: IntersiteMangaWhereInput | IntersiteMangaWhereInput[]
    OR?: IntersiteMangaWhereInput[]
    NOT?: IntersiteMangaWhereInput | IntersiteMangaWhereInput[]
    mangas?: MangaListRelationFilter
    intersiteChapter?: IntersiteChapterListRelationFilter
  }, "id" | "formattedName">

  export type IntersiteMangaOrderByWithAggregationInput = {
    id?: SortOrder
    formattedName?: SortOrder
    _count?: IntersiteMangaCountOrderByAggregateInput
    _max?: IntersiteMangaMaxOrderByAggregateInput
    _min?: IntersiteMangaMinOrderByAggregateInput
  }

  export type IntersiteMangaScalarWhereWithAggregatesInput = {
    AND?: IntersiteMangaScalarWhereWithAggregatesInput | IntersiteMangaScalarWhereWithAggregatesInput[]
    OR?: IntersiteMangaScalarWhereWithAggregatesInput[]
    NOT?: IntersiteMangaScalarWhereWithAggregatesInput | IntersiteMangaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntersiteManga"> | string
    formattedName?: StringWithAggregatesFilter<"IntersiteManga"> | string
  }

  export type ChapterCreateInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    manga?: MangaCreateNestedOneWithoutChaptersInput
    intersiteChapter?: IntersiteChapterCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    mangaId: string
    intersiteChapterId?: string | null
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manga?: MangaUpdateOneWithoutChaptersNestedInput
    intersiteChapter?: IntersiteChapterUpdateOneWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mangaId?: StringFieldUpdateOperationsInput | string
    intersiteChapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapterCreateManyInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    mangaId: string
    intersiteChapterId?: string | null
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mangaId?: StringFieldUpdateOperationsInput | string
    intersiteChapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MangaCreateInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    chapters?: ChapterCreateNestedManyWithoutMangaInput
    intersiteManga?: IntersiteMangaCreateNestedOneWithoutMangasInput
  }

  export type MangaUncheckedCreateInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    intersiteMangaId?: string | null
    chapters?: ChapterUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUpdateManyWithoutMangaNestedInput
    intersiteManga?: IntersiteMangaUpdateOneWithoutMangasNestedInput
  }

  export type MangaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    intersiteMangaId?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangaCreateManyInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    intersiteMangaId?: string | null
  }

  export type MangaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MangaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    intersiteMangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntersiteChapterCreateInput = {
    id?: string
    formattedName: string
    intersiteManga?: IntersiteMangaCreateNestedOneWithoutIntersiteChapterInput
    chapters?: ChapterCreateNestedManyWithoutIntersiteChapterInput
  }

  export type IntersiteChapterUncheckedCreateInput = {
    id?: string
    formattedName: string
    intersiteMangaId: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutIntersiteChapterInput
  }

  export type IntersiteChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteManga?: IntersiteMangaUpdateOneWithoutIntersiteChapterNestedInput
    chapters?: ChapterUpdateManyWithoutIntersiteChapterNestedInput
  }

  export type IntersiteChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteMangaId?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutIntersiteChapterNestedInput
  }

  export type IntersiteChapterCreateManyInput = {
    id?: string
    formattedName: string
    intersiteMangaId: string
  }

  export type IntersiteChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
  }

  export type IntersiteChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteMangaId?: StringFieldUpdateOperationsInput | string
  }

  export type IntersiteMangaCreateInput = {
    id?: string
    formattedName: string
    mangas?: MangaCreateNestedManyWithoutIntersiteMangaInput
    intersiteChapter?: IntersiteChapterCreateNestedManyWithoutIntersiteMangaInput
  }

  export type IntersiteMangaUncheckedCreateInput = {
    id?: string
    formattedName: string
    mangas?: MangaUncheckedCreateNestedManyWithoutIntersiteMangaInput
    intersiteChapter?: IntersiteChapterUncheckedCreateNestedManyWithoutIntersiteMangaInput
  }

  export type IntersiteMangaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    mangas?: MangaUpdateManyWithoutIntersiteMangaNestedInput
    intersiteChapter?: IntersiteChapterUpdateManyWithoutIntersiteMangaNestedInput
  }

  export type IntersiteMangaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    mangas?: MangaUncheckedUpdateManyWithoutIntersiteMangaNestedInput
    intersiteChapter?: IntersiteChapterUncheckedUpdateManyWithoutIntersiteMangaNestedInput
  }

  export type IntersiteMangaCreateManyInput = {
    id?: string
    formattedName: string
  }

  export type IntersiteMangaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
  }

  export type IntersiteMangaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MangaNullableRelationFilter = {
    is?: MangaWhereInput | null
    isNot?: MangaWhereInput | null
  }

  export type IntersiteChapterNullableRelationFilter = {
    is?: IntersiteChapterWhereInput | null
    isNot?: IntersiteChapterWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChapterOrderByRelevanceInput = {
    fields: ChapterOrderByRelevanceFieldEnum | ChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    number?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    mangaId?: SortOrder
    intersiteChapterId?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    number?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    mangaId?: SortOrder
    intersiteChapterId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    number?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    releaseDate?: SortOrder
    mangaId?: SortOrder
    intersiteChapterId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type IntersiteMangaNullableRelationFilter = {
    is?: IntersiteMangaWhereInput | null
    isNot?: IntersiteMangaWhereInput | null
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangaOrderByRelevanceInput = {
    fields: MangaOrderByRelevanceFieldEnum | MangaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MangaCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lang?: SortOrder
    author?: SortOrder
    image?: SortOrder
    intersiteMangaId?: SortOrder
  }

  export type MangaMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lang?: SortOrder
    author?: SortOrder
    image?: SortOrder
    intersiteMangaId?: SortOrder
  }

  export type MangaMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    endpoint?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lang?: SortOrder
    author?: SortOrder
    image?: SortOrder
    intersiteMangaId?: SortOrder
  }

  export type IntersiteChapterOrderByRelevanceInput = {
    fields: IntersiteChapterOrderByRelevanceFieldEnum | IntersiteChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IntersiteChapterCountOrderByAggregateInput = {
    id?: SortOrder
    formattedName?: SortOrder
    intersiteMangaId?: SortOrder
  }

  export type IntersiteChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    formattedName?: SortOrder
    intersiteMangaId?: SortOrder
  }

  export type IntersiteChapterMinOrderByAggregateInput = {
    id?: SortOrder
    formattedName?: SortOrder
    intersiteMangaId?: SortOrder
  }

  export type MangaListRelationFilter = {
    every?: MangaWhereInput
    some?: MangaWhereInput
    none?: MangaWhereInput
  }

  export type IntersiteChapterListRelationFilter = {
    every?: IntersiteChapterWhereInput
    some?: IntersiteChapterWhereInput
    none?: IntersiteChapterWhereInput
  }

  export type MangaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntersiteChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntersiteMangaOrderByRelevanceInput = {
    fields: IntersiteMangaOrderByRelevanceFieldEnum | IntersiteMangaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IntersiteMangaCountOrderByAggregateInput = {
    id?: SortOrder
    formattedName?: SortOrder
  }

  export type IntersiteMangaMaxOrderByAggregateInput = {
    id?: SortOrder
    formattedName?: SortOrder
  }

  export type IntersiteMangaMinOrderByAggregateInput = {
    id?: SortOrder
    formattedName?: SortOrder
  }

  export type MangaCreateNestedOneWithoutChaptersInput = {
    create?: XOR<MangaCreateWithoutChaptersInput, MangaUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: MangaCreateOrConnectWithoutChaptersInput
    connect?: MangaWhereUniqueInput
  }

  export type IntersiteChapterCreateNestedOneWithoutChaptersInput = {
    create?: XOR<IntersiteChapterCreateWithoutChaptersInput, IntersiteChapterUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: IntersiteChapterCreateOrConnectWithoutChaptersInput
    connect?: IntersiteChapterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MangaUpdateOneWithoutChaptersNestedInput = {
    create?: XOR<MangaCreateWithoutChaptersInput, MangaUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: MangaCreateOrConnectWithoutChaptersInput
    upsert?: MangaUpsertWithoutChaptersInput
    disconnect?: MangaWhereInput | boolean
    delete?: MangaWhereInput | boolean
    connect?: MangaWhereUniqueInput
    update?: XOR<XOR<MangaUpdateToOneWithWhereWithoutChaptersInput, MangaUpdateWithoutChaptersInput>, MangaUncheckedUpdateWithoutChaptersInput>
  }

  export type IntersiteChapterUpdateOneWithoutChaptersNestedInput = {
    create?: XOR<IntersiteChapterCreateWithoutChaptersInput, IntersiteChapterUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: IntersiteChapterCreateOrConnectWithoutChaptersInput
    upsert?: IntersiteChapterUpsertWithoutChaptersInput
    disconnect?: IntersiteChapterWhereInput | boolean
    delete?: IntersiteChapterWhereInput | boolean
    connect?: IntersiteChapterWhereUniqueInput
    update?: XOR<XOR<IntersiteChapterUpdateToOneWithWhereWithoutChaptersInput, IntersiteChapterUpdateWithoutChaptersInput>, IntersiteChapterUncheckedUpdateWithoutChaptersInput>
  }

  export type ChapterCreateNestedManyWithoutMangaInput = {
    create?: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput> | ChapterCreateWithoutMangaInput[] | ChapterUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutMangaInput | ChapterCreateOrConnectWithoutMangaInput[]
    createMany?: ChapterCreateManyMangaInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type IntersiteMangaCreateNestedOneWithoutMangasInput = {
    create?: XOR<IntersiteMangaCreateWithoutMangasInput, IntersiteMangaUncheckedCreateWithoutMangasInput>
    connectOrCreate?: IntersiteMangaCreateOrConnectWithoutMangasInput
    connect?: IntersiteMangaWhereUniqueInput
  }

  export type ChapterUncheckedCreateNestedManyWithoutMangaInput = {
    create?: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput> | ChapterCreateWithoutMangaInput[] | ChapterUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutMangaInput | ChapterCreateOrConnectWithoutMangaInput[]
    createMany?: ChapterCreateManyMangaInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUpdateManyWithoutMangaNestedInput = {
    create?: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput> | ChapterCreateWithoutMangaInput[] | ChapterUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutMangaInput | ChapterCreateOrConnectWithoutMangaInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutMangaInput | ChapterUpsertWithWhereUniqueWithoutMangaInput[]
    createMany?: ChapterCreateManyMangaInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutMangaInput | ChapterUpdateWithWhereUniqueWithoutMangaInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutMangaInput | ChapterUpdateManyWithWhereWithoutMangaInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type IntersiteMangaUpdateOneWithoutMangasNestedInput = {
    create?: XOR<IntersiteMangaCreateWithoutMangasInput, IntersiteMangaUncheckedCreateWithoutMangasInput>
    connectOrCreate?: IntersiteMangaCreateOrConnectWithoutMangasInput
    upsert?: IntersiteMangaUpsertWithoutMangasInput
    disconnect?: IntersiteMangaWhereInput | boolean
    delete?: IntersiteMangaWhereInput | boolean
    connect?: IntersiteMangaWhereUniqueInput
    update?: XOR<XOR<IntersiteMangaUpdateToOneWithWhereWithoutMangasInput, IntersiteMangaUpdateWithoutMangasInput>, IntersiteMangaUncheckedUpdateWithoutMangasInput>
  }

  export type ChapterUncheckedUpdateManyWithoutMangaNestedInput = {
    create?: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput> | ChapterCreateWithoutMangaInput[] | ChapterUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutMangaInput | ChapterCreateOrConnectWithoutMangaInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutMangaInput | ChapterUpsertWithWhereUniqueWithoutMangaInput[]
    createMany?: ChapterCreateManyMangaInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutMangaInput | ChapterUpdateWithWhereUniqueWithoutMangaInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutMangaInput | ChapterUpdateManyWithWhereWithoutMangaInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type IntersiteMangaCreateNestedOneWithoutIntersiteChapterInput = {
    create?: XOR<IntersiteMangaCreateWithoutIntersiteChapterInput, IntersiteMangaUncheckedCreateWithoutIntersiteChapterInput>
    connectOrCreate?: IntersiteMangaCreateOrConnectWithoutIntersiteChapterInput
    connect?: IntersiteMangaWhereUniqueInput
  }

  export type ChapterCreateNestedManyWithoutIntersiteChapterInput = {
    create?: XOR<ChapterCreateWithoutIntersiteChapterInput, ChapterUncheckedCreateWithoutIntersiteChapterInput> | ChapterCreateWithoutIntersiteChapterInput[] | ChapterUncheckedCreateWithoutIntersiteChapterInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutIntersiteChapterInput | ChapterCreateOrConnectWithoutIntersiteChapterInput[]
    createMany?: ChapterCreateManyIntersiteChapterInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutIntersiteChapterInput = {
    create?: XOR<ChapterCreateWithoutIntersiteChapterInput, ChapterUncheckedCreateWithoutIntersiteChapterInput> | ChapterCreateWithoutIntersiteChapterInput[] | ChapterUncheckedCreateWithoutIntersiteChapterInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutIntersiteChapterInput | ChapterCreateOrConnectWithoutIntersiteChapterInput[]
    createMany?: ChapterCreateManyIntersiteChapterInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type IntersiteMangaUpdateOneWithoutIntersiteChapterNestedInput = {
    create?: XOR<IntersiteMangaCreateWithoutIntersiteChapterInput, IntersiteMangaUncheckedCreateWithoutIntersiteChapterInput>
    connectOrCreate?: IntersiteMangaCreateOrConnectWithoutIntersiteChapterInput
    upsert?: IntersiteMangaUpsertWithoutIntersiteChapterInput
    disconnect?: IntersiteMangaWhereInput | boolean
    delete?: IntersiteMangaWhereInput | boolean
    connect?: IntersiteMangaWhereUniqueInput
    update?: XOR<XOR<IntersiteMangaUpdateToOneWithWhereWithoutIntersiteChapterInput, IntersiteMangaUpdateWithoutIntersiteChapterInput>, IntersiteMangaUncheckedUpdateWithoutIntersiteChapterInput>
  }

  export type ChapterUpdateManyWithoutIntersiteChapterNestedInput = {
    create?: XOR<ChapterCreateWithoutIntersiteChapterInput, ChapterUncheckedCreateWithoutIntersiteChapterInput> | ChapterCreateWithoutIntersiteChapterInput[] | ChapterUncheckedCreateWithoutIntersiteChapterInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutIntersiteChapterInput | ChapterCreateOrConnectWithoutIntersiteChapterInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutIntersiteChapterInput | ChapterUpsertWithWhereUniqueWithoutIntersiteChapterInput[]
    createMany?: ChapterCreateManyIntersiteChapterInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutIntersiteChapterInput | ChapterUpdateWithWhereUniqueWithoutIntersiteChapterInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutIntersiteChapterInput | ChapterUpdateManyWithWhereWithoutIntersiteChapterInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutIntersiteChapterNestedInput = {
    create?: XOR<ChapterCreateWithoutIntersiteChapterInput, ChapterUncheckedCreateWithoutIntersiteChapterInput> | ChapterCreateWithoutIntersiteChapterInput[] | ChapterUncheckedCreateWithoutIntersiteChapterInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutIntersiteChapterInput | ChapterCreateOrConnectWithoutIntersiteChapterInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutIntersiteChapterInput | ChapterUpsertWithWhereUniqueWithoutIntersiteChapterInput[]
    createMany?: ChapterCreateManyIntersiteChapterInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutIntersiteChapterInput | ChapterUpdateWithWhereUniqueWithoutIntersiteChapterInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutIntersiteChapterInput | ChapterUpdateManyWithWhereWithoutIntersiteChapterInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type MangaCreateNestedManyWithoutIntersiteMangaInput = {
    create?: XOR<MangaCreateWithoutIntersiteMangaInput, MangaUncheckedCreateWithoutIntersiteMangaInput> | MangaCreateWithoutIntersiteMangaInput[] | MangaUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutIntersiteMangaInput | MangaCreateOrConnectWithoutIntersiteMangaInput[]
    createMany?: MangaCreateManyIntersiteMangaInputEnvelope
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
  }

  export type IntersiteChapterCreateNestedManyWithoutIntersiteMangaInput = {
    create?: XOR<IntersiteChapterCreateWithoutIntersiteMangaInput, IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput> | IntersiteChapterCreateWithoutIntersiteMangaInput[] | IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput | IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput[]
    createMany?: IntersiteChapterCreateManyIntersiteMangaInputEnvelope
    connect?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
  }

  export type MangaUncheckedCreateNestedManyWithoutIntersiteMangaInput = {
    create?: XOR<MangaCreateWithoutIntersiteMangaInput, MangaUncheckedCreateWithoutIntersiteMangaInput> | MangaCreateWithoutIntersiteMangaInput[] | MangaUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutIntersiteMangaInput | MangaCreateOrConnectWithoutIntersiteMangaInput[]
    createMany?: MangaCreateManyIntersiteMangaInputEnvelope
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
  }

  export type IntersiteChapterUncheckedCreateNestedManyWithoutIntersiteMangaInput = {
    create?: XOR<IntersiteChapterCreateWithoutIntersiteMangaInput, IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput> | IntersiteChapterCreateWithoutIntersiteMangaInput[] | IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput | IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput[]
    createMany?: IntersiteChapterCreateManyIntersiteMangaInputEnvelope
    connect?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
  }

  export type MangaUpdateManyWithoutIntersiteMangaNestedInput = {
    create?: XOR<MangaCreateWithoutIntersiteMangaInput, MangaUncheckedCreateWithoutIntersiteMangaInput> | MangaCreateWithoutIntersiteMangaInput[] | MangaUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutIntersiteMangaInput | MangaCreateOrConnectWithoutIntersiteMangaInput[]
    upsert?: MangaUpsertWithWhereUniqueWithoutIntersiteMangaInput | MangaUpsertWithWhereUniqueWithoutIntersiteMangaInput[]
    createMany?: MangaCreateManyIntersiteMangaInputEnvelope
    set?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    disconnect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    delete?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    update?: MangaUpdateWithWhereUniqueWithoutIntersiteMangaInput | MangaUpdateWithWhereUniqueWithoutIntersiteMangaInput[]
    updateMany?: MangaUpdateManyWithWhereWithoutIntersiteMangaInput | MangaUpdateManyWithWhereWithoutIntersiteMangaInput[]
    deleteMany?: MangaScalarWhereInput | MangaScalarWhereInput[]
  }

  export type IntersiteChapterUpdateManyWithoutIntersiteMangaNestedInput = {
    create?: XOR<IntersiteChapterCreateWithoutIntersiteMangaInput, IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput> | IntersiteChapterCreateWithoutIntersiteMangaInput[] | IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput | IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput[]
    upsert?: IntersiteChapterUpsertWithWhereUniqueWithoutIntersiteMangaInput | IntersiteChapterUpsertWithWhereUniqueWithoutIntersiteMangaInput[]
    createMany?: IntersiteChapterCreateManyIntersiteMangaInputEnvelope
    set?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    disconnect?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    delete?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    connect?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    update?: IntersiteChapterUpdateWithWhereUniqueWithoutIntersiteMangaInput | IntersiteChapterUpdateWithWhereUniqueWithoutIntersiteMangaInput[]
    updateMany?: IntersiteChapterUpdateManyWithWhereWithoutIntersiteMangaInput | IntersiteChapterUpdateManyWithWhereWithoutIntersiteMangaInput[]
    deleteMany?: IntersiteChapterScalarWhereInput | IntersiteChapterScalarWhereInput[]
  }

  export type MangaUncheckedUpdateManyWithoutIntersiteMangaNestedInput = {
    create?: XOR<MangaCreateWithoutIntersiteMangaInput, MangaUncheckedCreateWithoutIntersiteMangaInput> | MangaCreateWithoutIntersiteMangaInput[] | MangaUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutIntersiteMangaInput | MangaCreateOrConnectWithoutIntersiteMangaInput[]
    upsert?: MangaUpsertWithWhereUniqueWithoutIntersiteMangaInput | MangaUpsertWithWhereUniqueWithoutIntersiteMangaInput[]
    createMany?: MangaCreateManyIntersiteMangaInputEnvelope
    set?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    disconnect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    delete?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    update?: MangaUpdateWithWhereUniqueWithoutIntersiteMangaInput | MangaUpdateWithWhereUniqueWithoutIntersiteMangaInput[]
    updateMany?: MangaUpdateManyWithWhereWithoutIntersiteMangaInput | MangaUpdateManyWithWhereWithoutIntersiteMangaInput[]
    deleteMany?: MangaScalarWhereInput | MangaScalarWhereInput[]
  }

  export type IntersiteChapterUncheckedUpdateManyWithoutIntersiteMangaNestedInput = {
    create?: XOR<IntersiteChapterCreateWithoutIntersiteMangaInput, IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput> | IntersiteChapterCreateWithoutIntersiteMangaInput[] | IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput[]
    connectOrCreate?: IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput | IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput[]
    upsert?: IntersiteChapterUpsertWithWhereUniqueWithoutIntersiteMangaInput | IntersiteChapterUpsertWithWhereUniqueWithoutIntersiteMangaInput[]
    createMany?: IntersiteChapterCreateManyIntersiteMangaInputEnvelope
    set?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    disconnect?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    delete?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    connect?: IntersiteChapterWhereUniqueInput | IntersiteChapterWhereUniqueInput[]
    update?: IntersiteChapterUpdateWithWhereUniqueWithoutIntersiteMangaInput | IntersiteChapterUpdateWithWhereUniqueWithoutIntersiteMangaInput[]
    updateMany?: IntersiteChapterUpdateManyWithWhereWithoutIntersiteMangaInput | IntersiteChapterUpdateManyWithWhereWithoutIntersiteMangaInput[]
    deleteMany?: IntersiteChapterScalarWhereInput | IntersiteChapterScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MangaCreateWithoutChaptersInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    intersiteManga?: IntersiteMangaCreateNestedOneWithoutMangasInput
  }

  export type MangaUncheckedCreateWithoutChaptersInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    intersiteMangaId?: string | null
  }

  export type MangaCreateOrConnectWithoutChaptersInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutChaptersInput, MangaUncheckedCreateWithoutChaptersInput>
  }

  export type IntersiteChapterCreateWithoutChaptersInput = {
    id?: string
    formattedName: string
    intersiteManga?: IntersiteMangaCreateNestedOneWithoutIntersiteChapterInput
  }

  export type IntersiteChapterUncheckedCreateWithoutChaptersInput = {
    id?: string
    formattedName: string
    intersiteMangaId: string
  }

  export type IntersiteChapterCreateOrConnectWithoutChaptersInput = {
    where: IntersiteChapterWhereUniqueInput
    create: XOR<IntersiteChapterCreateWithoutChaptersInput, IntersiteChapterUncheckedCreateWithoutChaptersInput>
  }

  export type MangaUpsertWithoutChaptersInput = {
    update: XOR<MangaUpdateWithoutChaptersInput, MangaUncheckedUpdateWithoutChaptersInput>
    create: XOR<MangaCreateWithoutChaptersInput, MangaUncheckedCreateWithoutChaptersInput>
    where?: MangaWhereInput
  }

  export type MangaUpdateToOneWithWhereWithoutChaptersInput = {
    where?: MangaWhereInput
    data: XOR<MangaUpdateWithoutChaptersInput, MangaUncheckedUpdateWithoutChaptersInput>
  }

  export type MangaUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    intersiteManga?: IntersiteMangaUpdateOneWithoutMangasNestedInput
  }

  export type MangaUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    intersiteMangaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntersiteChapterUpsertWithoutChaptersInput = {
    update: XOR<IntersiteChapterUpdateWithoutChaptersInput, IntersiteChapterUncheckedUpdateWithoutChaptersInput>
    create: XOR<IntersiteChapterCreateWithoutChaptersInput, IntersiteChapterUncheckedCreateWithoutChaptersInput>
    where?: IntersiteChapterWhereInput
  }

  export type IntersiteChapterUpdateToOneWithWhereWithoutChaptersInput = {
    where?: IntersiteChapterWhereInput
    data: XOR<IntersiteChapterUpdateWithoutChaptersInput, IntersiteChapterUncheckedUpdateWithoutChaptersInput>
  }

  export type IntersiteChapterUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteManga?: IntersiteMangaUpdateOneWithoutIntersiteChapterNestedInput
  }

  export type IntersiteChapterUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteMangaId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateWithoutMangaInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    intersiteChapter?: IntersiteChapterCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutMangaInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    intersiteChapterId?: string | null
  }

  export type ChapterCreateOrConnectWithoutMangaInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput>
  }

  export type ChapterCreateManyMangaInputEnvelope = {
    data: ChapterCreateManyMangaInput | ChapterCreateManyMangaInput[]
    skipDuplicates?: boolean
  }

  export type IntersiteMangaCreateWithoutMangasInput = {
    id?: string
    formattedName: string
    intersiteChapter?: IntersiteChapterCreateNestedManyWithoutIntersiteMangaInput
  }

  export type IntersiteMangaUncheckedCreateWithoutMangasInput = {
    id?: string
    formattedName: string
    intersiteChapter?: IntersiteChapterUncheckedCreateNestedManyWithoutIntersiteMangaInput
  }

  export type IntersiteMangaCreateOrConnectWithoutMangasInput = {
    where: IntersiteMangaWhereUniqueInput
    create: XOR<IntersiteMangaCreateWithoutMangasInput, IntersiteMangaUncheckedCreateWithoutMangasInput>
  }

  export type ChapterUpsertWithWhereUniqueWithoutMangaInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutMangaInput, ChapterUncheckedUpdateWithoutMangaInput>
    create: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutMangaInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutMangaInput, ChapterUncheckedUpdateWithoutMangaInput>
  }

  export type ChapterUpdateManyWithWhereWithoutMangaInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutMangaInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    src?: StringFilter<"Chapter"> | string
    endpoint?: StringFilter<"Chapter"> | string
    url?: StringFilter<"Chapter"> | string
    title?: StringFilter<"Chapter"> | string
    number?: StringFilter<"Chapter"> | string
    lang?: StringNullableFilter<"Chapter"> | string | null
    image?: StringNullableFilter<"Chapter"> | string | null
    releaseDate?: DateTimeNullableFilter<"Chapter"> | Date | string | null
    mangaId?: StringFilter<"Chapter"> | string
    intersiteChapterId?: StringNullableFilter<"Chapter"> | string | null
  }

  export type IntersiteMangaUpsertWithoutMangasInput = {
    update: XOR<IntersiteMangaUpdateWithoutMangasInput, IntersiteMangaUncheckedUpdateWithoutMangasInput>
    create: XOR<IntersiteMangaCreateWithoutMangasInput, IntersiteMangaUncheckedCreateWithoutMangasInput>
    where?: IntersiteMangaWhereInput
  }

  export type IntersiteMangaUpdateToOneWithWhereWithoutMangasInput = {
    where?: IntersiteMangaWhereInput
    data: XOR<IntersiteMangaUpdateWithoutMangasInput, IntersiteMangaUncheckedUpdateWithoutMangasInput>
  }

  export type IntersiteMangaUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteChapter?: IntersiteChapterUpdateManyWithoutIntersiteMangaNestedInput
  }

  export type IntersiteMangaUncheckedUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    intersiteChapter?: IntersiteChapterUncheckedUpdateManyWithoutIntersiteMangaNestedInput
  }

  export type IntersiteMangaCreateWithoutIntersiteChapterInput = {
    id?: string
    formattedName: string
    mangas?: MangaCreateNestedManyWithoutIntersiteMangaInput
  }

  export type IntersiteMangaUncheckedCreateWithoutIntersiteChapterInput = {
    id?: string
    formattedName: string
    mangas?: MangaUncheckedCreateNestedManyWithoutIntersiteMangaInput
  }

  export type IntersiteMangaCreateOrConnectWithoutIntersiteChapterInput = {
    where: IntersiteMangaWhereUniqueInput
    create: XOR<IntersiteMangaCreateWithoutIntersiteChapterInput, IntersiteMangaUncheckedCreateWithoutIntersiteChapterInput>
  }

  export type ChapterCreateWithoutIntersiteChapterInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    manga?: MangaCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutIntersiteChapterInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    mangaId: string
  }

  export type ChapterCreateOrConnectWithoutIntersiteChapterInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutIntersiteChapterInput, ChapterUncheckedCreateWithoutIntersiteChapterInput>
  }

  export type ChapterCreateManyIntersiteChapterInputEnvelope = {
    data: ChapterCreateManyIntersiteChapterInput | ChapterCreateManyIntersiteChapterInput[]
    skipDuplicates?: boolean
  }

  export type IntersiteMangaUpsertWithoutIntersiteChapterInput = {
    update: XOR<IntersiteMangaUpdateWithoutIntersiteChapterInput, IntersiteMangaUncheckedUpdateWithoutIntersiteChapterInput>
    create: XOR<IntersiteMangaCreateWithoutIntersiteChapterInput, IntersiteMangaUncheckedCreateWithoutIntersiteChapterInput>
    where?: IntersiteMangaWhereInput
  }

  export type IntersiteMangaUpdateToOneWithWhereWithoutIntersiteChapterInput = {
    where?: IntersiteMangaWhereInput
    data: XOR<IntersiteMangaUpdateWithoutIntersiteChapterInput, IntersiteMangaUncheckedUpdateWithoutIntersiteChapterInput>
  }

  export type IntersiteMangaUpdateWithoutIntersiteChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    mangas?: MangaUpdateManyWithoutIntersiteMangaNestedInput
  }

  export type IntersiteMangaUncheckedUpdateWithoutIntersiteChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    mangas?: MangaUncheckedUpdateManyWithoutIntersiteMangaNestedInput
  }

  export type ChapterUpsertWithWhereUniqueWithoutIntersiteChapterInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutIntersiteChapterInput, ChapterUncheckedUpdateWithoutIntersiteChapterInput>
    create: XOR<ChapterCreateWithoutIntersiteChapterInput, ChapterUncheckedCreateWithoutIntersiteChapterInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutIntersiteChapterInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutIntersiteChapterInput, ChapterUncheckedUpdateWithoutIntersiteChapterInput>
  }

  export type ChapterUpdateManyWithWhereWithoutIntersiteChapterInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutIntersiteChapterInput>
  }

  export type MangaCreateWithoutIntersiteMangaInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    chapters?: ChapterCreateNestedManyWithoutMangaInput
  }

  export type MangaUncheckedCreateWithoutIntersiteMangaInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
    chapters?: ChapterUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangaCreateOrConnectWithoutIntersiteMangaInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutIntersiteMangaInput, MangaUncheckedCreateWithoutIntersiteMangaInput>
  }

  export type MangaCreateManyIntersiteMangaInputEnvelope = {
    data: MangaCreateManyIntersiteMangaInput | MangaCreateManyIntersiteMangaInput[]
    skipDuplicates?: boolean
  }

  export type IntersiteChapterCreateWithoutIntersiteMangaInput = {
    id?: string
    formattedName: string
    chapters?: ChapterCreateNestedManyWithoutIntersiteChapterInput
  }

  export type IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput = {
    id?: string
    formattedName: string
    chapters?: ChapterUncheckedCreateNestedManyWithoutIntersiteChapterInput
  }

  export type IntersiteChapterCreateOrConnectWithoutIntersiteMangaInput = {
    where: IntersiteChapterWhereUniqueInput
    create: XOR<IntersiteChapterCreateWithoutIntersiteMangaInput, IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput>
  }

  export type IntersiteChapterCreateManyIntersiteMangaInputEnvelope = {
    data: IntersiteChapterCreateManyIntersiteMangaInput | IntersiteChapterCreateManyIntersiteMangaInput[]
    skipDuplicates?: boolean
  }

  export type MangaUpsertWithWhereUniqueWithoutIntersiteMangaInput = {
    where: MangaWhereUniqueInput
    update: XOR<MangaUpdateWithoutIntersiteMangaInput, MangaUncheckedUpdateWithoutIntersiteMangaInput>
    create: XOR<MangaCreateWithoutIntersiteMangaInput, MangaUncheckedCreateWithoutIntersiteMangaInput>
  }

  export type MangaUpdateWithWhereUniqueWithoutIntersiteMangaInput = {
    where: MangaWhereUniqueInput
    data: XOR<MangaUpdateWithoutIntersiteMangaInput, MangaUncheckedUpdateWithoutIntersiteMangaInput>
  }

  export type MangaUpdateManyWithWhereWithoutIntersiteMangaInput = {
    where: MangaScalarWhereInput
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyWithoutIntersiteMangaInput>
  }

  export type MangaScalarWhereInput = {
    AND?: MangaScalarWhereInput | MangaScalarWhereInput[]
    OR?: MangaScalarWhereInput[]
    NOT?: MangaScalarWhereInput | MangaScalarWhereInput[]
    id?: StringFilter<"Manga"> | string
    src?: StringFilter<"Manga"> | string
    endpoint?: StringFilter<"Manga"> | string
    url?: StringFilter<"Manga"> | string
    title?: StringFilter<"Manga"> | string
    lang?: StringNullableFilter<"Manga"> | string | null
    author?: StringNullableFilter<"Manga"> | string | null
    image?: StringNullableFilter<"Manga"> | string | null
    intersiteMangaId?: StringNullableFilter<"Manga"> | string | null
  }

  export type IntersiteChapterUpsertWithWhereUniqueWithoutIntersiteMangaInput = {
    where: IntersiteChapterWhereUniqueInput
    update: XOR<IntersiteChapterUpdateWithoutIntersiteMangaInput, IntersiteChapterUncheckedUpdateWithoutIntersiteMangaInput>
    create: XOR<IntersiteChapterCreateWithoutIntersiteMangaInput, IntersiteChapterUncheckedCreateWithoutIntersiteMangaInput>
  }

  export type IntersiteChapterUpdateWithWhereUniqueWithoutIntersiteMangaInput = {
    where: IntersiteChapterWhereUniqueInput
    data: XOR<IntersiteChapterUpdateWithoutIntersiteMangaInput, IntersiteChapterUncheckedUpdateWithoutIntersiteMangaInput>
  }

  export type IntersiteChapterUpdateManyWithWhereWithoutIntersiteMangaInput = {
    where: IntersiteChapterScalarWhereInput
    data: XOR<IntersiteChapterUpdateManyMutationInput, IntersiteChapterUncheckedUpdateManyWithoutIntersiteMangaInput>
  }

  export type IntersiteChapterScalarWhereInput = {
    AND?: IntersiteChapterScalarWhereInput | IntersiteChapterScalarWhereInput[]
    OR?: IntersiteChapterScalarWhereInput[]
    NOT?: IntersiteChapterScalarWhereInput | IntersiteChapterScalarWhereInput[]
    id?: StringFilter<"IntersiteChapter"> | string
    formattedName?: StringFilter<"IntersiteChapter"> | string
    intersiteMangaId?: StringFilter<"IntersiteChapter"> | string
  }

  export type ChapterCreateManyMangaInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    intersiteChapterId?: string | null
  }

  export type ChapterUpdateWithoutMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intersiteChapter?: IntersiteChapterUpdateOneWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intersiteChapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapterUncheckedUpdateManyWithoutMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intersiteChapterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChapterCreateManyIntersiteChapterInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    number: string
    lang?: string | null
    image?: string | null
    releaseDate?: Date | string | null
    mangaId: string
  }

  export type ChapterUpdateWithoutIntersiteChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manga?: MangaUpdateOneWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutIntersiteChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mangaId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterUncheckedUpdateManyWithoutIntersiteChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mangaId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaCreateManyIntersiteMangaInput = {
    id?: string
    src: string
    endpoint: string
    url: string
    title: string
    lang?: string | null
    author?: string | null
    image?: string | null
  }

  export type IntersiteChapterCreateManyIntersiteMangaInput = {
    id?: string
    formattedName: string
  }

  export type MangaUpdateWithoutIntersiteMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUpdateManyWithoutMangaNestedInput
  }

  export type MangaUncheckedUpdateWithoutIntersiteMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    chapters?: ChapterUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangaUncheckedUpdateManyWithoutIntersiteMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntersiteChapterUpdateWithoutIntersiteMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUpdateManyWithoutIntersiteChapterNestedInput
  }

  export type IntersiteChapterUncheckedUpdateWithoutIntersiteMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
    chapters?: ChapterUncheckedUpdateManyWithoutIntersiteChapterNestedInput
  }

  export type IntersiteChapterUncheckedUpdateManyWithoutIntersiteMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    formattedName?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MangaCountOutputTypeDefaultArgs instead
     */
    export type MangaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MangaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IntersiteChapterCountOutputTypeDefaultArgs instead
     */
    export type IntersiteChapterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IntersiteChapterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IntersiteMangaCountOutputTypeDefaultArgs instead
     */
    export type IntersiteMangaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IntersiteMangaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChapterDefaultArgs instead
     */
    export type ChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChapterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MangaDefaultArgs instead
     */
    export type MangaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MangaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IntersiteChapterDefaultArgs instead
     */
    export type IntersiteChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IntersiteChapterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IntersiteMangaDefaultArgs instead
     */
    export type IntersiteMangaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IntersiteMangaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}