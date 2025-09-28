# E-Commerce Web Application

# Problem Statement 
Traditional apparel shopping creates friction for both customers and shop owners. Customers want a convenient, secure way to discover styles, pick the correct sizes/colors, and receive reliable delivery with easy exchanges. Admins need precise control over fashion catalogs (sizes, colors, collections), inventory per SKU, promotions, and analytics (e.g., size curves, best-sellers). A smart online clothing store is required to simplify shopping for customers while enabling admins to manage products, content, and decisions efficiently.


# 📂 Folder Structure

└── trueStyle/
    ├── index.html
    ├── README.md
    ├── user/
    │   └── index.html
    ├── style/
    │   └── index.css
    ├── Model/
    │   └── appdb.js
    ├── Auth_Controller/
    │   └── auth.js
    ├── assets/
    │   ├── eye-close-svgrepo-com.svg
    │   ├── eye-open-svgrepo-com.svg
    │   ├── icon.png
    │   ├── logo.png
    │   ├── policies/
    │   │   ├── policy-privacy.png
    │   │   ├── policy-returns.png
    │   │   ├── policy-shipping.png
    │   │   └── policy-terms.png
    │   ├── home/
    │   │   ├── affordable.jpg
    │   │   ├── affordable_bg_removed.png
    │   │   ├── Bag.png
    │   │   ├── community.jpg
    │   │   ├── community_bg_removed.png
    │   │   ├── credit-card.png
    │   │   ├── customer-centric.jpg
    │   │   ├── customer-centric_bg_removed.png
    │   │   ├── easy_returns.jpg
    │   │   ├── easy_returns_bg_removed.png
    │   │   ├── fast_delivery.jpg
    │   │   ├── fast_delivery_bg_removed.png
    │   │   ├── fit.jpg
    │   │   ├── fit_bg_removed.png
    │   │   ├── offers.jpg
    │   │   ├── offers_bg_removed.png
    │   │   ├── pic1.jpg
    │   │   ├── pic2.jpg
    │   │   ├── pic3.jpg
    │   │   ├── pic4.jpg
    │   │   ├── real_reviews.jpg
    │   │   ├── real_reviews_bg_removed.png
    │   │   ├── search.png
    │   │   ├── secure_checkout.jpg
    │   │   ├── secure_checkout_bg_removed.png
    │   │   ├── smart_search.jpg
    │   │   ├── smart_search_bg_removed.png
    │   │   ├── sync.png
    │   │   ├── truck.png
    │   │   ├── trusted_quality.jpg
    │   │   ├── trusted_quality_bg_removed.png
    │   │   ├── wide.jpg
    │   │   └── wide_bg_removed.png
    │   ├── hero/
    │   │   ├── hero-1.webp
    │   │   ├── hero-2.webp
    │   │   ├── hero-3.webp
    │   │   ├── hero-4.webp
    │   │   ├── hero-5.webp
    │   │   └── hero-6.webp
    │   ├── categories/
    │   │   ├── boy.webp
    │   │   ├── girl.webp
    │   │   ├── man.webp
    │   │   └── women.webp
    │   ├── bg/
    │   │   ├── bg-11.png
    │   │   ├── bg-14.png
    │   │   ├── bg-3.jpg
    │   │   ├── bg-5.jpg
    │   │   └── bg-8.jpg
    │   ├── about/
    │   │   ├── about-about.png
    │   │   ├── about-mission.png
    │   │   ├── about-story.png
    │   │   └── about-vision.png
    │   └── products/
    │       ├── women/
    │       │   ├── tops/
    │       │   │   ├── tops-1-1.webp
    │       │   │   ├── tops-1-2.webp
    │       │   │   ├── tops-1-3.webp
    │       │   │   ├── tops-1-4.webp
    │       │   │   └── tops-1-tb.webp
    │       │   ├── t-shirts/
    │       │   │   ├── t-shirts-1-1.webp
    │       │   │   ├── t-shirts-1-2.webp
    │       │   │   ├── t-shirts-1-3.webp
    │       │   │   ├── t-shirts-1-4.webp
    │       │   │   └── t-shirts-1-tb.webp
    │       │   └── jeans/
    │       │       ├── jeans-1-1.webp
    │       │       ├── jeans-1-2.webp
    │       │       ├── jeans-1-3.webp
    │       │       ├── jeans-1-4.webp
    │       │       └── jeans-1-tb.webp
    │       ├── men/
    │       │   ├── t-shirts/
    │       │   │   ├── t-shirts-1-1.webp
    │       │   │   ├── t-shirts-1-2.webp
    │       │   │   ├── t-shirts-1-3.webp
    │       │   │   ├── t-shirts-1-4.webp
    │       │   │   └── t-shirts-1-tb.webp
    │       │   ├── shirts/
    │       │   │   ├── shirt-1-1.webp
    │       │   │   ├── shirt-1-2.webp
    │       │   │   ├── shirt-1-3.webp
    │       │   │   ├── shirt-1-4.webp
    │       │   │   └── shirt-1-tb.webp
    │       │   └── jeans/
    │       │       ├── jeans-1-1.jpg
    │       │       ├── jeans-1-2.jpg
    │       │       ├── jeans-1-3.jpg
    │       │       ├── jeans-1-4.jpg
    │       │       └── jeans-1-tb.jpg
    │       ├── girls/
    │       │   ├── tops/
    │       │   │   ├── tops-1-1.webp
    │       │   │   ├── tops-1-2.webp
    │       │   │   ├── tops-1-3.webp
    │       │   │   └── tops-1-tb.webp
    │       │   ├── t-shirts/
    │       │   │   ├── t-shirts-1.webp
    │       │   │   ├── t-shirts-2.webp
    │       │   │   ├── t-shirts-3.webp
    │       │   │   └── t-shirts-tb.webp
    │       │   └── jeans/
    │       │       ├── jeans-1-1.webp
    │       │       ├── jeans-1-2.webp
    │       │       ├── jeans-1-3.webp
    │       │       ├── jeans-1-4.webp
    │       │       └── jeans-1-tb.webp
    │       └── boys/
    │           ├── t-shirts/
    │           │   ├── t-shirts-1-1.webp
    │           │   ├── t-shirts-1-2.webp
    │           │   ├── t-shirts-1-3.webp
    │           │   ├── t-shirts-1-4.webp
    │           │   └── t-shirts-1-tb.webp
    │           ├── shirts/
    │           │   ├── shirts-1-1.webp
    │           │   ├── shirts-1-2.webp
    │           │   ├── shirts-1-3.webp
    │           │   ├── shirts-1-4.webp
    │           │   └── shirts-1-tb.webp
    │           └── jeans/
    │               ├── jeans-1-1.webp
    │               ├── jeans-1-2.webp
    │               ├── jeans-1-3.webp
    │               ├── jeans-1-4.webp
    │               └── jeans-1-tb.webp
    ├── admin/
    │   └── index.html
    └── src/
        ├── Components/
        │   ├── footer.html
        │   └── navbar.html
        └── Features/
            ├── Wishlist/
            │   └── wishlist.html
            ├── Subscription/
            │   └── subscription.html
            ├── Reports/
            │   └── reports.html
            ├── Profile/
            │   ├── profile.html
            │   └── user-profile.html
            ├── Products/
            │   ├── add-product.html
            │   ├── products.html
            │   └── view-product.html
            ├── Orders/
            │   ├── orders.html
            │   ├── view-order.html
            │   └── view-orders.html
            ├── Help/
            │   └── help.html
            ├── Faq/
            │   └── faq.html
            ├── Dashboard/
            │   └── dashboard.html
            ├── Customers/
            │   └── customers.html
            ├── Coupons/
            │   └── coupons.html
            ├── Content/
            │   └── content.html
            ├── Checkout/
            │   └── checkout.html
            ├── Cart/
            │   └── cart.html
            ├── Backup/
            │   └── backup.html
            ├── Addresses/
            │   └── addresses.html
            └── Auth/
                ├── register/
                │   └── register.html
                ├── login/
                │   └── login.html
                └── forgot-password/
                    └── forgot-password.html
# No external installation required

Tailwind CSS is used via CDN

Lucide icons are also loaded via CDN

Just open the project in any browser

# How to run
Open index.html in your browser to access the main site.

# Credentials
## Admin 
    email - admin@truestyle.com
    password - admin123
## Users
    email - john@example.com
    password - password
# Technologies Used

HTML5

CSS3

Tailwind CSS (via CDN)

JavaScript

Lucide Icons (via CDN)

# Note

Since no package manager or build tool is used, you only need a browser to run the project.

All styles and icons are linked via CDN.