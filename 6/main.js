window.addEventListener("DOMContentLoaded", function () {
    const type = document.getElementById("type");
    const num = document.getElementById("num");
    const radios = document.getElementById("radios");
    const check = document.getElementById("checkbox");
    radios.style.display = "none";
    check.style.display = "none";
    num.addEventListener("input", function () {
      if (Number.isNaN(Number(num.value))) {
        alert("Неверно введенные данные");
        num.value = "";
        return;
      }
      let t = type.value;
      switch (t) {
        case "1":
          countPrice(1);
          break;
        case "2":
          countPrice(2);
          break;
        case "3":
          countPrice(3);
          break;
      }
    });
    type.addEventListener("change", function () {
      switch (type.value) {
        case "1":
          radios.style.display = "none";
          check.style.display = "none";
          countPrice(1);
          break;
        case "2":
          radios.style.display = "block";
          check.style.display = "none";
          countPrice(2);
          break;
        case "3":
          radios.style.display = "none";
          check.style.display = "block";
          countPrice(3);
          break;
      }
    });
  });
  
  function countPrice(option) {
    const count = Number(document.getElementById("num").value);
    const shrimps = 35;
    const octopus = 50;
    const squid = 70;
    const total = document.getElementById("total");
    let r = document.querySelectorAll("#radios input[type=radio]");
    let c = document.getElementById("checkbox-check");
    let res1 = shrimps * count;
    let res2 = octopus * count;
    let res3 = squid * count;
    switch (option) {
      case 1:
        total.value = res1;
        break;
      case 2:
        r.forEach(function (p) {
          p.addEventListener("change", function () {
            res2 = octopus * count + Number(p.value);
            total.value = res2;
          });
          total.value = res2;
        });
        break;
      case 3:
        c.addEventListener("change", function () {
          if (c.checked) {
            res3 = squid * count + Number(c.value);
            total.value = res3;
          } else {
            res3 = squid * count;
            total.value = res3;
          }
        });
        total.value = res3;
        break;
    }
  }
