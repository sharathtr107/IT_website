document.addEventListener("DOMContentLoaded", function () {
    // Navbar shrink on scroll
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("bg-gray-800", "shadow-md");
        } else {
            navbar.classList.remove("bg-gray-800", "shadow-md");
        }
    });

    // Section fade-in animation on scroll
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger on load

    // Cursor effect
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    cursor.style.borderRadius = "50%";
    cursor.style.background = "rgba(30, 144, 255, 0.8)";
    cursor.style.pointerEvents = "none";
    cursor.style.transition = "transform 0.1s ease-out";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.transform = "scale(1.5)";
        setTimeout(() => (cursor.style.transform = "scale(1)"), 50);
    });

    // AI Chatbot Toggle
    const chatbot = document.createElement("div");
    chatbot.id = "chatbot";
    chatbot.innerHTML = "💬 Chat";
    chatbot.style.position = "fixed";
    chatbot.style.bottom = "20px";
    chatbot.style.right = "20px";
    chatbot.style.background = "#1E90FF";
    chatbot.style.color = "white";
    chatbot.style.padding = "12px";
    chatbot.style.borderRadius = "10px";
    chatbot.style.cursor = "pointer";
    chatbot.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
    chatbot.style.transition = "transform 0.3s ease-in-out";

    document.body.appendChild(chatbot);

    chatbot.addEventListener("click", function () {
        alert("AI Chatbot is coming soon! 🚀");
    });

    chatbot.addEventListener("mouseover", function () {
        chatbot.style.transform = "scale(1.1)";
    });

    chatbot.addEventListener("mouseout", function () {
        chatbot.style.transform = "scale(1)";
    });
});
