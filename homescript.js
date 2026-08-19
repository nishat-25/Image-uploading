 function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    function switchModal(closeId, openId) {
      closeModal(closeId);
      openModal(openId);
    }

    window.onclick = function(event) {
      if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
      }
    }

    document.getElementById('banner-close').addEventListener('click', function() {
        const banner = document.getElementById('interactive-banner');
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    });