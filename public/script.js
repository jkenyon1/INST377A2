
//fetch data and store it
const endpoint='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const list=[];

fetch(endpoint)
    .then(blob => blob.json()
    .then(data => list.push(...data)))

function findMatches(wordToMatch, list) {
    return list.filter(place => {
        const regex = new RegExp(wordToMatch,'gi');
        return place.name.match(regex);
    })
}

function displayMatches(){
    const matchArray= findMatches(this.value, list);
    const html=matchArray.map(place=>{
        return `
        <li>
            <span class="name">${place.name}</span>
            <span class="category">${place.category}</span>
            <span class="address">${place.address_line_1},${place.city},
                ${place.state},${place.zip}</span>
            
        </li>
        `;
    }).join('');
    suggestOutput.innerHTML= html;
}

const searchInput= document.querySelector('.search');
const suggestOutput= document.querySelector('.filtered');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);