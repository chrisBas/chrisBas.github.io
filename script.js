$(document).ready(function() {
    pgDemo = new Pg();
    pgDemo.setPg("#pages-demo");
    srch.setup("#search-demo", callBack);
    $(".description>button").click(function() { $(this).parent().css('display', 'none'); })
    jsonformDemo();
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

function jsonformDemo() {
    var config = { 
        "First Name: ": {"type": "text", 
            "placeholder": "my name", 
            "default": "John", 
            "id": "myName", 
            "required": false
        }, 
        "Age: ": {"type": "number",
            "placeholder": "my age", 
            "default": "21", 
            "id": "myAge", 
            "required": "false"
        }};
    let form = document.getElementById("jsonform-demo");
    form.innerHTML += new JsonForm(config).innerHTML;
}