var arrayOfItems = [];
var shownImages = []; // this array will be responsible  for keeping track of the shown img at the current loop


var leftItemImg = document.getElementById('left_Item_img');
var middleItemImg = document.getElementById('middle_Item_img');
var rightItemImg = document.getElementById('right_Item_img');

var leftItemText = document.getElementById('left_Item_h2');
var middleItemText = document.getElementById('middle_Itemt_h2');
var rightItemText = document.getElementById('right_Item_h2');

var itemSection = document.getElementById('all_Items');

var itemCanvas = document.getElementById('itemChart');
var trialsleft = 5;



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

}


function renderChart() {
    var myChart = new Chart(goatCanvas, {
        type: 'bar',
        data: {
            labels: arrayOfGoatNames, // array of labels (names of the goats)
            datasets: [
                {
                    label: '# of Goat Clicks',
                    data: arrayOfGoatCount, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Time shown for the Goat',
                    data: arrayOfGoatsShown, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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



function checkAvailability(selectedGoatName) {

    for (var index = 0; index < shownImages.length; index++) {
        if (shownImages[index].name === selectedGoatName) {
            return true;
        }
    }
    return false;
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
    arrayOfGoats[leftImage],
    arrayOfGoats[rightImage]
  )

}


function checkItem(objectIndicator) {
    for (var index = 0; index < arrayOfItems.length; index++) {
        if (arrayOfItems[index].url === objectIndicator) {
            arrayOfItems[index].clickcounter++;
            trialsleft--;
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
new Item('wine-glass', 'wine-glass.jpg');


itemSection.addEventListener('click', countItem);
pickItem();
