export default function Banner468() {
    const scriptContent = `
      atOptions = {
        'key' : '534f60bdfd9d6cfaa80424fb614a271d',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
      document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/534f60bdfd9d6cfaa80424fb614a271d/invoke.js"></scr' + 'ipt>');
    `;
  
    return (
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: scriptContent }}
      />
    );
  }
  