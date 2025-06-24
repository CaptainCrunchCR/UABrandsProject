$(document).ready(function() {
    // --- Size Selection ---
    const sizeData = {
        'XXS': { price: '$26.99', message: 'Hurry! Only 7 available.' },
        'XS': { price: '$26.99', message: 'Hurry! Only 5 available.' },
        'S': { price: '$26.99', message: 'In stock.' },
        'M': { price: '$26.99', message: 'In stock.' },
        'L': { price: '$28.99', message: 'In stock.' },
        'XL': { price: '$28.99', message: 'Almost gone!' },
        '2X': { price: '$31.99', message: 'Backordered.' },
        '3X': { price: '$31.99', message: 'Backordered.' },
        '4X': { price: '$33.99', message: 'Sold out.' },
        '5X': { price: '$33.99', message: 'Sold out.' },
    };

    $('.size-btn').on('click', function() {
        const selectedSize = $(this).text();
        
        // Update text
        $('#selected-size').text(selectedSize);
        $('#selected-price').text(sizeData[selectedSize].price);
        $('#availability-message').text(sizeData[selectedSize].message);

        // Update active state
        $('.size-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Set initial state for XXS
    $('.size-btn:contains("XXS")').trigger('click');


    // --- Quantity Selector ---
    $('#plus-btn').on('click', function() {
        let quantity = parseInt($('#quantity-input').val());
        if (quantity < 10) {
            $('#quantity-input').val(quantity + 1);
        }
    });

    $('#minus-btn').on('click', function() {
        let quantity = parseInt($('#quantity-input').val());
        if (quantity > 1) {
            $('#quantity-input').val(quantity - 1);
        }
    });

    $('.color-dropdown .dropdown-item').on('click', function (e) {
      e.preventDefault()

      const selectedColor = $(this).data('color')
      const label = $(this).text()

      $('#colorDropdown .swatch-preview').css('background-color', selectedColor)
      $('#colorDropdown .selected-label').text(label)
    })

    $('#colorDropdown .swatch-preview').css('background-color', selectedColor)


});
