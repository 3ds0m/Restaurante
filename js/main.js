document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.getElementById("header")

  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
    header.classList.add("scrolled")
  } else {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle")
  const navList = document.querySelector(".nav-list")

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active")
    })

    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active")
      })
    })
  }

  // Language switcher functionality
  // Define translations object
  const translations = {
    es: {
      home: "Inicio",
      menu: "Menú",
      reservation: "Reservación",
      about: "Nosotros",
      contact: "Contacto",
      welcome: "Bienvenido",
      description: "Descubre sabores auténticos y experiencias inolvidables en nuestro restaurante.",
      bookTable: "Reserva tu Mesa",
      ourMenu: "Nuestro Menú",
      specialities: "Especialidades del Chef",
      starters: "Entrantes",
      mainCourses: "Platos Principales",
      desserts: "Postres",
      drinks: "Bebidas",
      all: "Todos",
      aboutUs: "Sobre Nosotros",
      ourHistory: "Nuestra Historia",
      ourTeam: "Nuestro Equipo",
      contactUs: "Contáctanos",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo Electrónico",
      openingHours: "Horario de Apertura",
      mondayFriday: "Lunes - Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      closed: "Cerrado",
      testimonials: "Testimonios",
      name: "Nombre",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      accessibility: "Accesibilidad",
      highContrast: "Alto Contraste",
      largeText: "Texto Grande",
      dishIngredients: "Ingredientes",
      reservationFormTitle: "Reserva tu Mesa",
      reservationFormName: "Nombre",
      reservationFormEmail: "Correo Electrónico",
      reservationFormPhone: "Teléfono",
      reservationFormDate: "Fecha",
      reservationFormTime: "Hora",
      reservationFormPeople: "Número de Personas",
      reservationFormSubmit: "Reservar Ahora",
      successModalTitle: "¡Reserva Exitosa!",
      successModalMessage: "Tu reserva ha sido confirmada. ¡Gracias!",
      successModalClose: "Cerrar",
      readMore: "Leer más",
    },
    en: {
      home: "Home",
      menu: "Menu",
      reservation: "Reservation",
      about: "About",
      contact: "Contact",
      welcome: "Welcome",
      description: "Discover authentic flavors and unforgettable experiences in our restaurant.",
      bookTable: "Book a Table",
      ourMenu: "Our Menu",
      specialities: "Chef's Specialities",
      starters: "Starters",
      mainCourses: "Main Courses",
      desserts: "Desserts",
      drinks: "Drinks",
      all: "All",
      aboutUs: "About Us",
      ourHistory: "Our History",
      ourTeam: "Our Team",
      contactUs: "Contact Us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      openingHours: "Opening Hours",
      mondayFriday: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      testimonials: "Testimonials",
      name: "Name",
      message: "Message",
      sendMessage: "Send Message",
      accessibility: "Accessibility",
      highContrast: "High Contrast",
      largeText: "Large Text",
      dishIngredients: "Ingredients",
      reservationFormTitle: "Book Your Table",
      reservationFormName: "Name",
      reservationFormEmail: "Email",
      reservationFormPhone: "Phone",
      reservationFormDate: "Date",
      reservationFormTime: "Time",
      reservationFormPeople: "Number of People",
      reservationFormSubmit: "Book Now",
      successModalTitle: "Successful Reservation!",
      successModalMessage: "Your reservation has been confirmed. Thank you!",
      successModalClose: "Close",
      readMore: "Read more",
    },
  }

// Modifica la función changeLanguage así:
function changeLanguage(language) {
  if (!translations[language]) return; // Si el idioma no existe, salir
  
  // Actualizar todos los elementos con data-lang
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[language][key]) {
      // Para inputs, textareas y buttons usamos value en lugar de textContent
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'BUTTON') {
        element.value = translations[language][key];
      } else {
        element.textContent = translations[language][key];
      }
    }
  });

  // Actualizar el selector de idioma visual
  const selectedOption = document.querySelector(`.language-option[data-lang-code="${language}"]`);
  if (selectedOption) {
    const flagImg = selectedOption.querySelector("img")?.src;
    const languageText = selectedOption.querySelector("span")?.textContent;

    const currentFlag = document.getElementById("current-flag");
    const currentLangSpan = document.querySelector("#current-language span");

    if (currentFlag && flagImg) currentFlag.src = flagImg;
    if (currentLangSpan && languageText) currentLangSpan.textContent = languageText;
  }

  // Actualizar atributo lang del HTML
  document.documentElement.lang = language;
  localStorage.setItem("preferredLanguage", language);
}

