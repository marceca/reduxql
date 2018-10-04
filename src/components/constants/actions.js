const GetBook = 'GetBook';
const GetAllBooks = 'GetAllBooks';

const getBook = (data) => ({type: GetBook, data});
const getAllBooks = (data) => ({type: GetAllBooks, data});


module.exports = {
  GetBook,
  getBook,
  GetAllBooks,
  getAllBooks
}