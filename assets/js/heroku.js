const endpoints = [
    "https://koronawirus-api.herokuapp.com/",
    "https://mj-cryptoapp.herokuapp.com/",
    "https://cryptoapp-5e.azurewebsites.net/",
    "https://mj-community.herokuapp.com/",
    "https://smpwl-client.herokuapp.com/",
    "https://smpwl-server.herokuapp.com/",
    "https://mj-wheel-of-fortune.herokuapp.com/",
    "https://mj-wheel-of-fortune-service.herokuapp.com/",
    "https://mj-websocket.herokuapp.com/",
    "https://mj-notepad.herokuapp.com/",
    "https://mj-notepad-service.herokuapp.com",
    "https://ips-c.herokuapp.com/",
    "https://ips-s.herokuapp.com/",
    "https://songlyricsapi.herokuapp.com/"
]

const requests = [];

endpoints.map(url => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    return request;
}).map(request => requests.push(request));