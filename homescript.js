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

    // Close modal if clicked outside card
    window.onclick = function(event) {
      if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
      }
    }