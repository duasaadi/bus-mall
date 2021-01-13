var arrayOfItems = [];
var arrayOfShownImages = []; // this array will be responsible  for keeping track of the shown img at the current loop


var leftItemImg = document.getElementById('left_Item_img');
var middleItemImg = document.getElementById('middle_Item_img');
var rightItemImg = document.getElementById('right_Item_img');

var leftItemText = document.getElementById('left_Item_h2');
var middleItemText = document.getElementById('middle_Itemt_h2');
var rightItemText = document.getElementById('right_Item_h2');

var itemSection = document.getElementById('all_Items');

var itemCanvas = document.getElementById('itemChart');

var clearDataBtn = document.getElementById('clearLocalStorage');
var trialsleft = 5;



function storeData() {

    localStorage.setItem('button', JSON.stringify(arrayOfItems));
    console.log(localStorage);
}


function clearLocalStorage() {

    localStorage.clear();

    arrayOfItems = [];

}

function checkAndRestore() {

    if (localStorage.length > 0) { // check if the local storage has any values in it
        arrayOfItems = JSON.parse(localStorage.getItem('button')); // restore the data from the local storage

    }
}

//function that ensure the images currently displayed are not the same as the next images to be displayed
function checkAvailability(itemName) {
    for (let index = 0; index < arrayOfShownImages.length; index++) {

        if (arrayOfShownImages[index].name === itemName) {
            return true; // because I want it to keep generating images as long as the previous one = the current one
        }

    }
    return false; // so it breaks out the do-while loop because they are not the same.
}


//  costructor for images
function Item(name, image) {
    this.image = image;
    this.name = name.split('.')[0];
    this.clickCounter = 0;
    this.timeShownCounter = 0;
    this.url = 'assets/' + image;

    arrayOfItems.push(this);

}

function renderItem(leftImage, middleImage, rightImage) {
    leftItemImg.setAttribute('src', arrayOfItems[leftImage].url);
    middleItemImg.setAttribute('src', arrayOfItems[middleImage].url);
    rightItemImg.setAttribute('src', arrayOfItems[rightImage].url);

    leftItemText.textContent = arrayOfItems[leftImage].name;
    middleItemText.textContent = arrayOfItems[middleImage].name;
    rightItemText.textContent = arrayOfItems[rightImage].name;

    console.log(leftItemImg);
    console.log(arrayOfItems);

    arrayOfItems[leftImage].timeShownCounter++;
    arrayOfItems[middleImage].timeShownCounter++;
    arrayOfItems[rightImage].timeShownCounter++;
    storeData();

}
// console.log(arrayOfItems);





function renderChart() {
    arrayOfItemNames = [];
    for (let index = 0; index < arrayOfItem.length.; index++) {
        arrayOfItemNames[index].push(arrayOfItems[index].name)

        arrayNumOfClicks = [];
        for (let index = 0; index < arrayOfItems; index++) {
            arrayNumOfClicks[index].push(arrayOfItems[index].clickCounter)

        }

        arrayOfShownImages = [];
        for (let index = 0; index < arrayOfShownImages; index++) {
            arrayOfShownImages[index].push(arrayOfShownImages[index].timeShownCounter)


    }

    var myChart = new Chart(itemChart, {
        type: 'bar',
        data: {
            labels: arrayOfItemNames, // array of labels (names of the Items)
            datasets: [
                {
                    label: '# of Item Clicks',
                    data: arrayOfItemNames, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 1
                },

                {
                    label: 'Time shown for the Item',
                    data: arrayOfShownImages, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)', ,
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',

                    ],

                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',

                    ],

                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}





function pickItem() {
    var leftImage = Math.round(Math.random() * (arrayOfItems.length - 1))

    do {
        var rightImage = Math.round(Math.random() * (arrayOfItems.length - 1))
        var middleImage = Math.round(Math.random() * (arrayOfItems.length - 1))

    } while (leftImage === rightImage || leftImage === middleImage || rightImage === middleImage);

    console.log(leftImage);
    console.log(middleImage);
    console.log(rightImage);
    console.log(arrayOfItems[leftImage]);
    renderItem(leftImage, middleImage, rightImage)

    shownImages = [];

    shownImages.push(
        arrayOfItems[leftImage],
        arrayOfItems[rightImage]
    )

}


function checkItem(objectIndicator) {
    for (var index = 0; index < arrayOfItems.length; index++) {
        if (arrayOfItems[index].url === objectIndicator) {
            arrayOfItems[index].clickcounter++;
            trialsleft--;
            storeData();

        }
    }
}

function countItem(event) {

    var targetId = event.target.id;
    // console.log(targetId);

    if (trialsleft !== 0) { // we are checking if the user has trials left
        if (targetId === 'left_Item_img' || targetId === 'middle_Item_img' || targetId === 'right_Item_img') { // we are checking if the user clicked on the correct image
            var objectIndicator = event.target.getAttribute('src');
            checkItem(objectIndicator);
            pickItem();
        }

    } else {
        itemSection.removeEventListener('click', countItem);
        renderChart();
        console.log(arrayOfItems);
    }
}



new Item('bag', 'bag.jpg');
new Item('banana', 'banana.jpg');
new Item('bathroom', 'bathroom.jpg');
new Item('boots', 'boots.jpg');
new Item('breakfast', 'breakfast.jpg');
new Item('bubllegum', 'bubblegum.jpg');
new Item('chair', 'chair.jpg');
new Item('cthulhu', 'cthulhu.jpg');
new Item('dog-duck', 'dog-duck.jpg');
new Item('dragon', 'dragon.jpg');
new Item('pen', 'pen.jpg');
new Item('pet-sweep', 'pet-sweep.jpg');
new Item('scissors', 'scissors.jpg');
new Item('shark', 'shark.jpg');
new Item('sweep', 'sweep.jpg');
new Item('tauntaun', 'tauntaun.jpg');
new Item('unicorn', 'unicorn.jpg');
new Item('usb', 'usb.gif');
new Item('water-can', 'water-can.jpg');
new Item('wine-glass', 'wine-glass.jpg');


itemSection.addEventListener('click', countItem);
clearDataBtn.addEventListener('click', clearLocalStorage);

pickItem();

