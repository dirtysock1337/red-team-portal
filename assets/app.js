// ================================
// Checkbox persistence (localStorage)
// ================================
function saveState(checkbox) {
  const tool = checkbox.closest('.tool')?.dataset.tool;
  if (!tool) return;
  localStorage.setItem(tool, checkbox.checked);
}

function loadState() {
  document.querySelectorAll('.tool').forEach(tool => {
    const key = tool.dataset.tool;
    const checkbox = tool.querySelector('input[type="checkbox"]');
    if (!checkbox || !key) return;

    const saved = localStorage.getItem(key);
    if (saved !== null) {
      checkbox.checked = saved === 'true';
    }
  });
}

// ================================
// Global search across tools
// ================================
function setupSearch() {
  const searchBox = document.getElementById("searchBox");
  if (!searchBox) return;

  searchBox.addEventListener("keyup", function () {
    const query = this.value.toLowerCase();

    document.querySelectorAll(".tool").forEach(tool => {
      const text = tool.innerText.toLowerCase();
      tool.style.display = text.includes(query) ? "block" : "none";
    });
  });
}

// ================================
// Init on page load
// ================================
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  setupSearch();
});
