const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
fetch(URL)
    .then(response => response.json())
    .then(cocktails => console.log(cocktails))