

async function getAll()
{
    var url = 'https://gik2f8-labs.herokuapp.com/books';
    const jsonData = await fetch(url).then((result) => result.json());
    return jsonData;
}

async function getById(id)
{
    var url = 'https://gik2f8-labs.herokuapp.com/books';
    url += ('/' + id.toString())
    const jsonData = await fetch(url).then((result) => result.json());
    //console.log(jsonData)
    return jsonData;
}