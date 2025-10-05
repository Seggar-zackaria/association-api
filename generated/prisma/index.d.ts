
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model PlayerRelationShips
 * 
 */
export type PlayerRelationShips = $Result.DefaultSelection<Prisma.$PlayerRelationShipsPayload>
/**
 * Model Documents
 * 
 */
export type Documents = $Result.DefaultSelection<Prisma.$DocumentsPayload>
/**
 * Model MedicalCertificates
 * 
 */
export type MedicalCertificates = $Result.DefaultSelection<Prisma.$MedicalCertificatesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userRole: {
  admin: 'admin',
  parent: 'parent',
  user: 'user'
};

export type userRole = (typeof userRole)[keyof typeof userRole]


export const gender: {
  woman: 'woman',
  man: 'man'
};

export type gender = (typeof gender)[keyof typeof gender]


export const RelationshipType: {
  Mother: 'Mother',
  Father: 'Father',
  Guardian: 'Guardian'
};

export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType]


export const DocumentType: {
  IDENTITY_PHOTO: 'IDENTITY_PHOTO',
  BIRTH_CERTIFICATE: 'BIRTH_CERTIFICATE',
  MEDICAL_CERTIFICATE: 'MEDICAL_CERTIFICATE',
  PARENTAL_AUTHORIZATION: 'PARENTAL_AUTHORIZATION'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const TokenType: {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type userRole = $Enums.userRole

export const userRole: typeof $Enums.userRole

export type gender = $Enums.gender

export const gender: typeof $Enums.gender

export type RelationshipType = $Enums.RelationshipType

export const RelationshipType: typeof $Enums.RelationshipType

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerRelationShips`: Exposes CRUD operations for the **PlayerRelationShips** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerRelationShips
    * const playerRelationShips = await prisma.playerRelationShips.findMany()
    * ```
    */
  get playerRelationShips(): Prisma.PlayerRelationShipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **Documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.DocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalCertificates`: Exposes CRUD operations for the **MedicalCertificates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalCertificates
    * const medicalCertificates = await prisma.medicalCertificates.findMany()
    * ```
    */
  get medicalCertificates(): Prisma.MedicalCertificatesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Users: 'Users',
    Token: 'Token',
    PlayerRelationShips: 'PlayerRelationShips',
    Documents: 'Documents',
    MedicalCertificates: 'MedicalCertificates'
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
      modelProps: "users" | "token" | "playerRelationShips" | "documents" | "medicalCertificates"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      PlayerRelationShips: {
        payload: Prisma.$PlayerRelationShipsPayload<ExtArgs>
        fields: Prisma.PlayerRelationShipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerRelationShipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerRelationShipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>
          }
          findFirst: {
            args: Prisma.PlayerRelationShipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerRelationShipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>
          }
          findMany: {
            args: Prisma.PlayerRelationShipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>[]
          }
          create: {
            args: Prisma.PlayerRelationShipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>
          }
          createMany: {
            args: Prisma.PlayerRelationShipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerRelationShipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>[]
          }
          delete: {
            args: Prisma.PlayerRelationShipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>
          }
          update: {
            args: Prisma.PlayerRelationShipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerRelationShipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerRelationShipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerRelationShipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerRelationShipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRelationShipsPayload>
          }
          aggregate: {
            args: Prisma.PlayerRelationShipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerRelationShips>
          }
          groupBy: {
            args: Prisma.PlayerRelationShipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerRelationShipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerRelationShipsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerRelationShipsCountAggregateOutputType> | number
          }
        }
      }
      Documents: {
        payload: Prisma.$DocumentsPayload<ExtArgs>
        fields: Prisma.DocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findFirst: {
            args: Prisma.DocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findMany: {
            args: Prisma.DocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          create: {
            args: Prisma.DocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          createMany: {
            args: Prisma.DocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          delete: {
            args: Prisma.DocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          update: {
            args: Prisma.DocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          deleteMany: {
            args: Prisma.DocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          upsert: {
            args: Prisma.DocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.DocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      MedicalCertificates: {
        payload: Prisma.$MedicalCertificatesPayload<ExtArgs>
        fields: Prisma.MedicalCertificatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalCertificatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalCertificatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>
          }
          findFirst: {
            args: Prisma.MedicalCertificatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalCertificatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>
          }
          findMany: {
            args: Prisma.MedicalCertificatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>[]
          }
          create: {
            args: Prisma.MedicalCertificatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>
          }
          createMany: {
            args: Prisma.MedicalCertificatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalCertificatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>[]
          }
          delete: {
            args: Prisma.MedicalCertificatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>
          }
          update: {
            args: Prisma.MedicalCertificatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>
          }
          deleteMany: {
            args: Prisma.MedicalCertificatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalCertificatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalCertificatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>[]
          }
          upsert: {
            args: Prisma.MedicalCertificatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCertificatesPayload>
          }
          aggregate: {
            args: Prisma.MedicalCertificatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalCertificates>
          }
          groupBy: {
            args: Prisma.MedicalCertificatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalCertificatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalCertificatesCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalCertificatesCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    token?: TokenOmit
    playerRelationShips?: PlayerRelationShipsOmit
    documents?: DocumentsOmit
    medicalCertificates?: MedicalCertificatesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tokens: number
    legal_guardian_of: number
    players_as_guardian: number
    documents: number
    medical_certificates: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UsersCountOutputTypeCountTokensArgs
    legal_guardian_of?: boolean | UsersCountOutputTypeCountLegal_guardian_ofArgs
    players_as_guardian?: boolean | UsersCountOutputTypeCountPlayers_as_guardianArgs
    documents?: boolean | UsersCountOutputTypeCountDocumentsArgs
    medical_certificates?: boolean | UsersCountOutputTypeCountMedical_certificatesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLegal_guardian_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerRelationShipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlayers_as_guardianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerRelationShipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMedical_certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificatesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    role: $Enums.userRole | null
    date_of_birth: Date | null
    place_of_birth: string | null
    gender: $Enums.gender | null
    address: string | null
    phone_number: string | null
    blood_type: string | null
    picture_url: string | null
    nationality: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    email_verified_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    role: $Enums.userRole | null
    date_of_birth: Date | null
    place_of_birth: string | null
    gender: $Enums.gender | null
    address: string | null
    phone_number: string | null
    blood_type: string | null
    picture_url: string | null
    nationality: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    email_verified_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    role: number
    date_of_birth: number
    place_of_birth: number
    gender: number
    address: number
    phone_number: number
    blood_type: number
    picture_url: number
    nationality: number
    is_active: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    email_verified_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    role?: true
    date_of_birth?: true
    place_of_birth?: true
    gender?: true
    address?: true
    phone_number?: true
    blood_type?: true
    picture_url?: true
    nationality?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    email_verified_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    role?: true
    date_of_birth?: true
    place_of_birth?: true
    gender?: true
    address?: true
    phone_number?: true
    blood_type?: true
    picture_url?: true
    nationality?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    email_verified_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    role?: true
    date_of_birth?: true
    place_of_birth?: true
    gender?: true
    address?: true
    phone_number?: true
    blood_type?: true
    picture_url?: true
    nationality?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    email_verified_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    role: $Enums.userRole
    date_of_birth: Date
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type: string | null
    picture_url: string | null
    nationality: string
    is_active: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    email_verified_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    date_of_birth?: boolean
    place_of_birth?: boolean
    gender?: boolean
    address?: boolean
    phone_number?: boolean
    blood_type?: boolean
    picture_url?: boolean
    nationality?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    email_verified_at?: boolean
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    legal_guardian_of?: boolean | Users$legal_guardian_ofArgs<ExtArgs>
    players_as_guardian?: boolean | Users$players_as_guardianArgs<ExtArgs>
    documents?: boolean | Users$documentsArgs<ExtArgs>
    medical_certificates?: boolean | Users$medical_certificatesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    date_of_birth?: boolean
    place_of_birth?: boolean
    gender?: boolean
    address?: boolean
    phone_number?: boolean
    blood_type?: boolean
    picture_url?: boolean
    nationality?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    email_verified_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    date_of_birth?: boolean
    place_of_birth?: boolean
    gender?: boolean
    address?: boolean
    phone_number?: boolean
    blood_type?: boolean
    picture_url?: boolean
    nationality?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    email_verified_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    date_of_birth?: boolean
    place_of_birth?: boolean
    gender?: boolean
    address?: boolean
    phone_number?: boolean
    blood_type?: boolean
    picture_url?: boolean
    nationality?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    email_verified_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password" | "role" | "date_of_birth" | "place_of_birth" | "gender" | "address" | "phone_number" | "blood_type" | "picture_url" | "nationality" | "is_active" | "createdAt" | "updatedAt" | "deletedAt" | "email_verified_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    legal_guardian_of?: boolean | Users$legal_guardian_ofArgs<ExtArgs>
    players_as_guardian?: boolean | Users$players_as_guardianArgs<ExtArgs>
    documents?: boolean | Users$documentsArgs<ExtArgs>
    medical_certificates?: boolean | Users$medical_certificatesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      legal_guardian_of: Prisma.$PlayerRelationShipsPayload<ExtArgs>[]
      players_as_guardian: Prisma.$PlayerRelationShipsPayload<ExtArgs>[]
      documents: Prisma.$DocumentsPayload<ExtArgs>[]
      medical_certificates: Prisma.$MedicalCertificatesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      role: $Enums.userRole
      date_of_birth: Date
      place_of_birth: string
      gender: $Enums.gender
      address: string
      phone_number: string
      blood_type: string | null
      picture_url: string | null
      nationality: string
      is_active: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      email_verified_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends Users$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    legal_guardian_of<T extends Users$legal_guardian_ofArgs<ExtArgs> = {}>(args?: Subset<T, Users$legal_guardian_ofArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players_as_guardian<T extends Users$players_as_guardianArgs<ExtArgs> = {}>(args?: Subset<T, Users$players_as_guardianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Users$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medical_certificates<T extends Users$medical_certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Users$medical_certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'userRole'>
    readonly date_of_birth: FieldRef<"Users", 'DateTime'>
    readonly place_of_birth: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'gender'>
    readonly address: FieldRef<"Users", 'String'>
    readonly phone_number: FieldRef<"Users", 'String'>
    readonly blood_type: FieldRef<"Users", 'String'>
    readonly picture_url: FieldRef<"Users", 'String'>
    readonly nationality: FieldRef<"Users", 'String'>
    readonly is_active: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly email_verified_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.tokens
   */
  export type Users$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Users.legal_guardian_of
   */
  export type Users$legal_guardian_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    where?: PlayerRelationShipsWhereInput
    orderBy?: PlayerRelationShipsOrderByWithRelationInput | PlayerRelationShipsOrderByWithRelationInput[]
    cursor?: PlayerRelationShipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerRelationShipsScalarFieldEnum | PlayerRelationShipsScalarFieldEnum[]
  }

  /**
   * Users.players_as_guardian
   */
  export type Users$players_as_guardianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    where?: PlayerRelationShipsWhereInput
    orderBy?: PlayerRelationShipsOrderByWithRelationInput | PlayerRelationShipsOrderByWithRelationInput[]
    cursor?: PlayerRelationShipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerRelationShipsScalarFieldEnum | PlayerRelationShipsScalarFieldEnum[]
  }

  /**
   * Users.documents
   */
  export type Users$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    cursor?: DocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Users.medical_certificates
   */
  export type Users$medical_certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    where?: MedicalCertificatesWhereInput
    orderBy?: MedicalCertificatesOrderByWithRelationInput | MedicalCertificatesOrderByWithRelationInput[]
    cursor?: MedicalCertificatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalCertificatesScalarFieldEnum | MedicalCertificatesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
    expires_at: Date | null
    user_id: number | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
    expires_at: Date | null
    user_id: number | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires_at: number
    user_id: number
    createdAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires_at?: true
    user_id?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires_at?: true
    user_id?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires_at?: true
    user_id?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: $Enums.TokenType
    expires_at: Date
    user_id: number
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires_at?: boolean
    user_id?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires_at?: boolean
    user_id?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires_at?: boolean
    user_id?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires_at?: boolean
    user_id?: boolean
    createdAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expires_at" | "user_id" | "createdAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      type: $Enums.TokenType
      expires_at: Date
      user_id: number
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expires_at: FieldRef<"Token", 'DateTime'>
    readonly user_id: FieldRef<"Token", 'Int'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model PlayerRelationShips
   */

  export type AggregatePlayerRelationShips = {
    _count: PlayerRelationShipsCountAggregateOutputType | null
    _avg: PlayerRelationShipsAvgAggregateOutputType | null
    _sum: PlayerRelationShipsSumAggregateOutputType | null
    _min: PlayerRelationShipsMinAggregateOutputType | null
    _max: PlayerRelationShipsMaxAggregateOutputType | null
  }

  export type PlayerRelationShipsAvgAggregateOutputType = {
    id: number | null
    legal_guardian_id: number | null
    player_id: number | null
  }

  export type PlayerRelationShipsSumAggregateOutputType = {
    id: number | null
    legal_guardian_id: number | null
    player_id: number | null
  }

  export type PlayerRelationShipsMinAggregateOutputType = {
    id: number | null
    legal_guardian_id: number | null
    player_id: number | null
    relationship_type: $Enums.RelationshipType | null
  }

  export type PlayerRelationShipsMaxAggregateOutputType = {
    id: number | null
    legal_guardian_id: number | null
    player_id: number | null
    relationship_type: $Enums.RelationshipType | null
  }

  export type PlayerRelationShipsCountAggregateOutputType = {
    id: number
    legal_guardian_id: number
    player_id: number
    relationship_type: number
    _all: number
  }


  export type PlayerRelationShipsAvgAggregateInputType = {
    id?: true
    legal_guardian_id?: true
    player_id?: true
  }

  export type PlayerRelationShipsSumAggregateInputType = {
    id?: true
    legal_guardian_id?: true
    player_id?: true
  }

  export type PlayerRelationShipsMinAggregateInputType = {
    id?: true
    legal_guardian_id?: true
    player_id?: true
    relationship_type?: true
  }

  export type PlayerRelationShipsMaxAggregateInputType = {
    id?: true
    legal_guardian_id?: true
    player_id?: true
    relationship_type?: true
  }

  export type PlayerRelationShipsCountAggregateInputType = {
    id?: true
    legal_guardian_id?: true
    player_id?: true
    relationship_type?: true
    _all?: true
  }

  export type PlayerRelationShipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerRelationShips to aggregate.
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRelationShips to fetch.
     */
    orderBy?: PlayerRelationShipsOrderByWithRelationInput | PlayerRelationShipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerRelationShipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRelationShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerRelationShips
    **/
    _count?: true | PlayerRelationShipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerRelationShipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerRelationShipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerRelationShipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerRelationShipsMaxAggregateInputType
  }

  export type GetPlayerRelationShipsAggregateType<T extends PlayerRelationShipsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerRelationShips]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerRelationShips[P]>
      : GetScalarType<T[P], AggregatePlayerRelationShips[P]>
  }




  export type PlayerRelationShipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerRelationShipsWhereInput
    orderBy?: PlayerRelationShipsOrderByWithAggregationInput | PlayerRelationShipsOrderByWithAggregationInput[]
    by: PlayerRelationShipsScalarFieldEnum[] | PlayerRelationShipsScalarFieldEnum
    having?: PlayerRelationShipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerRelationShipsCountAggregateInputType | true
    _avg?: PlayerRelationShipsAvgAggregateInputType
    _sum?: PlayerRelationShipsSumAggregateInputType
    _min?: PlayerRelationShipsMinAggregateInputType
    _max?: PlayerRelationShipsMaxAggregateInputType
  }

  export type PlayerRelationShipsGroupByOutputType = {
    id: number
    legal_guardian_id: number
    player_id: number
    relationship_type: $Enums.RelationshipType
    _count: PlayerRelationShipsCountAggregateOutputType | null
    _avg: PlayerRelationShipsAvgAggregateOutputType | null
    _sum: PlayerRelationShipsSumAggregateOutputType | null
    _min: PlayerRelationShipsMinAggregateOutputType | null
    _max: PlayerRelationShipsMaxAggregateOutputType | null
  }

  type GetPlayerRelationShipsGroupByPayload<T extends PlayerRelationShipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerRelationShipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerRelationShipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerRelationShipsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerRelationShipsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerRelationShipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legal_guardian_id?: boolean
    player_id?: boolean
    relationship_type?: boolean
    player?: boolean | UsersDefaultArgs<ExtArgs>
    legalGuardian?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerRelationShips"]>

  export type PlayerRelationShipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legal_guardian_id?: boolean
    player_id?: boolean
    relationship_type?: boolean
    player?: boolean | UsersDefaultArgs<ExtArgs>
    legalGuardian?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerRelationShips"]>

  export type PlayerRelationShipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legal_guardian_id?: boolean
    player_id?: boolean
    relationship_type?: boolean
    player?: boolean | UsersDefaultArgs<ExtArgs>
    legalGuardian?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerRelationShips"]>

  export type PlayerRelationShipsSelectScalar = {
    id?: boolean
    legal_guardian_id?: boolean
    player_id?: boolean
    relationship_type?: boolean
  }

  export type PlayerRelationShipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legal_guardian_id" | "player_id" | "relationship_type", ExtArgs["result"]["playerRelationShips"]>
  export type PlayerRelationShipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UsersDefaultArgs<ExtArgs>
    legalGuardian?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PlayerRelationShipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UsersDefaultArgs<ExtArgs>
    legalGuardian?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PlayerRelationShipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UsersDefaultArgs<ExtArgs>
    legalGuardian?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PlayerRelationShipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerRelationShips"
    objects: {
      player: Prisma.$UsersPayload<ExtArgs>
      legalGuardian: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legal_guardian_id: number
      player_id: number
      relationship_type: $Enums.RelationshipType
    }, ExtArgs["result"]["playerRelationShips"]>
    composites: {}
  }

  type PlayerRelationShipsGetPayload<S extends boolean | null | undefined | PlayerRelationShipsDefaultArgs> = $Result.GetResult<Prisma.$PlayerRelationShipsPayload, S>

  type PlayerRelationShipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerRelationShipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerRelationShipsCountAggregateInputType | true
    }

  export interface PlayerRelationShipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerRelationShips'], meta: { name: 'PlayerRelationShips' } }
    /**
     * Find zero or one PlayerRelationShips that matches the filter.
     * @param {PlayerRelationShipsFindUniqueArgs} args - Arguments to find a PlayerRelationShips
     * @example
     * // Get one PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerRelationShipsFindUniqueArgs>(args: SelectSubset<T, PlayerRelationShipsFindUniqueArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerRelationShips that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerRelationShipsFindUniqueOrThrowArgs} args - Arguments to find a PlayerRelationShips
     * @example
     * // Get one PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerRelationShipsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerRelationShipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerRelationShips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsFindFirstArgs} args - Arguments to find a PlayerRelationShips
     * @example
     * // Get one PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerRelationShipsFindFirstArgs>(args?: SelectSubset<T, PlayerRelationShipsFindFirstArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerRelationShips that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsFindFirstOrThrowArgs} args - Arguments to find a PlayerRelationShips
     * @example
     * // Get one PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerRelationShipsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerRelationShipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerRelationShips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.findMany()
     * 
     * // Get first 10 PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerRelationShipsWithIdOnly = await prisma.playerRelationShips.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerRelationShipsFindManyArgs>(args?: SelectSubset<T, PlayerRelationShipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerRelationShips.
     * @param {PlayerRelationShipsCreateArgs} args - Arguments to create a PlayerRelationShips.
     * @example
     * // Create one PlayerRelationShips
     * const PlayerRelationShips = await prisma.playerRelationShips.create({
     *   data: {
     *     // ... data to create a PlayerRelationShips
     *   }
     * })
     * 
     */
    create<T extends PlayerRelationShipsCreateArgs>(args: SelectSubset<T, PlayerRelationShipsCreateArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerRelationShips.
     * @param {PlayerRelationShipsCreateManyArgs} args - Arguments to create many PlayerRelationShips.
     * @example
     * // Create many PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerRelationShipsCreateManyArgs>(args?: SelectSubset<T, PlayerRelationShipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerRelationShips and returns the data saved in the database.
     * @param {PlayerRelationShipsCreateManyAndReturnArgs} args - Arguments to create many PlayerRelationShips.
     * @example
     * // Create many PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerRelationShips and only return the `id`
     * const playerRelationShipsWithIdOnly = await prisma.playerRelationShips.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerRelationShipsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerRelationShipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerRelationShips.
     * @param {PlayerRelationShipsDeleteArgs} args - Arguments to delete one PlayerRelationShips.
     * @example
     * // Delete one PlayerRelationShips
     * const PlayerRelationShips = await prisma.playerRelationShips.delete({
     *   where: {
     *     // ... filter to delete one PlayerRelationShips
     *   }
     * })
     * 
     */
    delete<T extends PlayerRelationShipsDeleteArgs>(args: SelectSubset<T, PlayerRelationShipsDeleteArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerRelationShips.
     * @param {PlayerRelationShipsUpdateArgs} args - Arguments to update one PlayerRelationShips.
     * @example
     * // Update one PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerRelationShipsUpdateArgs>(args: SelectSubset<T, PlayerRelationShipsUpdateArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerRelationShips.
     * @param {PlayerRelationShipsDeleteManyArgs} args - Arguments to filter PlayerRelationShips to delete.
     * @example
     * // Delete a few PlayerRelationShips
     * const { count } = await prisma.playerRelationShips.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerRelationShipsDeleteManyArgs>(args?: SelectSubset<T, PlayerRelationShipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerRelationShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerRelationShipsUpdateManyArgs>(args: SelectSubset<T, PlayerRelationShipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerRelationShips and returns the data updated in the database.
     * @param {PlayerRelationShipsUpdateManyAndReturnArgs} args - Arguments to update many PlayerRelationShips.
     * @example
     * // Update many PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerRelationShips and only return the `id`
     * const playerRelationShipsWithIdOnly = await prisma.playerRelationShips.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerRelationShipsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerRelationShipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerRelationShips.
     * @param {PlayerRelationShipsUpsertArgs} args - Arguments to update or create a PlayerRelationShips.
     * @example
     * // Update or create a PlayerRelationShips
     * const playerRelationShips = await prisma.playerRelationShips.upsert({
     *   create: {
     *     // ... data to create a PlayerRelationShips
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerRelationShips we want to update
     *   }
     * })
     */
    upsert<T extends PlayerRelationShipsUpsertArgs>(args: SelectSubset<T, PlayerRelationShipsUpsertArgs<ExtArgs>>): Prisma__PlayerRelationShipsClient<$Result.GetResult<Prisma.$PlayerRelationShipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerRelationShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsCountArgs} args - Arguments to filter PlayerRelationShips to count.
     * @example
     * // Count the number of PlayerRelationShips
     * const count = await prisma.playerRelationShips.count({
     *   where: {
     *     // ... the filter for the PlayerRelationShips we want to count
     *   }
     * })
    **/
    count<T extends PlayerRelationShipsCountArgs>(
      args?: Subset<T, PlayerRelationShipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerRelationShipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerRelationShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerRelationShipsAggregateArgs>(args: Subset<T, PlayerRelationShipsAggregateArgs>): Prisma.PrismaPromise<GetPlayerRelationShipsAggregateType<T>>

    /**
     * Group by PlayerRelationShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRelationShipsGroupByArgs} args - Group by arguments.
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
      T extends PlayerRelationShipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerRelationShipsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerRelationShipsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerRelationShipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerRelationShipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerRelationShips model
   */
  readonly fields: PlayerRelationShipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerRelationShips.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerRelationShipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    legalGuardian<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlayerRelationShips model
   */
  interface PlayerRelationShipsFieldRefs {
    readonly id: FieldRef<"PlayerRelationShips", 'Int'>
    readonly legal_guardian_id: FieldRef<"PlayerRelationShips", 'Int'>
    readonly player_id: FieldRef<"PlayerRelationShips", 'Int'>
    readonly relationship_type: FieldRef<"PlayerRelationShips", 'RelationshipType'>
  }
    

  // Custom InputTypes
  /**
   * PlayerRelationShips findUnique
   */
  export type PlayerRelationShipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRelationShips to fetch.
     */
    where: PlayerRelationShipsWhereUniqueInput
  }

  /**
   * PlayerRelationShips findUniqueOrThrow
   */
  export type PlayerRelationShipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRelationShips to fetch.
     */
    where: PlayerRelationShipsWhereUniqueInput
  }

  /**
   * PlayerRelationShips findFirst
   */
  export type PlayerRelationShipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRelationShips to fetch.
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRelationShips to fetch.
     */
    orderBy?: PlayerRelationShipsOrderByWithRelationInput | PlayerRelationShipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerRelationShips.
     */
    cursor?: PlayerRelationShipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRelationShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerRelationShips.
     */
    distinct?: PlayerRelationShipsScalarFieldEnum | PlayerRelationShipsScalarFieldEnum[]
  }

  /**
   * PlayerRelationShips findFirstOrThrow
   */
  export type PlayerRelationShipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRelationShips to fetch.
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRelationShips to fetch.
     */
    orderBy?: PlayerRelationShipsOrderByWithRelationInput | PlayerRelationShipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerRelationShips.
     */
    cursor?: PlayerRelationShipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRelationShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerRelationShips.
     */
    distinct?: PlayerRelationShipsScalarFieldEnum | PlayerRelationShipsScalarFieldEnum[]
  }

  /**
   * PlayerRelationShips findMany
   */
  export type PlayerRelationShipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRelationShips to fetch.
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRelationShips to fetch.
     */
    orderBy?: PlayerRelationShipsOrderByWithRelationInput | PlayerRelationShipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerRelationShips.
     */
    cursor?: PlayerRelationShipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRelationShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRelationShips.
     */
    skip?: number
    distinct?: PlayerRelationShipsScalarFieldEnum | PlayerRelationShipsScalarFieldEnum[]
  }

  /**
   * PlayerRelationShips create
   */
  export type PlayerRelationShipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerRelationShips.
     */
    data: XOR<PlayerRelationShipsCreateInput, PlayerRelationShipsUncheckedCreateInput>
  }

  /**
   * PlayerRelationShips createMany
   */
  export type PlayerRelationShipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerRelationShips.
     */
    data: PlayerRelationShipsCreateManyInput | PlayerRelationShipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerRelationShips createManyAndReturn
   */
  export type PlayerRelationShipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerRelationShips.
     */
    data: PlayerRelationShipsCreateManyInput | PlayerRelationShipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerRelationShips update
   */
  export type PlayerRelationShipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerRelationShips.
     */
    data: XOR<PlayerRelationShipsUpdateInput, PlayerRelationShipsUncheckedUpdateInput>
    /**
     * Choose, which PlayerRelationShips to update.
     */
    where: PlayerRelationShipsWhereUniqueInput
  }

  /**
   * PlayerRelationShips updateMany
   */
  export type PlayerRelationShipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerRelationShips.
     */
    data: XOR<PlayerRelationShipsUpdateManyMutationInput, PlayerRelationShipsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerRelationShips to update
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * Limit how many PlayerRelationShips to update.
     */
    limit?: number
  }

  /**
   * PlayerRelationShips updateManyAndReturn
   */
  export type PlayerRelationShipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerRelationShips.
     */
    data: XOR<PlayerRelationShipsUpdateManyMutationInput, PlayerRelationShipsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerRelationShips to update
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * Limit how many PlayerRelationShips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerRelationShips upsert
   */
  export type PlayerRelationShipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerRelationShips to update in case it exists.
     */
    where: PlayerRelationShipsWhereUniqueInput
    /**
     * In case the PlayerRelationShips found by the `where` argument doesn't exist, create a new PlayerRelationShips with this data.
     */
    create: XOR<PlayerRelationShipsCreateInput, PlayerRelationShipsUncheckedCreateInput>
    /**
     * In case the PlayerRelationShips was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerRelationShipsUpdateInput, PlayerRelationShipsUncheckedUpdateInput>
  }

  /**
   * PlayerRelationShips delete
   */
  export type PlayerRelationShipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
    /**
     * Filter which PlayerRelationShips to delete.
     */
    where: PlayerRelationShipsWhereUniqueInput
  }

  /**
   * PlayerRelationShips deleteMany
   */
  export type PlayerRelationShipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerRelationShips to delete
     */
    where?: PlayerRelationShipsWhereInput
    /**
     * Limit how many PlayerRelationShips to delete.
     */
    limit?: number
  }

  /**
   * PlayerRelationShips without action
   */
  export type PlayerRelationShipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRelationShips
     */
    select?: PlayerRelationShipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRelationShips
     */
    omit?: PlayerRelationShipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRelationShipsInclude<ExtArgs> | null
  }


  /**
   * Model Documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    file_path: string | null
    document_type: $Enums.DocumentType | null
    uploaded_by: string | null
    created_At: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    file_path: string | null
    document_type: $Enums.DocumentType | null
    uploaded_by: string | null
    created_At: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    file_path: number
    document_type: number
    uploaded_by: number
    created_At: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    file_path?: true
    document_type?: true
    uploaded_by?: true
    created_At?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    file_path?: true
    document_type?: true
    uploaded_by?: true
    created_At?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    file_path?: true
    document_type?: true
    uploaded_by?: true
    created_At?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to aggregate.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type DocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithAggregationInput | DocumentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: DocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: number
    user_id: number
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At: Date
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends DocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type DocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    file_path?: boolean
    document_type?: boolean
    uploaded_by?: boolean
    created_At?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    medical_certificates?: boolean | Documents$medical_certificatesArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    file_path?: boolean
    document_type?: boolean
    uploaded_by?: boolean
    created_At?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    file_path?: boolean
    document_type?: boolean
    uploaded_by?: boolean
    created_At?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    file_path?: boolean
    document_type?: boolean
    uploaded_by?: boolean
    created_At?: boolean
  }

  export type DocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "file_path" | "document_type" | "uploaded_by" | "created_At", ExtArgs["result"]["documents"]>
  export type DocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    medical_certificates?: boolean | Documents$medical_certificatesArgs<ExtArgs>
  }
  export type DocumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DocumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documents"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      medical_certificates: Prisma.$MedicalCertificatesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      file_path: string
      document_type: $Enums.DocumentType
      uploaded_by: string
      created_At: Date
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type DocumentsGetPayload<S extends boolean | null | undefined | DocumentsDefaultArgs> = $Result.GetResult<Prisma.$DocumentsPayload, S>

  type DocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface DocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documents'], meta: { name: 'Documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {DocumentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentsFindUniqueArgs>(args: SelectSubset<T, DocumentsFindUniqueArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentsFindFirstArgs>(args?: SelectSubset<T, DocumentsFindFirstArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentsFindManyArgs>(args?: SelectSubset<T, DocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {DocumentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends DocumentsCreateArgs>(args: SelectSubset<T, DocumentsCreateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentsCreateManyArgs>(args?: SelectSubset<T, DocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentsCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents.
     * @param {DocumentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends DocumentsDeleteArgs>(args: SelectSubset<T, DocumentsDeleteArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {DocumentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentsUpdateArgs>(args: SelectSubset<T, DocumentsUpdateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentsDeleteManyArgs>(args?: SelectSubset<T, DocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentsUpdateManyArgs>(args: SelectSubset<T, DocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentsUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents.
     * @param {DocumentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends DocumentsUpsertArgs>(args: SelectSubset<T, DocumentsUpsertArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentsCountArgs>(
      args?: Subset<T, DocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsGroupByArgs} args - Group by arguments.
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
      T extends DocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentsGroupByArgs['orderBy'] }
        : { orderBy?: DocumentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documents model
   */
  readonly fields: DocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medical_certificates<T extends Documents$medical_certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Documents$medical_certificatesArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Documents model
   */
  interface DocumentsFieldRefs {
    readonly id: FieldRef<"Documents", 'Int'>
    readonly user_id: FieldRef<"Documents", 'Int'>
    readonly title: FieldRef<"Documents", 'String'>
    readonly file_path: FieldRef<"Documents", 'String'>
    readonly document_type: FieldRef<"Documents", 'DocumentType'>
    readonly uploaded_by: FieldRef<"Documents", 'String'>
    readonly created_At: FieldRef<"Documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documents findUnique
   */
  export type DocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findUniqueOrThrow
   */
  export type DocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findFirst
   */
  export type DocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findFirstOrThrow
   */
  export type DocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findMany
   */
  export type DocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents create
   */
  export type DocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Documents.
     */
    data: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
  }

  /**
   * Documents createMany
   */
  export type DocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents createManyAndReturn
   */
  export type DocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documents update
   */
  export type DocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Documents.
     */
    data: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
    /**
     * Choose, which Documents to update.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents updateMany
   */
  export type DocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Documents updateManyAndReturn
   */
  export type DocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documents upsert
   */
  export type DocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Documents to update in case it exists.
     */
    where: DocumentsWhereUniqueInput
    /**
     * In case the Documents found by the `where` argument doesn't exist, create a new Documents with this data.
     */
    create: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
    /**
     * In case the Documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
  }

  /**
   * Documents delete
   */
  export type DocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter which Documents to delete.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents deleteMany
   */
  export type DocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Documents.medical_certificates
   */
  export type Documents$medical_certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    where?: MedicalCertificatesWhereInput
  }

  /**
   * Documents without action
   */
  export type DocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
  }


  /**
   * Model MedicalCertificates
   */

  export type AggregateMedicalCertificates = {
    _count: MedicalCertificatesCountAggregateOutputType | null
    _avg: MedicalCertificatesAvgAggregateOutputType | null
    _sum: MedicalCertificatesSumAggregateOutputType | null
    _min: MedicalCertificatesMinAggregateOutputType | null
    _max: MedicalCertificatesMaxAggregateOutputType | null
  }

  export type MedicalCertificatesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    document_id: number | null
  }

  export type MedicalCertificatesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    document_id: number | null
  }

  export type MedicalCertificatesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    issue_date: Date | null
    document_id: number | null
    is_cardiologist_cert: boolean | null
  }

  export type MedicalCertificatesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    issue_date: Date | null
    document_id: number | null
    is_cardiologist_cert: boolean | null
  }

  export type MedicalCertificatesCountAggregateOutputType = {
    id: number
    user_id: number
    issue_date: number
    document_id: number
    is_cardiologist_cert: number
    _all: number
  }


  export type MedicalCertificatesAvgAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
  }

  export type MedicalCertificatesSumAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
  }

  export type MedicalCertificatesMinAggregateInputType = {
    id?: true
    user_id?: true
    issue_date?: true
    document_id?: true
    is_cardiologist_cert?: true
  }

  export type MedicalCertificatesMaxAggregateInputType = {
    id?: true
    user_id?: true
    issue_date?: true
    document_id?: true
    is_cardiologist_cert?: true
  }

  export type MedicalCertificatesCountAggregateInputType = {
    id?: true
    user_id?: true
    issue_date?: true
    document_id?: true
    is_cardiologist_cert?: true
    _all?: true
  }

  export type MedicalCertificatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCertificates to aggregate.
     */
    where?: MedicalCertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificatesOrderByWithRelationInput | MedicalCertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalCertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalCertificates
    **/
    _count?: true | MedicalCertificatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalCertificatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalCertificatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalCertificatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalCertificatesMaxAggregateInputType
  }

  export type GetMedicalCertificatesAggregateType<T extends MedicalCertificatesAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalCertificates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalCertificates[P]>
      : GetScalarType<T[P], AggregateMedicalCertificates[P]>
  }




  export type MedicalCertificatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCertificatesWhereInput
    orderBy?: MedicalCertificatesOrderByWithAggregationInput | MedicalCertificatesOrderByWithAggregationInput[]
    by: MedicalCertificatesScalarFieldEnum[] | MedicalCertificatesScalarFieldEnum
    having?: MedicalCertificatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalCertificatesCountAggregateInputType | true
    _avg?: MedicalCertificatesAvgAggregateInputType
    _sum?: MedicalCertificatesSumAggregateInputType
    _min?: MedicalCertificatesMinAggregateInputType
    _max?: MedicalCertificatesMaxAggregateInputType
  }

  export type MedicalCertificatesGroupByOutputType = {
    id: number
    user_id: number
    issue_date: Date
    document_id: number
    is_cardiologist_cert: boolean
    _count: MedicalCertificatesCountAggregateOutputType | null
    _avg: MedicalCertificatesAvgAggregateOutputType | null
    _sum: MedicalCertificatesSumAggregateOutputType | null
    _min: MedicalCertificatesMinAggregateOutputType | null
    _max: MedicalCertificatesMaxAggregateOutputType | null
  }

  type GetMedicalCertificatesGroupByPayload<T extends MedicalCertificatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalCertificatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalCertificatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalCertificatesGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalCertificatesGroupByOutputType[P]>
        }
      >
    >


  export type MedicalCertificatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    issue_date?: boolean
    document_id?: boolean
    is_cardiologist_cert?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    MedicalDocument?: boolean | DocumentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCertificates"]>

  export type MedicalCertificatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    issue_date?: boolean
    document_id?: boolean
    is_cardiologist_cert?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    MedicalDocument?: boolean | DocumentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCertificates"]>

  export type MedicalCertificatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    issue_date?: boolean
    document_id?: boolean
    is_cardiologist_cert?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    MedicalDocument?: boolean | DocumentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCertificates"]>

  export type MedicalCertificatesSelectScalar = {
    id?: boolean
    user_id?: boolean
    issue_date?: boolean
    document_id?: boolean
    is_cardiologist_cert?: boolean
  }

  export type MedicalCertificatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "issue_date" | "document_id" | "is_cardiologist_cert", ExtArgs["result"]["medicalCertificates"]>
  export type MedicalCertificatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    MedicalDocument?: boolean | DocumentsDefaultArgs<ExtArgs>
  }
  export type MedicalCertificatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    MedicalDocument?: boolean | DocumentsDefaultArgs<ExtArgs>
  }
  export type MedicalCertificatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    MedicalDocument?: boolean | DocumentsDefaultArgs<ExtArgs>
  }

  export type $MedicalCertificatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalCertificates"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      MedicalDocument: Prisma.$DocumentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      issue_date: Date
      document_id: number
      is_cardiologist_cert: boolean
    }, ExtArgs["result"]["medicalCertificates"]>
    composites: {}
  }

  type MedicalCertificatesGetPayload<S extends boolean | null | undefined | MedicalCertificatesDefaultArgs> = $Result.GetResult<Prisma.$MedicalCertificatesPayload, S>

  type MedicalCertificatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalCertificatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalCertificatesCountAggregateInputType | true
    }

  export interface MedicalCertificatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalCertificates'], meta: { name: 'MedicalCertificates' } }
    /**
     * Find zero or one MedicalCertificates that matches the filter.
     * @param {MedicalCertificatesFindUniqueArgs} args - Arguments to find a MedicalCertificates
     * @example
     * // Get one MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalCertificatesFindUniqueArgs>(args: SelectSubset<T, MedicalCertificatesFindUniqueArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalCertificates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalCertificatesFindUniqueOrThrowArgs} args - Arguments to find a MedicalCertificates
     * @example
     * // Get one MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalCertificatesFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalCertificatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalCertificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesFindFirstArgs} args - Arguments to find a MedicalCertificates
     * @example
     * // Get one MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalCertificatesFindFirstArgs>(args?: SelectSubset<T, MedicalCertificatesFindFirstArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalCertificates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesFindFirstOrThrowArgs} args - Arguments to find a MedicalCertificates
     * @example
     * // Get one MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalCertificatesFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalCertificatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalCertificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.findMany()
     * 
     * // Get first 10 MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalCertificatesWithIdOnly = await prisma.medicalCertificates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalCertificatesFindManyArgs>(args?: SelectSubset<T, MedicalCertificatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalCertificates.
     * @param {MedicalCertificatesCreateArgs} args - Arguments to create a MedicalCertificates.
     * @example
     * // Create one MedicalCertificates
     * const MedicalCertificates = await prisma.medicalCertificates.create({
     *   data: {
     *     // ... data to create a MedicalCertificates
     *   }
     * })
     * 
     */
    create<T extends MedicalCertificatesCreateArgs>(args: SelectSubset<T, MedicalCertificatesCreateArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalCertificates.
     * @param {MedicalCertificatesCreateManyArgs} args - Arguments to create many MedicalCertificates.
     * @example
     * // Create many MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalCertificatesCreateManyArgs>(args?: SelectSubset<T, MedicalCertificatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalCertificates and returns the data saved in the database.
     * @param {MedicalCertificatesCreateManyAndReturnArgs} args - Arguments to create many MedicalCertificates.
     * @example
     * // Create many MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalCertificates and only return the `id`
     * const medicalCertificatesWithIdOnly = await prisma.medicalCertificates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalCertificatesCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalCertificatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalCertificates.
     * @param {MedicalCertificatesDeleteArgs} args - Arguments to delete one MedicalCertificates.
     * @example
     * // Delete one MedicalCertificates
     * const MedicalCertificates = await prisma.medicalCertificates.delete({
     *   where: {
     *     // ... filter to delete one MedicalCertificates
     *   }
     * })
     * 
     */
    delete<T extends MedicalCertificatesDeleteArgs>(args: SelectSubset<T, MedicalCertificatesDeleteArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalCertificates.
     * @param {MedicalCertificatesUpdateArgs} args - Arguments to update one MedicalCertificates.
     * @example
     * // Update one MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalCertificatesUpdateArgs>(args: SelectSubset<T, MedicalCertificatesUpdateArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalCertificates.
     * @param {MedicalCertificatesDeleteManyArgs} args - Arguments to filter MedicalCertificates to delete.
     * @example
     * // Delete a few MedicalCertificates
     * const { count } = await prisma.medicalCertificates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalCertificatesDeleteManyArgs>(args?: SelectSubset<T, MedicalCertificatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalCertificatesUpdateManyArgs>(args: SelectSubset<T, MedicalCertificatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalCertificates and returns the data updated in the database.
     * @param {MedicalCertificatesUpdateManyAndReturnArgs} args - Arguments to update many MedicalCertificates.
     * @example
     * // Update many MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalCertificates and only return the `id`
     * const medicalCertificatesWithIdOnly = await prisma.medicalCertificates.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalCertificatesUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalCertificatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalCertificates.
     * @param {MedicalCertificatesUpsertArgs} args - Arguments to update or create a MedicalCertificates.
     * @example
     * // Update or create a MedicalCertificates
     * const medicalCertificates = await prisma.medicalCertificates.upsert({
     *   create: {
     *     // ... data to create a MedicalCertificates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalCertificates we want to update
     *   }
     * })
     */
    upsert<T extends MedicalCertificatesUpsertArgs>(args: SelectSubset<T, MedicalCertificatesUpsertArgs<ExtArgs>>): Prisma__MedicalCertificatesClient<$Result.GetResult<Prisma.$MedicalCertificatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesCountArgs} args - Arguments to filter MedicalCertificates to count.
     * @example
     * // Count the number of MedicalCertificates
     * const count = await prisma.medicalCertificates.count({
     *   where: {
     *     // ... the filter for the MedicalCertificates we want to count
     *   }
     * })
    **/
    count<T extends MedicalCertificatesCountArgs>(
      args?: Subset<T, MedicalCertificatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalCertificatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalCertificatesAggregateArgs>(args: Subset<T, MedicalCertificatesAggregateArgs>): Prisma.PrismaPromise<GetMedicalCertificatesAggregateType<T>>

    /**
     * Group by MedicalCertificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCertificatesGroupByArgs} args - Group by arguments.
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
      T extends MedicalCertificatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalCertificatesGroupByArgs['orderBy'] }
        : { orderBy?: MedicalCertificatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalCertificatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalCertificatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalCertificates model
   */
  readonly fields: MedicalCertificatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalCertificates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalCertificatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MedicalDocument<T extends DocumentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentsDefaultArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalCertificates model
   */
  interface MedicalCertificatesFieldRefs {
    readonly id: FieldRef<"MedicalCertificates", 'Int'>
    readonly user_id: FieldRef<"MedicalCertificates", 'Int'>
    readonly issue_date: FieldRef<"MedicalCertificates", 'DateTime'>
    readonly document_id: FieldRef<"MedicalCertificates", 'Int'>
    readonly is_cardiologist_cert: FieldRef<"MedicalCertificates", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MedicalCertificates findUnique
   */
  export type MedicalCertificatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificates to fetch.
     */
    where: MedicalCertificatesWhereUniqueInput
  }

  /**
   * MedicalCertificates findUniqueOrThrow
   */
  export type MedicalCertificatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificates to fetch.
     */
    where: MedicalCertificatesWhereUniqueInput
  }

  /**
   * MedicalCertificates findFirst
   */
  export type MedicalCertificatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificates to fetch.
     */
    where?: MedicalCertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificatesOrderByWithRelationInput | MedicalCertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCertificates.
     */
    cursor?: MedicalCertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCertificates.
     */
    distinct?: MedicalCertificatesScalarFieldEnum | MedicalCertificatesScalarFieldEnum[]
  }

  /**
   * MedicalCertificates findFirstOrThrow
   */
  export type MedicalCertificatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificates to fetch.
     */
    where?: MedicalCertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificatesOrderByWithRelationInput | MedicalCertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCertificates.
     */
    cursor?: MedicalCertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCertificates.
     */
    distinct?: MedicalCertificatesScalarFieldEnum | MedicalCertificatesScalarFieldEnum[]
  }

  /**
   * MedicalCertificates findMany
   */
  export type MedicalCertificatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCertificates to fetch.
     */
    where?: MedicalCertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCertificates to fetch.
     */
    orderBy?: MedicalCertificatesOrderByWithRelationInput | MedicalCertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalCertificates.
     */
    cursor?: MedicalCertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCertificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCertificates.
     */
    skip?: number
    distinct?: MedicalCertificatesScalarFieldEnum | MedicalCertificatesScalarFieldEnum[]
  }

  /**
   * MedicalCertificates create
   */
  export type MedicalCertificatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalCertificates.
     */
    data: XOR<MedicalCertificatesCreateInput, MedicalCertificatesUncheckedCreateInput>
  }

  /**
   * MedicalCertificates createMany
   */
  export type MedicalCertificatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalCertificates.
     */
    data: MedicalCertificatesCreateManyInput | MedicalCertificatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalCertificates createManyAndReturn
   */
  export type MedicalCertificatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalCertificates.
     */
    data: MedicalCertificatesCreateManyInput | MedicalCertificatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalCertificates update
   */
  export type MedicalCertificatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalCertificates.
     */
    data: XOR<MedicalCertificatesUpdateInput, MedicalCertificatesUncheckedUpdateInput>
    /**
     * Choose, which MedicalCertificates to update.
     */
    where: MedicalCertificatesWhereUniqueInput
  }

  /**
   * MedicalCertificates updateMany
   */
  export type MedicalCertificatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalCertificates.
     */
    data: XOR<MedicalCertificatesUpdateManyMutationInput, MedicalCertificatesUncheckedUpdateManyInput>
    /**
     * Filter which MedicalCertificates to update
     */
    where?: MedicalCertificatesWhereInput
    /**
     * Limit how many MedicalCertificates to update.
     */
    limit?: number
  }

  /**
   * MedicalCertificates updateManyAndReturn
   */
  export type MedicalCertificatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * The data used to update MedicalCertificates.
     */
    data: XOR<MedicalCertificatesUpdateManyMutationInput, MedicalCertificatesUncheckedUpdateManyInput>
    /**
     * Filter which MedicalCertificates to update
     */
    where?: MedicalCertificatesWhereInput
    /**
     * Limit how many MedicalCertificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalCertificates upsert
   */
  export type MedicalCertificatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalCertificates to update in case it exists.
     */
    where: MedicalCertificatesWhereUniqueInput
    /**
     * In case the MedicalCertificates found by the `where` argument doesn't exist, create a new MedicalCertificates with this data.
     */
    create: XOR<MedicalCertificatesCreateInput, MedicalCertificatesUncheckedCreateInput>
    /**
     * In case the MedicalCertificates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalCertificatesUpdateInput, MedicalCertificatesUncheckedUpdateInput>
  }

  /**
   * MedicalCertificates delete
   */
  export type MedicalCertificatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
    /**
     * Filter which MedicalCertificates to delete.
     */
    where: MedicalCertificatesWhereUniqueInput
  }

  /**
   * MedicalCertificates deleteMany
   */
  export type MedicalCertificatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCertificates to delete
     */
    where?: MedicalCertificatesWhereInput
    /**
     * Limit how many MedicalCertificates to delete.
     */
    limit?: number
  }

  /**
   * MedicalCertificates without action
   */
  export type MedicalCertificatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCertificates
     */
    select?: MedicalCertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCertificates
     */
    omit?: MedicalCertificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCertificatesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    role: 'role',
    date_of_birth: 'date_of_birth',
    place_of_birth: 'place_of_birth',
    gender: 'gender',
    address: 'address',
    phone_number: 'phone_number',
    blood_type: 'blood_type',
    picture_url: 'picture_url',
    nationality: 'nationality',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    email_verified_at: 'email_verified_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires_at: 'expires_at',
    user_id: 'user_id',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PlayerRelationShipsScalarFieldEnum: {
    id: 'id',
    legal_guardian_id: 'legal_guardian_id',
    player_id: 'player_id',
    relationship_type: 'relationship_type'
  };

  export type PlayerRelationShipsScalarFieldEnum = (typeof PlayerRelationShipsScalarFieldEnum)[keyof typeof PlayerRelationShipsScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    file_path: 'file_path',
    document_type: 'document_type',
    uploaded_by: 'uploaded_by',
    created_At: 'created_At'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const MedicalCertificatesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    issue_date: 'issue_date',
    document_id: 'document_id',
    is_cardiologist_cert: 'is_cardiologist_cert'
  };

  export type MedicalCertificatesScalarFieldEnum = (typeof MedicalCertificatesScalarFieldEnum)[keyof typeof MedicalCertificatesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'userRole'
   */
  export type EnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole'>
    


  /**
   * Reference to a field of type 'userRole[]'
   */
  export type ListEnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'gender'
   */
  export type EnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender'>
    


  /**
   * Reference to a field of type 'gender[]'
   */
  export type ListEnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'RelationshipType'
   */
  export type EnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType'>
    


  /**
   * Reference to a field of type 'RelationshipType[]'
   */
  export type ListEnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumuserRoleFilter<"Users"> | $Enums.userRole
    date_of_birth?: DateTimeFilter<"Users"> | Date | string
    place_of_birth?: StringFilter<"Users"> | string
    gender?: EnumgenderFilter<"Users"> | $Enums.gender
    address?: StringFilter<"Users"> | string
    phone_number?: StringFilter<"Users"> | string
    blood_type?: StringNullableFilter<"Users"> | string | null
    picture_url?: StringNullableFilter<"Users"> | string | null
    nationality?: StringFilter<"Users"> | string
    is_active?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    email_verified_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    tokens?: TokenListRelationFilter
    legal_guardian_of?: PlayerRelationShipsListRelationFilter
    players_as_guardian?: PlayerRelationShipsListRelationFilter
    documents?: DocumentsListRelationFilter
    medical_certificates?: MedicalCertificatesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    blood_type?: SortOrderInput | SortOrder
    picture_url?: SortOrderInput | SortOrder
    nationality?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    tokens?: TokenOrderByRelationAggregateInput
    legal_guardian_of?: PlayerRelationShipsOrderByRelationAggregateInput
    players_as_guardian?: PlayerRelationShipsOrderByRelationAggregateInput
    documents?: DocumentsOrderByRelationAggregateInput
    medical_certificates?: MedicalCertificatesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumuserRoleFilter<"Users"> | $Enums.userRole
    date_of_birth?: DateTimeFilter<"Users"> | Date | string
    place_of_birth?: StringFilter<"Users"> | string
    gender?: EnumgenderFilter<"Users"> | $Enums.gender
    address?: StringFilter<"Users"> | string
    phone_number?: StringFilter<"Users"> | string
    blood_type?: StringNullableFilter<"Users"> | string | null
    picture_url?: StringNullableFilter<"Users"> | string | null
    nationality?: StringFilter<"Users"> | string
    is_active?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    email_verified_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    tokens?: TokenListRelationFilter
    legal_guardian_of?: PlayerRelationShipsListRelationFilter
    players_as_guardian?: PlayerRelationShipsListRelationFilter
    documents?: DocumentsListRelationFilter
    medical_certificates?: MedicalCertificatesListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    blood_type?: SortOrderInput | SortOrder
    picture_url?: SortOrderInput | SortOrder
    nationality?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumuserRoleWithAggregatesFilter<"Users"> | $Enums.userRole
    date_of_birth?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    place_of_birth?: StringWithAggregatesFilter<"Users"> | string
    gender?: EnumgenderWithAggregatesFilter<"Users"> | $Enums.gender
    address?: StringWithAggregatesFilter<"Users"> | string
    phone_number?: StringWithAggregatesFilter<"Users"> | string
    blood_type?: StringNullableWithAggregatesFilter<"Users"> | string | null
    picture_url?: StringNullableWithAggregatesFilter<"Users"> | string | null
    nationality?: StringWithAggregatesFilter<"Users"> | string
    is_active?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires_at?: DateTimeFilter<"Token"> | Date | string
    user_id?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires_at?: DateTimeFilter<"Token"> | Date | string
    user_id?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expires_at?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    user_id?: IntWithAggregatesFilter<"Token"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type PlayerRelationShipsWhereInput = {
    AND?: PlayerRelationShipsWhereInput | PlayerRelationShipsWhereInput[]
    OR?: PlayerRelationShipsWhereInput[]
    NOT?: PlayerRelationShipsWhereInput | PlayerRelationShipsWhereInput[]
    id?: IntFilter<"PlayerRelationShips"> | number
    legal_guardian_id?: IntFilter<"PlayerRelationShips"> | number
    player_id?: IntFilter<"PlayerRelationShips"> | number
    relationship_type?: EnumRelationshipTypeFilter<"PlayerRelationShips"> | $Enums.RelationshipType
    player?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    legalGuardian?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PlayerRelationShipsOrderByWithRelationInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
    relationship_type?: SortOrder
    player?: UsersOrderByWithRelationInput
    legalGuardian?: UsersOrderByWithRelationInput
  }

  export type PlayerRelationShipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    player_id?: number
    AND?: PlayerRelationShipsWhereInput | PlayerRelationShipsWhereInput[]
    OR?: PlayerRelationShipsWhereInput[]
    NOT?: PlayerRelationShipsWhereInput | PlayerRelationShipsWhereInput[]
    legal_guardian_id?: IntFilter<"PlayerRelationShips"> | number
    relationship_type?: EnumRelationshipTypeFilter<"PlayerRelationShips"> | $Enums.RelationshipType
    player?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    legalGuardian?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "player_id">

  export type PlayerRelationShipsOrderByWithAggregationInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
    relationship_type?: SortOrder
    _count?: PlayerRelationShipsCountOrderByAggregateInput
    _avg?: PlayerRelationShipsAvgOrderByAggregateInput
    _max?: PlayerRelationShipsMaxOrderByAggregateInput
    _min?: PlayerRelationShipsMinOrderByAggregateInput
    _sum?: PlayerRelationShipsSumOrderByAggregateInput
  }

  export type PlayerRelationShipsScalarWhereWithAggregatesInput = {
    AND?: PlayerRelationShipsScalarWhereWithAggregatesInput | PlayerRelationShipsScalarWhereWithAggregatesInput[]
    OR?: PlayerRelationShipsScalarWhereWithAggregatesInput[]
    NOT?: PlayerRelationShipsScalarWhereWithAggregatesInput | PlayerRelationShipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerRelationShips"> | number
    legal_guardian_id?: IntWithAggregatesFilter<"PlayerRelationShips"> | number
    player_id?: IntWithAggregatesFilter<"PlayerRelationShips"> | number
    relationship_type?: EnumRelationshipTypeWithAggregatesFilter<"PlayerRelationShips"> | $Enums.RelationshipType
  }

  export type DocumentsWhereInput = {
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    id?: IntFilter<"Documents"> | number
    user_id?: IntFilter<"Documents"> | number
    title?: StringFilter<"Documents"> | string
    file_path?: StringFilter<"Documents"> | string
    document_type?: EnumDocumentTypeFilter<"Documents"> | $Enums.DocumentType
    uploaded_by?: StringFilter<"Documents"> | string
    created_At?: DateTimeFilter<"Documents"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    medical_certificates?: XOR<MedicalCertificatesNullableScalarRelationFilter, MedicalCertificatesWhereInput> | null
  }

  export type DocumentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    file_path?: SortOrder
    document_type?: SortOrder
    uploaded_by?: SortOrder
    created_At?: SortOrder
    user?: UsersOrderByWithRelationInput
    medical_certificates?: MedicalCertificatesOrderByWithRelationInput
  }

  export type DocumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    user_id?: IntFilter<"Documents"> | number
    title?: StringFilter<"Documents"> | string
    file_path?: StringFilter<"Documents"> | string
    document_type?: EnumDocumentTypeFilter<"Documents"> | $Enums.DocumentType
    uploaded_by?: StringFilter<"Documents"> | string
    created_At?: DateTimeFilter<"Documents"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    medical_certificates?: XOR<MedicalCertificatesNullableScalarRelationFilter, MedicalCertificatesWhereInput> | null
  }, "id">

  export type DocumentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    file_path?: SortOrder
    document_type?: SortOrder
    uploaded_by?: SortOrder
    created_At?: SortOrder
    _count?: DocumentsCountOrderByAggregateInput
    _avg?: DocumentsAvgOrderByAggregateInput
    _max?: DocumentsMaxOrderByAggregateInput
    _min?: DocumentsMinOrderByAggregateInput
    _sum?: DocumentsSumOrderByAggregateInput
  }

  export type DocumentsScalarWhereWithAggregatesInput = {
    AND?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    OR?: DocumentsScalarWhereWithAggregatesInput[]
    NOT?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Documents"> | number
    user_id?: IntWithAggregatesFilter<"Documents"> | number
    title?: StringWithAggregatesFilter<"Documents"> | string
    file_path?: StringWithAggregatesFilter<"Documents"> | string
    document_type?: EnumDocumentTypeWithAggregatesFilter<"Documents"> | $Enums.DocumentType
    uploaded_by?: StringWithAggregatesFilter<"Documents"> | string
    created_At?: DateTimeWithAggregatesFilter<"Documents"> | Date | string
  }

  export type MedicalCertificatesWhereInput = {
    AND?: MedicalCertificatesWhereInput | MedicalCertificatesWhereInput[]
    OR?: MedicalCertificatesWhereInput[]
    NOT?: MedicalCertificatesWhereInput | MedicalCertificatesWhereInput[]
    id?: IntFilter<"MedicalCertificates"> | number
    user_id?: IntFilter<"MedicalCertificates"> | number
    issue_date?: DateTimeFilter<"MedicalCertificates"> | Date | string
    document_id?: IntFilter<"MedicalCertificates"> | number
    is_cardiologist_cert?: BoolFilter<"MedicalCertificates"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    MedicalDocument?: XOR<DocumentsScalarRelationFilter, DocumentsWhereInput>
  }

  export type MedicalCertificatesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    issue_date?: SortOrder
    document_id?: SortOrder
    is_cardiologist_cert?: SortOrder
    user?: UsersOrderByWithRelationInput
    MedicalDocument?: DocumentsOrderByWithRelationInput
  }

  export type MedicalCertificatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document_id?: number
    AND?: MedicalCertificatesWhereInput | MedicalCertificatesWhereInput[]
    OR?: MedicalCertificatesWhereInput[]
    NOT?: MedicalCertificatesWhereInput | MedicalCertificatesWhereInput[]
    user_id?: IntFilter<"MedicalCertificates"> | number
    issue_date?: DateTimeFilter<"MedicalCertificates"> | Date | string
    is_cardiologist_cert?: BoolFilter<"MedicalCertificates"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    MedicalDocument?: XOR<DocumentsScalarRelationFilter, DocumentsWhereInput>
  }, "id" | "document_id">

  export type MedicalCertificatesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    issue_date?: SortOrder
    document_id?: SortOrder
    is_cardiologist_cert?: SortOrder
    _count?: MedicalCertificatesCountOrderByAggregateInput
    _avg?: MedicalCertificatesAvgOrderByAggregateInput
    _max?: MedicalCertificatesMaxOrderByAggregateInput
    _min?: MedicalCertificatesMinOrderByAggregateInput
    _sum?: MedicalCertificatesSumOrderByAggregateInput
  }

  export type MedicalCertificatesScalarWhereWithAggregatesInput = {
    AND?: MedicalCertificatesScalarWhereWithAggregatesInput | MedicalCertificatesScalarWhereWithAggregatesInput[]
    OR?: MedicalCertificatesScalarWhereWithAggregatesInput[]
    NOT?: MedicalCertificatesScalarWhereWithAggregatesInput | MedicalCertificatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalCertificates"> | number
    user_id?: IntWithAggregatesFilter<"MedicalCertificates"> | number
    issue_date?: DateTimeWithAggregatesFilter<"MedicalCertificates"> | Date | string
    document_id?: IntWithAggregatesFilter<"MedicalCertificates"> | number
    is_cardiologist_cert?: BoolWithAggregatesFilter<"MedicalCertificates"> | boolean
  }

  export type UsersCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsUncheckedCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsUncheckedCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsUncheckedCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUncheckedUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUncheckedUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenCreateInput = {
    token: string
    type: $Enums.TokenType
    expires_at: Date | string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires_at: Date | string
    user_id: number
    createdAt?: Date | string
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires_at: Date | string
    user_id: number
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerRelationShipsCreateInput = {
    relationship_type: $Enums.RelationshipType
    player: UsersCreateNestedOneWithoutLegal_guardian_ofInput
    legalGuardian: UsersCreateNestedOneWithoutPlayers_as_guardianInput
  }

  export type PlayerRelationShipsUncheckedCreateInput = {
    id?: number
    legal_guardian_id: number
    player_id: number
    relationship_type: $Enums.RelationshipType
  }

  export type PlayerRelationShipsUpdateInput = {
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    player?: UsersUpdateOneRequiredWithoutLegal_guardian_ofNestedInput
    legalGuardian?: UsersUpdateOneRequiredWithoutPlayers_as_guardianNestedInput
  }

  export type PlayerRelationShipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legal_guardian_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type PlayerRelationShipsCreateManyInput = {
    id?: number
    legal_guardian_id: number
    player_id: number
    relationship_type: $Enums.RelationshipType
  }

  export type PlayerRelationShipsUpdateManyMutationInput = {
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type PlayerRelationShipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legal_guardian_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type DocumentsCreateInput = {
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
    user: UsersCreateNestedOneWithoutDocumentsInput
    medical_certificates?: MedicalCertificatesCreateNestedOneWithoutMedicalDocumentInput
  }

  export type DocumentsUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedOneWithoutMedicalDocumentInput
  }

  export type DocumentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDocumentsNestedInput
    medical_certificates?: MedicalCertificatesUpdateOneWithoutMedicalDocumentNestedInput
  }

  export type DocumentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_certificates?: MedicalCertificatesUncheckedUpdateOneWithoutMedicalDocumentNestedInput
  }

  export type DocumentsCreateManyInput = {
    id?: number
    user_id: number
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
  }

  export type DocumentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificatesCreateInput = {
    issue_date: Date | string
    is_cardiologist_cert?: boolean
    user: UsersCreateNestedOneWithoutMedical_certificatesInput
    MedicalDocument: DocumentsCreateNestedOneWithoutMedical_certificatesInput
  }

  export type MedicalCertificatesUncheckedCreateInput = {
    id?: number
    user_id: number
    issue_date: Date | string
    document_id: number
    is_cardiologist_cert?: boolean
  }

  export type MedicalCertificatesUpdateInput = {
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutMedical_certificatesNestedInput
    MedicalDocument?: DocumentsUpdateOneRequiredWithoutMedical_certificatesNestedInput
  }

  export type MedicalCertificatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    document_id?: IntFieldUpdateOperationsInput | number
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicalCertificatesCreateManyInput = {
    id?: number
    user_id: number
    issue_date: Date | string
    document_id: number
    is_cardiologist_cert?: boolean
  }

  export type MedicalCertificatesUpdateManyMutationInput = {
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicalCertificatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    document_id?: IntFieldUpdateOperationsInput | number
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
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

  export type EnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type PlayerRelationShipsListRelationFilter = {
    every?: PlayerRelationShipsWhereInput
    some?: PlayerRelationShipsWhereInput
    none?: PlayerRelationShipsWhereInput
  }

  export type DocumentsListRelationFilter = {
    every?: DocumentsWhereInput
    some?: DocumentsWhereInput
    none?: DocumentsWhereInput
  }

  export type MedicalCertificatesListRelationFilter = {
    every?: MedicalCertificatesWhereInput
    some?: MedicalCertificatesWhereInput
    none?: MedicalCertificatesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerRelationShipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalCertificatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    blood_type?: SortOrder
    picture_url?: SortOrder
    nationality?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    email_verified_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    blood_type?: SortOrder
    picture_url?: SortOrder
    nationality?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    email_verified_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    place_of_birth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    blood_type?: SortOrder
    picture_url?: SortOrder
    nationality?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    email_verified_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
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

  export type EnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type EnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type PlayerRelationShipsCountOrderByAggregateInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
    relationship_type?: SortOrder
  }

  export type PlayerRelationShipsAvgOrderByAggregateInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
  }

  export type PlayerRelationShipsMaxOrderByAggregateInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
    relationship_type?: SortOrder
  }

  export type PlayerRelationShipsMinOrderByAggregateInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
    relationship_type?: SortOrder
  }

  export type PlayerRelationShipsSumOrderByAggregateInput = {
    id?: SortOrder
    legal_guardian_id?: SortOrder
    player_id?: SortOrder
  }

  export type EnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type MedicalCertificatesNullableScalarRelationFilter = {
    is?: MedicalCertificatesWhereInput | null
    isNot?: MedicalCertificatesWhereInput | null
  }

  export type DocumentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    file_path?: SortOrder
    document_type?: SortOrder
    uploaded_by?: SortOrder
    created_At?: SortOrder
  }

  export type DocumentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DocumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    file_path?: SortOrder
    document_type?: SortOrder
    uploaded_by?: SortOrder
    created_At?: SortOrder
  }

  export type DocumentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    file_path?: SortOrder
    document_type?: SortOrder
    uploaded_by?: SortOrder
    created_At?: SortOrder
  }

  export type DocumentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type DocumentsScalarRelationFilter = {
    is?: DocumentsWhereInput
    isNot?: DocumentsWhereInput
  }

  export type MedicalCertificatesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    issue_date?: SortOrder
    document_id?: SortOrder
    is_cardiologist_cert?: SortOrder
  }

  export type MedicalCertificatesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type MedicalCertificatesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    issue_date?: SortOrder
    document_id?: SortOrder
    is_cardiologist_cert?: SortOrder
  }

  export type MedicalCertificatesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    issue_date?: SortOrder
    document_id?: SortOrder
    is_cardiologist_cert?: SortOrder
  }

  export type MedicalCertificatesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PlayerRelationShipsCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutPlayerInput, PlayerRelationShipsUncheckedCreateWithoutPlayerInput> | PlayerRelationShipsCreateWithoutPlayerInput[] | PlayerRelationShipsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutPlayerInput | PlayerRelationShipsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerRelationShipsCreateManyPlayerInputEnvelope
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
  }

  export type PlayerRelationShipsCreateNestedManyWithoutLegalGuardianInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput> | PlayerRelationShipsCreateWithoutLegalGuardianInput[] | PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput | PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput[]
    createMany?: PlayerRelationShipsCreateManyLegalGuardianInputEnvelope
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
  }

  export type DocumentsCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentsCreateWithoutUserInput, DocumentsUncheckedCreateWithoutUserInput> | DocumentsCreateWithoutUserInput[] | DocumentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUserInput | DocumentsCreateOrConnectWithoutUserInput[]
    createMany?: DocumentsCreateManyUserInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type MedicalCertificatesCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicalCertificatesCreateWithoutUserInput, MedicalCertificatesUncheckedCreateWithoutUserInput> | MedicalCertificatesCreateWithoutUserInput[] | MedicalCertificatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutUserInput | MedicalCertificatesCreateOrConnectWithoutUserInput[]
    createMany?: MedicalCertificatesCreateManyUserInputEnvelope
    connect?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PlayerRelationShipsUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutPlayerInput, PlayerRelationShipsUncheckedCreateWithoutPlayerInput> | PlayerRelationShipsCreateWithoutPlayerInput[] | PlayerRelationShipsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutPlayerInput | PlayerRelationShipsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerRelationShipsCreateManyPlayerInputEnvelope
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
  }

  export type PlayerRelationShipsUncheckedCreateNestedManyWithoutLegalGuardianInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput> | PlayerRelationShipsCreateWithoutLegalGuardianInput[] | PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput | PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput[]
    createMany?: PlayerRelationShipsCreateManyLegalGuardianInputEnvelope
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
  }

  export type DocumentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentsCreateWithoutUserInput, DocumentsUncheckedCreateWithoutUserInput> | DocumentsCreateWithoutUserInput[] | DocumentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUserInput | DocumentsCreateOrConnectWithoutUserInput[]
    createMany?: DocumentsCreateManyUserInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type MedicalCertificatesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicalCertificatesCreateWithoutUserInput, MedicalCertificatesUncheckedCreateWithoutUserInput> | MedicalCertificatesCreateWithoutUserInput[] | MedicalCertificatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutUserInput | MedicalCertificatesCreateOrConnectWithoutUserInput[]
    createMany?: MedicalCertificatesCreateManyUserInputEnvelope
    connect?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumuserRoleFieldUpdateOperationsInput = {
    set?: $Enums.userRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PlayerRelationShipsUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutPlayerInput, PlayerRelationShipsUncheckedCreateWithoutPlayerInput> | PlayerRelationShipsCreateWithoutPlayerInput[] | PlayerRelationShipsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutPlayerInput | PlayerRelationShipsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerRelationShipsUpsertWithWhereUniqueWithoutPlayerInput | PlayerRelationShipsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerRelationShipsCreateManyPlayerInputEnvelope
    set?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    disconnect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    delete?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    update?: PlayerRelationShipsUpdateWithWhereUniqueWithoutPlayerInput | PlayerRelationShipsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerRelationShipsUpdateManyWithWhereWithoutPlayerInput | PlayerRelationShipsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerRelationShipsScalarWhereInput | PlayerRelationShipsScalarWhereInput[]
  }

  export type PlayerRelationShipsUpdateManyWithoutLegalGuardianNestedInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput> | PlayerRelationShipsCreateWithoutLegalGuardianInput[] | PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput | PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput[]
    upsert?: PlayerRelationShipsUpsertWithWhereUniqueWithoutLegalGuardianInput | PlayerRelationShipsUpsertWithWhereUniqueWithoutLegalGuardianInput[]
    createMany?: PlayerRelationShipsCreateManyLegalGuardianInputEnvelope
    set?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    disconnect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    delete?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    update?: PlayerRelationShipsUpdateWithWhereUniqueWithoutLegalGuardianInput | PlayerRelationShipsUpdateWithWhereUniqueWithoutLegalGuardianInput[]
    updateMany?: PlayerRelationShipsUpdateManyWithWhereWithoutLegalGuardianInput | PlayerRelationShipsUpdateManyWithWhereWithoutLegalGuardianInput[]
    deleteMany?: PlayerRelationShipsScalarWhereInput | PlayerRelationShipsScalarWhereInput[]
  }

  export type DocumentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentsCreateWithoutUserInput, DocumentsUncheckedCreateWithoutUserInput> | DocumentsCreateWithoutUserInput[] | DocumentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUserInput | DocumentsCreateOrConnectWithoutUserInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutUserInput | DocumentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentsCreateManyUserInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutUserInput | DocumentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutUserInput | DocumentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type MedicalCertificatesUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicalCertificatesCreateWithoutUserInput, MedicalCertificatesUncheckedCreateWithoutUserInput> | MedicalCertificatesCreateWithoutUserInput[] | MedicalCertificatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutUserInput | MedicalCertificatesCreateOrConnectWithoutUserInput[]
    upsert?: MedicalCertificatesUpsertWithWhereUniqueWithoutUserInput | MedicalCertificatesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicalCertificatesCreateManyUserInputEnvelope
    set?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    disconnect?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    delete?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    connect?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    update?: MedicalCertificatesUpdateWithWhereUniqueWithoutUserInput | MedicalCertificatesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicalCertificatesUpdateManyWithWhereWithoutUserInput | MedicalCertificatesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicalCertificatesScalarWhereInput | MedicalCertificatesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PlayerRelationShipsUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutPlayerInput, PlayerRelationShipsUncheckedCreateWithoutPlayerInput> | PlayerRelationShipsCreateWithoutPlayerInput[] | PlayerRelationShipsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutPlayerInput | PlayerRelationShipsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerRelationShipsUpsertWithWhereUniqueWithoutPlayerInput | PlayerRelationShipsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerRelationShipsCreateManyPlayerInputEnvelope
    set?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    disconnect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    delete?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    update?: PlayerRelationShipsUpdateWithWhereUniqueWithoutPlayerInput | PlayerRelationShipsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerRelationShipsUpdateManyWithWhereWithoutPlayerInput | PlayerRelationShipsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerRelationShipsScalarWhereInput | PlayerRelationShipsScalarWhereInput[]
  }

  export type PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianNestedInput = {
    create?: XOR<PlayerRelationShipsCreateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput> | PlayerRelationShipsCreateWithoutLegalGuardianInput[] | PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput | PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput[]
    upsert?: PlayerRelationShipsUpsertWithWhereUniqueWithoutLegalGuardianInput | PlayerRelationShipsUpsertWithWhereUniqueWithoutLegalGuardianInput[]
    createMany?: PlayerRelationShipsCreateManyLegalGuardianInputEnvelope
    set?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    disconnect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    delete?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    connect?: PlayerRelationShipsWhereUniqueInput | PlayerRelationShipsWhereUniqueInput[]
    update?: PlayerRelationShipsUpdateWithWhereUniqueWithoutLegalGuardianInput | PlayerRelationShipsUpdateWithWhereUniqueWithoutLegalGuardianInput[]
    updateMany?: PlayerRelationShipsUpdateManyWithWhereWithoutLegalGuardianInput | PlayerRelationShipsUpdateManyWithWhereWithoutLegalGuardianInput[]
    deleteMany?: PlayerRelationShipsScalarWhereInput | PlayerRelationShipsScalarWhereInput[]
  }

  export type DocumentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentsCreateWithoutUserInput, DocumentsUncheckedCreateWithoutUserInput> | DocumentsCreateWithoutUserInput[] | DocumentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutUserInput | DocumentsCreateOrConnectWithoutUserInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutUserInput | DocumentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentsCreateManyUserInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutUserInput | DocumentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutUserInput | DocumentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type MedicalCertificatesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicalCertificatesCreateWithoutUserInput, MedicalCertificatesUncheckedCreateWithoutUserInput> | MedicalCertificatesCreateWithoutUserInput[] | MedicalCertificatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutUserInput | MedicalCertificatesCreateOrConnectWithoutUserInput[]
    upsert?: MedicalCertificatesUpsertWithWhereUniqueWithoutUserInput | MedicalCertificatesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicalCertificatesCreateManyUserInputEnvelope
    set?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    disconnect?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    delete?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    connect?: MedicalCertificatesWhereUniqueInput | MedicalCertificatesWhereUniqueInput[]
    update?: MedicalCertificatesUpdateWithWhereUniqueWithoutUserInput | MedicalCertificatesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicalCertificatesUpdateManyWithWhereWithoutUserInput | MedicalCertificatesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicalCertificatesScalarWhereInput | MedicalCertificatesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTokensInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UsersUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    upsert?: UsersUpsertWithoutTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTokensInput, UsersUpdateWithoutTokensInput>, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type UsersCreateNestedOneWithoutLegal_guardian_ofInput = {
    create?: XOR<UsersCreateWithoutLegal_guardian_ofInput, UsersUncheckedCreateWithoutLegal_guardian_ofInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLegal_guardian_ofInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPlayers_as_guardianInput = {
    create?: XOR<UsersCreateWithoutPlayers_as_guardianInput, UsersUncheckedCreateWithoutPlayers_as_guardianInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPlayers_as_guardianInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumRelationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipType
  }

  export type UsersUpdateOneRequiredWithoutLegal_guardian_ofNestedInput = {
    create?: XOR<UsersCreateWithoutLegal_guardian_ofInput, UsersUncheckedCreateWithoutLegal_guardian_ofInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLegal_guardian_ofInput
    upsert?: UsersUpsertWithoutLegal_guardian_ofInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLegal_guardian_ofInput, UsersUpdateWithoutLegal_guardian_ofInput>, UsersUncheckedUpdateWithoutLegal_guardian_ofInput>
  }

  export type UsersUpdateOneRequiredWithoutPlayers_as_guardianNestedInput = {
    create?: XOR<UsersCreateWithoutPlayers_as_guardianInput, UsersUncheckedCreateWithoutPlayers_as_guardianInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPlayers_as_guardianInput
    upsert?: UsersUpsertWithoutPlayers_as_guardianInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPlayers_as_guardianInput, UsersUpdateWithoutPlayers_as_guardianInput>, UsersUncheckedUpdateWithoutPlayers_as_guardianInput>
  }

  export type UsersCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentsInput
    connect?: UsersWhereUniqueInput
  }

  export type MedicalCertificatesCreateNestedOneWithoutMedicalDocumentInput = {
    create?: XOR<MedicalCertificatesCreateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput>
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutMedicalDocumentInput
    connect?: MedicalCertificatesWhereUniqueInput
  }

  export type MedicalCertificatesUncheckedCreateNestedOneWithoutMedicalDocumentInput = {
    create?: XOR<MedicalCertificatesCreateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput>
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutMedicalDocumentInput
    connect?: MedicalCertificatesWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type UsersUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDocumentsInput
    upsert?: UsersUpsertWithoutDocumentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDocumentsInput, UsersUpdateWithoutDocumentsInput>, UsersUncheckedUpdateWithoutDocumentsInput>
  }

  export type MedicalCertificatesUpdateOneWithoutMedicalDocumentNestedInput = {
    create?: XOR<MedicalCertificatesCreateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput>
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutMedicalDocumentInput
    upsert?: MedicalCertificatesUpsertWithoutMedicalDocumentInput
    disconnect?: MedicalCertificatesWhereInput | boolean
    delete?: MedicalCertificatesWhereInput | boolean
    connect?: MedicalCertificatesWhereUniqueInput
    update?: XOR<XOR<MedicalCertificatesUpdateToOneWithWhereWithoutMedicalDocumentInput, MedicalCertificatesUpdateWithoutMedicalDocumentInput>, MedicalCertificatesUncheckedUpdateWithoutMedicalDocumentInput>
  }

  export type MedicalCertificatesUncheckedUpdateOneWithoutMedicalDocumentNestedInput = {
    create?: XOR<MedicalCertificatesCreateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput>
    connectOrCreate?: MedicalCertificatesCreateOrConnectWithoutMedicalDocumentInput
    upsert?: MedicalCertificatesUpsertWithoutMedicalDocumentInput
    disconnect?: MedicalCertificatesWhereInput | boolean
    delete?: MedicalCertificatesWhereInput | boolean
    connect?: MedicalCertificatesWhereUniqueInput
    update?: XOR<XOR<MedicalCertificatesUpdateToOneWithWhereWithoutMedicalDocumentInput, MedicalCertificatesUpdateWithoutMedicalDocumentInput>, MedicalCertificatesUncheckedUpdateWithoutMedicalDocumentInput>
  }

  export type UsersCreateNestedOneWithoutMedical_certificatesInput = {
    create?: XOR<UsersCreateWithoutMedical_certificatesInput, UsersUncheckedCreateWithoutMedical_certificatesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedical_certificatesInput
    connect?: UsersWhereUniqueInput
  }

  export type DocumentsCreateNestedOneWithoutMedical_certificatesInput = {
    create?: XOR<DocumentsCreateWithoutMedical_certificatesInput, DocumentsUncheckedCreateWithoutMedical_certificatesInput>
    connectOrCreate?: DocumentsCreateOrConnectWithoutMedical_certificatesInput
    connect?: DocumentsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutMedical_certificatesNestedInput = {
    create?: XOR<UsersCreateWithoutMedical_certificatesInput, UsersUncheckedCreateWithoutMedical_certificatesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedical_certificatesInput
    upsert?: UsersUpsertWithoutMedical_certificatesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMedical_certificatesInput, UsersUpdateWithoutMedical_certificatesInput>, UsersUncheckedUpdateWithoutMedical_certificatesInput>
  }

  export type DocumentsUpdateOneRequiredWithoutMedical_certificatesNestedInput = {
    create?: XOR<DocumentsCreateWithoutMedical_certificatesInput, DocumentsUncheckedCreateWithoutMedical_certificatesInput>
    connectOrCreate?: DocumentsCreateOrConnectWithoutMedical_certificatesInput
    upsert?: DocumentsUpsertWithoutMedical_certificatesInput
    connect?: DocumentsWhereUniqueInput
    update?: XOR<XOR<DocumentsUpdateToOneWithWhereWithoutMedical_certificatesInput, DocumentsUpdateWithoutMedical_certificatesInput>, DocumentsUncheckedUpdateWithoutMedical_certificatesInput>
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

  export type NestedEnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
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

  export type NestedEnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
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

  export type NestedEnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: $Enums.TokenType
    expires_at: Date | string
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires_at: Date | string
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayerRelationShipsCreateWithoutPlayerInput = {
    relationship_type: $Enums.RelationshipType
    legalGuardian: UsersCreateNestedOneWithoutPlayers_as_guardianInput
  }

  export type PlayerRelationShipsUncheckedCreateWithoutPlayerInput = {
    id?: number
    legal_guardian_id: number
    relationship_type: $Enums.RelationshipType
  }

  export type PlayerRelationShipsCreateOrConnectWithoutPlayerInput = {
    where: PlayerRelationShipsWhereUniqueInput
    create: XOR<PlayerRelationShipsCreateWithoutPlayerInput, PlayerRelationShipsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerRelationShipsCreateManyPlayerInputEnvelope = {
    data: PlayerRelationShipsCreateManyPlayerInput | PlayerRelationShipsCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerRelationShipsCreateWithoutLegalGuardianInput = {
    relationship_type: $Enums.RelationshipType
    player: UsersCreateNestedOneWithoutLegal_guardian_ofInput
  }

  export type PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput = {
    id?: number
    player_id: number
    relationship_type: $Enums.RelationshipType
  }

  export type PlayerRelationShipsCreateOrConnectWithoutLegalGuardianInput = {
    where: PlayerRelationShipsWhereUniqueInput
    create: XOR<PlayerRelationShipsCreateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput>
  }

  export type PlayerRelationShipsCreateManyLegalGuardianInputEnvelope = {
    data: PlayerRelationShipsCreateManyLegalGuardianInput | PlayerRelationShipsCreateManyLegalGuardianInput[]
    skipDuplicates?: boolean
  }

  export type DocumentsCreateWithoutUserInput = {
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
    medical_certificates?: MedicalCertificatesCreateNestedOneWithoutMedicalDocumentInput
  }

  export type DocumentsUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedOneWithoutMedicalDocumentInput
  }

  export type DocumentsCreateOrConnectWithoutUserInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutUserInput, DocumentsUncheckedCreateWithoutUserInput>
  }

  export type DocumentsCreateManyUserInputEnvelope = {
    data: DocumentsCreateManyUserInput | DocumentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicalCertificatesCreateWithoutUserInput = {
    issue_date: Date | string
    is_cardiologist_cert?: boolean
    MedicalDocument: DocumentsCreateNestedOneWithoutMedical_certificatesInput
  }

  export type MedicalCertificatesUncheckedCreateWithoutUserInput = {
    id?: number
    issue_date: Date | string
    document_id: number
    is_cardiologist_cert?: boolean
  }

  export type MedicalCertificatesCreateOrConnectWithoutUserInput = {
    where: MedicalCertificatesWhereUniqueInput
    create: XOR<MedicalCertificatesCreateWithoutUserInput, MedicalCertificatesUncheckedCreateWithoutUserInput>
  }

  export type MedicalCertificatesCreateManyUserInputEnvelope = {
    data: MedicalCertificatesCreateManyUserInput | MedicalCertificatesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires_at?: DateTimeFilter<"Token"> | Date | string
    user_id?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type PlayerRelationShipsUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerRelationShipsWhereUniqueInput
    update: XOR<PlayerRelationShipsUpdateWithoutPlayerInput, PlayerRelationShipsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerRelationShipsCreateWithoutPlayerInput, PlayerRelationShipsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerRelationShipsUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerRelationShipsWhereUniqueInput
    data: XOR<PlayerRelationShipsUpdateWithoutPlayerInput, PlayerRelationShipsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerRelationShipsUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerRelationShipsScalarWhereInput
    data: XOR<PlayerRelationShipsUpdateManyMutationInput, PlayerRelationShipsUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerRelationShipsScalarWhereInput = {
    AND?: PlayerRelationShipsScalarWhereInput | PlayerRelationShipsScalarWhereInput[]
    OR?: PlayerRelationShipsScalarWhereInput[]
    NOT?: PlayerRelationShipsScalarWhereInput | PlayerRelationShipsScalarWhereInput[]
    id?: IntFilter<"PlayerRelationShips"> | number
    legal_guardian_id?: IntFilter<"PlayerRelationShips"> | number
    player_id?: IntFilter<"PlayerRelationShips"> | number
    relationship_type?: EnumRelationshipTypeFilter<"PlayerRelationShips"> | $Enums.RelationshipType
  }

  export type PlayerRelationShipsUpsertWithWhereUniqueWithoutLegalGuardianInput = {
    where: PlayerRelationShipsWhereUniqueInput
    update: XOR<PlayerRelationShipsUpdateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedUpdateWithoutLegalGuardianInput>
    create: XOR<PlayerRelationShipsCreateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedCreateWithoutLegalGuardianInput>
  }

  export type PlayerRelationShipsUpdateWithWhereUniqueWithoutLegalGuardianInput = {
    where: PlayerRelationShipsWhereUniqueInput
    data: XOR<PlayerRelationShipsUpdateWithoutLegalGuardianInput, PlayerRelationShipsUncheckedUpdateWithoutLegalGuardianInput>
  }

  export type PlayerRelationShipsUpdateManyWithWhereWithoutLegalGuardianInput = {
    where: PlayerRelationShipsScalarWhereInput
    data: XOR<PlayerRelationShipsUpdateManyMutationInput, PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianInput>
  }

  export type DocumentsUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentsWhereUniqueInput
    update: XOR<DocumentsUpdateWithoutUserInput, DocumentsUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentsCreateWithoutUserInput, DocumentsUncheckedCreateWithoutUserInput>
  }

  export type DocumentsUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentsWhereUniqueInput
    data: XOR<DocumentsUpdateWithoutUserInput, DocumentsUncheckedUpdateWithoutUserInput>
  }

  export type DocumentsUpdateManyWithWhereWithoutUserInput = {
    where: DocumentsScalarWhereInput
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentsScalarWhereInput = {
    AND?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    OR?: DocumentsScalarWhereInput[]
    NOT?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    id?: IntFilter<"Documents"> | number
    user_id?: IntFilter<"Documents"> | number
    title?: StringFilter<"Documents"> | string
    file_path?: StringFilter<"Documents"> | string
    document_type?: EnumDocumentTypeFilter<"Documents"> | $Enums.DocumentType
    uploaded_by?: StringFilter<"Documents"> | string
    created_At?: DateTimeFilter<"Documents"> | Date | string
  }

  export type MedicalCertificatesUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicalCertificatesWhereUniqueInput
    update: XOR<MedicalCertificatesUpdateWithoutUserInput, MedicalCertificatesUncheckedUpdateWithoutUserInput>
    create: XOR<MedicalCertificatesCreateWithoutUserInput, MedicalCertificatesUncheckedCreateWithoutUserInput>
  }

  export type MedicalCertificatesUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicalCertificatesWhereUniqueInput
    data: XOR<MedicalCertificatesUpdateWithoutUserInput, MedicalCertificatesUncheckedUpdateWithoutUserInput>
  }

  export type MedicalCertificatesUpdateManyWithWhereWithoutUserInput = {
    where: MedicalCertificatesScalarWhereInput
    data: XOR<MedicalCertificatesUpdateManyMutationInput, MedicalCertificatesUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicalCertificatesScalarWhereInput = {
    AND?: MedicalCertificatesScalarWhereInput | MedicalCertificatesScalarWhereInput[]
    OR?: MedicalCertificatesScalarWhereInput[]
    NOT?: MedicalCertificatesScalarWhereInput | MedicalCertificatesScalarWhereInput[]
    id?: IntFilter<"MedicalCertificates"> | number
    user_id?: IntFilter<"MedicalCertificates"> | number
    issue_date?: DateTimeFilter<"MedicalCertificates"> | Date | string
    document_id?: IntFilter<"MedicalCertificates"> | number
    is_cardiologist_cert?: BoolFilter<"MedicalCertificates"> | boolean
  }

  export type UsersCreateWithoutTokensInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    legal_guardian_of?: PlayerRelationShipsCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTokensInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    legal_guardian_of?: PlayerRelationShipsUncheckedCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsUncheckedCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsUncheckedCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
  }

  export type UsersUpsertWithoutTokensInput = {
    update: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type UsersUpdateWithoutTokensInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_guardian_of?: PlayerRelationShipsUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_guardian_of?: PlayerRelationShipsUncheckedUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUncheckedUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutLegal_guardian_ofInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenCreateNestedManyWithoutUserInput
    players_as_guardian?: PlayerRelationShipsCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLegal_guardian_ofInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    players_as_guardian?: PlayerRelationShipsUncheckedCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsUncheckedCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLegal_guardian_ofInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLegal_guardian_ofInput, UsersUncheckedCreateWithoutLegal_guardian_ofInput>
  }

  export type UsersCreateWithoutPlayers_as_guardianInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsCreateNestedManyWithoutPlayerInput
    documents?: DocumentsCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPlayers_as_guardianInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsUncheckedCreateNestedManyWithoutPlayerInput
    documents?: DocumentsUncheckedCreateNestedManyWithoutUserInput
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPlayers_as_guardianInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPlayers_as_guardianInput, UsersUncheckedCreateWithoutPlayers_as_guardianInput>
  }

  export type UsersUpsertWithoutLegal_guardian_ofInput = {
    update: XOR<UsersUpdateWithoutLegal_guardian_ofInput, UsersUncheckedUpdateWithoutLegal_guardian_ofInput>
    create: XOR<UsersCreateWithoutLegal_guardian_ofInput, UsersUncheckedCreateWithoutLegal_guardian_ofInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLegal_guardian_ofInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLegal_guardian_ofInput, UsersUncheckedUpdateWithoutLegal_guardian_ofInput>
  }

  export type UsersUpdateWithoutLegal_guardian_ofInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUpdateManyWithoutUserNestedInput
    players_as_guardian?: PlayerRelationShipsUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLegal_guardian_ofInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    players_as_guardian?: PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUncheckedUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUpsertWithoutPlayers_as_guardianInput = {
    update: XOR<UsersUpdateWithoutPlayers_as_guardianInput, UsersUncheckedUpdateWithoutPlayers_as_guardianInput>
    create: XOR<UsersCreateWithoutPlayers_as_guardianInput, UsersUncheckedCreateWithoutPlayers_as_guardianInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPlayers_as_guardianInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPlayers_as_guardianInput, UsersUncheckedUpdateWithoutPlayers_as_guardianInput>
  }

  export type UsersUpdateWithoutPlayers_as_guardianInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUpdateManyWithoutPlayerNestedInput
    documents?: DocumentsUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPlayers_as_guardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUncheckedUpdateManyWithoutPlayerNestedInput
    documents?: DocumentsUncheckedUpdateManyWithoutUserNestedInput
    medical_certificates?: MedicalCertificatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutDocumentsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsCreateNestedManyWithoutLegalGuardianInput
    medical_certificates?: MedicalCertificatesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutDocumentsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsUncheckedCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsUncheckedCreateNestedManyWithoutLegalGuardianInput
    medical_certificates?: MedicalCertificatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutDocumentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
  }

  export type MedicalCertificatesCreateWithoutMedicalDocumentInput = {
    issue_date: Date | string
    is_cardiologist_cert?: boolean
    user: UsersCreateNestedOneWithoutMedical_certificatesInput
  }

  export type MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput = {
    id?: number
    user_id: number
    issue_date: Date | string
    is_cardiologist_cert?: boolean
  }

  export type MedicalCertificatesCreateOrConnectWithoutMedicalDocumentInput = {
    where: MedicalCertificatesWhereUniqueInput
    create: XOR<MedicalCertificatesCreateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput>
  }

  export type UsersUpsertWithoutDocumentsInput = {
    update: XOR<UsersUpdateWithoutDocumentsInput, UsersUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UsersCreateWithoutDocumentsInput, UsersUncheckedCreateWithoutDocumentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDocumentsInput, UsersUncheckedUpdateWithoutDocumentsInput>
  }

  export type UsersUpdateWithoutDocumentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUpdateManyWithoutLegalGuardianNestedInput
    medical_certificates?: MedicalCertificatesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUncheckedUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianNestedInput
    medical_certificates?: MedicalCertificatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicalCertificatesUpsertWithoutMedicalDocumentInput = {
    update: XOR<MedicalCertificatesUpdateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedUpdateWithoutMedicalDocumentInput>
    create: XOR<MedicalCertificatesCreateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedCreateWithoutMedicalDocumentInput>
    where?: MedicalCertificatesWhereInput
  }

  export type MedicalCertificatesUpdateToOneWithWhereWithoutMedicalDocumentInput = {
    where?: MedicalCertificatesWhereInput
    data: XOR<MedicalCertificatesUpdateWithoutMedicalDocumentInput, MedicalCertificatesUncheckedUpdateWithoutMedicalDocumentInput>
  }

  export type MedicalCertificatesUpdateWithoutMedicalDocumentInput = {
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutMedical_certificatesNestedInput
  }

  export type MedicalCertificatesUncheckedUpdateWithoutMedicalDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersCreateWithoutMedical_certificatesInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMedical_certificatesInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    role?: $Enums.userRole
    date_of_birth: Date | string
    place_of_birth: string
    gender: $Enums.gender
    address: string
    phone_number: string
    blood_type?: string | null
    picture_url?: string | null
    nationality?: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    email_verified_at?: Date | string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    legal_guardian_of?: PlayerRelationShipsUncheckedCreateNestedManyWithoutPlayerInput
    players_as_guardian?: PlayerRelationShipsUncheckedCreateNestedManyWithoutLegalGuardianInput
    documents?: DocumentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMedical_certificatesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMedical_certificatesInput, UsersUncheckedCreateWithoutMedical_certificatesInput>
  }

  export type DocumentsCreateWithoutMedical_certificatesInput = {
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
    user: UsersCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateWithoutMedical_certificatesInput = {
    id?: number
    user_id: number
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
  }

  export type DocumentsCreateOrConnectWithoutMedical_certificatesInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutMedical_certificatesInput, DocumentsUncheckedCreateWithoutMedical_certificatesInput>
  }

  export type UsersUpsertWithoutMedical_certificatesInput = {
    update: XOR<UsersUpdateWithoutMedical_certificatesInput, UsersUncheckedUpdateWithoutMedical_certificatesInput>
    create: XOR<UsersCreateWithoutMedical_certificatesInput, UsersUncheckedCreateWithoutMedical_certificatesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMedical_certificatesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMedical_certificatesInput, UsersUncheckedUpdateWithoutMedical_certificatesInput>
  }

  export type UsersUpdateWithoutMedical_certificatesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMedical_certificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    place_of_birth?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    legal_guardian_of?: PlayerRelationShipsUncheckedUpdateManyWithoutPlayerNestedInput
    players_as_guardian?: PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianNestedInput
    documents?: DocumentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentsUpsertWithoutMedical_certificatesInput = {
    update: XOR<DocumentsUpdateWithoutMedical_certificatesInput, DocumentsUncheckedUpdateWithoutMedical_certificatesInput>
    create: XOR<DocumentsCreateWithoutMedical_certificatesInput, DocumentsUncheckedCreateWithoutMedical_certificatesInput>
    where?: DocumentsWhereInput
  }

  export type DocumentsUpdateToOneWithWhereWithoutMedical_certificatesInput = {
    where?: DocumentsWhereInput
    data: XOR<DocumentsUpdateWithoutMedical_certificatesInput, DocumentsUncheckedUpdateWithoutMedical_certificatesInput>
  }

  export type DocumentsUpdateWithoutMedical_certificatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateWithoutMedical_certificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires_at: Date | string
    createdAt?: Date | string
  }

  export type PlayerRelationShipsCreateManyPlayerInput = {
    id?: number
    legal_guardian_id: number
    relationship_type: $Enums.RelationshipType
  }

  export type PlayerRelationShipsCreateManyLegalGuardianInput = {
    id?: number
    player_id: number
    relationship_type: $Enums.RelationshipType
  }

  export type DocumentsCreateManyUserInput = {
    id?: number
    title: string
    file_path: string
    document_type: $Enums.DocumentType
    uploaded_by: string
    created_At?: Date | string
  }

  export type MedicalCertificatesCreateManyUserInput = {
    id?: number
    issue_date: Date | string
    document_id: number
    is_cardiologist_cert?: boolean
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerRelationShipsUpdateWithoutPlayerInput = {
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    legalGuardian?: UsersUpdateOneRequiredWithoutPlayers_as_guardianNestedInput
  }

  export type PlayerRelationShipsUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    legal_guardian_id?: IntFieldUpdateOperationsInput | number
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type PlayerRelationShipsUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    legal_guardian_id?: IntFieldUpdateOperationsInput | number
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type PlayerRelationShipsUpdateWithoutLegalGuardianInput = {
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    player?: UsersUpdateOneRequiredWithoutLegal_guardian_ofNestedInput
  }

  export type PlayerRelationShipsUncheckedUpdateWithoutLegalGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type PlayerRelationShipsUncheckedUpdateManyWithoutLegalGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    relationship_type?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type DocumentsUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_certificates?: MedicalCertificatesUpdateOneWithoutMedicalDocumentNestedInput
  }

  export type DocumentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_certificates?: MedicalCertificatesUncheckedUpdateOneWithoutMedicalDocumentNestedInput
  }

  export type DocumentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    document_type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    uploaded_by?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCertificatesUpdateWithoutUserInput = {
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
    MedicalDocument?: DocumentsUpdateOneRequiredWithoutMedical_certificatesNestedInput
  }

  export type MedicalCertificatesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    document_id?: IntFieldUpdateOperationsInput | number
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicalCertificatesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    document_id?: IntFieldUpdateOperationsInput | number
    is_cardiologist_cert?: BoolFieldUpdateOperationsInput | boolean
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