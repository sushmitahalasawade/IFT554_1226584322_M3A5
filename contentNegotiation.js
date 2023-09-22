import json2xml from 'json2xml';
var query = 'https://swapi.dev/api/people/1';
fetch(query,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/xml',
                    'accept':'application/json',
                    'User-Agent':'*'
                }
            }
    )
    .then(function(response){
        console.log(`response = ${response}`); //json
        return response.json();
    })
    // .then(function(xml){
    //     console.log(`XML = ${xml}`); //json
    // })
    .then(function (data) {
        const xml = json2xml(data);
        console.log(`XML = ${xml}`);
    })
    .catch((error) => {
        console.error('Error:',error);
    });