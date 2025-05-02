document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date")
  const timeSelect = document.getElementById("time")
  const reservationForm = document.getElementById("reservation-form")

  if (dateInput && timeSelect) {
    // Set minimum date to today
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, "0")
    const dd = String(today.getDate()).padStart(2, "0")
    const formattedToday = `${yyyy}-${mm}-${dd}`

    dateInput.setAttribute("min", formattedToday)
    dateInput.value = formattedToday

    // Update available times when date changes
    dateInput.addEventListener("change", updateAvailableTimes)

    // Initial update of available times
    updateAvailableTimes()

    // Handle form submission
    if (reservationForm) {
      reservationForm.addEventListener("submit", (e) => {
        // e.preventDefault()

        // Here you would typically send the data to a server
        // For this example, we'll just show an alert
        alert("¡Reserva confirmada! Gracias por elegir La Buena Mesa.")

        // Reset form
        reservationForm.reset()
        dateInput.value = formattedToday
        updateAvailableTimes()
      })
    }
  }

  // Function to update available times based on selected date
  function updateAvailableTimes() {
    if (!timeSelect) return

    // Clear existing options
    timeSelect.innerHTML = ""

    const selectedDate = new Date(dateInput.value)
    const currentDate = new Date()

    // Define opening and closing hours (24-hour format)
    let openingHour = 12 // 12:00 PM
    let closingHour = 23 // 11:00 PM

    // If it's weekend, adjust hours
    const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6
    if (isWeekend) {
      openingHour = 13 // 1:00 PM
      closingHour = 24 // 12:00 AM (midnight)
    }

    // Check if selected date is today
    const isToday = selectedDate.toDateString() === currentDate.toDateString()

    // If it's today, only show future times
    let startHour = openingHour
    if (isToday) {
      startHour = Math.max(openingHour, currentDate.getHours() + 1)
    }

    // Generate time options in 30-minute intervals
    for (let hour = startHour; hour < closingHour; hour++) {
      for (const minute of ["00", "30"]) {
        const timeValue = `${hour.toString().padStart(2, "0")}:${minute}`
        const option = document.createElement("option")
        option.value = timeValue
        option.textContent = timeValue
        timeSelect.appendChild(option)
      }
    }

    // If no times are available, show a message
    if (timeSelect.options.length === 0) {
      const option = document.createElement("option")
      option.value = ""
      option.textContent = "No hay horarios disponibles para hoy"
      option.disabled = true
      timeSelect.appendChild(option)
    }
  }
})
