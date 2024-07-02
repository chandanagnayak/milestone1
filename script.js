// Example array of menu items (replace with your data or fetch from an API)
const menuItems = [
    { name: 'Burger', description: 'Delicious beef burger with cheese and fries.', price: 75.99 },
    { name: 'Pasta', description: 'Spaghetti with marinara sauce and garlic bread.', price: 99.49 },
    { name: 'Salad', description: 'Fresh garden salad with vinaigrette dressing.', price: 45.99 }
    // Add more items as needed
];

// Function to populate the menu section with items
function populateMenu() {
    const menuContainer = document.getElementById('menu-items');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: Rs.${item.price.toFixed(2)}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Call the function to populate menu when the page loads
document.addEventListener('DOMContentLoaded', populateMenu);