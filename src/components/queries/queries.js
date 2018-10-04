let getAllBooks =  `
{
  books {
    name
    genre
    id
    author {
      name
      age
      id
    }
  }
}
`

let getBookQuery =  `
query ($id: ID!) {
  book(id: $id) {
    name
    genre
    author {
      name
      age
      book {
        name
        id
      }
    }
  }
}`

module.exports = {
  getAllBooks,
  getBookQuery
}