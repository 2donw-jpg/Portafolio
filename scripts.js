function toggleVisibility(visibleId) {
    // Get all content sections
    const sections = document.querySelectorAll('.windows-container');
    
    // Get the span where the current app name will be displayed
    const openedAppSpan = document.getElementById('opened-app');
    
    // Loop through all sections and hide them
    sections.forEach(section => {
        if (section.id === visibleId) {
            section.classList.remove('hidden'); // Show the clicked section
            // Update the span with the name of the opened section
            const title = section.querySelector('header span').textContent;
            openedAppSpan.innerHTML = `<div class="sprite gallery"></div>${title}`;
        } else {
            section.classList.add('hidden'); // Hide other sections
        }
    });
}
