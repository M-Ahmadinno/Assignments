const menu = [
  /* ===== Breakfast (Nashta) ===== */
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15,
    img: "assets/download (1).jpg",
    desc: "Fluffy pancakes served with butter and maple syrup."
  },
  {
    id: 2,
    title: "Classic Omelette",
    category: "breakfast",
    price: 12,
    img: "assets/images.jpg",
    desc: "Three-egg omelette with cheese and fresh herbs."
  },
  {
    id: 3,
    title: "French Toast",
    category: "breakfast",
    price: 14,
    img: "assets/download (3).jpg",
    desc: "Golden toasted bread topped with honey and berries."
  },
  {
    id: 4,
    title: "Breakfast Sandwich",
    category: "breakfast",
    price: 10,
    img: "assets/images (1).jpg",
    desc: "Egg, cheese and sausage served in a toasted bun."
  },

  /* ===== Lunch (Dopahar ka khana) ===== */
  {
    id: 5,
    title: "Diner Double Burger",
    category: "lunch",
    price: 18,
    img: "assets/download (4).jpg",
    desc: "Juicy double beef burger with fries and sauce."
  },
  {
    id: 6,
    title: "Grilled Chicken Plate",
    category: "lunch",
    price: 20,
    img: "assets/download (5).jpg",
    desc: "Grilled chicken breast served with vegetables."
  },
  {
    id: 7,
    title: "Chicken Biryani",
    category: "lunch",
    price: 16,
    img: "assets/images (2).jpg",
    desc: "Traditional spicy chicken biryani with raita."
  },
  {
    id: 8,
    title: "Club Sandwich",
    category: "lunch",
    price: 14,
    img: "assets/download.jpg",
    desc: "Triple-layer sandwich with chicken and fresh veggies."
  },

  /* ===== Shakes ===== */
  {
    id: 9,
    title: "Chocolate Milkshake",
    category: "shakes",
    price: 7,
    img: "assets/download (6).jpg",
    desc: "Rich chocolate shake topped with whipped cream."
  },
  {
    id: 10,
    title: "Vanilla Shake",
    category: "shakes",
    price: 6,
    img: "assets/images (3).jpg",
    desc: "Classic vanilla shake made with fresh milk."
  },
  {
    id: 11,
    title: "Strawberry Shake",
    category: "shakes",
    price: 7,
    img: "assets/download (2).jpg",
    desc: "Fresh strawberry shake with creamy texture."
  },
  {
    id: 12,
    title: "Mango Shake",
    category: "shakes",
    price: 8,
    img: "assets/images (4).jpg",
    desc: "Sweet mango shake made from fresh mangoes."
  }
];

const sectionCenter = document.getElementById("menu-items");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.category;
    const menuCategory =
      category === "all"
        ? menu
        : menu.filter(item => item.category === category);

    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `
      <article class="menu-item">
        <img src="${item.img}" alt="${item.title}">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>
    `;
  });

  sectionCenter.innerHTML = displayMenu.join("");
}
