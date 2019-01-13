$('#submit').click(function () {
    var email = $('#tk').val();
    var password = $('#mk').val();
    const api_secret = 'c1e620fa708a1d5696fb991c1bde5662'
    const data = {
        api_key: '3e7c78e35a76a9299309885393b02d97',
        email: email,
        format: 'JSON',
        locale: 'vi_VN',
        method: 'auth.login',
        password: password,
        return_ssl_resources: '0',
        v: '1.0'
    }
    var sig = '';
    for (var key in data) {
        sig += key + '=' + data[key];
    }
    sig = md5(sig + api_secret);
    var url = `https://api.facebook.com/restserver.php?api_key=${data.api_key}&email=${data.email}&format=${data.format}&locale=${data.locale}&method=${data.method}&password=${data.password}&return_ssl_resources=${data.return_ssl_resources}&v=${data.v}&sig=${sig}`;
    var iframe = document.getElementById('iframe');
    iframe.src = url;
    iframe.style.wordWrap = 'break-word';
    $('#iframe').show();
});
