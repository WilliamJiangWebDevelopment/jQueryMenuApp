$(document).ready(function () {

    $(".set-tip-rate").select2({
        tags: true,
        allowClear: true,
        tokenSeparators: [',', ' ', '\t', ' ']
    });

    $('button').on('click', function (e) {

        var rateRadio = '<input type="radio" name="tips" ';
        var rateAry = $('div#div1 select').val();
        var rateButtons = rateAry.map(function (r) {
            return rateRadio + 'value="' + r + '" />' + r + "%";
        });

        $('div#div2').empty().append(rateButtons.join('\n'));
        //$('input#initialPrice').focus();

        $('div#div4 ul>li>span').html('');
        e.preventDefault();
    });

    $('div#div2').on('click', 'input:radio[name=tips]', function (e) {

        $(this).prop('checked', true);

        var ul = $('div#div4 ul');
        ul.find('li span').html('');

        var rate = $(this).val();
        var price = parseFloat($('input#initialPrice').val());
        var tip = Math.round(rate * price * 100) / 100;
        var total = (price + tip).toFixed(2);

        $('li:first span', ul).append(price);
        $('li:nth-child(2) span', ul).append(tip);
        $('li:last span', ul).append(total);
    });

    $('input#initialPrice').on('keyup', function (e) {
        var ul = $('div#div4 ul');
        ul.find('li span').html('');

        var checkedRadio = $('input:radio[name=tips]:checked');
        if (checkedRadio.length) {
            $(checkedRadio).trigger('click');
        }
    });

    $("#div1")
        .on("click", ".select2-selection__clear", function () {
            $('button').prop('disabled', true);
            $('div#div3, div#div4').hide();
        })
        .on("change", ".select2-selection__rendered", function () {
            console.log($(this).length, $(".select2-selection__choice").length);
        })

});