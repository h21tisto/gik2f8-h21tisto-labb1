const BookDetail = (list) =>
{
    var html;

    if (list['coverImage'] === '') // If the book has no cover image
    {
        html = `<li id="bookDetail" class="mb-2 mx-2 last:mb-0 p-3 text-black last:border-b-0 border-b border-indigo-700 cursor-pointer">
                    <p class="bookDetail__item mx-4 pt-4">Author: ${list['author']}</p>
                    <p class="bookDetail__item mx-4">Title: ${list['title']}</p>
                    <p class="bookDetail__item mx-4">Pages: ${list['pages']}</p>
                    <p class="bookDetail__item mx-4">Release: ${list['releaseDate']}</p>
                </li>`;
    }
    else // If the book has a cover image
    {
        src = list['coverImage']
        html = `<li id="bookDetail" class="mb-2 mx-2 last:mb-0 p-3 text-black last:border-b-0 border-b border-indigo-700 cursor-pointer">
                    <div class="flex mx-auto space-x-24">
                        <div class="inline-flex flex-col justify-center align-middle">
                            <p class="bookDetail__item mx-4">Author: ${list['author']}</p>
                            <p class="bookDetail__item mx-4">Title: ${list['title']}</p>
                            <p class="bookDetail__item mx-4">Pages: ${list['pages']}</p>
                            <p class="bookDetail__item mx-4">Release: ${list['releaseDate']}</p>
                        </div>
                        <img class="inline-flex object-scale-down h-48 w-auto" 
                        src="${src}">
                    </div>
                </li>`
    }
    
    return html;
};