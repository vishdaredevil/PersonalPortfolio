      // Initialize AOS animations
      AOS.init({
          duration: 2000, // Animation duration in milliseconds
          easing: 'ease-in-out',
          once: true, // Animation happens only once
      });

      // Highlight the active navbar link based on the current page or section
      document.addEventListener("DOMContentLoaded", function () {
          const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
          const sections = document.querySelectorAll("section");

          const updateActiveLink = () => {
              let currentSection = "";
              sections.forEach((section) => {
                  const sectionTop = section.offsetTop - 100; // Adjust for navbar height
                  const sectionHeight = section.offsetHeight;
                  if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                      currentSection = section.getAttribute("id");
                  }
              });

              navLinks.forEach((link) => {
                  link.classList.remove("active");
                  if (link.getAttribute("href").includes(currentSection)) {
                      link.classList.add("active");
                  }
              });
          };

          // Run on page load and scroll
          updateActiveLink();
          window.addEventListener("scroll", updateActiveLink);
      });

      // Add click event to education blocks
      document.querySelectorAll(".timeline-content").forEach((block) => {
          block.addEventListener("click", () => {
              alert("You clicked on an education block!");
          });
      });

      // Add click event to certification cards
      document.querySelectorAll(".certification-card").forEach((card) => {
        card.addEventListener("click", () => {
          card.style.transform = "scale(1.1)"; // Slight zoom effect
          card.style.boxShadow = "0 8px 20px rgba(255, 69, 0, 0.5)"; // Glowing shadow effect

          // Reset the animation after a short delay
          setTimeout(() => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }, 300);

          // Optional: Show an alert or perform another action
          alert("You clicked on a certificate!");
        });
      });

      // Add click event to project cards
      document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", () => {
          card.style.transform = "scale(1.1)"; // Slight zoom effect
          card.style.boxShadow = "0 8px 20px rgba(255, 69, 0, 0.5)"; // Glowing shadow effect

          // Reset the animation after a short delay
          setTimeout(() => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }, 300);

          // Optional: Show an alert or perform another action
          alert("You clicked on a project!");
        });
      });

      // Add click event to education blocks
      document.querySelectorAll(".timeline-content").forEach((block) => {
        block.addEventListener("click", () => {
          block.style.transform = "scale(1.1)"; // Slight zoom effect
          block.style.boxShadow = "0 8px 20px rgba(255, 69, 0, 0.5)"; // Glowing shadow effect

          // Reset the animation after a short delay
          setTimeout(() => {
            block.style.transform = "scale(1)";
            block.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }, 300);
        });
      });

      // Add click event to certification cards
      document.querySelectorAll(".certification-card").forEach((card) => {
        card.addEventListener("click", () => {
          card.style.transform = "scale(1.1)"; // Slight zoom effect
          card.style.boxShadow = "0 8px 20px rgba(255, 69, 0, 0.5)"; // Glowing shadow effect

          // Reset the animation after a short delay
          setTimeout(() => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }, 300);
        });
      });

      // Add click event to project cards
      document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", () => {
          card.style.transform = "scale(1.1)"; // Slight zoom effect
          card.style.boxShadow = "0 8px 20px rgba(255, 69, 0, 0.5)"; // Glowing shadow effect

          // Reset the animation after a short delay
          setTimeout(() => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }, 300);
        });
      });
