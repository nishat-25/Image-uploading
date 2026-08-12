    const restaurantData = {
    
      guiltypleasure: { name: "Guilty Pleasure", location: "Khulshi, CTG", totalPages: 13 },
      eatalia: { name: "The Eatalia", location: "Jamalkhan, CTG", totalPages: 8 },
      galleria: { name: "Galleria", location: "CTG", totalPages: 8 },
      pizzaburg: { name: "Pizzaburg", location: "GEC, CTG", totalPages: 2 },
      zentable: { name: "Zen Table", location: "Jamalkhan, CTG", totalPages: 24 },
      terracotta: { name: "Terracotta", location: "CTG", totalPages: 11 },

    
      khaosan: { name: "Khao San", location: "Banani, Dhaka", totalPages: 14 },
      madchef: { name: "Madchef", location: "Dhanmondi, Dhaka", totalPages: 8 },
      koithe: { name: "Koi Thé", location: "Gulshan, Dhaka", totalPages: 1, ext: "png" },
      herfy: { name: "Herfy", location: "Gulshan, Dhaka", totalPages: 1 },
      lahorikitchen: { name: "Lahori Kitchen", location: "Uttara, Dhaka", totalPages: 4 },
      digger: { name: "Digger", location: "Banani, Dhaka", totalPages: 1 }
    };

    let activeRestaurantId = "";
    let currentPage = 1;

  
    function filterRestaurants() {
      const selectedDivision = document.getElementById('divisionSelect').value;
      const searchText = document.getElementById('searchInput').value.toLowerCase();
      const cards = document.querySelectorAll('.restaurant-card');

      cards.forEach(card => {
        const cardDivision = card.getAttribute('data-division');
        const cardName = card.querySelector('h3').innerText.toLowerCase();

        const matchesDivision = (selectedDivision === 'all' || cardDivision === selectedDivision);
        const matchesSearch = cardName.includes(searchText);

        if (matchesDivision && matchesSearch) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

  
    filterRestaurants();

  
    function openMenu(restId) {
      activeRestaurantId = restId;
      currentPage = 1;

      const data = restaurantData[restId];
      document.getElementById('modalTitle').innerText = data.name;
      document.getElementById('modalLocation').innerText = data.location;

      updateModalView();
      document.getElementById('menuModal').style.display = 'flex';
    }

    function closeMenu() {
      document.getElementById('menuModal').style.display = 'none';
    }

  
    function changeSlide(direction) {
      const data = restaurantData[activeRestaurantId];
      const newPage = currentPage + direction;

      if (newPage >= 1 && newPage <= data.totalPages) {
        currentPage = newPage;
        updateModalView();
      }
    }

    function updateModalView() {
      const data = restaurantData[activeRestaurantId];
      const fileExt = data.ext || 'jpg'; 
      
      document.getElementById('menuImg').src = `images/${activeRestaurantId}${currentPage}.${fileExt}`;
      document.getElementById('pageIndicator').innerText = `Page ${currentPage} of ${data.totalPages}`;

    
      document.getElementById('prevBtn').disabled = (currentPage === 1);
      document.getElementById('nextBtn').disabled = (currentPage === data.totalPages);
    }

  
    window.onclick = function(event) {
      if (event.target.classList.contains('modal-overlay')) {
        closeMenu();
      }
    }