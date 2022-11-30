const BookDetail = (list) =>
{
    var html;

    if (list['coverImage'] === '') // If the book has no cover image
    {
        html = `<li id="bookDetail" class="mb-2 last:mb-0 px-8 pt-9 mt-6 p-3 text-black last:border-b-0 border-t border-black cursor-pointer">
                    <div class="flex mx-auto space-x-24">
                        <div class="inline-flex flex-col justify-center align-middle">
                            <p class="bookDetail__item mx-4">Author: ${list['author']}</p>
                            <p class="bookDetail__item mx-4">Title: ${list['title']}</p>
                            <p class="bookDetail__item mx-4">Pages: ${list['pages']}</p>
                            <p class="bookDetail__item mx-4">Release: ${list['releaseDate']}</p>
                        </div>
                        <img class="inline-flex object-scale-down h-48 w-auto" 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg">
                    </div>
                </li>`;
    }
    else // If the book has a cover image
    {
        src = list['coverImage']
        html = `<li id="bookDetail" class="mb-2 last:mb-0 px-8 pt-9 mt-6 p-3 text-black last:border-b-0 border-t border-black cursor-pointer">
                    <div class="flex mx-auto space-x-24">
                        <div class="inline-flex flex-col justify-center align-middle">
                            <p class="bookDetail__item mx-4">Author: ${list['author']}</p>
                            <p class="bookDetail__item mx-4">Title: ${list['title']}</p>
                            <p class="bookDetail__item mx-4">Pages: ${list['pages']}</p>
                            <p class="bookDetail__item mx-4">Release: ${list['releaseDate']}</p>
                        </div>
                        <img class="inline-flex object-scale-down h-48 w-auto" 
                        src="${list['coverImage']}">
                    </div>
                </li>`
    }
    
    return html;
};