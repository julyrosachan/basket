 const products = {
    noutbuklar: [
      { id: 1, name: "MacBook Air M4", price: 3499, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 2, name: "MacBook Pro M4", price: 4449, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },
      { id: 3, name: "MacBook Pro M5", price: 4999, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/0a/ba/0abad8b7ee9c8f6887011b40b9eadc12/250704160030808790.webp" },


    ],
    plansetler: [
      { id: 4, name: "iPad Pro 11", price: 3079, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/e1/92/e19229f48c594f52d7a53058b6f7544c/251016120010290240.webp" },
      { id: 5, name: "Ipad Pro 13", price: 3849, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/30/9f/309f90f0a0ac9837eb749f2501c55c60/250423160049440976.webp" },
      { id: 4, name: "iPad Pro 11", price: 3079, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/e1/92/e19229f48c594f52d7a53058b6f7544c/251016120010290240.webp" },
      { id: 5, name: "Ipad Pro 13", price: 3849, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/30/9f/309f90f0a0ac9837eb749f2501c55c60/250423160049440976.webp" },
      { id: 4, name: "iPad Pro 11", price: 3079, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/e1/92/e19229f48c594f52d7a53058b6f7544c/251016120010290240.webp" },



    ],
    telefonlar: [
      { id: 6, name: "iPhone 17", price: 2199, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/90/f7/90f7885626d17a76ad59c0bab782705a/250915140037852219.webp" },
      { id: 7, name: "iPhone Air", price: 2399, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/8d/61/8d61f611ce202861c46f7b156b3a0493/250915140031978418.webp" },
      { id: 8, name: "iPhone 17 Pro", price: 1399, img: "https://cdn0.it4profit.com/s3size/el:t/rt:fill/plain/s3://cms/product/a3/44/a34423b7b08300fde0625964a0130f66/250915140035204152.webp" }
    ]
  };

  let cart = []; // Səbətdəki məhsullar

  const productsContainer = document.getElementById('products-container');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const clearCartBtn = document.getElementById('clear-cart');

  // Kateqoriya seçildikdə
  document.querySelectorAll('.category-list li').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.category-list li').forEach(li => li.classList.remove('active'));
      item.classList.add('active');
      const category = item.getAttribute('data-category');
      renderProducts(category);
    });
  });

  // Məhsulları göstər
  function renderProducts(category) {
    productsContainer.innerHTML = '';
    products[category].forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <div class="price">${product.price} ₼</div>
        <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
      `;
      productsContainer.appendChild(card);
    });

    // Səbətə əlavə et düymələri
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        addToCart(id);
      });
    });
  }

  // Səbətə əlavə et
  function addToCart(productId) {
    const product = getProductById(productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    renderCart();
  }

  // ID ilə məhsulu tap
  function getProductById(id) {
    for (const cat in products) {
      const found = products[cat].find(p => p.id === id);
      if (found) return found;
    }
  }

  // Səbəti göstər
  function renderCart() {
    cartItemsEl.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <span>${item.name} x${item.quantity}</span>
        <span>${itemTotal} ₼</span>
      `;
      cartItemsEl.appendChild(div);
    });

    cartTotalEl.textContent = `Total: ${total} ₼`;
  }

  // Səbəti təmizlə
  clearCartBtn.addEventListener('click', () => {
    cart = [];
    renderCart();
  });

  // İlkin yükləmə: Noutbuklar
  renderProducts('noutbuklar');