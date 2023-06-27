new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["adam", "adam@email.com", "(+62) 01 222 3333"],
    ["asnawi", "asnawi@gmail.com", "(+62) 22 888 4444"],
    ["zoro", "zoro@gmail.com", "0097 22 654 00033"],
    ["Sanji", "sanji@gmail.com", "+322 876 1233"],
    ["usop kun", "usop@mail.com", "(353) 22 87 8356"],
  ],
}).render(document.getElementById("wrapper"));
