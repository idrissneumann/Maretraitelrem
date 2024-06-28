document.getElementById("pension").addEventListener("input", updateResults);

updateResults();

function updateResults() {
  const pension = parseFloat(document.getElementById("pension").value);

  if (!isNaN(pension)) {
    const pension = parseFloat(document.getElementById("pension").value);

    // Au bout du compte c'est ce qu'on veux haha
    const difference = pension >= 0 ? -1 * pension : pension;
    const pensionNet1 = pension + difference;
    const pensionNet2 = difference;

    document.querySelector(".alert").style.color =
      difference < 0 ? "#EE2C17" : "#000";

    document.getElementById("win_lose").textContent =
      difference < 0 ? "perdue" : "gagnée";

    document.getElementById("pensionNet1").textContent = pensionNet1.toFixed(0);
    document.getElementById("pensionNet2").textContent = pensionNet2.toFixed(0);
    document.getElementById("difference").textContent = difference.toFixed(0);
  } else {
    document.getElementById("pensionNet1").textContent = "";
    document.getElementById("pensionNet2").textContent = "";
    document.getElementById("difference").textContent = "";
  }
}
