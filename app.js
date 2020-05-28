const clock = document.querySelector(".clock") ;

window.addEventListener("load",time) ;


function time() {
    let d = new Date() ;
    let h = d.getHours() ;
    let m = d.getMinutes() ;
    let s = d.getSeconds() ;
    m = check(m) ;
    s = check(s);
    clock.textContent = `${h}:${m}:${s}` ;
    setTimeout(time,1000) ;
}
function check(t){
    if(t < 10) return '0' + t ;
    return t ;
}