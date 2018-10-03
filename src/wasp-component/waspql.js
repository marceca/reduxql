const fetch = require('node-fetch');

function Waspql(store, type, API, query, variables) {
  // console.log('variables ',variables)
  // console.log('query ',query)
  if(variables === undefined) {
    // console.log('variables undefined')
  }

fetch(API, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: query
  }),
})
  .then(result => result.json())
  .then((result) => store.dispatch(type(result)))
}

export default Waspql;