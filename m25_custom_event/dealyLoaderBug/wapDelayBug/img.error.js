
Youhui.common.user.info = {
    'userid': '',
    'sina': 0
};
Youhui = $.extend(Youhui, {
    SITENAME: "券妈妈",
    SITEURL: "http://www.quanmama.com/",
    RESOURCEURL: "",
    SERVICEURL: "",
    NOTEFREQUENCY: 60000
});

$(function(){
    
$("img").bind("error",function(){
	if (this.src.indexOf('imgerror') === -1) {
		this.src = this.src.replace("image1.juanlaoda.com","www.quanmama.com").replace("image2.juanlaoda.com","www.quanmama.com").replace("image3.juanlaoda.com","www.quanmama.com").replace("www.juanlaoda.com","www.quanmama.com") + "?imgerror=1";
	} else {
		this.src = '/images/b.gif';
	}
});

// $("img").bind("error", function () {
   // if (this.src.indexOf('juanlaoda.com') > -1 && this.src.indexOf('imgerror') == -1) {
	   // this.src = this.src.replace('juanlaoda.com', 'quanmama.com') + "?imgerror=1";
   // }
   // else if (this.src.indexOf('quanmama.com') > -1 && this.src.indexOf('imgerror') == -1) {
	   // this.src = this.src.replace('quanmama.com', 'juanlaoda.com') + "?imgerror=1";
   // }
   // else {
	   // this.src = "./images/b.gif";
   // }
// });

});

