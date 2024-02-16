import Script from 'next/script';

const AdsScript = () => {
  return (
    <Script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var h = window,
                m = "a0b18de2efef7ad33755db99ad9c2817",
                y = [["siteId", 815 * 924 * 132 - 94330320], ["minBid", 0], ["popundersPerIP", "0"], ["delayBetween", 0], ["default", false], ["defaultPerDay", 0], ["topmostLayer", true]],
                o = ["d3d3LmNkbjRhZHMuY29tL2Rwb3BwZXIubWluLmNzcw==", "ZDNnNW92Zm5nanc5YncuY2xvdWRmcm9udC5uZXQvc2NyaXB0cy9jbGlucS5taW4uanM=", "d3d3LnByYnBxbHBxa28uY29tL3Fwb3BwZXIubWluLmNzcw==", "d3d3Lm10eHRzdnFoYXkuY29tL3NjcmlwdHMvbGxpbnEubWluLmpz"],
                p = -1, d, r, k = function () {
                  clearTimeout(r);
                  p++;
                  if (o[p] && !(1734034019000 < (new Date).getTime() && 1 < p)) {
                    d = h.document.createElement("script");
                    d.type = "text/javascript";
                    d.async = true;
                    var t = h.document.getElementsByTagName("script")[0];
                    d.src = "https://" + atob(o[p]);
                    d.crossOrigin = "anonymous";
                    d.onerror = k;
                    d.onload = function () {
                      clearTimeout(r);
                      h[m.slice(0, 16) + m.slice(0, 16)] || k();
                    };
                    r = setTimeout(k, 5E3);
                    t.parentNode.insertBefore(d, t);
                  }
                };
            if (!h[m]) {
              try {
                Object.freeze(h[m] = y);
              } catch (e) {}
              k();
            }
          })();
        `,
      }}
    />
  );
};

export default AdsScript;
