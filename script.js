"use strict";

let list_product = [
  {
    name: "Мышь беспроводная DEXP WM-290RB",
    brand: "DEXP",
    type: "besprovod",
    interface: "type-a",
    knopki: "3",
    image: "img/mouse.jpg",
    price: "3 000",
    rating: "1",
  },
  {
    name: "Мышь проводная DEXP СM-1201",
    brand: "DEXP",
    type: "provod",
    interface: "type-a",
    knopki: "4",
    image: "img/mouse1.jpg",
    price: "5 000",
    rating: "7",
  },
  {
    name: "Мышь беспроводная ARDOR GAMING Edge Air Ultra",
    brand: "ARDOR GAMING",
    type: "besprovod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse2.jpg",
    price: "4 000",
    rating: "5",
  },
  {
    name: "Мышь беспроводная/проводная ARDOR GAMING Edge Air Elit",
    brand: "ARDOR GAMING",
    type: "besprovodprovod",
    interface: "type-a",
    knopki: "4",
    image: "img/mouse3.jpg",
    price: "3 000",
    rating: "1",
  },
  {
    name: "Мышь проводная ARDOR GAMING Warrior 2",
    brand: "ARDOR GAMING",
    type: "provod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse4.jpg",
    price: "8 000",
    rating: "2",
  },
  {
    name: "Мышь беспроводная/проводная ARDOR GAMING Prime X",
    brand: "ARDOR GAMING",
    type: "besprovodprovod",
    interface: "radio",
    knopki: "3",
    image: "img/mouse5.jpg",
    price: "2 000",
    rating: "7",
  },
  {
    name: "Мышь беспроводная Logitech Pebble M350",
    brand: "Logitech",
    type: "besprovod",
    interface: "type-a",
    knopki: "3",
    image: "img/mouse6.jpg",
    price: "4 000",
    rating: "6",
  },
  {
    name: "Мышь беспроводная Logitech POP Mouse",
    brand: "Logitech",
    type: "besprovod",
    interface: "bluetooth",
    knopki: "4",
    image: "img/mouse7.jpg",
    price: "5 000",
    rating: "5",
  },
  {
    name: "Мышь беспроводная Razer Basilisk X Hyperspeed",
    brand: "Razer",
    type: "besprovod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse8.jpg",
    price: "3 000",
    rating: "3",
  },
  {
    name: "Мышь беспроводная Razer Atheris White",
    brand: "Razer",
    type: "besprovod",
    interface: "bluetooth",
    knopki: "4",
    image: "img/mouse9.jpg",
    price: "9 000",
    rating: "61",
  },
  {
    name: "Мышь проводная Razer DeathAdder V2 Mini",
    brand: "Razer",
    type: "provod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse10.jpg",
    price: "5 000",
    rating: "13",
  },
  {
    name: "Мышь проводная ZET GAMING Warrior 2",
    brand: "ZET GAMING",
    type: "provod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse11.jpg",
    price: "1 000",
    rating: "21",
  },
  {
    name: "Мышь беспроводная ZET GAMING Edge Air Ultra V3",
    brand: "ZET GAMING",
    type: "besprovod",
    interface: "bluetooth",
    knopki: "3",
    image: "img/mouse12.jpg",
    price: "7 000",
    rating: "12",
  },
  {
    name: "Мышь беспроводная/проводная ZET GAMING Phantom",
    brand: "ZET GAMING",
    type: "besprovodprovod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse13.jpg",
    price: "4 000",
    rating: "6",
  },
  {
    name: "Мышь беспроводная A4Tech Fstyler FB35",
    brand: "A4Tech",
    type: "besprovod",
    interface: "radio",
    knopki: "6",
    image: "img/mouse14.jpg",
    price: "9 000",
    rating: "9",
  },
  {
    name: "Мышь беспроводная A4Tech G10-810FS",
    brand: "A4Tech",
    type: "besprovod",
    interface: "type-a",
    knopki: "6",
    image: "img/mouse15.jpg",
    price: "6 000",
    rating: "8",
  },
  {
    name: "Мышь проводная A4Tech N-500F",
    brand: "A4Tech",
    type: "provod",
    interface: "type-a",
    knopki: "4",
    image: "img/mouse16.jpg",
    price: "1 000",
    rating: "22",
  },
];
function all_product() {
  let content = document.querySelector("#content");

  for (let key of list_product) {
    content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
  }
  korzina();
}

