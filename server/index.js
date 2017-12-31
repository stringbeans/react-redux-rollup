const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const apolloServerExpress = require('apollo-server-express')


const graphqlExpress = apolloServerExpress.graphqlExpress
const graphiqlExpress = apolloServerExpress.graphiqlExpress

const graphql = require('graphql')

const Contact = new graphql.GraphQLObjectType({
  name: 'Contact',
  fields: {
    name: {
      type: graphql.GraphQLString,
    },
    phone: {
      type: graphql.GraphQLString,
    }
  }
})

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contacts: {
        type: new graphql.GraphQLList(Contact),
        resolve(_, args, context) {
          return [{
            "name": "John Kor",
            "phone": "555-555-5551"
          }, {
            "name": "Kenny Grant",
            "phone": "555-555-5552"
          }, {
            "name": "Jenna Kor",
            "phone": "555-555-5553"
          }]
        }
      }
    }
  })
})

const PORT = 4000

const app = express();

app.use(cors())

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.info(`GraphQL server started at http://localhost:${PORT}`)
})
