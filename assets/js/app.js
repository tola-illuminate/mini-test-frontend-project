async function loadComponent(path, selector) {
  const targetElement = document.querySelector(selector);

  // Check if the element exists before proceeding
  if (!targetElement) {
    console.error(`Element not found: ${selector}`);
    return;
  }

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    const data = await res.text();
    targetElement.innerHTML = data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

// Ensure the DOM is fully loaded before selecting elements
window.addEventListener("DOMContentLoaded", () => {
  loadComponent("/components/navbar.html", "#navbar");
  loadComponent("/components/footer.html", "#footer");
  loadComponent("/components/heroBanner.html", "#hero-banner");
  loadComponent("/components/Courses.html", "#course");
});
