
const teste = () => {
    alert('this is the test');
}

const toggleClass = () => {
    var navbar= document.getElementById('nav');
    // if(navbar.classList.contains('extended')){
    //     navbar.classList.remove('extended');
    // }else{
    //     navbar.classList.add('extended');
    // }
    if(navbar){
    navbar.classList.toggle('extended');
    }else{
        console.error('nao tem navbar class');
    }
}

const toggleClassSub = () => {
    var subNavbar = document.getElementById('sub-menu');
    if(subNavbar){
        subNavbar.classList.toggle('sub');
    }else{
        console.error('nao tem subNavbar class');
    }
}