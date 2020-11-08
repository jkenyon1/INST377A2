
//fetch data and store it
const endpoint='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const list=[];

fetch(endpoint).then(data =>data.json().then(data => list.push(...data)))

function findMatches(wordToMatch, list){

    return list.filter(place => {
        const regex = new RegExp(wordToMatch,'gi');
        return place.name.match(regex);
    });
}

function displayMatches(){
    const matchArray= findMatches(this.value, list);
    const html=matchArray.map(place=>{
        const regex= new RegExp(this.value, 'gi');
        const placeName= list.name.replace(regex,`<span class="h1">${this.value}</span>`)
        return `
        <li>
            <span class="name">${placeName}</span>
            <span class="category">${place.category}</span>
            <span class="address">${place.address_line_1},${place.city},
                ${place.state},${place.zip}</span>
            
        </li>
        `;
    }).join('');
    suggestions.innerHTML= html;
}

const searchInput= document.quearySelector('.search');
const suggestOutput= documnet.quearySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);