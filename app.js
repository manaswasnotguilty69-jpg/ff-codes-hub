const codes = [
  { code: "FSHNPS9C09B0ENBE", expires: "₹100 Reward" },
  { code: "0LS9R3TFJ0APDG8X", expires: "₹200 Reward" },
  { code: "9ET48BS5VUR9ZSNN", expires: "₹300 Reward" },
  { code: "DTWU191YLR89ZDBB", expires: "₹400 Reward" },
  { code: "H3GUDCKTYBRYBEFF", expires: "₹500 Reward" },
  { code: "A5K2MGULGFE42W0A", expires: "₹600 Reward" },
  { code: "4C4SLLTK4LBJKNEU", expires: "₹700 Reward" },
  { code: "FA5S6M4YX8R3U8P3", expires: "₹800 Reward" },
  { code: "08BH2ELABBBU8RD8", expires: "₹900 Reward" },
  { code: "H2BGAMBUXFFSY8W7", expires: "₹1000 Reward" }
];const grid = document.getElementById("codesGrid");
const empty = document.getElementById("empty");
const updated = document.getElementById("updated");

function renderCodes() {
  grid.innerHTML = "";

  if (!codes.length) {
    empty.classList.remove("hidden");
    return;
  }

  codes.forEach(item => {
    const card = document.createElement("article");
    card.className = "code-card";

    card.innerHTML = `
      <div class="eyebrow">ACTIVE CODE</div>
      <div class="code">${escapeHtml(item.code)}</div>
      <div class="code-meta">${escapeHtml(item.expires)}</div>
      <button class="copy" data-code="${escapeHtml(item.code)}">COPY CODE</button>
    `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(btn.dataset.code);

      const toast = document.getElementById("toast");
      toast.textContent = "Code copied!";
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 1300);
    });
  });

  updated.textContent = "Updated: " + new Date().toLocaleDateString();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[c]));
}

renderCodes();
