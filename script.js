let books = [];

fetch('booklist.json')
  .then(res => res.json())
  .then(data => books = data);

function recommend() {
  const input = document.getElementById("search").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  const matches = books.filter(book =>
    book.title.includes(input) ||
    book.keywords.some(k => k.includes(input))
  );

  matches.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - ${book.author}`;
    result.appendChild(li);
  });
}
