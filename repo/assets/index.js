const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.signup;
if (value) {
    document.getElementById("newsletterMsg").innerHTML = "Thank you for signing up!";
    document.getElementById("newsletter").innerHTML = "";
}
document.addEventListener("DOMContentLoaded", () => {
    const scrolltotop = document.querySelector(".scrollToTop");
    if (scrolltotop) {
        scrolltotop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});
document.addEventListener("scroll", () => {
    const scrolltotop = document.querySelector(".scrollToTop");
    if (window.pageYOffset > 160 && scrolltotop) {
        scrolltotop.style.display = "block";
    } else {
        scrolltotop.style.display = "none";
    }
});
let link = document.querySelectorAll(".link");
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (e) {
        navigator.clipboard.writeText(e.target.getAttribute("link"));
        fadeOutEffect(e.target.querySelector(".tooltip"));
    });
}
function fadeOutEffect(fadeTarget) {
    fadeTarget.style.display = "block";
    setTimeout(function () {
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = "none";
                fadeTarget.style.opacity = 1;
            }
        }, 50);
    }, 300);
}
