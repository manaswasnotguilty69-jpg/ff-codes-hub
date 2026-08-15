const codes = [
  { code: "CMT0GYCE3WYB69CR", expires: "₹80 Reward" },
  { code: "0LS9R3TFJ0APDG8X", expires: "₹200 Reward" },
  { code: "9ET48BS5VUR9ZSNN", expires: "₹300 Reward" },
  { code: "DTWU191YLR89ZDBB", expires: "₹400 Reward" },
  { code: "H3GUDCKTYBRYBEFF", expires: "₹500 Reward" },
  { code: "A5K2MGULGFE42WQA", expires: "₹600 Reward" },
  { code: "4C4SLLTK4LBJKNEU", expires: "₹700 Reward" },
  { code: "FA5S6M4YX8R3U8P3", expires: "₹800 Reward" },
  { code: "08BH2ELABBBU8RD8", expires: "₹900 Reward" },
  { code: "H2BGAMBUXFFSY8W7", expires: "₹1000 Reward" }
];

const grid = document.getElementById("codesGrid");
const empty = document.getElementById("empty");
const updated = document.getElementById("updated");

function renderCodes() {
  if (!grid) return;

  grid.innerHTML = "";

  codes.forEach(function(item) {
    const card = document.createElement("article");
    card.className = "code-card";

    card.innerHTML = `
      <div class="eyebrow">ACTIVE CODE</div>
      <div class="code">${item.code}</div>
      <div class="code-meta">${item.expires}</div>
      <button class="copy">COPY CODE</button>
    `;

    const button = card.querySelector(".copy");

    button.addEventListener("click", function() {
      navigator.clipboard.writeText(item.code)
        .then(function() {
          button.textContent = "COPIED ✓";

          setTimeout(function() {
            button.textContent = "COPY CODE";
          }, 1500);
        })
        .catch(function() {
          const textArea = document.createElement("textarea");
          textArea.value = item.code;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";

          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          textArea.remove();

          button.textContent = "COPIED ✓";

          setTimeout(function() {
            button.textContent = "COPY CODE";
          }, 1500);
        });
    });

    grid.appendChild(card);
  });

  if (empty) {
    empty.classList.add("hidden");
  }

  if (updated) {
    updated.textContent =
      "Updated: " + new Date().toLocaleDateString("en-IN");
  }
}

renderCodes();
