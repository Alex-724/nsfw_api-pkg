
## Installation
```txt
npm i nsfw_api-pkg
```

## Delcaration
```js
const nsfw_api_pkg = require('nsfw_api-pkg');
```

## Get Api
```js
const nsfw_api_pkg = require("nsfw_api-pkg");
const api = new nsfw_api_pkg();
```

## Functions
```js
getData() // To get all the data
getAnime(); // To get all the anime data
getRandomAnime(); // To get a random anime gif link
getReal(); // To get all the real data
getRandomReal(); // To get a random real gif link
```

## Type
```txt
You can put type in [getAnime(), getRandomAnime(), getReal(), getRandomReal()] functions
and avalible data for now is ["pussy", "ass", "kiss"]
```

## Demo
```js
const nsfw_api_pkg = require("nsfw_api-pkg");
const api = new nsfw_api_pkg();
api.getRandomAnime("pussy").then(async (res)=>{
    console.log()
}).catch(async (err) => {
    console.error(err)
})
```