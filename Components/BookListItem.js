const BookListItem = (book) =>
{
    let html = `<li id="listItem" class="book-list__item py-6 px-4 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                    ${book.author} - ${book.title}
                </li>`;
    return html;
};