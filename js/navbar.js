(function ($) {
    $(function () {
        $("nav ul li > a:not(:only-child)").click(function (e) {
            $(this).siblings(".nav-dropdown").slideToggle()
            $(".nav-dropdown").not($(this).siblings()).hide()
            e.stopPropagation()
        })
        $("html").click(function () {
            $(".nav-dropdown").hide()
        })
        $("#burger-menu").click(function () {
            $("nav ul").slideToggle()
        })
        $("#burger-menu").on("click", function () {
            this.classList.toggle("active")
        })
        $(document).scroll(function () {
            const $nav = $("header nav")
            const $header = $("header")
            $nav.toggleClass("scrolled", $(this).scrollTop() > $header.height() - ($header.height() / 10))
        })
    });
})(jQuery)
