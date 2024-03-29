function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    // rules
    if (player == comp) return 'SERI';

    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}


function putar() {
    const img = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function () {

        if (new Date().getTime() - waktuMulai > 900) {
            clearInterval;
            return;
        }

        img.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)

}



const pilihan = document.querySelectorAll('li img');
const info = document.querySelector('.info');

// console.log(pilihan);
pilihan.forEach(function (el) {


    el.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = el.className;
        console.log(pilihanPlayer);
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function () {
            const imgCom = document.querySelector('.img-komputer');

            imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

            info.innerHTML = hasil;
        }, 1000);


    });
});
















// pGajah.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgCom = document.querySelector('.img-komputer');

//     imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgCom = document.querySelector('.img-komputer');

//     imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgCom = document.querySelector('.img-komputer');

//     imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     info.innerHTML = hasil;
// });