window.addEventListener("load", all_product);
let bfil = document.querySelector("#bfil");
bfil.addEventListener("click", select_type);

function select_product() {
  content.innerHTML = "";
  let checkboxes = document.querySelectorAll("input[name=flist]:checked");

  let pr = [];

  checkboxes.forEach(function (elem) {
    pr.push(elem.value);
  });

  for (const product of pr) {
    if (product == "fall") {
      for (let key of list_product) {
        content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
      }
    }

    if (product == "frazer") {
      for (let key of list_product) {
        if (key.brand == "Razer") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "flogitech") {
      for (let key of list_product) {
        if (key.brand == "Logitech") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fzetgaming") {
      for (let key of list_product) {
        if (key.brand == "ZET GAMING") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fardorgaming") {
      for (let key of list_product) {
        if (key.brand == "ARDOR GAMING") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fa4tech") {
      for (let key of list_product) {
        if (key.brand == "A4Tech") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fdexp") {
      for (let key of list_product) {
        if (key.brand == "DEXP") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fprovod") {
      for (let key of list_product) {
        if (key.type == "provod") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fbesprovod") {
      for (let key of list_product) {
        if (key.type == "besprovod") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fbesprovodprovod") {
      for (let key of list_product) {
        if (key.type == "besprovodprovod") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "ftype-a") {
      for (let key of list_product) {
        if (key.interface == "type-a") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fbluetooth") {
      for (let key of list_product) {
        if (key.interface == "bluetooth") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "fradio") {
      for (let key of list_product) {
        if (key.interface == "radio") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }

    if (product == "f2") {
      for (let key of list_product) {
        if (key.knopki == "2") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }
    if (product == "f3") {
      for (let key of list_product) {
        if (key.knopki == "3") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }
    if (product == "f4") {
      for (let key of list_product) {
        if (key.knopki == "4") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }
    if (product == "f5") {
      for (let key of list_product) {
        if (key.knopki == "5") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }
    if (product == "f6") {
      for (let key of list_product) {
        if (key.knopki == "6") {
          content.innerHTML += `<div id="card" data-price=${key.price} data-rating=${key.rating}><div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/><p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;
        }
      }
    }
  }

  return pr;
}

function select_type() {
  let ty = [];
  let pr = select_product();
  console.log(ty);

  let checkboxes = document.querySelectorAll("input[name=flist]:checked");

  checkboxes.forEach(function (elem) {
    ty.push(elem.value);
  });

  for (const prod of ty) {
    if (prod == "fprovod") {
      for (let key of pr) {
        if (key.type == "Проводная") {
          content.innerHTML += `<p>${key.name}</p>`;
        }
      }
    }
  }
}

function korzina() {
  let list_korzina = [];
  document.onclick = (event) => {
    if (event.target.classList.contains("btnbuy")) {
      list_korzina.push(event.target.dataset.pr);
      let blkbsk = document.querySelector("#blkbsk");
      blkbsk.innerHTML = "";
      for (const pr of list_korzina) {
        blkbsk.innerHTML += `${pr} <br>`;
      }
      console.log(list_korzina);
    }
  }
}

document.querySelector("#sort-asc").onclick = function () {
  mySort("data-price");
};
document.querySelector("#sort-desc").onclick = function () {
  mySortDesc("data-price");
};
document.querySelector("#sort-rating").onclick = function () {
  mySortDesc("data-rating");
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function mySort(sortType) {
  let ch1, ch2;
  let replacedNode;

  let nav = document.querySelector("#content");
  for (let i = 0; i < nav.children.length - 1; i++) {
    for (let j = i + 1; j < nav.children.length; j++) {
      ch1 = Number(nav.children[i].getAttribute(sortType));
      ch2 = Number(nav.children[j].getAttribute(sortType));

      if (ch1 > ch2) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function mySortDesc(sortType) {
  let ch1, ch2;
  let replacedNode;

  let nav = document.querySelector("#content");
  for (let i = 0; i < nav.children.length - 1; i++) {
    for (let j = i + 1; j < nav.children.length; j++) {
      ch1 = Number(nav.children[i].getAttribute(sortType));
      ch2 = Number(nav.children[j].getAttribute(sortType));

      if (ch1 < ch2) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}
