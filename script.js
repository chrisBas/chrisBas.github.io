$(document).ready(function() {
    pgDemo = new Pg();
    pgDemo.setPg("#pages-demo");
    srch.setup("#search-demo", callBack);
    $(".description>button").click(function() { $(this).parent().css('display', 'none'); })
})

function callBack(res) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
                .filter(s => s.indexOf(res) >= 0)
                .map(s => "<div>" + s + "</div>");
            resolve(arr);
        }, 50);
    });
}