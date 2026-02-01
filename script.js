function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleChip(el) {
    el.classList.toggle('active');
}

function startLoading() {
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('loading-section').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('loading-section').classList.add('hidden');
        document.getElementById('results-section').classList.remove('hidden');
        document.getElementById('results-content').innerHTML = `
            <p style="font-size:1.5rem;">Based on your profile, we recommend the <strong>ASIJ Ambassador Program</strong> and <strong>AP Seminar</strong>!</p>
        `;
    }, 2500);
}
