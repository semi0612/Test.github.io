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
    console.log('a 값 : ' + result[0]);
}

// 자기수용/피드백
function b() {
    var num = Number($(":input:radio[name=anser_2]:checked").val());

    result[1] += num;

    console.log('선택한 값 : ' + $(":input:radio[name=anser_2]:checked").val());
    console.log('b 값 : ' + result[1]);
}

// 자존감
function c() {
    var num = Number($(":input:radio[name=anser_3]:checked").val());

    result[2] += num;

    console.log('선택한 값 : ' + $(":input:radio[name=anser_3]:checked").val());
    console.log('c 값 : ' + result[2]);
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

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

$(function () {
    $('#form').submit(function (e) {
        if(7 <= result[0] <= 21){
            if(6 <= result[1] <= 18){
                if(10 <= result[2] <= 30){
                    location.href = "../result/거북이";
                    console.log("거북이");
                } else if(31 <= result[2] <=50){
                    location.href = "../result/고슴도치";
                    console.log("고슴도치");
                }
            } else if(19 <= result[1] <= 30){
                if(10 <= result[2] <= 30){
                    location.href = "../result/토끼";
                    console.log("토끼");
                } else if(31 <= result[2] <=50){
                    location.href = "../result/사자";
                    console.log("사자");
                }
            }
        } else if(22 <= result[0] <= 35){
            if(6 <= result[1] <= 18){
                if(10 <= result[2] <= 30){
                    location.href = "../result/플라밍고";
                    console.log("플라밍고");
                } else if(31 <= result[2] <=50){
                    location.href = "../result/코뿔소";
                    console.log("코뿔소");
                }
            } else if(19 <= result[1] <= 30){
                if(10 <= result[2] <= 30){
                    location.href = "../result/미어캣";
                    console.log("미어캣");
                } else if(31 <= result[2] <=50){
                    location.href = "../result/고래";
                    console.log("고래");
                }
            }
        }
        return false;
    });
});
