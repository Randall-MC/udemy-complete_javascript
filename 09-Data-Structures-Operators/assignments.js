'use strict';
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/* ---------- Destructuring Arrays ---------- */

// 1.1
const [firstBook, secondBook] = books;
// 1.2
const [, , thirdBook] = books;
// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

/* ---------- Destructuring Objects ---------- */
// 2.1
const { title, author, ISBN } = firstBook;
// 2.2
const { keywords: tags } = firstBook;
// 2.3
const { language, programmingLanguage = 'Unknown' } = books[6];
// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = firstBook);
// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = firstBook;
// 2.6
const printBookInfo = function ({
  title = 'Unknown title',
  author = 'Unknown author',
  year = 'Unknown year',
}) {
  return `${title} by ${author}, ${year}`;
};

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

/* ---------- The Spread Operator ---------- */
// 3.1
const bookAuthors = [...firstBook.author, ...secondBook.author];
// 3.2
const spellWord = function (word) {
  // console.log(...word);
};
spellWord('JavaScript');

/* ---------- Rest Pattern and Parameters ---------- */
// 4.1
const [mainKeyword, ...rest] = firstBook.keywords;
// 4.2
const { publisher: bookPublisher, ...restOfTheBook } = secondBook;
// 4.3
const printBookAuthorsCount = function (title, ...authors) {
  return `THe book ${title} has ${authors.length} authors`;
};
// console.log(
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
// );

/* ---------- Short Circuiting (&& and ||) ---------- */
// 5.1
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'No data available';
};
// console.log(hasExamplesInJava(books[0]));
// console.log(hasExamplesInJava(books[1]));
// 5.2
for (let i = 0; i < books.length; i++) {
  // books[i].onlineContent &&
  //   console.log(`"${books[i].title}" provides online content`);
}

/* ---------- The Nullish Coalescing Operator (??) ---------- */
// 6.1
for (let i = 0; i < books.length; i++) {
  // books[i].onlineContent ??
  //   console.log(
  //     `"${books[i].title}" provides no data about its online content`
  //   );
}

/* ---------- Logical Assignments Operators ---------- */
// 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

/* ---------- Looping Arrays: The for-of Loop ---------- */
// 8.1
// Wrong because I didn't use the "pages" property
// let pageSum = 0;
// for (const { pages } of Object.values(books)) {
//   pageSum += pages;
// }

let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}

// 8.2
const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

// 8.3
for (const [index, author] of allAuthors.entries()) {
  // console.log(`${index + 1}. ${author}`);
}

/* ---------- Enhanced Object Literals ---------- */
// 9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

// 9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

/* ---------- Optional Chaining (?.) ---------- */
// 10.1
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};
// console.log(getFirstKeyword(books[0]));
// console.log(getFirstKeyword(newBook2));

/* ---------- Looping Objects: Object Keys, Values and Entries ---------- */
// 11.1
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);

// Fixing error task 11.2, trying to push over on string
// entries = entries.map(key => [key]);
// console.log(entries);

// 11.2
for (const [index, values] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(values);
}

// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4

// console.log(entries);
// console.log(entries2);

// Compare if "entries" and "entries2" Array are the same
/* function areSame(array1, array2) {
  // Check if both arrays are indeed arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  // Create a sorted copy of each array
  const sorted_array1 = [...array1].sort();
  const sorted_array2 = [...array2].sort();
  // Return true if sorted arrays have the same length and contain the same elements
  return (
    sorted_array1.length === sorted_array2.length &&
    sorted_array1.every((element, index) => element === sorted_array2[index])
  );
}
console.log(areSame(entries, entries2));
*/

/* ---------- Sets ---------- */
// 12.1
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
// 12.2
const uniqueKeywords = new Set(allKeywords);
// 12.3
uniqueKeywords.add('coding').add('science');
// 12.4
uniqueKeywords.delete('business');
// 12.5
const uniqueKeywordsArr = [...uniqueKeywords];
// 12.6
uniqueKeywords.clear();

/* ---------- Maps: Fundamentals ---------- */
// 13.1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
// 13.2
bookMap.set('pages', 464);
// 13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// 13.4
// console.log(bookMap.size);
// 13.5
// console.log(
//   bookMap.has('author') === true && 'The author of the book is known'
// );

