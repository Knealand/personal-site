function drop(ele) {
    var drop_id = "dropdown" + ele.id;
    document.getElementById(drop_id).classList.toggle("show");
}
    
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}