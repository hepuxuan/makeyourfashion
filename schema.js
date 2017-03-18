const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql')
const model = require('./models')

const itemType = new GraphQLObjectType({
  name: 'Item',
  description: 'A Item',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the item.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the item.',
    },
    description: {
      type: GraphQLString,
      description: 'The description of the item.',
    },
    img_url: {
      type: GraphQLString,
      description: 'The img_url of the item.',
    }
    ,
    category: {
      type: GraphQLString,
      description: 'The category of the item.',
    },
    price: {
      type: GraphQLInt,
      description: 'The price of the item.',
    }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      item: {
        type: itemType,
        args: {
          id: {
            description: 'id of the item',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve (_, args) {
          return model.Item.findById(args.id)
        }
      },
      items: {
        type: new GraphQLList(itemType),
        args: {
          category: {
            type: GraphQLString
          }
        },
        resolve (_, args) {
          return model.Item.findAll({where: {
            category: args.category
          }})
        }
      }
    }
  })
})
module.exports = schema
