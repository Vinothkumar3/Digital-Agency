const menubtn=document.getElementById("nav_btn")
const navlink=document.getElementById("nav_link")
const menubtnicon=document.querySelector("i")

menubtn.addEventListener("click",e=>{
    navlink.classList.toggle("open")

    const isopen=navlink.classList.contains("open")
    menubtnicon.setAttribute("class",isopen?"ri-close-line":"ri-menu-line")
})

navlink.addEventListener("click",e=>{
    navlink.classList.remove("open")
    menubtnicon.setAttribute("class","ri-menu-line")
})

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
}

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right"
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".header_content .header_btn",{
    ...scrollRevealOption,
    delay:2000,
});
ScrollReveal().reveal(".header_content .social",{
    ...scrollRevealOption,
    delay:2500,
});
ScrollReveal().reveal(".header_bar",{
    ...scrollRevealOption,
    delay:3000,
});