let booksList = [];
let bookArray = {};
let filteredList = {};

getAll().then((apiBooks) => (booksList = apiBooks));
document.body.addEventListener('mouseover', (e) => renderBookDetails(e.target, filteredList));  // Create eventlistener for the whole body

const searchField = document.getElementById('searchField');
searchField.addEventListener('keyup', (e) => 
    renderBookList(
        booksList.filter(({title, author}) => {
            const searchTerm = e.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0;
        })
    )
);

async function renderBookDetails(element, filteredList)
{
    if(element.id === 'listItem') { // If the moused over element is a list item
        var detailList = document.createElement('li'); // Create an empty li element
        var index = Array.from(element.parentElement.children).indexOf(element); // Get the index of the list item (which will correspond to the correct index in the book list)

        element.appendChild(detailList); // Append the li element to the list item

        // Function to get the correct id of the book based on the title
        for (i = 0; i < booksList.length; i++)
        {
            if (booksList[i]['title'] === filteredList[index]['title'])  
            {
                await getById(i + 1).then((apiBooks) => bookArray = apiBooks); // Get the book from the api based on the id
                detailList.innerHTML = BookDetail(bookArray); // Set the html of the detailList
            } 
        }   

        document.body.addEventListener('mouseout', (e) => {
            var element = e.target;
            if(element.id === 'listItem') var child = element.children[0]; try {element.removeChild(child);} catch{}; // If the mouse leaves the list item, delete the children
        });
    };
}

function renderBookList(booksList) 
{
    filteredList = booksList;
    const root = document.getElementById('root');
    const existingbookList = document.querySelector('.book-list');
    
    if (existingbookList) root.removeChild(existingbookList);
    if (booksList.length > 0 && searchField.value) root.insertAdjacentHTML('beforeend', BookList(booksList));
}