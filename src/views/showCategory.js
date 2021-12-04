document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("category").addEventListener("change", (event) => {
    event.preventDefault();

    const opt = document.getElementById("category");
    const url = "http://localhost:7000/products/showProducts/" + opt.value;

    const trs = document.querySelectorAll(".prod-tr");
    for (const el of trs) {
      el.parentNode.removeChild(el);
    }

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        response.forEach((elem) => {
          var html = "<tr class='prod-tr'>";
          html += `<td>${elem.product}</td>`;
          html += `<td>${elem.price}</td>`;
          html += `<td>${elem.category}</td>`;
          html += `<td><img src="${elem.picture}" width="32" height="30"></td>`;
          html += "</tr>";
          document.getElementById("varer").innerHTML += html;
        });
      })
      .catch(() => {
        window.alert("Noget gik galt.");
      });
  });
});
