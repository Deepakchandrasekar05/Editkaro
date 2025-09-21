// -- FILTER CARDS --
document.addEventListener('DOMContentLoaded', ()=> {
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-category]');

  filters.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(c=>{
        c.style.display = (cat === 'all' || c.dataset.category === cat) ? 'block' : 'none';
      });
    });
  });

  // -- LIGHTBOX --
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox?.querySelector('img');
  document.querySelectorAll('.card .thumb').forEach(img=>{
    img.addEventListener('click', (e)=>{
      lbImg.src = e.target.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  document.getElementById('lightbox')?.addEventListener('click', (e)=>{
    if(e.target.id === 'lightbox' || e.target.classList.contains('lb-close')){
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // -- FORM SUBMIT (Email collector and Contact) --
  // Expect global var APP_ENDPOINT set in page or inlined
  const emailForm = document.getElementById('email-form');
  if(emailForm){
    emailForm.addEventListener('submit', async (ev)=>{
      ev.preventDefault();
      const data = {type:'email', email: emailForm.email.value};
      await sendToSheet(data, emailForm, 'Subscribed!');
    });
  }
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', async (ev)=>{
      ev.preventDefault();
      const payload = {
        type:'contact',
        name: contactForm.name.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        message: contactForm.message.value
      };
      await sendToSheet(payload, contactForm, 'Message sent!');
    });
  }

  async function sendToSheet(payload, form, successMsg){
    if(!window.APP_ENDPOINT){
      alert('Form endpoint not configured. See README.');
      return;
    }
    try{
      const res = await fetch(window.APP_ENDPOINT, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      if(res.ok){
        form.reset();
        alert(successMsg);
      } else {
        const txt = await res.text();
        console.error(txt);
        alert('Submit failed (server).');
      }
    }catch(err){
      console.error(err);
      alert('Submit failed. Check console.');
    }
  }
});
