let mobileHam = document.getElementsByClassName('mobile-ham')
let menuPopUp = document.getElementsByClassName('menu-popUp')
let showSearch = document.getElementsByClassName('show-search')



mobileHam[0].classList.remove('open')
menuPopUp[0].classList.remove('show')
function mobileClick(){
    if(mobileHam[0].classList.contains('open')){
        mobileHam[0].classList.remove('open')
        mobileHam[0].classList.add('close')
        menuPopUp[0].classList.remove('show')
    } else{
        mobileHam[0].classList.remove('close')
        mobileHam[0].classList.add('open')
        menuPopUp[0].classList.add('show')
    }
}

function searchBar(){
    if(showSearch[0].classList.contains('close1')){
        showSearch[0].classList.remove('close1')
    } else{
        showSearch[0].classList.add('close1')
    }
}