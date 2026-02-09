// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Understanding Medical Weight Loss: What to Expect",
        excerpt: "Learn about the science-backed approach to sustainable weight loss with physician supervision and FDA-approved medications.",
        category: "weight-loss",
        categoryLabel: "Weight Loss",
        date: "February 5, 2026",
        readTime: "5 min read",
        slug: "understanding-medical-weight-loss"
    },
    {
        id: 2,
        title: "5 Signs Your Metabolism Needs a Reset",
        excerpt: "Discover the warning signs that indicate your metabolism may need attention and how to address them naturally.",
        category: "wellness",
        categoryLabel: "Wellness",
        date: "February 3, 2026",
        readTime: "4 min read",
        slug: "5-signs-metabolism-needs-reset"
    },
    {
        id: 3,
        title: "The Role of GLP-1 Medications in Weight Loss",
        excerpt: "An in-depth look at how Semaglutide and Tirzepatide work, their benefits, and what makes them effective for weight management.",
        category: "weight-loss",
        categoryLabel: "Weight Loss",
        date: "January 30, 2026",
        readTime: "6 min read",
        slug: "glp1-medications-weight-loss"
    },
    {
        id: 4,
        title: "Nutrition Strategies for Managing Type 2 Diabetes",
        excerpt: "Evidence-based dietary approaches to help control blood sugar, improve insulin sensitivity, and reduce medication dependence.",
        category: "nutrition",
        categoryLabel: "Nutrition",
        date: "January 28, 2026",
        readTime: "7 min read",
        slug: "nutrition-strategies-type-2-diabetes"
    },
    {
        id: 5,
        title: "How Chronic Inflammation Affects Your Metabolism",
        excerpt: "Explore the connection between chronic inflammation and metabolic dysfunction, plus natural ways to reduce inflammation.",
        category: "chronic-disease",
        categoryLabel: "Chronic Disease",
        date: "January 25, 2026",
        readTime: "5 min read",
        slug: "chronic-inflammation-metabolism"
    },
    {
        id: 6,
        title: "Building Sustainable Healthy Habits That Last",
        excerpt: "Practical strategies for creating lasting lifestyle changes without relying on willpower or restrictive dieting.",
        category: "wellness",
        categoryLabel: "Wellness",
        date: "January 22, 2026",
        readTime: "4 min read",
        slug: "sustainable-healthy-habits"
    },
    {
        id: 7,
        title: "The Truth About Supplements for Weight Loss",
        excerpt: "Separating fact from fiction when it comes to weight loss supplements and what actually works based on research.",
        category: "weight-loss",
        categoryLabel: "Weight Loss",
        date: "January 20, 2026",
        readTime: "6 min read",
        slug: "truth-about-supplements"
    },
    {
        id: 8,
        title: "Managing Hypertension Through Diet and Lifestyle",
        excerpt: "Natural approaches to lowering blood pressure including DASH diet principles, stress management, and physical activity.",
        category: "chronic-disease",
        categoryLabel: "Chronic Disease",
        date: "January 18, 2026",
        readTime: "5 min read",
        slug: "managing-hypertension-naturally"
    },
    {
        id: 9,
        title: "The Importance of Protein in Metabolic Health",
        excerpt: "Why adequate protein intake is crucial for metabolism, muscle maintenance, and successful weight management.",
        category: "nutrition",
        categoryLabel: "Nutrition",
        date: "January 15, 2026",
        readTime: "5 min read",
        slug: "protein-metabolic-health"
    }
];

// Render blog posts
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    
    if (posts.length === 0) {
        blogGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="color: var(--muted-foreground);">No posts found in this category.</p>
            </div>
        `;
        return;
    }
    
    blogGrid.innerHTML = posts.map(post => `
        <article class="blog-card fade-in">
            <div class="blog-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getIconForCategory(post.category)}
                </svg>
            </div>
            <div class="blog-content">
                <span class="blog-category">${post.categoryLabel}</span>
                <h3 class="blog-title">
                    <a href="#${post.slug}">${post.title}</a>
                </h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span class="blog-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${post.date}
                    </span>
                    <span class="blog-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${post.readTime}
                    </span>
                </div>
            </div>
        </article>
    `).join('');
}

// Get icon based on category
function getIconForCategory(category) {
    const icons = {
        'weight-loss': '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path>',
        'nutrition': '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        'wellness': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
        'chronic-disease': '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>'
    };
    return icons[category] || icons['wellness'];
}

// Category filter functionality
function initCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter posts
            const category = this.dataset.category;
            const filteredPosts = category === 'all' 
                ? blogPosts 
                : blogPosts.filter(post => post.category === category);
            
            renderBlogPosts(filteredPosts);
        });
    });
}

// Newsletter form handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simple mailto for now
    window.location.href = `mailto:contact@metabolicresetclinic.com?subject=Newsletter Subscription&body=Please subscribe ${email} to your newsletter.`;
    
    alert('Thank you for subscribing! We\'ll be in touch soon.');
    event.target.reset();
    return false;
}

// Initialize blog page
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts(blogPosts);
    initCategoryFilter();
});
