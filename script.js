const bookList = [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespeare',
        title: 'Hamlet'
    }
];

const searchField = document.getElementById('searchField');
searchField.addEventListener('keyup', (e) => 
    renderBookList(
        bookList.filter(({title, author}) => {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm !='') return title.toLowerCase().indexOf(searchTerm) >= 0 || 
                                        author.toLowerCase().indexOf(searchTerm) >= 0;
        })
    )
);

function renderBookList(bookList) 
{
    const existingElement = document.querySelector('.book-list');
    const root = document.getElementById('root');
    
    if (existingElement) root.removeChild(existingElement);

    if (bookList.length > 0) root.insertAdjacentHTML('beforeend', BookList(bookList));
    
}