// Asegúrate que el HTML tenga elementos como:
// <span data-lang="home">Home</span>
// <button data-lang="bookTable">Book a Table</button>


  // Reemplaza el código de accesibilidad con esto:
const accessibilityBtn = document.getElementById("accessibility-btn");
const accessibilityMenu = document.getElementById("accessibility-menu");
const highContrastToggle = document.getElementById("high-contrast-toggle");
const largeTextToggle = document.getElementById("large-text-toggle");

if (accessibilityBtn && accessibilityMenu) {
  // Toggle del menú
  accessibilityBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el evento se propague
    accessibilityMenu.classList.toggle("active");
  });

  // Cerrar al hacer click fuera
  document.addEventListener("click", (e) => {
    if (!accessibilityMenu.contains(e.target) && e.target !== accessibilityBtn) {
      accessibilityMenu.classList.remove("active");
    }
  });

  // High contrast
  if (highContrastToggle) {
    highContrastToggle.checked = localStorage.getItem("highContrast") === "true";
    document.body.classList.toggle("high-contrast", highContrastToggle.checked);

    highContrastToggle.addEventListener("change", () => {
      document.body.classList.toggle("high-contrast", highContrastToggle.checked);
      localStorage.setItem("highContrast", highContrastToggle.checked);
    });
  }

  // Large text
  if (largeTextToggle) {
    largeTextToggle.checked = localStorage.getItem("largeText") === "true";
    document.body.classList.toggle("large-text", largeTextToggle.checked);

    largeTextToggle.addEventListener("change", () => {
      document.body.classList.toggle("large-text", largeTextToggle.checked);
      localStorage.setItem("largeText", largeTextToggle.checked);
    });
  }
}

  // Filter menu items
  const filterBtns = document.querySelectorAll(".filter-btn")
  const menuCards = document.querySelectorAll(".menu-card")

  if (filterBtns.length > 0 && menuCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        btn.classList.add("active")

        const filter = btn.getAttribute("data-filter")

        menuCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
          } else {
            if (card.getAttribute("data-category") === filter) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          }
        })
      })
    })
  }

  // Testimonial slider
  const track = document.getElementById("testimonial-track")
  const slides = document.querySelectorAll(".testimonial-slide")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const dots = document.querySelectorAll(".slider-dot")

  if (track && slides.length > 0) {
    let currentIndex = 0
    const slideWidth = 100

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * slideWidth}%)`

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length
        updateSlider()
      })

      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length
        updateSlider()
      })
    }

    if (dots.length > 0) {
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentIndex = index
          updateSlider()
        })
      })
    }

    // Auto slide
    let slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length
      updateSlider()
    }, 5000)

    const sliderContainer = document.querySelector(".testimonial-slider")
    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", () => {
        clearInterval(slideInterval)
      })

      sliderContainer.addEventListener("mouseleave", () => {
        slideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % slides.length
          updateSlider()
        }, 5000)
      })
    }
  }

  // Dish modal
  const modal = document.getElementById("dish-modal")
  const modalClose = document.getElementById("modal-close")
  const previewBtns = document.querySelectorAll(".menu-btn.preview")
  const modalTitle = document.getElementById("modal-title")
  const modalSubtitle = document.getElementById("modal-subtitle")
  const modalImage = document.getElementById("modal-image")
  const modalDescription = document.getElementById("modal-description")
  const modalPrice = document.getElementById("modal-price")

  if (modal && previewBtns.length > 0) {
    const dishData = {
      dish1: {
        title: "Carpaccio de Ternera",
        subtitle: "Entrante",
        image: "https://s3.abcstatics.com/abc/sevilla/media/gurmesevilla/2010/02/carpacciodeterneraconparmesano.jpg",
        description: "Finas láminas de ternera con rúcula, parmesano y aceite de trufa.",
        price: "12€",
        ingredients: ["Ternera de primera calidad", "Rúcula fresca", "Queso parmesano curado", "Aceite de trufa"],
      },
      dish2: {
        title: "Burrata con Tomate",
        subtitle: "Entrante",
        image: "https://www.annarecetasfaciles.com/files/ensalada-tomate-burrata-2-1-scaled.jpg",
        description: "Burrata cremosa con tomates cherry, albahaca y reducción de balsámico.",
        price: "14€",
        ingredients: [
          "Burrata fresca",
          "Tomates cherry",
          "Albahaca",
          "Reducción de vinagre balsámico",
          "Aceite de oliva virgen extra",
        ],
      },
      dish3: {
        title: "Paella Valenciana",
        subtitle: "Plato Principal",
        image: "https://www.paulinacocina.net/wp-content/uploads/2023/09/paella-valenciana-tradicional-1200x676.jpg",
        description: "Auténtica paella con mariscos frescos y azafrán.",
        price: "22€",
        ingredients: [
          "Arroz bomba",
          "Mariscos frescos variados",
          "Azafrán",
          "Caldo de pescado casero",
          "Verduras de temporada",
        ],
      },
      dish4: {
        title: "Solomillo Wellington",
        subtitle: "Plato Principal",
        image:
          "https://content-cocina.lecturas.com/medio/2021/12/21/paso_a_paso_para_realizar_solomillo_wellington_resultado_final_9b939f0b_1280x720.jpg",
        description: "Tierno solomillo envuelto en hojaldre con duxelle de champiñones.",
        price: "28€",
        ingredients: ["Solomillo de ternera", "Hojaldre artesano", "Champiñones", "Jamón ibérico", "Mostaza Dijon"],
      },
      dish5: {
        title: "Tiramisú",
        subtitle: "Postre",
        image: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/7f45d6f8807ebc775928651a3398dce9.png",
        description: "Clásico tiramisú italiano con café y mascarpone.",
        price: "8€",
        ingredients: ["Queso mascarpone", "Bizcochos de soletilla", "Café espresso", "Cacao en polvo", "Amaretto"],
      },
      dish6: {
        title: "Selección de Vinos",
        subtitle: "Bebida",
        image: "https://www.lavanguardia.com/files/image_948_465/uploads/2021/06/10/60c2575eb0b7f.jpeg",
        description: "Nuestra bodega cuenta con una cuidada selección de vinos nacionales e internacionales.",
        price: "Desde 18€",
        ingredients: [
          "Vinos tintos de Rioja y Ribera",
          "Vinos blancos de Rueda y Albariño",
          "Cavas y champagnes seleccionados",
          "Vinos internacionales",
          "Vinos ecológicos",
        ],
      },
    }

    previewBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        const dishId = btn.getAttribute("data-modal")
        const dish = dishData[dishId]

        modalTitle.textContent = dish.title
        modalSubtitle.textContent = dish.subtitle
        modalImage.src = dish.image
        modalDescription.textContent = dish.description
        modalPrice.textContent = dish.price

        // Update ingredients
        const ingredientsList = document.getElementById("modal-ingredients")
        ingredientsList.innerHTML = ""

        dish.ingredients.forEach((ingredient) => {
          const li = document.createElement("li")
          li.className = "dish-ingredient-item"
          li.innerHTML = `
                        <span class="ingredient-check">✓</span>
                        <span>${ingredient}</span>
                    `
          ingredientsList.appendChild(li)
        })

        modal.classList.add("active")
        document.body.style.overflow = "hidden"
      })
    })

    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("active")
        document.body.style.overflow = "auto"
      })
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active")
        document.body.style.overflow = "auto"
      }
    })
  }

  // Success modal for reservation
  const successModal = document.getElementById("success-modal")
  const successClose = document.getElementById("success-close")
  const reservationForm = document.getElementById("reservation-form")

  if (reservationForm && successModal) {
    reservationForm.addEventListener("submit", (e) => {
      // e.preventDefault()

      // Get form data
      const formData = new FormData(reservationForm)

      // Send email (in a real application)
      // Here we would use fetch or XMLHttpRequest to send the data to a server
      // For this example, we'll just show the success modal

      // Show success modal
      successModal.classList.add("active")
      document.body.style.overflow = "hidden"

      // Reset form
      reservationForm.reset()
    })

    if (successClose) {
      successClose.addEventListener("click", () => {
        successModal.classList.remove("active")
        document.body.style.overflow = "auto"
      })
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})
