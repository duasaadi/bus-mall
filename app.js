var arrOfItems = [];

var leftItemImg = document.getElementById('left_Item_img');
var middleItemImg = document.getElementById('middle_Item_img');
var rightItemImg = document.getElementById('right_Item_img');

var leftItemText = document.getElementById('left_Item_h2');
var middleItemText = document.getElementById('middle_Item_h2');
var rightItemText = document.getElementById('right_Item_h2');



fuction busMall() {
    this.image = image;
    this.name = name.split('.')[0];
    this.clickCounter = 0;
    this.timeShownCounter =0 ;
    this.url = image;
    this.arrOfItems.push(this);

}

function renderGoat(leftImage, middleImage ,rightImage) {
    leftItemImg.setAttribute('src', arrayOfItems[leftImage].url);
    rightGoatImg.setAttribute('src', arrayOfItems[rightImage].url);
  
    leftGoatText.textContent = arrayOfItems[leftImage].name;
    rightGoatText.textContent = arrayOfItems[rightImage].name;
  }

function pickItem() {
    var leftImage = Math.round(Math.random() * (arrayOfItems.length - 1))

    do {
        var rightImage = Math.round(Math.random() * (arrayOfItems.length - 1))
        var middleImage = Math.round(Math.random() * (arrayOfItems.length - 1))

    } while (leftImage === rightImage || leftImage === middleImage || rightImage === middleImage);

    // console.log(leftImage);
    // console.log(middleImage);
    // console.log(rightImage);

    renderItem(leftImage, middleImage, rightImage)

}



new item('bag', 'bag.jpg' );
new item('banana', 'banana.jpg');
new item('bathroom', 'bathroom.jpg');
new item('boots', 'boots.jpg');
new item('breakfast', 'breakfast.jpg');
new item('bubllegum', 'bubblegum.jpg');
new item('chair', 'chair.jpg');
new item('cthulhu', 'cthulhu.jpg');
new item('dog-duck', 'dog-duck.jpg');
new item('dragon', 'dragon.jpg');
new item('pen', 'pen.jpg');
new item('pet-sweep', 'pet-sweep.jpg');
new item('scissors', 'scissors.jpg');
new item('shark', 'shark.jpg');
new item('sweep', 'sweep.jpg');
new item('tauntaun', 'tauntaun.jpg');
new item('unicorn', 'unicorn.jpg');
new item('usb', 'usb.gif');
new item('wine-glass', 'wine-glass.jpg');

