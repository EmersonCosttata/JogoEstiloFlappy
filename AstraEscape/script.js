const astra =  document.querySelector('.astra');
const viatura =  document.querySelector('.viatura');
const jump = () => {
astra.classList.add('jump'); 
setTimeout(() => {
    astra.classList.remove('jump');
},600)

const loop = setInterval(() => {
    const viaturaposi = viatura.offsetLeft;
 const astraposi = +window.getComputedStyle(astra).bottom.replace('px','');

 if (astraposi > 120 )  {
    astra.src = 'astradf.png';
    setTimeout(() => {
        astra.src = 'astraa.png'; 
    },400)
  }
 if (viaturaposi <= 120 && viaturaposi > 0 && astraposi < 120 )  {
    viatura.style.animation = 'none';
    viatura.style.left = `${viaturaposi}px`

    astra.style.animation = 'none';
    viatura.style.bottom = `${astraposi}px`
    astra.src = 'gameover.png';

    clearInterval(loop);
  }
 
}, 12);
}
document.addEventListener('keydown', jump)
