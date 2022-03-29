document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
   let AboutIcon = document.getElementById('AboutIcon');
   let AboutTooltip = document.getElementById('AboutTooltip');
   AboutIcon.addEventListener('mouseover', () => {
        AboutTooltip.style.display = "inline-block";
    });
    AboutIcon.addEventListener('mouseleave', () => {
        AboutTooltip.style.display = "none";
    });
    GitLogo.addEventListener('mouseover', () => {
        GitTooltip.style.display = "inline-block";
    });
    GitLogo.addEventListener('mouseleave', () => {
        GitTooltip.style.display = "none";
    });
});