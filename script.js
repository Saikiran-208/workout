function showCurrentDayPlan() {
    const today = new Date().getDay();
    const days = {
        1: 'monday',    // Monday
        2: 'tuesday',   // Tuesday
        3: 'wednesday', // Wednesday
        4: 'thursday',  // Thursday
        5: 'friday',    // Friday
        0: null,        // Sunday (rest day)
        6: null         // Saturday (rest day)
    };

    const currentDayId = days[today];
    const container = document.querySelector('.container');

    // If it's a rest day, show a message
    if (!currentDayId) {
        container.innerHTML = '<h2>Rest Day</h2><p>Take it easy today! No workout plan scheduled.</p>';
        return;
    }

    // Hide all day sections
    const allSections = document.querySelectorAll('.day-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the current day's section
    const currentSection = document.getElementById(currentDayId);
    if (currentSection) {
        currentSection.style.display = 'block'; // Block to ensure it works with flex
    }
}


window.onload = showCurrentDayPlan;
