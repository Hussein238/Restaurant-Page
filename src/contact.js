export function contact(){
    const contactGroup = document.createElement('div');
        const contactArea = document.createElement('div');
            contactArea.innerText = 'Address: 456 Bob street';
        const contactNum = document.createElement('div');
            contactNum.innerText = 'Phone number: (343) 123 9876';
        const contactEmail = document.createElement('div');
            contactEmail.innerText = 'Email: greatBusiness123@email.com';

    contactGroup.appendChild(contactArea);
    contactGroup.appendChild(contactNum);
    contactGroup.appendChild(contactEmail);
    contactGroup.classList.add('contactPage');
    return contactGroup;
}