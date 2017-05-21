(function () {
    //for client-version
})();
var tiles = document.querySelectorAll('div.tile');

init();

for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function (e) {
        e.target.classList.add('triggered');
        console.log('getHash: ', e.target.firstElementChild.getHash);
        if (e.target.firstElementChild.getHash) {
            this.classList.add('bomb');
            console.log('Boom!');
        }
    });
}

init();

function init() {
    for (var i = 0; i < tiles.length; i++) {
        var x = Math.random() * 10;
        console.log('floored x: ', x);
        x = x < 3 ? true : false;
        tiles[i].firstElementChild.getHash = x;
    }
}

var k = 0;
function weed() {
    k = 0;
    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].firstElementChild.getHash)
            k++;
    }
    console.log('k :', k);
    console.log('% of buds: ', 81 / 100 * k);
}
