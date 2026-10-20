$(document).ready(function(){

    const prices = {
        Bread: {
            "Classic Sourdough": 5.5,
            "Whole Wheat Bread": 7.2
        },
        Pastry: {
            "Butter Croissant": 4.5,
            "Chocolate Danish": 5.5
        },
        Cake: {
            "Chocolate Fudge Cake": 9.1,
            "Strawberry Shortcake": 6.7
        },
        Beverage: {
            "Hot Coffee": 1.5,
            "Iced Matcha Latte": 2.5
        }
    };

    // UPDATE ITEM LIST DEPEND ON THE CATEGORY
    $("#category").change(function(){
        let cat = $(this).val();
        let itemDropdown = $("#item");

        itemDropdown.empty();
        itemDropdown.append(`<option value="">-- choose the product --</option>`);

        if(cat){
            $.each(prices[cat], function(name, price){
                itemDropdown.append(`<option value="${price}">${name}</option>`);
            });
        }
    });

    // ADD ITEM TO THE ORDER LIST
    $("#addBtn").click(function(){
        let name = $("#buyerName").val();
        let email = $("#buyerEmail").val();
        let cat = $("#category").val();
        let item = $("#item option:selected").text();
        let price = $("#item").val();
        let qty = 1;


        if(name === "" || email === "" || cat === "" || item === "-- choose the product --"){
            alert("Fill in all the fields first!");
            return;
        }

        // MAKE NEW ORDER CARD  
        let newOrder = `
        <div class="order-card" data-price="${price}">
            <div class="order-header">
                <h4>${item}</h4>
                <div class="qty-small">
                    <button class="minus">–</button>
                    <span class="qty">${qty}</span>
                    <button class="plus">+</button>
                </div>
            </div>
        <p>Price: $${price}</p>
        <p>Total: $<span class="itemTotal">${(qty * price).toFixed(2)}</span></p>
        </div>
        `;

        $("#orderList").append(newOrder);
        hitungTotal();

    });

    // + AND –
    $(document).on("click", ".plus", function(){
        let card = $(this).closest(".order-card");
        let qty = card.find(".qty");
        qty.text(parseInt(qty.text()) + 1);
        updateItemTotal(card);
    });

    $(document).on("click", ".minus", function(){
        let card = $(this).closest(".order-card");
        let qty = card.find(".qty");
        let now = parseInt(qty.text());
        if(now > 1){
            qty.text(now - 1);
            updateItemTotal(card);
        }
    });

    function updateItemTotal(card){
        let price = parseFloat(card.data("price"));
        let qty = parseInt(card.find(".qty").text());
        card.find(".itemTotal").text((price * qty).toFixed(2));
        hitungTotal();
    }

    function hitungTotal(){
        let total = 0;
        $(".order-card").each(function(){
            let cardTotal = parseFloat($(this).find(".itemTotal").text());
            total += cardTotal;
        });
        $("#grandTotal").text(total.toFixed(2));
    }

    // CHECKOUT
    $("#checkoutBtn").click(function(){
        if($(".order-card").length === 0){
            alert("No orders yet!");
            return;
        }

        alert("Purchase successful!");

        // RESET
        $(".order-card").remove();
        $("#grandTotal").text("0.00");
        $("#purchaseForm")[0].reset();
    });
});

$(".form-order").on("mousemove", function(e){
    $(this).css("background-color", "rgba(85, 47, 12, 0.65)");
});

$(".form-order").on("mouseleave", function(){
    $(this).css("background-color", "rgba(0,0,0,0.6)");
});
