$(function() {
    $(".burgerAvailable").on("click", function(event) {
        var devoured = $(this).attr("data-id");

        var newBurgerStatus = {
            devoured: true
        };

        $.ajax("api/burgers/" + devoured, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function() {
                console.log("changed burger status to eaten:");

                location.reload();
            }
        )

    });
});
