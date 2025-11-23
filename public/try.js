addEventListener('message', e => {
  if (e.origin === 'https://weizmangal.com') {
    if (e.data.type === 'RUN_CODE') {
      const code = e.data.code;
      eval(code);
    }
  }
});
