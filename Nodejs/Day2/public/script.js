let books = document.getElementById('books');

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/books');
    const data = await response.json();
    const bookCards = data.map((book) => `
      <div class="card" style= padding:20px; margin:20px; border:1px solid #ddd; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.1);">
        <img src="${book.coverImg}" alt="Book Cover" style="width: 100%; height:200px; object-fit:cover; border-radius:10px 10px 0 0;">
        <h2 style="font-size:18px; margin-top:10px;">${book.title}</h2>
        <p style="font-size:16px; margin-bottom:10px;">Author: ${book.author}</p>
        <p style="font-size:16px; margin-bottom:10px;">Description: ${book.description}</p>
        <p style="font-size:16px; margin-bottom:10px;">ID: ${book.id}</p>
      </div>
    `);
    books.innerHTML = bookCards.join('');
  } catch (error) {
    books.innerHTML = 'Error fetching data';
  }
}

fetchData();

const createBook = async (book) => {
    try {
        const response = await fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        const data = await response.json();
        fetchData();
    } catch (error) {
        console.error('Error creating book:', error);
    }
}


