document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const fio = document.getElementById('userFio').value;
      const phone = document.getElementById('userPhone').value;

      if (fio && phone) {
        alert(`Спасибо, ${fio}! Заявка принята. Мы свяжемся с вами по номеру ${phone} для консультации.`);
        form.reset();
      }
    });
  }
});