/* ---------- Maps: Iteration ---------- */
// 14.1
const firstBookMap = new Map(Object.entries(books[0]));
// 14.2
for (const [key, value] of firstBookMap) {
  // typeof value === 'number' && console.log(key);
  // if (typeof value === 'number') console.log(key);
}

/* ---------- Working with Strings - Part 1 ---------- */
// 15.1
// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);
// 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));
// 15.3
// console.log(quote.slice(-6));
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));
// 15.4
// const isContributor = function (authorName) {
//   return authorName.slice(authorName.lastIndexOf(' ') + 1) === '(Contributor)'
//     ? console.log(true)
//     : console.log(false);
// };

const isContributor = function (author) {
  return author.lastIndexOf('(Contributor)') !== -1;
};
// Testing
// console.log('Julie Sussman (Contributor)'.lastIndexOf('(Contributor)'));

// console.log(isContributor('Julie Sussman (Contributor)'));
// console.log(isContributor('Robert Sedgewick'));

/* ---------- Working with Strings - Part 2 ---------- */
// 16.1
// My solution
const normalizeAuthorName = function (authorName) {
  // Convert to lower case and trim the white spaces
  const normalizedName = authorName.toLowerCase().trim();
  // Delete the '(contributor)' string
  let isContributor = normalizedName;
  if (normalizedName.includes('(contributor)')) {
    isContributor = normalizedName.slice(0, normalizedName.lastIndexOf(' '));
  }
  // Store the first name and the second name in different variables
  const firstName = isContributor.slice(0, isContributor.indexOf(' '));
  const secondName = isContributor.slice(isContributor.indexOf(' ') + 1);
  // Build each name capitalized
  const correctedFirstName = firstName[0].toUpperCase() + firstName.slice(1);
  const correctedSecondName = secondName[0].toUpperCase() + secondName.slice(1);

  return correctedFirstName + ' ' + correctedSecondName;
};

// Other solution
// function normalizeAuthorName(author) {
//   author = author.trim();
//   const firstName = author.slice(0, author.indexOf(' '));

//   let lastName = '';
//   if (author.indexOf(' ') === author.lastIndexOf(' ')) {
//     lastName = author.slice(author.indexOf(' ') + 1, author.length);
//   } else {
//     lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
//   }

//   const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//   return capitalizedFirstName + ' ' + capitalizedLastName;
// }

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));
// console.log(normalizeAuthorName('JoNAS Schmedtmann     '));

// 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');

// 16.3
const logBookTheme = function (book) {
  const title = book.title.toLowerCase();
  let str = '';

  if (title.startsWith('computer')) {
    str = 'This book is about computers';
  }

  if (title.includes('algorithms') && title.includes('structures')) {
    str = 'This book is about algorithms and data structures';
  }

  if (
    title.endsWith('system') ||
    (title.endsWith('systems') && !title.includes('operating'))
  ) {
    str =
      'This book is about some systems, but definitely not about operating systems';
  }

  return str;
};

/* ---------- Working with Strings - Part 3 ---------- */
// 17.1
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = function (categories) {
  const categoriesArr = categories.split(';');
  for (const category of categoriesArr) {
    // console.log(category);
  }
};

logBookCategories(bookCategories);
// 17.2
const getKeywordsAsString = function (books) {
  // Create a set to store the keywords and remove duplicates
  const keywordsSet = new Set();
  // Looping over the "books" (Array of objects) and then loop over the "keywords" property (Array of strings)
  for (const book of books) {
    for (const keyword of book.keywords) {
      // Store each keyword
      keywordsSet.add(keyword);
    }
  }

  const keywordsStr = [...keywordsSet].join(';');

  return console.log(keywordsStr);
};

// Other solution
// function getKeywordsAsString(books) {
//   const keywords = [];

//   for (const book of books) {
//     keywords.push(...book.keywords);
//   }

//   const uniqueKeywords = [...new Set(keywords)];

//   return uniqueKeywords.join(';');
// }
// getKeywordsAsString(books);

// 17.3
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

const logBookChapters = function (bookChapters) {
  for (const [chapter, pages] of bookChapters) {
    console.log(chapter.padEnd(20, '_') + ' ' + pages);
  }
};

logBookChapters(bookChapters);
