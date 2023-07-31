import { GraphQLResolveInfo } from 'graphql';
import { CharacterModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Character = {
  __typename?: 'Character';
  /** Episodes the character appears in, e.g. 'NEWHOPE' */
  episodes: Array<Scalars['String']['output']>;
  /** Full name of the character */
  name: Scalars['String']['output'];
  /** Planet the character is from, e.g. 'Tatooine' */
  planet?: Maybe<Scalars['String']['output']>;
};

export type MutateCharacterResponse = {
  __typename?: 'MutateCharacterResponse';
  /** Character that was deleted */
  character?: Maybe<Character>;
  /** 200 if the mutation was successful, 400 otherwise */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mutation to add a new character */
  addCharacter: MutateCharacterResponse;
  /** Mutation to delete an existing character */
  deleteCharacter: MutateCharacterResponse;
  /** Mutation to update an existing character */
  updateCharacter: MutateCharacterResponse;
};


export type MutationAddCharacterArgs = {
  episodes: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  planet?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCharacterArgs = {
  name: Scalars['String']['input'];
};


export type MutationUpdateCharacterArgs = {
  episodes: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  planet?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Query to get a specific character by name */
  character?: Maybe<Character>;
  /** Query to get all characters */
  characters: Array<Maybe<Character>>;
};


export type QueryCharacterArgs = {
  name: Scalars['String']['input'];
};


export type QueryCharactersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Character: ResolverTypeWrapper<CharacterModel>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MutateCharacterResponse: ResolverTypeWrapper<Omit<MutateCharacterResponse, 'character'> & { character?: Maybe<ResolversTypes['Character']> }>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Character: CharacterModel;
  Int: Scalars['Int']['output'];
  MutateCharacterResponse: Omit<MutateCharacterResponse, 'character'> & { character?: Maybe<ResolversParentTypes['Character']> };
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
};

export type CharacterResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  episodes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutateCharacterResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['MutateCharacterResponse'] = ResolversParentTypes['MutateCharacterResponse']> = {
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCharacter?: Resolver<ResolversTypes['MutateCharacterResponse'], ParentType, ContextType, RequireFields<MutationAddCharacterArgs, 'episodes' | 'name'>>;
  deleteCharacter?: Resolver<ResolversTypes['MutateCharacterResponse'], ParentType, ContextType, RequireFields<MutationDeleteCharacterArgs, 'name'>>;
  updateCharacter?: Resolver<ResolversTypes['MutateCharacterResponse'], ParentType, ContextType, RequireFields<MutationUpdateCharacterArgs, 'episodes' | 'name'>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'name'>>;
  characters?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType, Partial<QueryCharactersArgs>>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Character?: CharacterResolvers<ContextType>;
  MutateCharacterResponse?: MutateCharacterResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

