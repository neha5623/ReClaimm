const API_KEY = 'AIzaSyBPsZJstA4soxiFjDSwtblKJOvObCgEkmg';
const clientId = '183058898586-ld3n87r7erfmj104c1a41c4ng625hsjv.apps.googleusercontent.com'
const SHEET_ID = '1Ccq3GMQp1i3rrO4di5CnsklPqqq0T7FCl4mZta2Pjuk';

const RANGE = 'Item List';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

let itemslist = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        itemslist = data.values;
        console.log("sheetData = ", itemslist);

        for (let i = 1; i < itemslist.length; i++) {
            let name = itemslist[i][1];
            let locationn = itemslist[i][2];
            let photo = itemslist[i][6];

            if (typeof photo === 'undefined') {
                photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaPyeDyTpc2U7lR96etWzLQU5s77awUPs1Zt17g8LwWLs9vzTmIxlgYHLdpDYRK9Mxj8&usqp=CAU";
            } else {
                const params = new URLSearchParams(new URL(photo).search);
                const id = params.get("id");
                photo = `https://lh3.googleusercontent.com/d/${id}=w1024?authuser=0`;
            }

            const itemcard = `<div class="card" cardno="${i}">
                <img src="${photo}" alt="Item 1">
                <div class="name">${name}</div>
                <div class="location">
                    <img src="../elements/loc.jpg" alt="Location Icon">${locationn}
                </div>
            </div>`;

            $("#cardContainer").append(itemcard);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

document.getElementById('scrollLeft').addEventListener('click', function() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({
        top: 0,
        left: -250,
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({
        top: 0,
        left: 250,
        behavior: 'smooth'
    });
});

$("#searchInput").on("keyup change", function () {
    const searchVal = $(this).val().toLowerCase();
    for (let i = 1; i < itemslist.length; i++) {
        const name = itemslist[i][1].toLowerCase();
        if (name.includes(searchVal)) {
            $(`.card[cardno=${i}]`).show();
        } else {
            $(`.card[cardno=${i}]`).hide();
        }
    }
});

$('#cardContainer').on('click', '.card', function () {
    const cardno = $(this).attr("cardno");
    const url = `item.html?cardno=${cardno}`;
    window.location = url;
});