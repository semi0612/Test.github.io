const result = [0, 0, 0]

function srcollUp() {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) - 1) * vheight)
    }, 500);
}

function scrollDown() {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) + 1) * vheight)
    }, 500);
}


// 자기수용/판단분별
function a() {
    var num = Number($(":input:radio[name=anser_1]:checked").val());

    result[0] += num;

    console.log('선택한 값 : ' + $(":input:radio[name=anser_1]:checked").val());
    console.log('a 값 : ' + result);
}

// 자기수용/피드백
function b() {
    var num = Number($(":input:radio[name=anser_1]:checked").val());

    result[0] += num;

    console.log('선택한 값 : ' + $(":input:radio[name=anser_1]:checked").val());
    console.log('a 값 : ' + result);
}

// 자존감
function c() {
    var num = Number($(":input:radio[name=anser_1]:checked").val());

    result[0] += num;

    console.log('선택한 값 : ' + $(":input:radio[name=anser_1]:checked").val());
    console.log('a 값 : ' + result);
}

$(function () {
    $('.next_btn').click(function (e) {
        let divs = $(this).parent().prev().children();
        let inputs = divs.find('input:checked');
        if (inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown();
    });

    $('prev_btn').click(function (e) {
        e.preventDefault();
        scrollUp();
    });

    $('#form').submit(function (e) {
        let radios = $('input[type=radio]:checked');
        if (radios.length < 23) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        else {
            location.href = "../result.html"
        }
        return true;
    });

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

