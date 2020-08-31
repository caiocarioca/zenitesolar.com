$("#contact_form").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        console.log("Form not validated.")
    } else {
        // everything looks good!
        console.log("Form validated.")
        event.preventDefault();
        submitForm();
    }
});

// the h_neyp_t field is not intended to sent data
$("#form_subject").hide();

function submitForm() {
    const url = "https://zenitesolar.com/contact"

    // may use JSON.stringify() 
    const data = JSON.stringify({
        "name": $("#form_name").val(),
        "email": $("#form_email").val(),
        "subject": "", //$("#form_subject").val(),
        "message": $("#form_message").val(),
    })

    console.log("request:\n" + url + "?" + data)

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "json",
        crossDomain: true,
        success: function (response) {
            alert("Done");
            console.log("Ajax: success 0")
        },
        error: function (e) {
            alert("Server error: " + e);
        },
        statusCode: {
            400: function () {
                console.log("Ajax: 400 - Bad Request")
            }
        },
    });

}
