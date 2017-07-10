$(document).ready(function () {

    $(".set-tip-rate").select2({
        tags: true,
        allowClear: true,
        tokenSeparators: [',', ' ', '   ']
    });

    $('button').on('click', function (e) {

        var rateRadio = '<input type="radio" name="tips" ';
        var rateAry = $('div#div1 select').val();

        var rateButtons = rateAry.filter(function (r) {
            return validate(r) === true;
        }).map(function (r) {
            return rateRadio + 'value="' + r + '" />' + r + "%";
        });
        if (rateButtons.length != rateAry.length) {
            $("label.text-warning").html('wrong input').fadeIn(100);
        }
        else {
            $("label.text-warning").html('').fadeOut(100);
        }

        $('div#div2').empty().append(rateButtons.join('\n'));
        $('div#div4 ul>li>span').html('');

        e.preventDefault();
    });

    $('div#div2').on('click', 'input:radio[name=tips]', function (e) {

        $(this).prop('checked', true);

        var ul = $('div#div4 ul');
        ul.find('li span').html('');

        var price = parseFloat($('input#initialPrice').val());

        if (price) {
            var rate = $(this).val();
            var tip = rate * price / 100;
            var total = price + tip;

            $('li:first span', ul).append(getMoneyFormat(price));
            $('li:nth-child(2) span', ul).append(getMoneyFormat(tip));
            $('li:last span', ul).append(getMoneyFormat(total));
        }
    });

    $('input#initialPrice').on('keyup', function (e) {

        var valid = validate($(this).val());
        if (!valid) {
            $("label.text-danger").html('wrong input').fadeIn(100);
            $('input#initialPrice').focus();
            return false;
        }
        else {
            $("label.text-danger").html('').fadeOut(100);
        }

        $('div#div4 ul>li>span').html('');
        var checkedRadio = $('input:radio[name=tips]:checked');
        if (checkedRadio.length) {
            $(checkedRadio).trigger('click');
        }
    });

});

function getMoneyFormat(value) {
    return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}

function validate(money) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return rgx.test(money);
}
