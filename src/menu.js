export function menu(){
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    const firstItem = document.createElement('div');
        const firstImg = document.createElement('img');
            firstImg.src = 'https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2021/10/Ravioli-ai-funghi-1200x675.jpg';
        const firstText = document.createElement('p');
            const firstTitle = document.createElement('h2');
                firstTitle.innerText = 'Ravioli al Funghi';
            const firstDesc = document.createElement('p');
                firstDesc.innerText = 'Indulge in the rich and earthy flavors of our Ravioli al Funghi. Handmade pasta parcels filled with a delectable blend of wild mushrooms, ricotta cheese, and herbs. Served in a velvety truffle cream sauce, this dish is a celebration of authentic Italian taste.';
            firstText.appendChild(firstTitle);
            firstText.appendChild(firstDesc);

        firstItem.appendChild(firstImg);
        firstItem.appendChild(firstText);    

    const secItem = document.createElement('div');
        const secImg = document.createElement('img');
            secImg.src = 'https://media-assets.lacucinaitaliana.it/photos/62cd8c00d2e7a79958ad1946/3:2/w_1500,h_1000,c_limit/ossobuco-alla-milanese.jpg';
        const secText = document.createElement('p');
            const secTitle = document.createElement('h2');
                secTitle.innerText = 'Osso Buco alla Milanese';
            const secDesc = document.createElement('p');
                secDesc.innerText = 'Experience the timeless elegance of Osso Buco alla Milanese. Tender, slow-cooked veal shanks bathed in a savory broth of white wine, tomatoes, and aromatic herbs. Served atop a bed of saffron-infused risotto, this classic Milanese dish is a true culinary masterpiece.';
            secText.appendChild(secTitle);
            secText.appendChild(secDesc);
    
        secItem.appendChild(secImg);
        secItem.appendChild(secText);

    const thirdItem = document.createElement('div');
        const thirdImg = document.createElement('img');
            thirdImg.src = 'https://www.giallozafferano.it/images/173-17354/Tiramisu_650x433_wm.jpg';
        const thirdText = document.createElement('p');
            const thirdTitle = document.createElement('h2');
                thirdTitle.innerText = 'Tiramisu Classico';
            const thirdDesc = document.createElement('p');
                thirdDesc.innerText = 'Indulge your sweet tooth with our Tiramisu Classico, a heavenly blend of delicate ladyfingers soaked in espresso and layered with a luscious mascarpone cream. Finished with a dusting of cocoa powder, this iconic Italian dessert is the perfect finale to your dining experience.';
            thirdText.appendChild(thirdTitle);
            thirdText.appendChild(thirdDesc);

        thirdItem.appendChild(thirdImg);
        thirdItem.appendChild(thirdText);

    firstItem.classList.add('menuDish');
    secItem.classList.add('menuDish');
    thirdItem.classList.add('menuDish');
    
   firstImg.classList.add('menuImg');
   secImg.classList.add('menuImg');
   thirdImg.classList.add('menuImg');

   menuContent.appendChild(firstItem);
   menuContent.appendChild(secItem);
   menuContent.appendChild(thirdItem);

   return menuContent;
}