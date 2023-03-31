const byID = id => document.getElementById(id);
const TEST_URL = 'https://little-snitch-blocklist.netlify.app/test.html';
const request = new XMLHttpRequest();

request.open('GET', TEST_URL + new Date().getTime(), true);

request.onload = function() {
    byID('test-danger').classList.add('d-block');
};

request.onerror = function() {
    byID('test-success').classList.add('d-block');
};

request.send();