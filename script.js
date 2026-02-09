// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Charts
    initCharts();
    
    // Initialize Project Filtering
    initProjectFiltering();
    
    // Initialize Mobile Menu
    initMobileMenu();
    
    // Initialize Contact Form
    initContactForm();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
});

// Initialize Charts
function initCharts() {
    // Hero Chart - Stock Market Simulation
    const heroCtx = document.getElementById('heroChart');
    if (heroCtx) {
        const heroChart = new Chart(heroCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Portfolio Value',
                    data: [100, 105, 110, 115, 113, 118, 122, 125, 130, 135, 140, 145],
                    borderColor: '#0066cc',
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Benchmark',
                    data: [100, 102, 104, 107, 105, 108, 110, 112, 115, 117, 120, 122],
                    borderColor: '#00a86b',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Source Sans Pro'
                            }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Roboto Mono'
                            }
                        }
                    },
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value;
                            },
                            font: {
                                family: 'Roboto Mono'
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'nearest'
                }
            }
        });
    }
    
    // About Chart - Skills Distribution
    const aboutCtx = document.getElementById('aboutChart');
    if (aboutCtx) {
        const aboutChart = new Chart(aboutCtx, {
            type: 'radar',
            data: {
                labels: ['Statistics', 'Machine Learning', 'Finance', 'Programming', 'Visualization', 'Economics'],
                datasets: [{
                    label: 'Expertise Level',
                    data: [95, 85, 90, 88, 82, 87],
                    backgroundColor: 'rgba(0, 102, 204, 0.2)',
                    borderColor: '#0066cc',
                    borderWidth: 3,
                    pointBackgroundColor: '#0066cc',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#0066cc'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            display: false,
                            stepSize: 20
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                family: 'Source Sans Pro',
                                size: 12,
                                weight: '600'
                            },
                            color: '#333'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Initialize Project Filtering
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.backgroundColor = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            nav.style.zIndex = '1000';
            
            // Style nav links for mobile
            const navLinks = nav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.padding = '15px 0';
                link.style.display = 'block';
                link.style.borderBottom = '1px solid #f0f0f0';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                }
            }
        });
        
        // Reset nav on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.style.display = '';
                nav.style.flexDirection = '';
                nav.style.position = '';
                nav.style.top = '';
                nav.style.left = '';
                nav.style.right = '';
                nav.style.backgroundColor = '';
                nav.style.padding = '';
                nav.style.boxShadow = '';
                
                const navLinks = nav.querySelectorAll('a');
                navLinks.forEach(link => {
                    link.style.padding = '';
                    link.style.display = '';
                    link.style.borderBottom = '';
                });
            }
        });
    }
}

// Initialize Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name') || 'User';
            
            // Show success message
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Initialize Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    const nav = document.querySelector('.nav');
                    nav.style.display = 'none';
                }
            }
        });
    });
}

// Add active class to nav links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
