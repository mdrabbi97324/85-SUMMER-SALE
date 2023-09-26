let serial = 1;
      let total = 0;
      let discount = 0;
      function addItem(itemName, itemPrice) {
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const cartTotalElement = document.getElementById("cart-total-price");
        const cartTotalString = cartTotalElement.innerText;
        const cartTotalPrice = parseFloat(cartTotalString);

        const cartItem = document.createElement("li");
        cartItem.innerText = `${serial}. ${itemName}`;

        cartItems.appendChild(cartItem);
        serial++;

        total = total + itemPrice;
        cartTotalElement.innerText = total;
        cartTotal.innerText = cartTotalElement.innerText;

        const btnCoupon = document.getElementById("btn-coupon");

        const inputFieldElement = document.getElementById("input-field");
        
        inputFieldElement.addEventListener("input", function () {
          if (total >= 200) {
              btnCoupon.removeAttribute("disabled");
              btnCoupon.style.backgroundColor = "#E527B2";
              btnCoupon.style.color = "white";
              btnCoupon.style.cursor = "pointer";
              
          } else {
            
            btnCoupon.setAttribute("disabled", "true");
            btnCoupon.style.backgroundColor = "grey";
            btnCoupon.style.color = "white";
            btnCoupon.style.cursor = "not-allowed";
            
            
          }
        });



        btnCoupon.addEventListener("click", function () {
          if (inputFieldElement.value === "SELL200" && total >= 200) {
            // total *= 0.8; // Apply 20% discount
            // totalDisplay.innerText = total.toFixed(2)
            const cartDiscount = document.getElementById("cart-discount");

            discount = total * 0.2;
            cartDiscount.textContent = discount.toFixed(2);

            const totalPriceWithDiscount = total - discount;
            cartTotal.textContent = totalPriceWithDiscount.toFixed(2);
          }

          
        });
        console.log(cartTotalPrice)



        // document.getElementById("btn-coupon").addEventListener("click", function(){
        //     const cartDiscount = document.getElementById("cart-discount");
        //     const btnCoupon = document.getElementById('btn-coupon')
        //     const inputFieldElement = document.getElementById("input-field");
        //     const inputFieldValue = inputFieldElement.value;
        //     inputFieldElement.value = "";

        //         if(inputFieldElement.value === 'sell'){

        //             btnCoupon.removeAttribute('disabled')
        //             btnCoupon.style.backgroundColor = 'yellow';

        //             discount = total * 0.2;
        //             cartDiscount.textContent = discount.toFixed(2);

        //             const totalPriceWithDiscount = total - discount;
        //             cartTotal.textContent = totalPriceWithDiscount.toFixed(2);
        //         }
        //         alert('hello')

        // });
      }

              const purchaseButton = document.getElementById("btn-purchase");
              const congratulationsPopup = document.getElementById("congratulationsPopup");
              const closePopupButton = document.getElementById("closePopup");

              // Show the popup when the button is clicked
              purchaseButton.addEventListener("click", function() {
                congratulationsPopup.style.display = "flex";
              });
              
              // Close the popup when the close button is clicked
              closePopupButton.addEventListener("click", function() {
                congratulationsPopup.style.display = "none";
              });



        