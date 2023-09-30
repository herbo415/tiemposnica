window["adrum-start-time"] = new Date().getTime();
(function(config){
    config.appKey = "EC-AAB-RXY";
    config.adrumExtUrlHttp = "http://www.national-lottery.co.uk";
    config.adrumExtUrlHttps = "https://www.national-lottery.co.uk";
    config.beaconUrlHttp = "http://fra-col.eum-appdynamics.com";
    config.beaconUrlHttps = "https://fra-col.eum-appdynamics.com";
    config.resTiming = {"bufSize":200,"clearResTimingOnBeaconSend":true};
    config.maxUrlLength = 512;
})(window["adrum-config"] || (window["adrum-config"] = {}));
if ('https:' === document.location.protocol) {
       document.write(unescape('%3Cscript')
       + " src='https://www.national-lottery.co.uk/c/js/adrum.js' "
       + " type='text/javascript' charset='UTF-8'"
       + unescape('%3E%3C/script%3E'));
} else {
       document.write(unescape('%3Cscript')
       + " src='http://www.national-lottery.co.uk/c/js/adrum.js' "
       + " type='text/javascript' charset='UTF-8'"
       + unescape('%3E%3C/script%3E'));
}