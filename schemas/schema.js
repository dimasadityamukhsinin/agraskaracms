// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import home from './home'
import about from './about'
import service from './service'
import product from './product'
import team from './team'
import gallery from './gallery'
import setting from './setting'
import contact from './contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    blockContent,
    home,
    about,
    service,
    product,
    team,
    gallery,
    setting,
    contact
  ]),
})
