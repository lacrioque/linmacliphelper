var fs = require('fs'),
    _ = require('underscore'),

    // uglifyjs --screw-ie8 --compress --output lib.min.js -- 1jquery.js  2bootstrap.js 3shortcut.js
    // uglifyjs --screw-ie8 --compress -- output linmacliphelper.min.js -- .\1index.js .\2tray_control.js .\3shortcut_control.js .\4frontend.js
    // uglifycss --max-line-len 500 linmacliphelper.css > linmacliphelper.min.css