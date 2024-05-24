document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.querySelector('.cookies');
    const btnAccept = document.getElementById('btn-accept');
    const btnReject = document.getElementById('btn-reject');
    const svgClose = document.getElementById('close-cookies');
    const isCookies = localStorage.getItem('isCookies');

    // Check localStorage for consent
    if (!isCookies) {
        cookieConsent.classList.add('cookies--appear');
    }

    function hideCookieConsent() {
        cookieConsent.classList.remove('cookies--appear');
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 500); // match the transition duration
    }

    // Accept cookies
    btnAccept.addEventListener('click', () => {
        localStorage.setItem('isCookies', 'accepted');
        hideCookieConsent();
    });

    // Reject cookies
    btnReject.addEventListener('click', () => {
        localStorage.setItem('isCookies', 'rejected');
        hideCookieConsent();
    });

    // Close icon
    svgClose.addEventListener('click', () => {
        hideCookieConsent();
    });
});