function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function generateRecommendations() {
    // 1. Hide form, Show loading
    document.getElementById('form-section').classList.add('hidden');
    const loading = document.getElementById('loading-section');
    loading.classList.remove('hidden');
    loading.scrollIntoView({ behavior: 'smooth' });

    // 2. Simulate "Processing" for 2 seconds
    setTimeout(() => {
        loading.classList.add('hidden');
        const results = document.getElementById('results-section');
        results.classList.remove('hidden');
        results.scrollIntoView({ behavior: 'smooth' });

        displayResults();
    }, 2500);
}

function displayResults() {
    const list = document.getElementById('recommendations-list');
    
    // Example logic: In a real app, you'd pull this from a "Student Handbook" database
    const data = [
        { title: "Robotics Club", type: "Extracurricular", for: "STEM" },
        { title: "AP Art History", type: "Course", for: "Arts" },
        { title: "Model United Nations", type: "Extracurricular", for: "Humanities" }
    ];

    list.innerHTML = data.map(item => `
        <div class="info-card" style="border: 1px solid var(--gold)">
            <h3>${item.title}</h3>
            <p>${item.type}</p>
        </div>
    `).join('');
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}
