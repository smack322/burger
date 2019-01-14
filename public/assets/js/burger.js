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
$(".random").on("click", function() {
    var newBurgerStatus = {
        devoured: true
    };

    $.ajax("api/burgers/" + 2, {
        type: "PUT",
        data: newBurgerStatus
    }).then(
        function() {
            console.log("changed burger status to eaten:");

            location.reload();
        }
    )

});

// $(".create-form").on("submit", function(event) {

//     event.preventDefault();

//     var newBurger = {
//         burger_name: $("#burg").val().trim(),
//         devoured: $("burger_name")
//     }

// })