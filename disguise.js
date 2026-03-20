function openDisguiseModal() {
  const modal = document.getElementById('disguiseModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Generate bookmarklet dynamically using current origin
    const url = window.location.origin;
    const bookmarkletCode = `javascript:(function(){var url='${url}';document.body.style.margin='0';document.body.style.height='100vh';document.body.style.overflow='hidden';document.body.innerHTML='<iframe src="'+url+'" style="border:none; width:100%; height:100%;"></iframe>';})();`;
    
    document.getElementById('bookmarkletLink').setAttribute('href', bookmarkletCode);
  }
}

function closeDisguiseModal() {
  const modal = document.getElementById('disguiseModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('disguiseModal');
  if (e.target === modal) {
    closeDisguiseModal();
  }
});
