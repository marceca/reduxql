
let getBookQuery =  `
{
  book(id: "5bb394c183f588d40f9a2c6f") {
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
}
`

module.exports = {
  getBookQuery
}