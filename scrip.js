
    function toggleMenu() {
        document.querySelector('.nav-links').classList.toggle('active');
    }
    
    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function buyProduct(productName) {
        alert(`You have purchased: ${productName}`);
    }

    function acceptCookies() {
        document.getElementById('cookie-notification').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    }

    window.onload = function() {
        if (localStorage.getItem('cookiesAccepted')) {
            document.getElementById('cookie-notification').style.display = 'none';
        }
    };



    function togglePassword() {
        const password = document.getElementById('password');
        password.type = password.type === 'password' ? 'text' : 'password';
    };

