function showCurrentDayPlan() {
    const today = new Date().getDay();
    const days = {
        1: 'monday',    
        2: 'tuesday',   
        3: 'wednesday', 
        4: 'thursday',  
        5: 'friday',    
        0: null,        
        6: null         
    };

    const currentDayId = days[today];
    const container = document.querySelector('.container');

    
    if (!currentDayId) {
        container.innerHTML = '<h2>Rest Day</h2><p>Take it easy today! No workout plan scheduled.</p>';
        return;
    }

    
    const allSections = document.querySelectorAll('.day-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    
    const currentSection = document.getElementById(currentDayId);
    if (currentSection) {
        currentSection.style.display = 'block'; 
    }
}


window.onload = showCurrentDayPlan;
