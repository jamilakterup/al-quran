
function getSuraName() {
    const url = 'https://alquranbd.com/api/tafheem/sura/list';
    fetch(url)
        .then(res => res.json())
        .then(data => showSuraName(data))
}

function showSuraName(suraName) {
    suraName.forEach(element => {
        const {id, name} = element
        const selectDiv = document.getElementById('left-div');
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn btn-wide w-11/12 px-12 mb-3 Class
        Properties
        Preview 
        text-inherit	color: inherit;
        Aa
        text-current	color: currentColor;
        Aa
        text-transparent	color: transparent;
        Aa
        text-black	color: rgb(0 0 0);
        Aa
        text-white">
                    <div class="mr-auto">${id}</div>
                    <p>${name}</p>
                </button>
        `
        selectDiv.appendChild(div)

        // details select
        div.addEventListener('click', () => {
            getDetails(id);
        })
    });
}

function getDetails(id) {
    const url = `https://alquranbd.com/api/tafheem/suraData/${id}/1`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetailsSura(data))
}

function showDetailsSura(ayats) {
    document.getElementById('right-div').innerHTML = '';

    ayats.forEach(element => {
        const divSelect = document.getElementById('right-div');
        ul = document.createElement('ul');
        ul.innerHTML = `
        <div class="text-center text-xl">
        <li>${element.ayah_text}</li>
        <div class="mb-5">
        <p>${element.bn[0].token_trans}</p>
        <p>${element.bn[1] ? element.bn[1].token_trans : ''}</p>
        </div>
        </div>
        `
        divSelect.appendChild(ul)
    });
}
getSuraName()