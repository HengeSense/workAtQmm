  
    redirectForMobile();
    
    Youhui.PageType = 'homepage';
    
    Youhui.PageID = 'homepage';
    

    Youhui.CookieDomain = '.quanmama.com';
    
    Youhui.isadmin = 0;

    function trackEvent3(category, action, opt_label) {
        if (_gaq && typeof(_gaq)!='undefined') {
            _gaq.push(["_trackEvent", category, action, opt_label]);
        }
    }
    function trackEvent4(category, action, opt_label, opt_value) {
        if (_gaq && typeof(_gaq)!='undefined') {
            _gaq.push(["_trackEvent", category, action, opt_label, option_value]);
        }
    }
