document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    let AboutIcon = document.getElementById('AboutIcon');
    let AboutTooltip = document.getElementById('AboutTooltip');
    let x = window.matchMedia("(min-width: 900px)")
    addToolTips(x)
    x.addListener(addToolTips)
});


function addToolTips(x){
    if (x.matches) { // If media query matches
        AboutIcon.addEventListener('mouseenter', () => {
            AboutTooltip.style.display = "inline-block";
        });
        AboutIcon.addEventListener('mouseout', () => {
            AboutTooltip.style.display = "none";
        });
        GitLogo.addEventListener('mouseenter', () => {
            GitTooltip.style.display = "inline-block";
        });
        GitLogo.addEventListener('mouseout', () => {
            GitTooltip.style.display = "none";
        });
        EmailIcon.addEventListener('mouseenter', () => {
            EmailTooltip.style.display = "inline-block";
        });
        EmailIcon.addEventListener('mouseout', () => {
            EmailTooltip.style.display = "none";
        });
        BlogIcon.addEventListener('mouseenter', () => {
            BlogTooltip.style.display = "inline-block";
        });
        BlogIcon.addEventListener('mouseout', () => {
            BlogTooltip.style.display = "none";
        });
    }
}
