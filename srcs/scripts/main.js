function indOptions(select) {
  let elem = document.getElementById("industry-other");

  if (select === "Other") {
    elem.classList.toggle("input-show");
  } else {
    elem.classList.remove("input-show");
  }
}

function jobOption(select) {
  let elem = document.getElementById("jobrole-other");

  if (select === "Other") {
    elem.classList.toggle("input-show");
  } else {
    elem.classList.remove("input-show");
  }
}

function indOptionsSmall(select) {
  let elem = document.getElementById("industry-other-sm");

  if (select === "Other") {
    elem.classList.toggle("input-show");
    console.log("hello");
  } else {
    elem.classList.remove("input-show");
  }
}

function jobOptionSmall(select) {
  let elem = document.getElementById("jobrole-other-sm");

  if (select === "Other") {
    elem.classList.toggle("input-show");
  } else {
    elem.classList.remove("input-show");
  }
}
