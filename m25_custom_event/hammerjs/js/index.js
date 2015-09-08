(function () {
    window.onload = function () {
        main();
    }
    function main(){
        new Touch();
    }
    //-----------
    function Touch() {
        this.obj = document.getElementById('div1');
        this.pan();
        this.press();
    }
    Touch.prototype = {
        pan : function () {
            var obj =  document.getElementById('div1');
            var hammertime = new Hammer(obj, {});
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            hammertime.on('pan', function(ev) {
                console.log(ev);
            });
        },
        press : function () {
            var ham = new Hammer(this.obj);
            ham.on('press', function (ev) {
                console.log(ev);
            });
        }
    };

})();