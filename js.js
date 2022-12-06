$(document).ready(function () {
    $("button").click(function() {
        console.log( "ready!" );
        $(".unread").removeClass().addClass("notifications-container");
        $(".no-notifications").remove();
        $(this).remove();
      });
});
