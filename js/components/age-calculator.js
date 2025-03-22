class AgeCalculator {
    constructor() {
        this.birthDate = new Date('1995-03-22');
        this.init();
    }

    init() {
        this.calculateAge();
        this.createTimeline();
    }

    calculateAge() {
        const today = new Date();
        const age = today.getFullYear() - this.birthDate.getFullYear();
        const milestones = this.getLifeMilestones(age);
        
        const ageSection = document.createElement('div');
        ageSection.className = 'age-section glass-effect';
        ageSection.innerHTML = `
            <h2>Life Journey</h2>
            <div class="age-display">${age} Years</div>
            <div class="milestones">${milestones}</div>
        `;
        
        document.querySelector('#profile').appendChild(ageSection);
    }

    getLifeMilestones(age) {
        return Array.from({ length: age }, (_, i) => {
            const year = this.birthDate.getFullYear() + i;
            return `<div class="milestone" data-year="${year}"></div>`;
        }).join('');
    }
}