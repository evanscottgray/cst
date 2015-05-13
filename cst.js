function getEndpoint() {
    // Fill these in for your setup.
    api_key = ''
    base_url = 'https://localhost:15000'
    path = '/token'
    url = base_url + path + '?key=' + api_key
    
    return url
}


function getThings() {
    var endpoint = getEndpoint();
    $.ajax(
            {
                url: endpoint, 
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    info = {'user': data.user, 'token': data.token}
                    fill(info);
            },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText);
            }
    });
}


function fill(info) {
    var if1 = document.getElementById("content");
    var if2 = if1.contentDocument.getElementById('credentials').contentDocument.body
    var uF = if2.querySelectorAll('input[name=Ecom_User_ID]')[0];
    var tF = if2.querySelectorAll('input[name=Ecom_Token]')[0];
    uF.value = info.user;
    tF.value = info.token;
}


function app() {
    getThings();
    setTimeout(app, 200)
};


$("#content").ready(function(){
    $("#credentials").ready(function () {
        app();
    });
});
