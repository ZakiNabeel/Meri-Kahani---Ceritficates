const DEPT_TEAMS = {
  Events:        ['Task Force', 'Planning & Research', 'Hosts'],
  Technical:     ['Web Development', 'Automations'],
  'PR Internals':['Social Media'],
  'PR Externals':['Marketing', 'Sponsorship'],
  Creatives:     ['Videography & Editing', 'Photography', 'Graphic Design'],
};

const DEPT_LEADS = {
  Events:        'Insharah Irfan Nazir',
  Technical:     'Muhammad Talha Shafi',
  'PR Internals':'Zoya Ahmed',
  'PR Externals':'Abdul Raffay',
  Creatives:     'Rayaan Raza',
};

function handleDeptChange() {
  const dept   = document.getElementById('fdept').value;
  const teamSel = document.getElementById('fteam');

  teamSel.innerHTML = '';
  teamSel.disabled  = false;

  const placeholder = document.createElement('option');
  placeholder.value    = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = 'Select team…';
  teamSel.appendChild(placeholder);

  (DEPT_TEAMS[dept] || []).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    teamSel.appendChild(opt);
  });
}

function handleGenerate() {
  const name = document.getElementById('fname').value.trim();
  const dept = document.getElementById('fdept').value;
  const team = document.getElementById('fteam').value;

  if (!name) { shake('fname'); return; }
  if (!dept) { shake('fdept'); return; }
  if (!team) { shake('fteam'); return; }

  // Populate certificate
  document.getElementById('certName').textContent = name;
  document.getElementById('certDept').textContent = dept;
  document.getElementById('certTeam').textContent = team;

  const lead = DEPT_LEADS[dept] || '—';
  document.getElementById('certDeptLead').textContent     = lead;
  document.getElementById('certDeptLeadTitle').textContent = dept + ' Lead';

  document.getElementById('formSection').classList.add('hidden');
  document.getElementById('certSection').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleBack() {
  document.getElementById('certSection').classList.add('hidden');
  document.getElementById('formSection').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function handleDownload() {
  const btn = document.getElementById('downloadBtn');
  btn.textContent = 'Generating…';
  btn.disabled = true;

  try {
    await document.fonts.ready;
    await Promise.allSettled([
      document.fonts.load('400 50px "Noto Nastaliq Urdu"'),
      document.fonts.load('700 21px "Cinzel Decorative"'),
      document.fonts.load('600 44px "Cormorant Garamond"'),
      document.fonts.load('600 11px "Cinzel"'),
    ]);
    await new Promise(r => setTimeout(r, 350));

    const cert = document.getElementById('certificate');
    const name = document.getElementById('certName').textContent;

    const canvas = await html2canvas(cert, {
      scale: 2.5,
      useCORS: true,
      allowTaint: false,
      logging: false,
      backgroundColor: null,
      imageTimeout: 0,
    });

    const link = document.createElement('a');
    link.download = `MeriKahani-Certificate-${name.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Certificate download failed:', err);
    alert('Download failed — please try again or use a screenshot.');
  }

  btn.textContent = '⬇  Download PNG';
  btn.disabled = false;
}

function shake(id) {
  const el = document.getElementById(id);
  el.style.borderColor = '#c0392b';
  el.animate(
    [{ transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' },
     { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' },
     { transform: 'translateX(0)' }],
    { duration: 320, easing: 'ease-in-out' }
  );
  el.focus();
  setTimeout(() => { el.style.borderColor = ''; }, 800);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !document.getElementById('formSection').classList.contains('hidden')) {
    handleGenerate();
  }
});
