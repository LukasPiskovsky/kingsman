// $(function (){
//     $("#about-service").hide()
//     $(".service-div").on("mouseover", function () {
//         $("#about-service").slideDown(1000)
//     })
// })
$(function (){
    $("#about-service").hide();
})
window.addEventListener("scroll", () => {
    let offset = section[0].scrollHeight;
    console.log(header.scrollHeight + 500 + offset);
    console.log(window.scrollY);
    if (window.scrollY >= offset + 200) {
        $(function (){
            $("#about-service").slideDown(1000);
        })
    } else if(window.scrollY < 2) {
        $(function (){
            $("#about-service").hide();
        })
    }
});