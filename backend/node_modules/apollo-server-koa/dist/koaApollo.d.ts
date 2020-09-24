import Koa from 'koa';
import { GraphQLOptions } from 'apollo-server-core';
import { ValueOrPromise } from 'apollo-server-types';
export interface KoaGraphQLOptionsFunction {
    (ctx: Koa.Context): ValueOrPromise<GraphQLOptions>;
}
export interface KoaHandler {
    (ctx: Koa.Context, next: any): void;
}
export declare function graphqlKoa(options: GraphQLOptions | KoaGraphQLOptionsFunction): KoaHandler;
//# sourceMappingURL=koaApollo.d.ts.map