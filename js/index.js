(function() {
  var ary, ccap, http, start;

  http = require('http');

  ccap = '';

  ary = '';

  ccap = require('ccap')({
    width: 120,
    height: 40,
    offset: 25,
    quality: 50,
    fontsize: 35
  });

  start = function(req, res) {
    var buf, txt;
    if (req.url === '/favicon.ico') {
      res.end('');
    }
    ary = ccap.get();
    console.log('ary is :::', ary);
    txt = ary[0];
    buf = ary[1];
    res.end(buf);
    return console.log('txt is ::', txt);
  };

  http.createServer(start).listen(8124);

  console.log('server running at 8124');

}).call(this);

//# sourceMappingURL=index.js.map
