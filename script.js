function myFunc() {
    var $JQuery2 = jQuery.noConflict()
    $JQuery2(function() {
        $JQuery2(".button_size").hover(
            function() {
                $JQuery2(".test").addClass("div_options_hover");
            },
            function() {
                $JQuery2(".test").removeClass("div_options_hover");
            });
    });
}

function myFunc2() {
    var $opt_list = jQuery.noConflict()
    $opt_list(function() {
        $opt_list(".button_size").hover(
            function() {
                $opt_list(".div_options_list").addClass("div_options_list_hover");
            },
            function() {
                $opt_list(".div_options_list").removeClass("div_options_list_hover");
            });
    });
}