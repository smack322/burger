$(function() {
    $(".burgerAvailable").on("click", function(event) {
        var devoured = $(this).data("devoured");

        var newBurgerStatus = {
            devoured: true
        };

        $.ajax("api/burgers/" + devoured, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function() {
                console.log("changed burger status to eaten:" + newBurger);

                location.reload();
            }
        )

    });
});

// $(".create-form").on("submit", function(event) {

//     event.preventDefault();

//     var newBurger = {
//         burger_name: $("#burg").val().trim(),
//         devoured: $("burger_name")
//     }

// })