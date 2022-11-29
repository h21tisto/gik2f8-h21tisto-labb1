const url = 'https://gik2f8-labs.herokuapp.com/books';
/*
function getAll()
{
    return fetch(url)
    .then((result) => result.json())
    .then((jsonData) => jsonData);
}
*/

async function getAll()
{
    const jsonData = await fetch(url).then((result) => result.json());
    return jsonData;
}