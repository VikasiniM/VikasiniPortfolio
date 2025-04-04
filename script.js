// Initialize EmailJS
(function () {
    emailjs.init("yDHVEKGvMNJuFL-XH"); // Replace "YOUR_USER_ID" with your EmailJS User ID
})();

// Function to send mail
function sendMail() {
    // Collect form data
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form inputs
    if (!name || !phone || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    // Prepare the template parameters
    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        message: message,
    };

    // Send email using EmailJS
    emailjs
        .send("service_0y4wa67", "template_mx0y58o", templateParams)
        .then((response) => {
            alert("Message sent successfully!");
            console.log("SUCCESS:", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.error("ERROR:", error);
        });
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer💻", "Coder","Problem solver","Graduate🎓"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer💻", "Coder","Problem solver","Graduate🎓"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});