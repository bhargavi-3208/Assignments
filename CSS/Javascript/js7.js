let emp = {
    "id": 1,
    "name": "Leanne Graham", "username": "Bret",
    "email": "Sincere@april.biz", "address": {
    "street":"Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": {
    "lat":"-37.3159", "Ing": "81.1496"
    } },
    "phone": "1-770-736-8031 x56442", "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e- markets" }
};

//accessing the objects individually

console.log(emp.id);
console.log(emp.name);
console.log(emp.username);
console.log(emp.email);
console.log(emp.address.street);
console.log(emp.address.suite);
console.log(emp.address.city);
console.log(emp.address.zipcode);
console.log(emp.address.geo.lat);
console.log(emp.address.geo.Ing);
console.log(emp.phone);
console.log(emp.website);
console.log(emp.company.name);
console.log(emp.company.catchPhrase);
console.log(emp.company.bs);