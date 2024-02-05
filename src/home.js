export function homeContent() {
    const textContent = document.createElement('p');
    textContent.innerText = 'At La Cucina Italiana, we take pride in bringing the authentic flavors of Italy to your table. Our passion for quality ingredients, traditional recipes, and a warm, inviting atmosphere ensures an unforgettable dining experience.';
    
    textContent.classList.add('currentPage');

    return textContent;

}
