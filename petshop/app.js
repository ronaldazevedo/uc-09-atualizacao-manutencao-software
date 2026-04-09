document.addEventListener('DOMContentLoaded', function () {

  // =====================
  // FORMULÁRIO
  // =====================
  const form = document.getElementById('formContato');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const servico = document.getElementById('servico').value;
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;

      if (!nome || !email || !servico || !data || !hora) {
        alert('Preencha todos os campos!');
        return;
      }

      alert(`Agendamento realizado!\n
Nome: ${nome}
Serviço: ${servico}
Data: ${data}
Hora: ${hora}`);

      form.reset();
    });
  }

  // =====================
  // ANO DO FOOTER
  // =====================
  const ano = document.getElementById('ano');
  if (ano) {
    ano.textContent = `© ${new Date().getFullYear()} Patas Felizes Pet Shop. Todos os direitos reservados.`;
  }

  // =====================
  // MENU ATIVO (SCROLL)
  // =====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // corrige header

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');

      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

});