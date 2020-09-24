GraphQL Depth Limit
===================

Dead-simple defense against unbounded GraphQL queries. Limit the complexity of the queries solely by their *depth*.


## Why?

Suppose you have an `Album` type that has a list of `Song`s.

```graphql
{
  album(id: 42) {
    songs {
      title
      artists
    }
  }
}
```

And perhaps you have a different entry point for a `Song` and the type allows you to go back up to the `Album`.

```graphql
{
  song(id: 1337) {
    title
    album {
      title
    }
  }
}
```

That opens your server to the possibility of a cyclical query!

```graphql
query evil {
  album(id: 42) {
    songs {
      album {
        songs {
          album {
            songs {
              album {
                songs {
                  album {
                    songs {
                      album {
                        songs {
                          album {
                            # and so on...
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

How would your server handle it if the query was 10,000 deep?
This may become a very expensive operation, at some point pinning a CPU on the server or perhaps the database.
This is a possible DOS vulnerability.
We want a way to validate the complexity of incoming queries.

This implementation lets you limit the **total depth** of each operation.

## Quantifying Complexity

Deciding exactly *when* a GraphQL query is "too complex" is a nuanced and subtle art.
It feels a bit like deciding how many grains of sand are needed to compose a "pile of sand".
Some other libraries have the developer assign **costs** to parts of the schema, and adds the cumulative costs for each query.

[graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) does this based on the *types*,
and [graphql-query-complexity](https://github.com/ivome/graphql-query-complexity) does it based on each *field*.

Adding up costs may work for some backends, but it does not always faithfully represent the complexity.
By adding the costs at each depth, it's as if the complexity is increasing lineraly with depth.
Sometimes the complexity actually increases **exponentially** with depth, for example if requesting a field means doing another SQL `JOIN`.

This library validates the total depth of the queries (and mutations).

### Here's are some queries with a depth of 0

```graphql
# simplest possible query
query shallow1 {
  thing1
}

# inline fragments don't actually increase the depth
query shallow2 {
  thing1
  ... on Query {
    thing2
  }
}

# neither do named fragments
query shallow3 {
  ...queryFragment
}

fragment queryFragment on Query {
  thing1
}
```

### Deeper queries

```graphql
# depth = 1
query deep1_1 {
  viewer {
    name
  }
}

query deep1_2 {
  viewer {
    ... on User {
      name
    }
  }
}

# depth = 2
query deep2 {
  viewer {
    albums {
      title
    }
  }
}

# depth = 3
query deep3 {
  viewer {
    albums {
      ...musicInfo
      songs{
        ...musicInfo
      }
    }
  }
}

fragment musicInfo on Music {
  id
  title
  artists
}
```

## Usage

```shell
$ npm install graphql-depth-limit
```

It works with [express-graphql](https://github.com/graphql/express-graphql) and [koa-graphql](https://github.com/chentsulin/koa-graphql).
Here is an example with Express.

```js
import depthLimit from 'graphql-depth-limit'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.use('/graphql', graphqlHTTP((req, res) => ({
  schema,
  validationRules: [ depthLimit(10) ]
})))
```

The first argument is the total depth limit. This will throw a validation error for queries (or mutations) with a depth of 11 or more.<br/>
The second argument is an options object, where you can do things like specify ignored fields. Introspection fields are ignored by default.<br/>
The third argument is a callback which receives an `Object` which is a map of the depths for each operation.<br/>

```js
depthLimit(
  10,
  { ignore: [ /_trusted$/, 'idontcare' ] },
  depths => console.log(depths)
)
```

Now the evil query from before will tell the client this:

```js
{
  "errors": [
    {
      "message": "'evil' exceeds maximum operation depth of 10",
      "locations": [
        {
          "line": 13,
          "column": 25
        }
      ]
    }
  ]
}
```

## Future Work
- [ ] Type-specific sub-depth limits, e.g. you can only descend 3 levels from an `Album` type, 5 levels from the `User` type, etc.
- [ ] More customization options, like custom errors.

## Documentation
<a name="depthLimit"></a>

### depthLimit(maxDepth, [options], [callback]) ⇒ <code>function</code>
Creates a validator for the GraphQL query depth

**Kind**: global function  
**Returns**: <code>function</code> - The validator function for GraphQL validation phase.  

| Param | Type | Description |
| --- | --- | --- |
| maxDepth | <code>Number</code> | The maximum allowed depth for any operation in a GraphQL document. |
| [options] | <code>Object</code> |  |
| options.ignore | <code>String</code> \| <code>RegExp</code> \| <code>function</code> | Stops recursive depth checking based on a field name. Either a string or regexp to match the name, or a function that reaturns a boolean. |
| [callback] | <code>function</code> | Called each time validation runs. Receives an Object which is a map of the depths for each operation. |

