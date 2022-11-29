var bookArray = {};
let bookList = [];
let filteredList = {};

getAll().then((apiBooks) => (bookList = apiBooks));


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

document.body.addEventListener('mouseover', (e) => renderBookDetails(e.target, filteredList));

async function renderBookDetails(element, filteredList)
{
    if(element.id === 'listItem') {
        var listItem = document.createElement('li');
        var index = Array.from(element.parentElement.children).indexOf(element);

        element.appendChild(listItem);

        for (i = 0; i < bookList.length; i++)
        {
            if (bookList[i]['title'] === filteredList[index]['title'])
            {
                await getById(i + 1).then((apiBooks) => bookArray = apiBooks);
                listItem.innerHTML = BookDetail(bookArray);
            } 
        }   

        document.body.addEventListener('mouseout', (e) => {
            var element = e.target;
    
            if(element.id === 'listItem')
            {
                var child = element.children[0];try {element.removeChild(child);} catch{};
            }
        });
        
    };

    
    
}

function renderBookList(bookList) 
{
    filteredList = bookList;
    const root = document.getElementById('root');
    const existingBookList = document.querySelector('.book-list');
    
    if (existingBookList) root.removeChild(existingBookList);

    if (bookList.length > 0) root.insertAdjacentHTML('beforeend', BookList(bookList));
    
}