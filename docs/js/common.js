$(function() {
  const authLinks = document.querySelectorAll(".group a");

  const toggleAuth = event => {
    event.preventDefault();
    const headerContent = document.getElementsByClassName("header-content");

    for (let index = 0; index < headerContent.length; index++) {
      const element = headerContent[index];
      element.classList.toggle("hide-class");
    }
  };

  for (let index = 0; index < authLinks.length; index++) {
    const element = authLinks[index];
    element.addEventListener("click", toggleAuth);
  }
});
