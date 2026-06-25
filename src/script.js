// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('addModal');
    const closeModal = document.querySelector('.close-modal');
    const addForm = document.getElementById('addForm');
    const modalTitle = document.getElementById('modalTitle');
    
    // Add buttons that open the modal
    const addButtons = {
        addEducationBtn: 'Add Qualification',
        addProjectBtn: 'Add New Project',
        addCertificationBtn: 'Add Certificate',
        addAchievementBtn: 'Add Achievement'
    };
    
    for (const [btnId, title] of Object.entries(addButtons)) {
        const button = document.getElementById(btnId);
        if (button) {
            button.addEventListener('click', function() {
                modalTitle.textContent = title;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }
    }
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('itemTitle').value;
        const subtitle = document.getElementById('itemSubtitle').value;
        const description = document.getElementById('itemDescription').value;
        const date = document.getElementById('itemDate').value;
        const tags = document.getElementById('itemTags').value;
        
        // Get the modal title to determine what type of item to add
        const modalType = modalTitle.textContent;
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert and reset the form
        alert(`New ${modalType} added successfully!\n\nTitle: ${title}\nSubtitle: ${subtitle}\nDescription: ${description}\nDate: ${date}\nTags: ${tags}`);
        
        // Reset form
        addForm.reset();
        
        // Close modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Contact form submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert and reset the form
            alert(`Thank you for your message, ${name}!\n\nI'll get back to you at ${email} as soon as possible.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Scroll animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.education-card, .project-card, .cert-card, .achievement-card, .experience-card, .skill-bar');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    // Add active class to skill bars for animation
    document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.classList.add('active');
    });
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Initialize on load
    revealOnScroll();
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(38, 65, 67, 0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 4px 10px rgba(38, 65, 67, 0.1)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animate skill bars when they come into view
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 300);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });
});

// script.js - Add Lightbox Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('addModal');
    const closeModal = document.querySelector('.close-modal');
    const addForm = document.getElementById('addForm');
    const modalTitle = document.getElementById('modalTitle');
    
    // Add buttons that open the modal
    const addButtons = {
        addEducationBtn: 'Add Qualification',
        addProjectBtn: 'Add New Project',
        addCertificationBtn: 'Add Certificate',
        addAchievementBtn: 'Add Achievement'
    };
    
    for (const [btnId, title] of Object.entries(addButtons)) {
        const button = document.getElementById(btnId);
        if (button) {
            button.addEventListener('click', function() {
                modalTitle.textContent = title;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }
    }
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('itemTitle').value;
        const subtitle = document.getElementById('itemSubtitle').value;
        const description = document.getElementById('itemDescription').value;
        const date = document.getElementById('itemDate').value;
        const tags = document.getElementById('itemTags').value;
        
        // Get the modal title to determine what type of item to add
        const modalType = modalTitle.textContent;
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert and reset the form
        alert(`New ${modalType} added successfully!\n\nTitle: ${title}\nSubtitle: ${subtitle}\nDescription: ${description}\nDate: ${date}\nTags: ${tags}`);
        
        // Reset form
        addForm.reset();
        
        // Close modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Contact form submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert and reset the form
            alert(`Thank you for your message, ${name}!\n\nI'll get back to you at ${email} as soon as possible.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Scroll animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.education-card, .project-card, .cert-card, .achievement-card, .experience-card, .skill-bar');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    // Add active class to skill bars for animation
    document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.classList.add('active');
    });
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(51, 51, 68, 0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 4px 15px var(--shadow)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animate skill bars when they come into view
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 300);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });
    
    // ============================================
    // LIGHTBOX FUNCTIONALITY
    // ============================================
    
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    // Collect all images from certificates and achievements
    const certImages = document.querySelectorAll('.cert-img');
    const achImages = document.querySelectorAll('.ach-img');
    
    // Combine all images into one array
    let allImages = [...certImages, ...achImages];
    
    // Store current image index
    let currentImageIndex = 0;
    
    // Function to open lightbox with specific image
    function openLightbox(index) {
        if (allImages.length === 0) return;
        
        currentImageIndex = index;
        const img = allImages[currentImageIndex];
        
        // Set lightbox image and caption
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        // Get caption from parent card
        const card = img.closest('.cert-card, .achievement-card');
        const title = card.querySelector('h3').textContent;
        lightboxCaption.textContent = title;
        
        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Update navigation buttons state
        updateNavButtons();
    }
    
    // Function to close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Function to show next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        openLightbox(currentImageIndex);
    }
    
    // Function to show previous image
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        openLightbox(currentImageIndex);
    }
    
    // Function to update navigation buttons state
    function updateNavButtons() {
        // Only show prev/next buttons if there are multiple images
        if (allImages.length <= 1) {
            lightboxPrev.style.display = 'none';
            lightboxNext.style.display = 'none';
        } else {
            lightboxPrev.style.display = 'flex';
            lightboxNext.style.display = 'flex';
        }
    }
    
    // Add click event to all images
    allImages.forEach((img, index) => {
        // Create and add view button
        const viewBtn = document.createElement('button');
        viewBtn.className = 'view-image-btn';
        viewBtn.innerHTML = '<i class="fas fa-expand"></i>';
        viewBtn.title = 'View Full Image';
        
        // Add button to image container
        const imageContainer = img.closest('.cert-image, .achievement-image');
        imageContainer.appendChild(viewBtn);
        
        // Add click events to image and button
        img.addEventListener('click', () => openLightbox(index));
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering image click
            openLightbox(index);
        });
    });
    
    // Add click event to entire cards
    document.querySelectorAll('.cert-card, .achievement-card').forEach((card, index) => {
        // Skip if card has no image
        if (!card.querySelector('img[src]')) return;
        
        card.addEventListener('click', (e) => {
            // Don't open lightbox if clicking on view button or other interactive elements
            if (e.target.closest('.view-image-btn') || 
                e.target.closest('a') || 
                e.target.closest('button')) {
                return;
            }
            
            // Find the index of the image in this card
            const img = card.querySelector('img');
            const imgIndex = Array.from(allImages).indexOf(img);
            
            if (imgIndex !== -1) {
                openLightbox(imgIndex);
            }
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking on background
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
        }
    });
    
    // Initialize
    updateNavButtons();
    
    // Preload images for better lightbox experience
    function preloadImages() {
        allImages.forEach(img => {
            const imgObj = new Image();
            imgObj.src = img.src;
        });
    }
    
    // Start preloading images after page loads
    window.addEventListener('load', preloadImages);
});