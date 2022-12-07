$(document).ready(function () {
    $("button").click(function() {
        $(".unread").removeClass().addClass("notifications-container");
        $(".no-notifications").remove();
        $(".ball").removeClass();
        $(this).remove();
      });
});
