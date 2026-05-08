
(function(){
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav-links]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const path = (obj, key) => key.split('.').reduce((acc, part) => acc && acc[part] !== undefined ? acc[part] : '', obj);
  const setText = (root, data) => {
    document.querySelectorAll('[data-text]').forEach(el => {
      const value = path(data, el.getAttribute('data-text'));
      if (value !== undefined && value !== null && value !== '') el.textContent = value;
    });
    document.querySelectorAll('[data-href]').forEach(el => {
      const value = path(data, el.getAttribute('data-href'));
      if (value) el.setAttribute('href', value);
    });
  };
  const serviceCard = (item) => `<article class="card"><div class="icon" aria-hidden="true">${item.icon || '✿'}</div><h3>${item.title}</h3><p>${item.text}</p>${item.link ? `<a class="more" href="${item.link}">${item.linkText || 'Learn more'} →</a>` : ''}</article>`;
  const simpleCard = (item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`;
  const seasonCard = (item) => `<article class="season-card" data-season="${item.season}"><h3>${item.title}</h3><p>${item.text}</p><ul>${(item.items||[]).map(x=>`<li>${x}</li>`).join('')}</ul></article>`;
  const galleryCard = (item) => `<figure class="gallery-card"><img src="${item.src}" alt="${item.alt || ''}" loading="lazy"><figcaption>${item.caption || ''}</figcaption></figure>`;
  const renderers = {
    services: data => (data.services || []).map(serviceCard).join(''),
    introCards: data => (data.introCards || []).map(simpleCard).join(''),
    floristServices: data => (data.floristServices || []).map(simpleCard).join(''),
    greenhouseItems: data => (data.greenhouseItems || []).map(simpleCard).join(''),
    seasonCards: data => (data.seasonCards || []).map(seasonCard).join(''),
    gallery: data => (data.gallery || []).map(galleryCard).join(''),
    galleryPreview: data => (data.gallery || []).slice(0,4).map(galleryCard).join('')
  };
  const renderLists = (data) => {
    document.querySelectorAll('[data-render]').forEach(el => {
      const name = el.getAttribute('data-render');
      if (renderers[name]) el.innerHTML = renderers[name](data);
    });
  };
  const populateSelect = (data) => {
    const map = {
      requestType: data.formOptions && data.formOptions.requestTypes,
      budgetRange: data.formOptions && data.formOptions.budgetRanges,
      preferredContact: data.formOptions && data.formOptions.preferredContact
    };
    Object.entries(map).forEach(([key, values]) => {
      const select = document.querySelector(`[data-options="${key}"]`);
      if (select && Array.isArray(values)) {
        const first = select.querySelector('option[value=""]');
        select.innerHTML = first ? first.outerHTML : '';
        values.forEach(v => {
          const opt = document.createElement('option'); opt.value = v; opt.textContent = v; select.appendChild(opt);
        });
      }
    });
  };
  fetch('/content/site.json').then(r => r.ok ? r.json() : Promise.reject()).then(data => {
    setText(document, data); renderLists(data); populateSelect(data);
  }).catch(() => {
    /* Site still works with static fallback content. */
  });
})();
