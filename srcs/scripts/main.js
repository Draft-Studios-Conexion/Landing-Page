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
