
export default function Banner300() {
  const scriptContent = `
    atOptions = {
      'key' : '112c6b11d5534b12fe89d7a92c992c44',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/112c6b11d5534b12fe89d7a92c992c44/invoke.js"></scr' + 'ipt>');
  `;

  return <script type="text/javascript" dangerouslySetInnerHTML={{ __html: scriptContent }} />;
}
