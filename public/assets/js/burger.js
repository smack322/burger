$(function() {
    $(".change-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newBurger");

        var newBurgerLoc = {
            devoured: newBurger
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newBurgerLoc
        }).then(
            function() {
                console.log("changed burger to:" + newBurger);

                location.reload();
            }
        )

    })
})

$(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: $("burger_name")
    }

})