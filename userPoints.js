var lscPoints = 1;
var kaiserPoints = 2;
var bookStorePoints = 3;

function addPoints(user, points) {
    user += points;
    console.log(user);
    console.log(points);
}

document.getElementById('lsc').innerHTML = lscPoints;
document.getElementById('kaiser').innerHTML = kaiserPoints;
document.getElementById('bookstore').innerHTML = bookStorePoints;

