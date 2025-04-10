
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
 * Model ApiService
 * 
 */
export type ApiService = $Result.DefaultSelection<Prisma.$ApiServicePayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApiCategory: {
  FINANCE: 'FINANCE',
  WEATHER: 'WEATHER',
  SOCIAL: 'SOCIAL',
  MAPS: 'MAPS',
  ECOMMERCE: 'ECOMMERCE',
  OTHER: 'OTHER'
};

export type ApiCategory = (typeof ApiCategory)[keyof typeof ApiCategory]


export const KeyUsageType: {
  HEADERS: 'HEADERS',
  BODY: 'BODY',
  PARAMETERS: 'PARAMETERS'
};

export type KeyUsageType = (typeof KeyUsageType)[keyof typeof KeyUsageType]

}

export type ApiCategory = $Enums.ApiCategory

export const ApiCategory: typeof $Enums.ApiCategory

export type KeyUsageType = $Enums.KeyUsageType

export const KeyUsageType: typeof $Enums.KeyUsageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ApiServices
 * const apiServices = await prisma.apiService.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ApiServices
   * const apiServices = await prisma.apiService.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apiService`: Exposes CRUD operations for the **ApiService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiServices
    * const apiServices = await prisma.apiService.findMany()
    * ```
    */
  get apiService(): Prisma.ApiServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ApiService: 'ApiService',
    ApiKey: 'ApiKey',
    Subscription: 'Subscription',
    Transaction: 'Transaction',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apiService" | "apiKey" | "subscription" | "transaction" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApiService: {
        payload: Prisma.$ApiServicePayload<ExtArgs>
        fields: Prisma.ApiServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>
          }
          findFirst: {
            args: Prisma.ApiServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>
          }
          findMany: {
            args: Prisma.ApiServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>[]
          }
          create: {
            args: Prisma.ApiServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>
          }
          createMany: {
            args: Prisma.ApiServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>[]
          }
          delete: {
            args: Prisma.ApiServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>
          }
          update: {
            args: Prisma.ApiServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>
          }
          deleteMany: {
            args: Prisma.ApiServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>[]
          }
          upsert: {
            args: Prisma.ApiServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiServicePayload>
          }
          aggregate: {
            args: Prisma.ApiServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiService>
          }
          groupBy: {
            args: Prisma.ApiServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ApiServiceCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    apiService?: ApiServiceOmit
    apiKey?: ApiKeyOmit
    subscription?: SubscriptionOmit
    transaction?: TransactionOmit
    notification?: NotificationOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ApiServiceCountOutputType
   */

  export type ApiServiceCountOutputType = {
    apiKeys: number
    subscriptions: number
    transactions: number
  }

  export type ApiServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | ApiServiceCountOutputTypeCountApiKeysArgs
    subscriptions?: boolean | ApiServiceCountOutputTypeCountSubscriptionsArgs
    transactions?: boolean | ApiServiceCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ApiServiceCountOutputType without action
   */
  export type ApiServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiServiceCountOutputType
     */
    select?: ApiServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiServiceCountOutputType without action
   */
  export type ApiServiceCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * ApiServiceCountOutputType without action
   */
  export type ApiServiceCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * ApiServiceCountOutputType without action
   */
  export type ApiServiceCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    subscriptions: number
    transactions: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | ApiKeyCountOutputTypeCountSubscriptionsArgs
    transactions?: boolean | ApiKeyCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ApiService
   */

  export type AggregateApiService = {
    _count: ApiServiceCountAggregateOutputType | null
    _avg: ApiServiceAvgAggregateOutputType | null
    _sum: ApiServiceSumAggregateOutputType | null
    _min: ApiServiceMinAggregateOutputType | null
    _max: ApiServiceMaxAggregateOutputType | null
  }

  export type ApiServiceAvgAggregateOutputType = {
    subscriptionPerMonth: number | null
    subscriptionPerQuatre: number | null
    subscriptionPerHalfYear: number | null
    subscriptionPerYear: number | null
    rateLimit: number | null
  }

  export type ApiServiceSumAggregateOutputType = {
    subscriptionPerMonth: number | null
    subscriptionPerQuatre: number | null
    subscriptionPerHalfYear: number | null
    subscriptionPerYear: number | null
    rateLimit: number | null
  }

  export type ApiServiceMinAggregateOutputType = {
    id: string | null
    publisherId: string | null
    name: string | null
    description: string | null
    category: $Enums.ApiCategory | null
    baseUrl: string | null
    termsOfUse: string | null
    visibility: boolean | null
    isLive: boolean | null
    docs: string | null
    isPaid: boolean | null
    subscriptionPerMonth: number | null
    subscriptionPerQuatre: number | null
    subscriptionPerHalfYear: number | null
    subscriptionPerYear: number | null
    isSecured: boolean | null
    rateLimit: number | null
  }

  export type ApiServiceMaxAggregateOutputType = {
    id: string | null
    publisherId: string | null
    name: string | null
    description: string | null
    category: $Enums.ApiCategory | null
    baseUrl: string | null
    termsOfUse: string | null
    visibility: boolean | null
    isLive: boolean | null
    docs: string | null
    isPaid: boolean | null
    subscriptionPerMonth: number | null
    subscriptionPerQuatre: number | null
    subscriptionPerHalfYear: number | null
    subscriptionPerYear: number | null
    isSecured: boolean | null
    rateLimit: number | null
  }

  export type ApiServiceCountAggregateOutputType = {
    id: number
    publisherId: number
    name: number
    description: number
    category: number
    tags: number
    baseUrl: number
    availableRoute: number
    applicableFilter: number
    termsOfUse: number
    visibility: number
    isLive: number
    docs: number
    isPaid: number
    subscriptionPerMonth: number
    subscriptionPerQuatre: number
    subscriptionPerHalfYear: number
    subscriptionPerYear: number
    isSecured: number
    rateLimit: number
    _all: number
  }


  export type ApiServiceAvgAggregateInputType = {
    subscriptionPerMonth?: true
    subscriptionPerQuatre?: true
    subscriptionPerHalfYear?: true
    subscriptionPerYear?: true
    rateLimit?: true
  }

  export type ApiServiceSumAggregateInputType = {
    subscriptionPerMonth?: true
    subscriptionPerQuatre?: true
    subscriptionPerHalfYear?: true
    subscriptionPerYear?: true
    rateLimit?: true
  }

  export type ApiServiceMinAggregateInputType = {
    id?: true
    publisherId?: true
    name?: true
    description?: true
    category?: true
    baseUrl?: true
    termsOfUse?: true
    visibility?: true
    isLive?: true
    docs?: true
    isPaid?: true
    subscriptionPerMonth?: true
    subscriptionPerQuatre?: true
    subscriptionPerHalfYear?: true
    subscriptionPerYear?: true
    isSecured?: true
    rateLimit?: true
  }

  export type ApiServiceMaxAggregateInputType = {
    id?: true
    publisherId?: true
    name?: true
    description?: true
    category?: true
    baseUrl?: true
    termsOfUse?: true
    visibility?: true
    isLive?: true
    docs?: true
    isPaid?: true
    subscriptionPerMonth?: true
    subscriptionPerQuatre?: true
    subscriptionPerHalfYear?: true
    subscriptionPerYear?: true
    isSecured?: true
    rateLimit?: true
  }

  export type ApiServiceCountAggregateInputType = {
    id?: true
    publisherId?: true
    name?: true
    description?: true
    category?: true
    tags?: true
    baseUrl?: true
    availableRoute?: true
    applicableFilter?: true
    termsOfUse?: true
    visibility?: true
    isLive?: true
    docs?: true
    isPaid?: true
    subscriptionPerMonth?: true
    subscriptionPerQuatre?: true
    subscriptionPerHalfYear?: true
    subscriptionPerYear?: true
    isSecured?: true
    rateLimit?: true
    _all?: true
  }

  export type ApiServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiService to aggregate.
     */
    where?: ApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiServices to fetch.
     */
    orderBy?: ApiServiceOrderByWithRelationInput | ApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiServices
    **/
    _count?: true | ApiServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiServiceMaxAggregateInputType
  }

  export type GetApiServiceAggregateType<T extends ApiServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateApiService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiService[P]>
      : GetScalarType<T[P], AggregateApiService[P]>
  }




  export type ApiServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiServiceWhereInput
    orderBy?: ApiServiceOrderByWithAggregationInput | ApiServiceOrderByWithAggregationInput[]
    by: ApiServiceScalarFieldEnum[] | ApiServiceScalarFieldEnum
    having?: ApiServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiServiceCountAggregateInputType | true
    _avg?: ApiServiceAvgAggregateInputType
    _sum?: ApiServiceSumAggregateInputType
    _min?: ApiServiceMinAggregateInputType
    _max?: ApiServiceMaxAggregateInputType
  }

  export type ApiServiceGroupByOutputType = {
    id: string
    publisherId: string
    name: string
    description: string | null
    category: $Enums.ApiCategory
    tags: string[]
    baseUrl: string
    availableRoute: string[]
    applicableFilter: string[]
    termsOfUse: string | null
    visibility: boolean
    isLive: boolean
    docs: string | null
    isPaid: boolean
    subscriptionPerMonth: number | null
    subscriptionPerQuatre: number | null
    subscriptionPerHalfYear: number | null
    subscriptionPerYear: number | null
    isSecured: boolean
    rateLimit: number
    _count: ApiServiceCountAggregateOutputType | null
    _avg: ApiServiceAvgAggregateOutputType | null
    _sum: ApiServiceSumAggregateOutputType | null
    _min: ApiServiceMinAggregateOutputType | null
    _max: ApiServiceMaxAggregateOutputType | null
  }

  type GetApiServiceGroupByPayload<T extends ApiServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ApiServiceGroupByOutputType[P]>
        }
      >
    >


  export type ApiServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisherId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    tags?: boolean
    baseUrl?: boolean
    availableRoute?: boolean
    applicableFilter?: boolean
    termsOfUse?: boolean
    visibility?: boolean
    isLive?: boolean
    docs?: boolean
    isPaid?: boolean
    subscriptionPerMonth?: boolean
    subscriptionPerQuatre?: boolean
    subscriptionPerHalfYear?: boolean
    subscriptionPerYear?: boolean
    isSecured?: boolean
    rateLimit?: boolean
    apiKeys?: boolean | ApiService$apiKeysArgs<ExtArgs>
    subscriptions?: boolean | ApiService$subscriptionsArgs<ExtArgs>
    transactions?: boolean | ApiService$transactionsArgs<ExtArgs>
    _count?: boolean | ApiServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiService"]>

  export type ApiServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisherId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    tags?: boolean
    baseUrl?: boolean
    availableRoute?: boolean
    applicableFilter?: boolean
    termsOfUse?: boolean
    visibility?: boolean
    isLive?: boolean
    docs?: boolean
    isPaid?: boolean
    subscriptionPerMonth?: boolean
    subscriptionPerQuatre?: boolean
    subscriptionPerHalfYear?: boolean
    subscriptionPerYear?: boolean
    isSecured?: boolean
    rateLimit?: boolean
  }, ExtArgs["result"]["apiService"]>

  export type ApiServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisherId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    tags?: boolean
    baseUrl?: boolean
    availableRoute?: boolean
    applicableFilter?: boolean
    termsOfUse?: boolean
    visibility?: boolean
    isLive?: boolean
    docs?: boolean
    isPaid?: boolean
    subscriptionPerMonth?: boolean
    subscriptionPerQuatre?: boolean
    subscriptionPerHalfYear?: boolean
    subscriptionPerYear?: boolean
    isSecured?: boolean
    rateLimit?: boolean
  }, ExtArgs["result"]["apiService"]>

  export type ApiServiceSelectScalar = {
    id?: boolean
    publisherId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    tags?: boolean
    baseUrl?: boolean
    availableRoute?: boolean
    applicableFilter?: boolean
    termsOfUse?: boolean
    visibility?: boolean
    isLive?: boolean
    docs?: boolean
    isPaid?: boolean
    subscriptionPerMonth?: boolean
    subscriptionPerQuatre?: boolean
    subscriptionPerHalfYear?: boolean
    subscriptionPerYear?: boolean
    isSecured?: boolean
    rateLimit?: boolean
  }

  export type ApiServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publisherId" | "name" | "description" | "category" | "tags" | "baseUrl" | "availableRoute" | "applicableFilter" | "termsOfUse" | "visibility" | "isLive" | "docs" | "isPaid" | "subscriptionPerMonth" | "subscriptionPerQuatre" | "subscriptionPerHalfYear" | "subscriptionPerYear" | "isSecured" | "rateLimit", ExtArgs["result"]["apiService"]>
  export type ApiServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | ApiService$apiKeysArgs<ExtArgs>
    subscriptions?: boolean | ApiService$subscriptionsArgs<ExtArgs>
    transactions?: boolean | ApiService$transactionsArgs<ExtArgs>
    _count?: boolean | ApiServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApiServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApiServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiService"
    objects: {
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publisherId: string
      name: string
      description: string | null
      category: $Enums.ApiCategory
      tags: string[]
      baseUrl: string
      availableRoute: string[]
      applicableFilter: string[]
      termsOfUse: string | null
      visibility: boolean
      isLive: boolean
      docs: string | null
      isPaid: boolean
      subscriptionPerMonth: number | null
      subscriptionPerQuatre: number | null
      subscriptionPerHalfYear: number | null
      subscriptionPerYear: number | null
      isSecured: boolean
      rateLimit: number
    }, ExtArgs["result"]["apiService"]>
    composites: {}
  }

  type ApiServiceGetPayload<S extends boolean | null | undefined | ApiServiceDefaultArgs> = $Result.GetResult<Prisma.$ApiServicePayload, S>

  type ApiServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiServiceCountAggregateInputType | true
    }

  export interface ApiServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiService'], meta: { name: 'ApiService' } }
    /**
     * Find zero or one ApiService that matches the filter.
     * @param {ApiServiceFindUniqueArgs} args - Arguments to find a ApiService
     * @example
     * // Get one ApiService
     * const apiService = await prisma.apiService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiServiceFindUniqueArgs>(args: SelectSubset<T, ApiServiceFindUniqueArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiServiceFindUniqueOrThrowArgs} args - Arguments to find a ApiService
     * @example
     * // Get one ApiService
     * const apiService = await prisma.apiService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceFindFirstArgs} args - Arguments to find a ApiService
     * @example
     * // Get one ApiService
     * const apiService = await prisma.apiService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiServiceFindFirstArgs>(args?: SelectSubset<T, ApiServiceFindFirstArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceFindFirstOrThrowArgs} args - Arguments to find a ApiService
     * @example
     * // Get one ApiService
     * const apiService = await prisma.apiService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiServices
     * const apiServices = await prisma.apiService.findMany()
     * 
     * // Get first 10 ApiServices
     * const apiServices = await prisma.apiService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiServiceWithIdOnly = await prisma.apiService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiServiceFindManyArgs>(args?: SelectSubset<T, ApiServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiService.
     * @param {ApiServiceCreateArgs} args - Arguments to create a ApiService.
     * @example
     * // Create one ApiService
     * const ApiService = await prisma.apiService.create({
     *   data: {
     *     // ... data to create a ApiService
     *   }
     * })
     * 
     */
    create<T extends ApiServiceCreateArgs>(args: SelectSubset<T, ApiServiceCreateArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiServices.
     * @param {ApiServiceCreateManyArgs} args - Arguments to create many ApiServices.
     * @example
     * // Create many ApiServices
     * const apiService = await prisma.apiService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiServiceCreateManyArgs>(args?: SelectSubset<T, ApiServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiServices and returns the data saved in the database.
     * @param {ApiServiceCreateManyAndReturnArgs} args - Arguments to create many ApiServices.
     * @example
     * // Create many ApiServices
     * const apiService = await prisma.apiService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiServices and only return the `id`
     * const apiServiceWithIdOnly = await prisma.apiService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiService.
     * @param {ApiServiceDeleteArgs} args - Arguments to delete one ApiService.
     * @example
     * // Delete one ApiService
     * const ApiService = await prisma.apiService.delete({
     *   where: {
     *     // ... filter to delete one ApiService
     *   }
     * })
     * 
     */
    delete<T extends ApiServiceDeleteArgs>(args: SelectSubset<T, ApiServiceDeleteArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiService.
     * @param {ApiServiceUpdateArgs} args - Arguments to update one ApiService.
     * @example
     * // Update one ApiService
     * const apiService = await prisma.apiService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiServiceUpdateArgs>(args: SelectSubset<T, ApiServiceUpdateArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiServices.
     * @param {ApiServiceDeleteManyArgs} args - Arguments to filter ApiServices to delete.
     * @example
     * // Delete a few ApiServices
     * const { count } = await prisma.apiService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiServiceDeleteManyArgs>(args?: SelectSubset<T, ApiServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiServices
     * const apiService = await prisma.apiService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiServiceUpdateManyArgs>(args: SelectSubset<T, ApiServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiServices and returns the data updated in the database.
     * @param {ApiServiceUpdateManyAndReturnArgs} args - Arguments to update many ApiServices.
     * @example
     * // Update many ApiServices
     * const apiService = await prisma.apiService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiServices and only return the `id`
     * const apiServiceWithIdOnly = await prisma.apiService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiService.
     * @param {ApiServiceUpsertArgs} args - Arguments to update or create a ApiService.
     * @example
     * // Update or create a ApiService
     * const apiService = await prisma.apiService.upsert({
     *   create: {
     *     // ... data to create a ApiService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiService we want to update
     *   }
     * })
     */
    upsert<T extends ApiServiceUpsertArgs>(args: SelectSubset<T, ApiServiceUpsertArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceCountArgs} args - Arguments to filter ApiServices to count.
     * @example
     * // Count the number of ApiServices
     * const count = await prisma.apiService.count({
     *   where: {
     *     // ... the filter for the ApiServices we want to count
     *   }
     * })
    **/
    count<T extends ApiServiceCountArgs>(
      args?: Subset<T, ApiServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiServiceAggregateArgs>(args: Subset<T, ApiServiceAggregateArgs>): Prisma.PrismaPromise<GetApiServiceAggregateType<T>>

    /**
     * Group by ApiService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiServiceGroupByArgs} args - Group by arguments.
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
      T extends ApiServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiServiceGroupByArgs['orderBy'] }
        : { orderBy?: ApiServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiService model
   */
  readonly fields: ApiServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKeys<T extends ApiService$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, ApiService$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends ApiService$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiService$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends ApiService$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiService$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiService model
   */
  interface ApiServiceFieldRefs {
    readonly id: FieldRef<"ApiService", 'String'>
    readonly publisherId: FieldRef<"ApiService", 'String'>
    readonly name: FieldRef<"ApiService", 'String'>
    readonly description: FieldRef<"ApiService", 'String'>
    readonly category: FieldRef<"ApiService", 'ApiCategory'>
    readonly tags: FieldRef<"ApiService", 'String[]'>
    readonly baseUrl: FieldRef<"ApiService", 'String'>
    readonly availableRoute: FieldRef<"ApiService", 'String[]'>
    readonly applicableFilter: FieldRef<"ApiService", 'String[]'>
    readonly termsOfUse: FieldRef<"ApiService", 'String'>
    readonly visibility: FieldRef<"ApiService", 'Boolean'>
    readonly isLive: FieldRef<"ApiService", 'Boolean'>
    readonly docs: FieldRef<"ApiService", 'String'>
    readonly isPaid: FieldRef<"ApiService", 'Boolean'>
    readonly subscriptionPerMonth: FieldRef<"ApiService", 'Float'>
    readonly subscriptionPerQuatre: FieldRef<"ApiService", 'Float'>
    readonly subscriptionPerHalfYear: FieldRef<"ApiService", 'Float'>
    readonly subscriptionPerYear: FieldRef<"ApiService", 'Float'>
    readonly isSecured: FieldRef<"ApiService", 'Boolean'>
    readonly rateLimit: FieldRef<"ApiService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApiService findUnique
   */
  export type ApiServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which ApiService to fetch.
     */
    where: ApiServiceWhereUniqueInput
  }

  /**
   * ApiService findUniqueOrThrow
   */
  export type ApiServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which ApiService to fetch.
     */
    where: ApiServiceWhereUniqueInput
  }

  /**
   * ApiService findFirst
   */
  export type ApiServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which ApiService to fetch.
     */
    where?: ApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiServices to fetch.
     */
    orderBy?: ApiServiceOrderByWithRelationInput | ApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiServices.
     */
    cursor?: ApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiServices.
     */
    distinct?: ApiServiceScalarFieldEnum | ApiServiceScalarFieldEnum[]
  }

  /**
   * ApiService findFirstOrThrow
   */
  export type ApiServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which ApiService to fetch.
     */
    where?: ApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiServices to fetch.
     */
    orderBy?: ApiServiceOrderByWithRelationInput | ApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiServices.
     */
    cursor?: ApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiServices.
     */
    distinct?: ApiServiceScalarFieldEnum | ApiServiceScalarFieldEnum[]
  }

  /**
   * ApiService findMany
   */
  export type ApiServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * Filter, which ApiServices to fetch.
     */
    where?: ApiServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiServices to fetch.
     */
    orderBy?: ApiServiceOrderByWithRelationInput | ApiServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiServices.
     */
    cursor?: ApiServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiServices.
     */
    skip?: number
    distinct?: ApiServiceScalarFieldEnum | ApiServiceScalarFieldEnum[]
  }

  /**
   * ApiService create
   */
  export type ApiServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiService.
     */
    data: XOR<ApiServiceCreateInput, ApiServiceUncheckedCreateInput>
  }

  /**
   * ApiService createMany
   */
  export type ApiServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiServices.
     */
    data: ApiServiceCreateManyInput | ApiServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiService createManyAndReturn
   */
  export type ApiServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ApiServices.
     */
    data: ApiServiceCreateManyInput | ApiServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiService update
   */
  export type ApiServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiService.
     */
    data: XOR<ApiServiceUpdateInput, ApiServiceUncheckedUpdateInput>
    /**
     * Choose, which ApiService to update.
     */
    where: ApiServiceWhereUniqueInput
  }

  /**
   * ApiService updateMany
   */
  export type ApiServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiServices.
     */
    data: XOR<ApiServiceUpdateManyMutationInput, ApiServiceUncheckedUpdateManyInput>
    /**
     * Filter which ApiServices to update
     */
    where?: ApiServiceWhereInput
    /**
     * Limit how many ApiServices to update.
     */
    limit?: number
  }

  /**
   * ApiService updateManyAndReturn
   */
  export type ApiServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * The data used to update ApiServices.
     */
    data: XOR<ApiServiceUpdateManyMutationInput, ApiServiceUncheckedUpdateManyInput>
    /**
     * Filter which ApiServices to update
     */
    where?: ApiServiceWhereInput
    /**
     * Limit how many ApiServices to update.
     */
    limit?: number
  }

  /**
   * ApiService upsert
   */
  export type ApiServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiService to update in case it exists.
     */
    where: ApiServiceWhereUniqueInput
    /**
     * In case the ApiService found by the `where` argument doesn't exist, create a new ApiService with this data.
     */
    create: XOR<ApiServiceCreateInput, ApiServiceUncheckedCreateInput>
    /**
     * In case the ApiService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiServiceUpdateInput, ApiServiceUncheckedUpdateInput>
  }

  /**
   * ApiService delete
   */
  export type ApiServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
    /**
     * Filter which ApiService to delete.
     */
    where: ApiServiceWhereUniqueInput
  }

  /**
   * ApiService deleteMany
   */
  export type ApiServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiServices to delete
     */
    where?: ApiServiceWhereInput
    /**
     * Limit how many ApiServices to delete.
     */
    limit?: number
  }

  /**
   * ApiService.apiKeys
   */
  export type ApiService$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiService.subscriptions
   */
  export type ApiService$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * ApiService.transactions
   */
  export type ApiService$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * ApiService without action
   */
  export type ApiServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiService
     */
    select?: ApiServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiService
     */
    omit?: ApiServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiServiceInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    apiId: string | null
    userId: string | null
    whereToUse: $Enums.KeyUsageType | null
    apiKey: string | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    apiId: string | null
    userId: string | null
    whereToUse: $Enums.KeyUsageType | null
    apiKey: string | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    apiId: number
    userId: number
    whereToUse: number
    apiKey: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    apiId?: true
    userId?: true
    whereToUse?: true
    apiKey?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    apiId?: true
    userId?: true
    whereToUse?: true
    apiKey?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    apiId?: true
    userId?: true
    whereToUse?: true
    apiKey?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    apiId: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    userId?: boolean
    whereToUse?: boolean
    apiKey?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    subscriptions?: boolean | ApiKey$subscriptionsArgs<ExtArgs>
    transactions?: boolean | ApiKey$transactionsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    userId?: boolean
    whereToUse?: boolean
    apiKey?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    userId?: boolean
    whereToUse?: boolean
    apiKey?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    apiId?: boolean
    userId?: boolean
    whereToUse?: boolean
    apiKey?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiId" | "userId" | "whereToUse" | "apiKey", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    subscriptions?: boolean | ApiKey$subscriptionsArgs<ExtArgs>
    transactions?: boolean | ApiKey$transactionsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      api: Prisma.$ApiServicePayload<ExtArgs>
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiId: string
      userId: string
      whereToUse: $Enums.KeyUsageType
      apiKey: string
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends ApiServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiServiceDefaultArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends ApiKey$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends ApiKey$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly apiId: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly whereToUse: FieldRef<"ApiKey", 'KeyUsageType'>
    readonly apiKey: FieldRef<"ApiKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.subscriptions
   */
  export type ApiKey$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * ApiKey.transactions
   */
  export type ApiKey$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    apiId: string | null
    apiKeyId: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    apiId: string | null
    apiKeyId: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    apiId: number
    apiKeyId: number
    userId: number
    startDate: number
    endDate: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    apiId?: true
    apiKeyId?: true
    userId?: true
    startDate?: true
    endDate?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    apiId?: true
    apiKeyId?: true
    userId?: true
    startDate?: true
    endDate?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    apiId?: true
    apiKeyId?: true
    userId?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    apiId: string
    apiKeyId: string
    userId: string
    startDate: Date
    endDate: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiId" | "apiKeyId" | "userId" | "startDate" | "endDate", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      api: Prisma.$ApiServicePayload<ExtArgs>
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiId: string
      apiKeyId: string
      userId: string
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends ApiServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiServiceDefaultArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly apiId: FieldRef<"Subscription", 'String'>
    readonly apiKeyId: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    apiId: string | null
    apiKeyId: string | null
    userId: string | null
    date: Date | null
    amount: number | null
    transactionId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    apiId: string | null
    apiKeyId: string | null
    userId: string | null
    date: Date | null
    amount: number | null
    transactionId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    apiId: number
    apiKeyId: number
    userId: number
    date: number
    amount: number
    transactionId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    apiId?: true
    apiKeyId?: true
    userId?: true
    date?: true
    amount?: true
    transactionId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    apiId?: true
    apiKeyId?: true
    userId?: true
    date?: true
    amount?: true
    transactionId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    apiId?: true
    apiKeyId?: true
    userId?: true
    date?: true
    amount?: true
    transactionId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    apiId: string
    apiKeyId: string
    userId: string
    date: Date
    amount: number
    transactionId: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    date?: boolean
    amount?: boolean
    transactionId?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    date?: boolean
    amount?: boolean
    transactionId?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    date?: boolean
    amount?: boolean
    transactionId?: boolean
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    apiId?: boolean
    apiKeyId?: boolean
    userId?: boolean
    date?: boolean
    amount?: boolean
    transactionId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiId" | "apiKeyId" | "userId" | "date" | "amount" | "transactionId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiServiceDefaultArgs<ExtArgs>
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      api: Prisma.$ApiServicePayload<ExtArgs>
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiId: string
      apiKeyId: string
      userId: string
      date: Date
      amount: number
      transactionId: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends ApiServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiServiceDefaultArgs<ExtArgs>>): Prisma__ApiServiceClient<$Result.GetResult<Prisma.$ApiServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly apiId: FieldRef<"Transaction", 'String'>
    readonly apiKeyId: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly transactionId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    toUser: string | null
    fromUser: string | null
    url: string | null
    isOpened: boolean | null
    date: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    toUser: string | null
    fromUser: string | null
    url: string | null
    isOpened: boolean | null
    date: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    toUser: number
    fromUser: number
    url: number
    isOpened: number
    date: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    toUser?: true
    fromUser?: true
    url?: true
    isOpened?: true
    date?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    toUser?: true
    fromUser?: true
    url?: true
    isOpened?: true
    date?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    toUser?: true
    fromUser?: true
    url?: true
    isOpened?: true
    date?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    description: string
    toUser: string
    fromUser: string
    url: string
    isOpened: boolean
    date: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    toUser?: boolean
    fromUser?: boolean
    url?: boolean
    isOpened?: boolean
    date?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    toUser?: boolean
    fromUser?: boolean
    url?: boolean
    isOpened?: boolean
    date?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    toUser?: boolean
    fromUser?: boolean
    url?: boolean
    isOpened?: boolean
    date?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    toUser?: boolean
    fromUser?: boolean
    url?: boolean
    isOpened?: boolean
    date?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "toUser" | "fromUser" | "url" | "isOpened" | "date", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      toUser: string
      fromUser: string
      url: string
      isOpened: boolean
      date: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly description: FieldRef<"Notification", 'String'>
    readonly toUser: FieldRef<"Notification", 'String'>
    readonly fromUser: FieldRef<"Notification", 'String'>
    readonly url: FieldRef<"Notification", 'String'>
    readonly isOpened: FieldRef<"Notification", 'Boolean'>
    readonly date: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
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


  export const ApiServiceScalarFieldEnum: {
    id: 'id',
    publisherId: 'publisherId',
    name: 'name',
    description: 'description',
    category: 'category',
    tags: 'tags',
    baseUrl: 'baseUrl',
    availableRoute: 'availableRoute',
    applicableFilter: 'applicableFilter',
    termsOfUse: 'termsOfUse',
    visibility: 'visibility',
    isLive: 'isLive',
    docs: 'docs',
    isPaid: 'isPaid',
    subscriptionPerMonth: 'subscriptionPerMonth',
    subscriptionPerQuatre: 'subscriptionPerQuatre',
    subscriptionPerHalfYear: 'subscriptionPerHalfYear',
    subscriptionPerYear: 'subscriptionPerYear',
    isSecured: 'isSecured',
    rateLimit: 'rateLimit'
  };

  export type ApiServiceScalarFieldEnum = (typeof ApiServiceScalarFieldEnum)[keyof typeof ApiServiceScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    apiId: 'apiId',
    userId: 'userId',
    whereToUse: 'whereToUse',
    apiKey: 'apiKey'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    apiId: 'apiId',
    apiKeyId: 'apiKeyId',
    userId: 'userId',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    apiId: 'apiId',
    apiKeyId: 'apiKeyId',
    userId: 'userId',
    date: 'date',
    amount: 'amount',
    transactionId: 'transactionId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    toUser: 'toUser',
    fromUser: 'fromUser',
    url: 'url',
    isOpened: 'isOpened',
    date: 'date'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'ApiCategory'
   */
  export type EnumApiCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiCategory'>
    


  /**
   * Reference to a field of type 'ApiCategory[]'
   */
  export type ListEnumApiCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApiCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'KeyUsageType'
   */
  export type EnumKeyUsageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KeyUsageType'>
    


  /**
   * Reference to a field of type 'KeyUsageType[]'
   */
  export type ListEnumKeyUsageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KeyUsageType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ApiServiceWhereInput = {
    AND?: ApiServiceWhereInput | ApiServiceWhereInput[]
    OR?: ApiServiceWhereInput[]
    NOT?: ApiServiceWhereInput | ApiServiceWhereInput[]
    id?: StringFilter<"ApiService"> | string
    publisherId?: StringFilter<"ApiService"> | string
    name?: StringFilter<"ApiService"> | string
    description?: StringNullableFilter<"ApiService"> | string | null
    category?: EnumApiCategoryFilter<"ApiService"> | $Enums.ApiCategory
    tags?: StringNullableListFilter<"ApiService">
    baseUrl?: StringFilter<"ApiService"> | string
    availableRoute?: StringNullableListFilter<"ApiService">
    applicableFilter?: StringNullableListFilter<"ApiService">
    termsOfUse?: StringNullableFilter<"ApiService"> | string | null
    visibility?: BoolFilter<"ApiService"> | boolean
    isLive?: BoolFilter<"ApiService"> | boolean
    docs?: StringNullableFilter<"ApiService"> | string | null
    isPaid?: BoolFilter<"ApiService"> | boolean
    subscriptionPerMonth?: FloatNullableFilter<"ApiService"> | number | null
    subscriptionPerQuatre?: FloatNullableFilter<"ApiService"> | number | null
    subscriptionPerHalfYear?: FloatNullableFilter<"ApiService"> | number | null
    subscriptionPerYear?: FloatNullableFilter<"ApiService"> | number | null
    isSecured?: BoolFilter<"ApiService"> | boolean
    rateLimit?: IntFilter<"ApiService"> | number
    apiKeys?: ApiKeyListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type ApiServiceOrderByWithRelationInput = {
    id?: SortOrder
    publisherId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    baseUrl?: SortOrder
    availableRoute?: SortOrder
    applicableFilter?: SortOrder
    termsOfUse?: SortOrderInput | SortOrder
    visibility?: SortOrder
    isLive?: SortOrder
    docs?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    subscriptionPerMonth?: SortOrderInput | SortOrder
    subscriptionPerQuatre?: SortOrderInput | SortOrder
    subscriptionPerHalfYear?: SortOrderInput | SortOrder
    subscriptionPerYear?: SortOrderInput | SortOrder
    isSecured?: SortOrder
    rateLimit?: SortOrder
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ApiServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiServiceWhereInput | ApiServiceWhereInput[]
    OR?: ApiServiceWhereInput[]
    NOT?: ApiServiceWhereInput | ApiServiceWhereInput[]
    publisherId?: StringFilter<"ApiService"> | string
    name?: StringFilter<"ApiService"> | string
    description?: StringNullableFilter<"ApiService"> | string | null
    category?: EnumApiCategoryFilter<"ApiService"> | $Enums.ApiCategory
    tags?: StringNullableListFilter<"ApiService">
    baseUrl?: StringFilter<"ApiService"> | string
    availableRoute?: StringNullableListFilter<"ApiService">
    applicableFilter?: StringNullableListFilter<"ApiService">
    termsOfUse?: StringNullableFilter<"ApiService"> | string | null
    visibility?: BoolFilter<"ApiService"> | boolean
    isLive?: BoolFilter<"ApiService"> | boolean
    docs?: StringNullableFilter<"ApiService"> | string | null
    isPaid?: BoolFilter<"ApiService"> | boolean
    subscriptionPerMonth?: FloatNullableFilter<"ApiService"> | number | null
    subscriptionPerQuatre?: FloatNullableFilter<"ApiService"> | number | null
    subscriptionPerHalfYear?: FloatNullableFilter<"ApiService"> | number | null
    subscriptionPerYear?: FloatNullableFilter<"ApiService"> | number | null
    isSecured?: BoolFilter<"ApiService"> | boolean
    rateLimit?: IntFilter<"ApiService"> | number
    apiKeys?: ApiKeyListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type ApiServiceOrderByWithAggregationInput = {
    id?: SortOrder
    publisherId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    baseUrl?: SortOrder
    availableRoute?: SortOrder
    applicableFilter?: SortOrder
    termsOfUse?: SortOrderInput | SortOrder
    visibility?: SortOrder
    isLive?: SortOrder
    docs?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    subscriptionPerMonth?: SortOrderInput | SortOrder
    subscriptionPerQuatre?: SortOrderInput | SortOrder
    subscriptionPerHalfYear?: SortOrderInput | SortOrder
    subscriptionPerYear?: SortOrderInput | SortOrder
    isSecured?: SortOrder
    rateLimit?: SortOrder
    _count?: ApiServiceCountOrderByAggregateInput
    _avg?: ApiServiceAvgOrderByAggregateInput
    _max?: ApiServiceMaxOrderByAggregateInput
    _min?: ApiServiceMinOrderByAggregateInput
    _sum?: ApiServiceSumOrderByAggregateInput
  }

  export type ApiServiceScalarWhereWithAggregatesInput = {
    AND?: ApiServiceScalarWhereWithAggregatesInput | ApiServiceScalarWhereWithAggregatesInput[]
    OR?: ApiServiceScalarWhereWithAggregatesInput[]
    NOT?: ApiServiceScalarWhereWithAggregatesInput | ApiServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiService"> | string
    publisherId?: StringWithAggregatesFilter<"ApiService"> | string
    name?: StringWithAggregatesFilter<"ApiService"> | string
    description?: StringNullableWithAggregatesFilter<"ApiService"> | string | null
    category?: EnumApiCategoryWithAggregatesFilter<"ApiService"> | $Enums.ApiCategory
    tags?: StringNullableListFilter<"ApiService">
    baseUrl?: StringWithAggregatesFilter<"ApiService"> | string
    availableRoute?: StringNullableListFilter<"ApiService">
    applicableFilter?: StringNullableListFilter<"ApiService">
    termsOfUse?: StringNullableWithAggregatesFilter<"ApiService"> | string | null
    visibility?: BoolWithAggregatesFilter<"ApiService"> | boolean
    isLive?: BoolWithAggregatesFilter<"ApiService"> | boolean
    docs?: StringNullableWithAggregatesFilter<"ApiService"> | string | null
    isPaid?: BoolWithAggregatesFilter<"ApiService"> | boolean
    subscriptionPerMonth?: FloatNullableWithAggregatesFilter<"ApiService"> | number | null
    subscriptionPerQuatre?: FloatNullableWithAggregatesFilter<"ApiService"> | number | null
    subscriptionPerHalfYear?: FloatNullableWithAggregatesFilter<"ApiService"> | number | null
    subscriptionPerYear?: FloatNullableWithAggregatesFilter<"ApiService"> | number | null
    isSecured?: BoolWithAggregatesFilter<"ApiService"> | boolean
    rateLimit?: IntWithAggregatesFilter<"ApiService"> | number
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    apiId?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    whereToUse?: EnumKeyUsageTypeFilter<"ApiKey"> | $Enums.KeyUsageType
    apiKey?: StringFilter<"ApiKey"> | string
    api?: XOR<ApiServiceScalarRelationFilter, ApiServiceWhereInput>
    subscriptions?: SubscriptionListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    apiId?: SortOrder
    userId?: SortOrder
    whereToUse?: SortOrder
    apiKey?: SortOrder
    api?: ApiServiceOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    apiId?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    whereToUse?: EnumKeyUsageTypeFilter<"ApiKey"> | $Enums.KeyUsageType
    apiKey?: StringFilter<"ApiKey"> | string
    api?: XOR<ApiServiceScalarRelationFilter, ApiServiceWhereInput>
    subscriptions?: SubscriptionListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    apiId?: SortOrder
    userId?: SortOrder
    whereToUse?: SortOrder
    apiKey?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    apiId?: StringWithAggregatesFilter<"ApiKey"> | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    whereToUse?: EnumKeyUsageTypeWithAggregatesFilter<"ApiKey"> | $Enums.KeyUsageType
    apiKey?: StringWithAggregatesFilter<"ApiKey"> | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    apiId?: StringFilter<"Subscription"> | string
    apiKeyId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    api?: XOR<ApiServiceScalarRelationFilter, ApiServiceWhereInput>
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    api?: ApiServiceOrderByWithRelationInput
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    apiId?: StringFilter<"Subscription"> | string
    apiKeyId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    api?: XOR<ApiServiceScalarRelationFilter, ApiServiceWhereInput>
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    apiId?: StringWithAggregatesFilter<"Subscription"> | string
    apiKeyId?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    apiId?: StringFilter<"Transaction"> | string
    apiKeyId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: FloatFilter<"Transaction"> | number
    transactionId?: StringFilter<"Transaction"> | string
    api?: XOR<ApiServiceScalarRelationFilter, ApiServiceWhereInput>
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    api?: ApiServiceOrderByWithRelationInput
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    apiId?: StringFilter<"Transaction"> | string
    apiKeyId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: FloatFilter<"Transaction"> | number
    transactionId?: StringFilter<"Transaction"> | string
    api?: XOR<ApiServiceScalarRelationFilter, ApiServiceWhereInput>
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    apiId?: StringWithAggregatesFilter<"Transaction"> | string
    apiKeyId?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    transactionId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    toUser?: StringFilter<"Notification"> | string
    fromUser?: StringFilter<"Notification"> | string
    url?: StringFilter<"Notification"> | string
    isOpened?: BoolFilter<"Notification"> | boolean
    date?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    toUser?: SortOrder
    fromUser?: SortOrder
    url?: SortOrder
    isOpened?: SortOrder
    date?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    toUser?: StringFilter<"Notification"> | string
    fromUser?: StringFilter<"Notification"> | string
    url?: StringFilter<"Notification"> | string
    isOpened?: BoolFilter<"Notification"> | boolean
    date?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    toUser?: SortOrder
    fromUser?: SortOrder
    url?: SortOrder
    isOpened?: SortOrder
    date?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    description?: StringWithAggregatesFilter<"Notification"> | string
    toUser?: StringWithAggregatesFilter<"Notification"> | string
    fromUser?: StringWithAggregatesFilter<"Notification"> | string
    url?: StringWithAggregatesFilter<"Notification"> | string
    isOpened?: BoolWithAggregatesFilter<"Notification"> | boolean
    date?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ApiServiceCreateInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    apiKeys?: ApiKeyCreateNestedManyWithoutApiInput
    subscriptions?: SubscriptionCreateNestedManyWithoutApiInput
    transactions?: TransactionCreateNestedManyWithoutApiInput
  }

  export type ApiServiceUncheckedCreateInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutApiInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutApiInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    apiKeys?: ApiKeyUpdateManyWithoutApiNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutApiNestedInput
    transactions?: TransactionUpdateManyWithoutApiNestedInput
  }

  export type ApiServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutApiNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutApiNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiServiceCreateManyInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
  }

  export type ApiServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
  }

  export type ApiServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
  }

  export type ApiKeyCreateInput = {
    id?: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    api: ApiServiceCreateNestedOneWithoutApiKeysInput
    subscriptions?: SubscriptionCreateNestedManyWithoutApiKeyInput
    transactions?: TransactionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    apiId: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutApiKeyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    api?: ApiServiceUpdateOneRequiredWithoutApiKeysNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutApiKeyNestedInput
    transactions?: TransactionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutApiKeyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    apiId: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    api: ApiServiceCreateNestedOneWithoutSubscriptionsInput
    apiKey: ApiKeyCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    apiId: string
    apiKeyId: string
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    api?: ApiServiceUpdateOneRequiredWithoutSubscriptionsNestedInput
    apiKey?: ApiKeyUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    apiId: string
    apiKeyId: string
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
    api: ApiServiceCreateNestedOneWithoutTransactionsInput
    apiKey: ApiKeyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    apiId: string
    apiKeyId: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    api?: ApiServiceUpdateOneRequiredWithoutTransactionsNestedInput
    apiKey?: ApiKeyUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    apiId: string
    apiKeyId: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    description: string
    toUser: string
    fromUser: string
    url: string
    isOpened: boolean
    date: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    toUser: string
    fromUser: string
    url: string
    isOpened: boolean
    date: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isOpened?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isOpened?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    description: string
    toUser: string
    fromUser: string
    url: string
    isOpened: boolean
    date: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isOpened?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isOpened?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumApiCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiCategory | EnumApiCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumApiCategoryFilter<$PrismaModel> | $Enums.ApiCategory
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiServiceCountOrderByAggregateInput = {
    id?: SortOrder
    publisherId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    baseUrl?: SortOrder
    availableRoute?: SortOrder
    applicableFilter?: SortOrder
    termsOfUse?: SortOrder
    visibility?: SortOrder
    isLive?: SortOrder
    docs?: SortOrder
    isPaid?: SortOrder
    subscriptionPerMonth?: SortOrder
    subscriptionPerQuatre?: SortOrder
    subscriptionPerHalfYear?: SortOrder
    subscriptionPerYear?: SortOrder
    isSecured?: SortOrder
    rateLimit?: SortOrder
  }

  export type ApiServiceAvgOrderByAggregateInput = {
    subscriptionPerMonth?: SortOrder
    subscriptionPerQuatre?: SortOrder
    subscriptionPerHalfYear?: SortOrder
    subscriptionPerYear?: SortOrder
    rateLimit?: SortOrder
  }

  export type ApiServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    publisherId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    baseUrl?: SortOrder
    termsOfUse?: SortOrder
    visibility?: SortOrder
    isLive?: SortOrder
    docs?: SortOrder
    isPaid?: SortOrder
    subscriptionPerMonth?: SortOrder
    subscriptionPerQuatre?: SortOrder
    subscriptionPerHalfYear?: SortOrder
    subscriptionPerYear?: SortOrder
    isSecured?: SortOrder
    rateLimit?: SortOrder
  }

  export type ApiServiceMinOrderByAggregateInput = {
    id?: SortOrder
    publisherId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    baseUrl?: SortOrder
    termsOfUse?: SortOrder
    visibility?: SortOrder
    isLive?: SortOrder
    docs?: SortOrder
    isPaid?: SortOrder
    subscriptionPerMonth?: SortOrder
    subscriptionPerQuatre?: SortOrder
    subscriptionPerHalfYear?: SortOrder
    subscriptionPerYear?: SortOrder
    isSecured?: SortOrder
    rateLimit?: SortOrder
  }

  export type ApiServiceSumOrderByAggregateInput = {
    subscriptionPerMonth?: SortOrder
    subscriptionPerQuatre?: SortOrder
    subscriptionPerHalfYear?: SortOrder
    subscriptionPerYear?: SortOrder
    rateLimit?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumApiCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiCategory | EnumApiCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumApiCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ApiCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiCategoryFilter<$PrismaModel>
    _max?: NestedEnumApiCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumKeyUsageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyUsageType | EnumKeyUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyUsageTypeFilter<$PrismaModel> | $Enums.KeyUsageType
  }

  export type ApiServiceScalarRelationFilter = {
    is?: ApiServiceWhereInput
    isNot?: ApiServiceWhereInput
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    userId?: SortOrder
    whereToUse?: SortOrder
    apiKey?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    userId?: SortOrder
    whereToUse?: SortOrder
    apiKey?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    userId?: SortOrder
    whereToUse?: SortOrder
    apiKey?: SortOrder
  }

  export type EnumKeyUsageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyUsageType | EnumKeyUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyUsageTypeWithAggregatesFilter<$PrismaModel> | $Enums.KeyUsageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeyUsageTypeFilter<$PrismaModel>
    _max?: NestedEnumKeyUsageTypeFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    toUser?: SortOrder
    fromUser?: SortOrder
    url?: SortOrder
    isOpened?: SortOrder
    date?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    toUser?: SortOrder
    fromUser?: SortOrder
    url?: SortOrder
    isOpened?: SortOrder
    date?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    toUser?: SortOrder
    fromUser?: SortOrder
    url?: SortOrder
    isOpened?: SortOrder
    date?: SortOrder
  }

  export type ApiServiceCreatetagsInput = {
    set: string[]
  }

  export type ApiServiceCreateavailableRouteInput = {
    set: string[]
  }

  export type ApiServiceCreateapplicableFilterInput = {
    set: string[]
  }

  export type ApiKeyCreateNestedManyWithoutApiInput = {
    create?: XOR<ApiKeyCreateWithoutApiInput, ApiKeyUncheckedCreateWithoutApiInput> | ApiKeyCreateWithoutApiInput[] | ApiKeyUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApiInput | ApiKeyCreateOrConnectWithoutApiInput[]
    createMany?: ApiKeyCreateManyApiInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutApiInput = {
    create?: XOR<SubscriptionCreateWithoutApiInput, SubscriptionUncheckedCreateWithoutApiInput> | SubscriptionCreateWithoutApiInput[] | SubscriptionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiInput | SubscriptionCreateOrConnectWithoutApiInput[]
    createMany?: SubscriptionCreateManyApiInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutApiInput = {
    create?: XOR<TransactionCreateWithoutApiInput, TransactionUncheckedCreateWithoutApiInput> | TransactionCreateWithoutApiInput[] | TransactionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiInput | TransactionCreateOrConnectWithoutApiInput[]
    createMany?: TransactionCreateManyApiInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<ApiKeyCreateWithoutApiInput, ApiKeyUncheckedCreateWithoutApiInput> | ApiKeyCreateWithoutApiInput[] | ApiKeyUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApiInput | ApiKeyCreateOrConnectWithoutApiInput[]
    createMany?: ApiKeyCreateManyApiInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<SubscriptionCreateWithoutApiInput, SubscriptionUncheckedCreateWithoutApiInput> | SubscriptionCreateWithoutApiInput[] | SubscriptionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiInput | SubscriptionCreateOrConnectWithoutApiInput[]
    createMany?: SubscriptionCreateManyApiInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<TransactionCreateWithoutApiInput, TransactionUncheckedCreateWithoutApiInput> | TransactionCreateWithoutApiInput[] | TransactionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiInput | TransactionCreateOrConnectWithoutApiInput[]
    createMany?: TransactionCreateManyApiInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumApiCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ApiCategory
  }

  export type ApiServiceUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApiServiceUpdateavailableRouteInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApiServiceUpdateapplicableFilterInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApiKeyUpdateManyWithoutApiNestedInput = {
    create?: XOR<ApiKeyCreateWithoutApiInput, ApiKeyUncheckedCreateWithoutApiInput> | ApiKeyCreateWithoutApiInput[] | ApiKeyUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApiInput | ApiKeyCreateOrConnectWithoutApiInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutApiInput | ApiKeyUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: ApiKeyCreateManyApiInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutApiInput | ApiKeyUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutApiInput | ApiKeyUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutApiNestedInput = {
    create?: XOR<SubscriptionCreateWithoutApiInput, SubscriptionUncheckedCreateWithoutApiInput> | SubscriptionCreateWithoutApiInput[] | SubscriptionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiInput | SubscriptionCreateOrConnectWithoutApiInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutApiInput | SubscriptionUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: SubscriptionCreateManyApiInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutApiInput | SubscriptionUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutApiInput | SubscriptionUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutApiNestedInput = {
    create?: XOR<TransactionCreateWithoutApiInput, TransactionUncheckedCreateWithoutApiInput> | TransactionCreateWithoutApiInput[] | TransactionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiInput | TransactionCreateOrConnectWithoutApiInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutApiInput | TransactionUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: TransactionCreateManyApiInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutApiInput | TransactionUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutApiInput | TransactionUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<ApiKeyCreateWithoutApiInput, ApiKeyUncheckedCreateWithoutApiInput> | ApiKeyCreateWithoutApiInput[] | ApiKeyUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutApiInput | ApiKeyCreateOrConnectWithoutApiInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutApiInput | ApiKeyUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: ApiKeyCreateManyApiInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutApiInput | ApiKeyUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutApiInput | ApiKeyUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<SubscriptionCreateWithoutApiInput, SubscriptionUncheckedCreateWithoutApiInput> | SubscriptionCreateWithoutApiInput[] | SubscriptionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiInput | SubscriptionCreateOrConnectWithoutApiInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutApiInput | SubscriptionUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: SubscriptionCreateManyApiInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutApiInput | SubscriptionUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutApiInput | SubscriptionUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<TransactionCreateWithoutApiInput, TransactionUncheckedCreateWithoutApiInput> | TransactionCreateWithoutApiInput[] | TransactionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiInput | TransactionCreateOrConnectWithoutApiInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutApiInput | TransactionUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: TransactionCreateManyApiInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutApiInput | TransactionUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutApiInput | TransactionUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ApiServiceCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<ApiServiceCreateWithoutApiKeysInput, ApiServiceUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: ApiServiceCreateOrConnectWithoutApiKeysInput
    connect?: ApiServiceWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<SubscriptionCreateWithoutApiKeyInput, SubscriptionUncheckedCreateWithoutApiKeyInput> | SubscriptionCreateWithoutApiKeyInput[] | SubscriptionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiKeyInput | SubscriptionCreateOrConnectWithoutApiKeyInput[]
    createMany?: SubscriptionCreateManyApiKeyInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<TransactionCreateWithoutApiKeyInput, TransactionUncheckedCreateWithoutApiKeyInput> | TransactionCreateWithoutApiKeyInput[] | TransactionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiKeyInput | TransactionCreateOrConnectWithoutApiKeyInput[]
    createMany?: TransactionCreateManyApiKeyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<SubscriptionCreateWithoutApiKeyInput, SubscriptionUncheckedCreateWithoutApiKeyInput> | SubscriptionCreateWithoutApiKeyInput[] | SubscriptionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiKeyInput | SubscriptionCreateOrConnectWithoutApiKeyInput[]
    createMany?: SubscriptionCreateManyApiKeyInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<TransactionCreateWithoutApiKeyInput, TransactionUncheckedCreateWithoutApiKeyInput> | TransactionCreateWithoutApiKeyInput[] | TransactionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiKeyInput | TransactionCreateOrConnectWithoutApiKeyInput[]
    createMany?: TransactionCreateManyApiKeyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumKeyUsageTypeFieldUpdateOperationsInput = {
    set?: $Enums.KeyUsageType
  }

  export type ApiServiceUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<ApiServiceCreateWithoutApiKeysInput, ApiServiceUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: ApiServiceCreateOrConnectWithoutApiKeysInput
    upsert?: ApiServiceUpsertWithoutApiKeysInput
    connect?: ApiServiceWhereUniqueInput
    update?: XOR<XOR<ApiServiceUpdateToOneWithWhereWithoutApiKeysInput, ApiServiceUpdateWithoutApiKeysInput>, ApiServiceUncheckedUpdateWithoutApiKeysInput>
  }

  export type SubscriptionUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutApiKeyInput, SubscriptionUncheckedCreateWithoutApiKeyInput> | SubscriptionCreateWithoutApiKeyInput[] | SubscriptionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiKeyInput | SubscriptionCreateOrConnectWithoutApiKeyInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutApiKeyInput | SubscriptionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: SubscriptionCreateManyApiKeyInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutApiKeyInput | SubscriptionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutApiKeyInput | SubscriptionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<TransactionCreateWithoutApiKeyInput, TransactionUncheckedCreateWithoutApiKeyInput> | TransactionCreateWithoutApiKeyInput[] | TransactionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiKeyInput | TransactionCreateOrConnectWithoutApiKeyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutApiKeyInput | TransactionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: TransactionCreateManyApiKeyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutApiKeyInput | TransactionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutApiKeyInput | TransactionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutApiKeyInput, SubscriptionUncheckedCreateWithoutApiKeyInput> | SubscriptionCreateWithoutApiKeyInput[] | SubscriptionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutApiKeyInput | SubscriptionCreateOrConnectWithoutApiKeyInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutApiKeyInput | SubscriptionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: SubscriptionCreateManyApiKeyInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutApiKeyInput | SubscriptionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutApiKeyInput | SubscriptionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<TransactionCreateWithoutApiKeyInput, TransactionUncheckedCreateWithoutApiKeyInput> | TransactionCreateWithoutApiKeyInput[] | TransactionUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutApiKeyInput | TransactionCreateOrConnectWithoutApiKeyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutApiKeyInput | TransactionUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: TransactionCreateManyApiKeyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutApiKeyInput | TransactionUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutApiKeyInput | TransactionUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ApiServiceCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<ApiServiceCreateWithoutSubscriptionsInput, ApiServiceUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ApiServiceCreateOrConnectWithoutSubscriptionsInput
    connect?: ApiServiceWhereUniqueInput
  }

  export type ApiKeyCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<ApiKeyCreateWithoutSubscriptionsInput, ApiKeyUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutSubscriptionsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiServiceUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<ApiServiceCreateWithoutSubscriptionsInput, ApiServiceUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ApiServiceCreateOrConnectWithoutSubscriptionsInput
    upsert?: ApiServiceUpsertWithoutSubscriptionsInput
    connect?: ApiServiceWhereUniqueInput
    update?: XOR<XOR<ApiServiceUpdateToOneWithWhereWithoutSubscriptionsInput, ApiServiceUpdateWithoutSubscriptionsInput>, ApiServiceUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ApiKeyUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutSubscriptionsInput, ApiKeyUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutSubscriptionsInput
    upsert?: ApiKeyUpsertWithoutSubscriptionsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutSubscriptionsInput, ApiKeyUpdateWithoutSubscriptionsInput>, ApiKeyUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ApiServiceCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ApiServiceCreateWithoutTransactionsInput, ApiServiceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ApiServiceCreateOrConnectWithoutTransactionsInput
    connect?: ApiServiceWhereUniqueInput
  }

  export type ApiKeyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ApiKeyCreateWithoutTransactionsInput, ApiKeyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTransactionsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApiServiceUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ApiServiceCreateWithoutTransactionsInput, ApiServiceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ApiServiceCreateOrConnectWithoutTransactionsInput
    upsert?: ApiServiceUpsertWithoutTransactionsInput
    connect?: ApiServiceWhereUniqueInput
    update?: XOR<XOR<ApiServiceUpdateToOneWithWhereWithoutTransactionsInput, ApiServiceUpdateWithoutTransactionsInput>, ApiServiceUncheckedUpdateWithoutTransactionsInput>
  }

  export type ApiKeyUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutTransactionsInput, ApiKeyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTransactionsInput
    upsert?: ApiKeyUpsertWithoutTransactionsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutTransactionsInput, ApiKeyUpdateWithoutTransactionsInput>, ApiKeyUncheckedUpdateWithoutTransactionsInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumApiCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiCategory | EnumApiCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumApiCategoryFilter<$PrismaModel> | $Enums.ApiCategory
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumApiCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApiCategory | EnumApiCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApiCategory[] | ListEnumApiCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumApiCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ApiCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApiCategoryFilter<$PrismaModel>
    _max?: NestedEnumApiCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumKeyUsageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyUsageType | EnumKeyUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyUsageTypeFilter<$PrismaModel> | $Enums.KeyUsageType
  }

  export type NestedEnumKeyUsageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyUsageType | EnumKeyUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyUsageType[] | ListEnumKeyUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyUsageTypeWithAggregatesFilter<$PrismaModel> | $Enums.KeyUsageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeyUsageTypeFilter<$PrismaModel>
    _max?: NestedEnumKeyUsageTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ApiKeyCreateWithoutApiInput = {
    id?: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    subscriptions?: SubscriptionCreateNestedManyWithoutApiKeyInput
    transactions?: TransactionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutApiInput = {
    id?: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutApiKeyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutApiInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutApiInput, ApiKeyUncheckedCreateWithoutApiInput>
  }

  export type ApiKeyCreateManyApiInputEnvelope = {
    data: ApiKeyCreateManyApiInput | ApiKeyCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutApiInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutApiInput = {
    id?: string
    apiKeyId: string
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutApiInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutApiInput, SubscriptionUncheckedCreateWithoutApiInput>
  }

  export type SubscriptionCreateManyApiInputEnvelope = {
    data: SubscriptionCreateManyApiInput | SubscriptionCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutApiInput = {
    id?: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
    apiKey: ApiKeyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutApiInput = {
    id?: string
    apiKeyId: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
  }

  export type TransactionCreateOrConnectWithoutApiInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutApiInput, TransactionUncheckedCreateWithoutApiInput>
  }

  export type TransactionCreateManyApiInputEnvelope = {
    data: TransactionCreateManyApiInput | TransactionCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutApiInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutApiInput, ApiKeyUncheckedUpdateWithoutApiInput>
    create: XOR<ApiKeyCreateWithoutApiInput, ApiKeyUncheckedCreateWithoutApiInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutApiInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutApiInput, ApiKeyUncheckedUpdateWithoutApiInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutApiInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutApiInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    apiId?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    whereToUse?: EnumKeyUsageTypeFilter<"ApiKey"> | $Enums.KeyUsageType
    apiKey?: StringFilter<"ApiKey"> | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutApiInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutApiInput, SubscriptionUncheckedUpdateWithoutApiInput>
    create: XOR<SubscriptionCreateWithoutApiInput, SubscriptionUncheckedCreateWithoutApiInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutApiInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutApiInput, SubscriptionUncheckedUpdateWithoutApiInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutApiInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutApiInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    apiId?: StringFilter<"Subscription"> | string
    apiKeyId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutApiInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutApiInput, TransactionUncheckedUpdateWithoutApiInput>
    create: XOR<TransactionCreateWithoutApiInput, TransactionUncheckedCreateWithoutApiInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutApiInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutApiInput, TransactionUncheckedUpdateWithoutApiInput>
  }

  export type TransactionUpdateManyWithWhereWithoutApiInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutApiInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    apiId?: StringFilter<"Transaction"> | string
    apiKeyId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: FloatFilter<"Transaction"> | number
    transactionId?: StringFilter<"Transaction"> | string
  }

  export type ApiServiceCreateWithoutApiKeysInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    subscriptions?: SubscriptionCreateNestedManyWithoutApiInput
    transactions?: TransactionCreateNestedManyWithoutApiInput
  }

  export type ApiServiceUncheckedCreateWithoutApiKeysInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutApiInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiServiceCreateOrConnectWithoutApiKeysInput = {
    where: ApiServiceWhereUniqueInput
    create: XOR<ApiServiceCreateWithoutApiKeysInput, ApiServiceUncheckedCreateWithoutApiKeysInput>
  }

  export type SubscriptionCreateWithoutApiKeyInput = {
    id?: string
    userId: string
    startDate: Date | string
    endDate: Date | string
    api: ApiServiceCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutApiKeyInput = {
    id?: string
    apiId: string
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutApiKeyInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutApiKeyInput, SubscriptionUncheckedCreateWithoutApiKeyInput>
  }

  export type SubscriptionCreateManyApiKeyInputEnvelope = {
    data: SubscriptionCreateManyApiKeyInput | SubscriptionCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutApiKeyInput = {
    id?: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
    api: ApiServiceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutApiKeyInput = {
    id?: string
    apiId: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
  }

  export type TransactionCreateOrConnectWithoutApiKeyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutApiKeyInput, TransactionUncheckedCreateWithoutApiKeyInput>
  }

  export type TransactionCreateManyApiKeyInputEnvelope = {
    data: TransactionCreateManyApiKeyInput | TransactionCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type ApiServiceUpsertWithoutApiKeysInput = {
    update: XOR<ApiServiceUpdateWithoutApiKeysInput, ApiServiceUncheckedUpdateWithoutApiKeysInput>
    create: XOR<ApiServiceCreateWithoutApiKeysInput, ApiServiceUncheckedCreateWithoutApiKeysInput>
    where?: ApiServiceWhereInput
  }

  export type ApiServiceUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: ApiServiceWhereInput
    data: XOR<ApiServiceUpdateWithoutApiKeysInput, ApiServiceUncheckedUpdateWithoutApiKeysInput>
  }

  export type ApiServiceUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    subscriptions?: SubscriptionUpdateManyWithoutApiNestedInput
    transactions?: TransactionUpdateManyWithoutApiNestedInput
  }

  export type ApiServiceUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutApiNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutApiKeyInput, SubscriptionUncheckedUpdateWithoutApiKeyInput>
    create: XOR<SubscriptionCreateWithoutApiKeyInput, SubscriptionUncheckedCreateWithoutApiKeyInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutApiKeyInput, SubscriptionUncheckedUpdateWithoutApiKeyInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutApiKeyInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutApiKeyInput, TransactionUncheckedUpdateWithoutApiKeyInput>
    create: XOR<TransactionCreateWithoutApiKeyInput, TransactionUncheckedCreateWithoutApiKeyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutApiKeyInput, TransactionUncheckedUpdateWithoutApiKeyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutApiKeyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiServiceCreateWithoutSubscriptionsInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    apiKeys?: ApiKeyCreateNestedManyWithoutApiInput
    transactions?: TransactionCreateNestedManyWithoutApiInput
  }

  export type ApiServiceUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutApiInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiServiceCreateOrConnectWithoutSubscriptionsInput = {
    where: ApiServiceWhereUniqueInput
    create: XOR<ApiServiceCreateWithoutSubscriptionsInput, ApiServiceUncheckedCreateWithoutSubscriptionsInput>
  }

  export type ApiKeyCreateWithoutSubscriptionsInput = {
    id?: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    api: ApiServiceCreateNestedOneWithoutApiKeysInput
    transactions?: TransactionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    apiId: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutSubscriptionsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutSubscriptionsInput, ApiKeyUncheckedCreateWithoutSubscriptionsInput>
  }

  export type ApiServiceUpsertWithoutSubscriptionsInput = {
    update: XOR<ApiServiceUpdateWithoutSubscriptionsInput, ApiServiceUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<ApiServiceCreateWithoutSubscriptionsInput, ApiServiceUncheckedCreateWithoutSubscriptionsInput>
    where?: ApiServiceWhereInput
  }

  export type ApiServiceUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: ApiServiceWhereInput
    data: XOR<ApiServiceUpdateWithoutSubscriptionsInput, ApiServiceUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ApiServiceUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    apiKeys?: ApiKeyUpdateManyWithoutApiNestedInput
    transactions?: TransactionUpdateManyWithoutApiNestedInput
  }

  export type ApiServiceUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutApiNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiKeyUpsertWithoutSubscriptionsInput = {
    update: XOR<ApiKeyUpdateWithoutSubscriptionsInput, ApiKeyUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<ApiKeyCreateWithoutSubscriptionsInput, ApiKeyUncheckedCreateWithoutSubscriptionsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutSubscriptionsInput, ApiKeyUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ApiKeyUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    api?: ApiServiceUpdateOneRequiredWithoutApiKeysNestedInput
    transactions?: TransactionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiServiceCreateWithoutTransactionsInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    apiKeys?: ApiKeyCreateNestedManyWithoutApiInput
    subscriptions?: SubscriptionCreateNestedManyWithoutApiInput
  }

  export type ApiServiceUncheckedCreateWithoutTransactionsInput = {
    id?: string
    publisherId: string
    name: string
    description?: string | null
    category: $Enums.ApiCategory
    tags?: ApiServiceCreatetagsInput | string[]
    baseUrl: string
    availableRoute?: ApiServiceCreateavailableRouteInput | string[]
    applicableFilter?: ApiServiceCreateapplicableFilterInput | string[]
    termsOfUse?: string | null
    visibility: boolean
    isLive: boolean
    docs?: string | null
    isPaid: boolean
    subscriptionPerMonth?: number | null
    subscriptionPerQuatre?: number | null
    subscriptionPerHalfYear?: number | null
    subscriptionPerYear?: number | null
    isSecured: boolean
    rateLimit: number
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutApiInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiServiceCreateOrConnectWithoutTransactionsInput = {
    where: ApiServiceWhereUniqueInput
    create: XOR<ApiServiceCreateWithoutTransactionsInput, ApiServiceUncheckedCreateWithoutTransactionsInput>
  }

  export type ApiKeyCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    api: ApiServiceCreateNestedOneWithoutApiKeysInput
    subscriptions?: SubscriptionCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutTransactionsInput = {
    id?: string
    apiId: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutTransactionsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutTransactionsInput, ApiKeyUncheckedCreateWithoutTransactionsInput>
  }

  export type ApiServiceUpsertWithoutTransactionsInput = {
    update: XOR<ApiServiceUpdateWithoutTransactionsInput, ApiServiceUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ApiServiceCreateWithoutTransactionsInput, ApiServiceUncheckedCreateWithoutTransactionsInput>
    where?: ApiServiceWhereInput
  }

  export type ApiServiceUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ApiServiceWhereInput
    data: XOR<ApiServiceUpdateWithoutTransactionsInput, ApiServiceUncheckedUpdateWithoutTransactionsInput>
  }

  export type ApiServiceUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    apiKeys?: ApiKeyUpdateManyWithoutApiNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutApiNestedInput
  }

  export type ApiServiceUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumApiCategoryFieldUpdateOperationsInput | $Enums.ApiCategory
    tags?: ApiServiceUpdatetagsInput | string[]
    baseUrl?: StringFieldUpdateOperationsInput | string
    availableRoute?: ApiServiceUpdateavailableRouteInput | string[]
    applicableFilter?: ApiServiceUpdateapplicableFilterInput | string[]
    termsOfUse?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: BoolFieldUpdateOperationsInput | boolean
    isLive?: BoolFieldUpdateOperationsInput | boolean
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPerMonth?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerQuatre?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerHalfYear?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionPerYear?: NullableFloatFieldUpdateOperationsInput | number | null
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutApiNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiKeyUpsertWithoutTransactionsInput = {
    update: XOR<ApiKeyUpdateWithoutTransactionsInput, ApiKeyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ApiKeyCreateWithoutTransactionsInput, ApiKeyUncheckedCreateWithoutTransactionsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutTransactionsInput, ApiKeyUncheckedUpdateWithoutTransactionsInput>
  }

  export type ApiKeyUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    api?: ApiServiceUpdateOneRequiredWithoutApiKeysNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyApiInput = {
    id?: string
    userId: string
    whereToUse: $Enums.KeyUsageType
    apiKey: string
  }

  export type SubscriptionCreateManyApiInput = {
    id?: string
    apiKeyId: string
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type TransactionCreateManyApiInput = {
    id?: string
    apiKeyId: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
  }

  export type ApiKeyUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUpdateManyWithoutApiKeyNestedInput
    transactions?: TransactionUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutApiKeyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    whereToUse?: EnumKeyUsageTypeFieldUpdateOperationsInput | $Enums.KeyUsageType
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyApiKeyInput = {
    id?: string
    apiId: string
    userId: string
    startDate: Date | string
    endDate: Date | string
  }

  export type TransactionCreateManyApiKeyInput = {
    id?: string
    apiId: string
    userId: string
    date: Date | string
    amount: number
    transactionId: string
  }

  export type SubscriptionUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    api?: ApiServiceUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    api?: ApiServiceUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
  }



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