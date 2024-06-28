document.getElementById("pension").addEventListener("input", updateResults);

updateResults();

function updateResults() {
  const pension = parseFloat(document.getElementById("pension").value);

  if (!isNaN(pension)) {
    const pension = parseFloat(document.getElementById("pension").value);

    // Au bout du compte c'est ce qu'on veux haha
    const difference = pension >= 0 ? -1 * pension : pension;
    const pensionNet = 0;

    document.querySelector(".alert").style.color =
      difference < 0 ? "#EE2C17" : "#000";

    document.getElementById("win_lose").textContent =
      difference < 0 ? "perdue" : "gagn&eacute;e";

    document.getElementById("pensionNet").textContent = pensionNet.toFixed(0);
    document.getElementById("difference").textContent = difference.toFixed(0);
  } else {
    document.getElementById("pensionNet").textContent = "";
    document.getElementById("difference").textContent = "";
  }
}
