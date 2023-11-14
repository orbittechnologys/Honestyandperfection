 type="text/javascript"


var showcont = [];
var showcont_containers = [];
 $('#tabs ul li a').each(function () {
    if (this.pathname == window.location.pathname) {
        showcont.push(this);
        showcont_containers.push($(this.hash).get(0));
    };
});


$(showcont).click(function(){

       $(showcont_containers).hide().filter(this.hash).fadeIn();

});
