let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            document.body.className = 'ok';
            console.log(this.responseText);
        } else if (this.response == null && this.status === 0) {
            document.body.className = 'error offline';
            console.log("The computer appears to be offline.");
        } else {
            document.body.className = 'error';
        }
    }
};
request.open("GET",'https://ptf-web-dizajn-2022.azurewebsites.net/api/Services', true);
request.send(null);