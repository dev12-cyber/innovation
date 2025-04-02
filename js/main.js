(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
})(jQuery);

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form from refreshing the page

//     let formData = new FormData(this);

//     fetch("https://formsubmit.co/ajax/frugalityprojects@gmail.com", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             document.getElementById("successMessage").style.display = "block"; // Show success message
//             document.getElementById("contactForm").reset(); // Reset form
//         }
//     })
//     .catch(error => console.error("Error:", error));
// });


// document.getElementById("contactEmailForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent page refresh

//     let formData = new FormData(this);

//     fetch("https://formsubmit.co/ajax/frugalityprojects@gmail.com", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Response:", data); // Debugging response

//         if (data.success || data.message) {  // Handle different response formats
//             let successMessage = document.getElementById("successMessage");
//             successMessage.style.display = "block";
//             successMessage.style.color = "green";
//             successMessage.innerText = "Thank you! Your message has been sent successfully."; 
            
//             setTimeout(() => {
//                 successMessage.style.display = "none"; // Hide message after 5 seconds
//             }, 5000);

//             document.getElementById("contactEmailForm").reset(); // Reset form
//         } else {
//             alert("Something went wrong. Please try again.");
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("Failed to send message. Please check your email configuration.");
//     });
// });
// function toggleMenu(button) {
//     button.classList.toggle("active");
//     const menuIcon = button.querySelector(".menu-icon");
//     const closeIcon = button.querySelector(".close-icon");

//     menuIcon.classList.toggle("d-none");
//     closeIcon.classList.toggle("d-none");
// }
