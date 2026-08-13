// Replace/add codes in this array. Keep only codes you have verified.
const codes = [
  { code: "EXAMPLE-CODE-01", expires: "Example — replace this code" },
  { code: "EXAMPLE-CODE-02", expires: "Example — replace this code" },
  { code: "EXAMPLE-CODE-03", expires: "Example — replace this code" }
];

const grid = document.getElementById("codesGrid");
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
      setTimeout(() => toast.classList.remove("show"), 1300);
    });
  });
  updated.textContent = "Updated: " + new Date().toLocaleDateString();
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
renderCodes();