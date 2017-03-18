const model = require('./models')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./schema')

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))
app.listen(3000, () => {
  console.log('Running a GraphQL API server at localhost:3000/graphql')
});
