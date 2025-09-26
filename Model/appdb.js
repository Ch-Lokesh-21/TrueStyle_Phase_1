(function (global) {
  // ---------- utils ----------
  const nowISO = () => new Date().toISOString();
  const genId = () => (Math.floor(1e12 * Math.random()) | 0);
  const deepClone = (x) => JSON.parse(JSON.stringify(x));
  const byId = (id) => (x) => x.id === id;


  const Order_Status = [
    { id: 1, Display_Text: 'Placed' },
    { id: 2, Display_Text: 'Confirmed' }, 
    { id: 3, Display_Text: 'Packed' },
    { id: 4, Display_Text: 'Shipped' },
    { id: 5, Display_Text: 'Out for delivery' },
    { id: 6, Display_Text: 'Delivered' },
    { id: 7, Display_Text: 'Cancelled' },
    { id: 8, Display_Text: 'Returned' }
  ];

  const Payment_Status = [
    { id: 1, Display_Text: 'initiated' },
    { id: 2, Display_Text: 'paid' },
    { id: 3, Display_Text: 'failed' },
    { id: 4, Display_Text: 'refunded' }
  ];

  // ---------- people ----------
  const Admin = [
    { id: 1001, First_Name: 'Admin', Last_Name: 'TrueStyle', Creation_Date: nowISO(), Modified_Date: nowISO(), email: 'admin@truestyle.com', password: 'admin123' }
  ];
  const User = [
    { id: 2001, First_Name: 'John', Last_Name: 'Doe', Creation_Date: nowISO(), Modified_Date: nowISO(), email: 'john@example.com', password: 'password' },
    { id: 2002, First_Name: 'Jane', Last_Name: 'Roe', Creation_Date: nowISO(), Modified_Date: nowISO(), email: 'jane@example.com', password: 'password' },
    { id: 2003, First_Name: 'Aarav', Last_Name: 'Sharma', Creation_Date: nowISO(), Modified_Date: nowISO(), email: 'aarav@ex.com', password: 'password' },
    { id: 2004, First_Name: 'Isha', Last_Name: 'Patel', Creation_Date: nowISO(), Modified_Date: nowISO(), email: 'isha@ex.com', password: 'password' }
  ];

  // ---------- addresses ----------
  const User_Address = [
    { id: 3001, Address: '221B Baker Street', Country: 'UK', State: 'London', City: 'London', Mobile: '+44 1234567890', Postal_Code: 'NW1', Creation_Date: nowISO(), Modified_Date: nowISO(), User_Id: 2001 },
    { id: 3002, Address: 'MG Road 42', Country: 'India', State: 'Karnataka', City: 'Bengaluru', Mobile: '+91 9876543210', Postal_Code: '560001', Creation_Date: nowISO(), Modified_Date: nowISO(), User_Id: 2002 },
    { id: 3003, Address: 'Powai Lake 9', Country: 'India', State: 'Maharastra', City: 'Mumbai', Mobile: '+91 9000000001', Postal_Code: '400076', Creation_Date: nowISO(), Modified_Date: nowISO(), User_Id: 2003 },
    { id: 3004, Address: 'DLF Phase 2', Country: 'India', State: 'Haryana', City: 'Gurgaon', Mobile: '+91 9000000002', Postal_Code: '122002', Creation_Date: nowISO(), Modified_Date: nowISO(), User_Id: 2004 }
  ];

  // ---------- categories ----------
  const Category = [
    { id: 4001, Display_Text: 'Men', Description: 'Menswear', Parent_Category_Id: null },
    { id: 4002, Display_Text: 'Women', Description: 'Womenswear', Parent_Category_Id: null },
    { id: 4003, Display_Text: 'Kids', Description: 'Kidswear', Parent_Category_Id: null },
    { id: 4004, Display_Text: 'Accessories', Description: 'Belts, hats, etc.', Parent_Category_Id: null },
    { id: 4005, Display_Text: 'Footwear', Description: 'Shoes & Sandals', Parent_Category_Id: null },
    { id: 4006, Display_Text: 'Athleisure', Description: 'Activewear', Parent_Category_Id: null },
    { id: 4007, Display_Text: 'Ethnic', Description: 'Indian wear', Parent_Category_Id: null },
    { id: 4008, Display_Text: 'Winter', Description: 'Sweaters & Jackets', Parent_Category_Id: null },
    { id: 4009, Display_Text: 'Tops', Description: 'T-shirts & Shirts', Parent_Category_Id: 4001 },
    { id: 4010, Display_Text: 'Bottoms', Description: 'Jeans & Trousers', Parent_Category_Id: 4001 }
  ];

  // ---------- products ----------
  const Product = [
    { id: 5001, Name: 'Classic T Shirt', Description: 'Classic cotton T Shirt', Thumbnail: '/assets/products/men/t-shirts/t-shirts-1-tb.webp', Out_of_Stock: false, Categories_Id: 4001, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Blue', price: 499 },
    { id: 5002, Name: 'Classic Shirt', Description: 'Classic cotton Shirt', Thumbnail: '/assets/products/men/shirts/shirt-1-tb.webp', Out_of_Stock: false, Categories_Id: 4001, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Gray', price: 1499 },
    { id: 5003, Name: 'Classic Jeans', Description: 'Relaxed fit jeans', Thumbnail: '/assets/products/men/jeans/jeans-1-tb.jpg', Out_of_Stock: false, Categories_Id: 4001, Reviews_Count: 51, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Blue', price: 1999 },
    
    { id: 5004, Name: 'Classic T Shirt', Description: 'Classic cotton T Shirt', Thumbnail: '/assets/products/women/t-shirts/t-shirts-1-tb.webp', Out_of_Stock: false, Categories_Id: 4002, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'White', price: 499 },
    { id: 5005, Name: 'Classic Shirt', Description: 'Classic cotton Shirt', Thumbnail: '/assets/products/women/tops/tops-1-tb.webp', Out_of_Stock: false, Categories_Id: 4002, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Brown', price: 1499 },
    { id: 5006, Name: 'Classic Jeans', Description: 'Relaxed fit jeans', Thumbnail: '/assets/products/women/jeans/jeans-1-tb.webp', Out_of_Stock: false, Categories_Id: 4002, Reviews_Count: 51, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Blue', price: 1999 },

    { id: 5007, Name: 'T Shirt', Description: 'Classic cotton T Shirt', Thumbnail: '/assets/products/boys/t-shirts/t-shirts-1-tb.webp', Out_of_Stock: false, Categories_Id: 4003, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Beige', price: 499 },
    { id: 5008, Name: 'Shirt', Description: 'Classic cotton Shirt', Thumbnail: '/assets/products/boys/shirts/shirts-1-tb.webp', Out_of_Stock: false, Categories_Id: 4003, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Brown', price: 1499 },
    { id: 5009, Name: 'Jeans', Description: 'Relaxed fit jeans', Thumbnail: '/assets/products/boys/jeans/jeans-1-tb.webp', Out_of_Stock: false, Categories_Id: 4003, Reviews_Count: 51, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Blue', price: 1999 },

    { id: 5010, Name: 'Classic T Shirt', Description: 'Classic cotton T Shirt', Thumbnail: '/assets/products/girls/t-shirts/t-shirts-tb.webp', Out_of_Stock: false, Categories_Id: 4003, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'White', price: 499 },
    { id: 5011, Name: 'Classic Shirt', Description: 'Classic cotton Shirt', Thumbnail: '/assets/products/girls/tops/tops-1-tb.webp', Out_of_Stock: false, Categories_Id: 4003, Reviews_Count: 24, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Brown', price: 1499 },
    { id: 5012, Name: 'Classic Jeans', Description: 'Relaxed fit jeans', Thumbnail: '/assets/products/girls/jeans/jeans-1-tb.webp', Out_of_Stock: false, Categories_Id: 4003, Reviews_Count: 51, Creation_Date: nowISO(), Modified_Date: nowISO(), Brand: 'TrueStyle', color: 'Blue', price: 1999 }
  ];

  const Product_Images = [
  // 5001
  { id: 5101, Image: '/assets/products/men/t-shirts/t-shirts-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5001, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5102, Image: '/assets/products/men/t-shirts/t-shirts-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5001, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5103, Image: '/assets/products/men/t-shirts/t-shirts-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5001, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5104, Image: '/assets/products/men/t-shirts/t-shirts-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5001, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5002
  { id: 5105, Image: '/assets/products/men/shirts/shirt-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5002, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5106, Image: '/assets/products/men/shirts/shirt-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5002, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5107, Image: '/assets/products/men/shirts/shirt-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5002, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5108, Image: '/assets/products/men/shirts/shirt-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5002, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5003
  { id: 5109, Image: '/assets/products/men/jeans/jeans-1-1.jpg', ALT: 'Front view', Linked_Product_Id: 5003, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5110, Image: '/assets/products/men/jeans/jeans-1-2.jpg', ALT: 'Back view', Linked_Product_Id: 5003, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5111, Image: '/assets/products/men/jeans/jeans-1-3.jpg', ALT: 'Side view', Linked_Product_Id: 5003, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5112, Image: '/assets/products/men/jeans/jeans-1-4.jpg', ALT: 'Close-up', Linked_Product_Id: 5003, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5004
  { id: 5113, Image: '/assets/products/women/t-shirts/t-shirts-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5004, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5114, Image: '/assets/products/women/t-shirts/t-shirts-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5004, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5115, Image: '/assets/products/women/t-shirts/t-shirts-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5004, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5116, Image: '/assets/products/women/t-shirts/t-shirts-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5004, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5005
  { id: 5117, Image: '/assets/products/women/tops/tops-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5005, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5118, Image: '/assets/products/women/tops/tops-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5005, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5119, Image: '/assets/products/women/tops/tops-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5005, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5120, Image: '/assets/products/women/tops/tops-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5005, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5006
  { id: 5121, Image: '/assets/products/women/jeans/jeans-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5006, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5122, Image: '/assets/products/women/jeans/jeans-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5006, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5123, Image: '/assets/products/women/jeans/jeans-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5006, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5124, Image: '/assets/products/women/jeans/jeans-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5006, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5007
  { id: 5125, Image: '/assets/products/boys/t-shirts/t-shirts-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5007, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5126, Image: '/assets/products/boys/t-shirts/t-shirts-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5007, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5127, Image: '/assets/products/boys/t-shirts/t-shirts-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5007, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5128, Image: '/assets/products/boys/t-shirts/t-shirts-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5007, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5008
  { id: 5129, Image: '/assets/products/boys/shirts/shirts-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5008, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5130, Image: '/assets/products/boys/shirts/shirts-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5008, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5131, Image: '/assets/products/boys/shirts/shirts-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5008, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5132, Image: '/assets/products/boys/shirts/shirts-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5008, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5009
  { id: 5133, Image: '/assets/products/boys/jeans/jeans-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5009, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5134, Image: '/assets/products/boys/jeans/jeans-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5009, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5135, Image: '/assets/products/boys/jeans/jeans-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5009, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5136, Image: '/assets/products/boys/jeans/jeans-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5009, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5010
  { id: 5137, Image: '/assets/products/girls/t-shirts/t-shirts-1.webp', ALT: 'Front view', Linked_Product_Id: 5010, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5138, Image: '/assets/products/girls/t-shirts/t-shirts-2.webp', ALT: 'Back view', Linked_Product_Id: 5010, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5139, Image: '/assets/products/girls/t-shirts/t-shirts-3.webp', ALT: 'Side view', Linked_Product_Id: 5010, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5011
  { id: 5141, Image: '/assets/products/girls/tops/tops-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5011, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5142, Image: '/assets/products/girls/tops/tops-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5011, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5143, Image: '/assets/products/girls/tops/tops-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5011, Creation_Date: nowISO(), Modified_Date: nowISO() },

  // 5012
  { id: 5145, Image: '/assets/products/girls/jeans/jeans-1-1.webp', ALT: 'Front view', Linked_Product_Id: 5012, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5146, Image: '/assets/products/girls/jeans/jeans-1-2.webp', ALT: 'Back view', Linked_Product_Id: 5012, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5147, Image: '/assets/products/girls/jeans/jeans-1-3.webp', ALT: 'Side view', Linked_Product_Id: 5012, Creation_Date: nowISO(), Modified_Date: nowISO() },
  { id: 5148, Image: '/assets/products/girls/jeans/jeans-1-4.webp', ALT: 'Close-up', Linked_Product_Id: 5012, Creation_Date: nowISO(), Modified_Date: nowISO() }
];


  // ---------- carts ----------
  const Cart = [
    { id: 6001, Creation_Date: nowISO(), Modified_Date: nowISO(), User_Id: 2001 },
    { id: 6002, Creation_Date: nowISO(), Modified_Date: nowISO(), User_Id: 2002 }
  ];
  const Cart_Item = [
    { id: 6101, Quantity: 1, Linked_Product_Id: 5001, Linked_Cart_Id: 6001, Creation_Date: nowISO(), Modified_Date: nowISO() },
    { id: 6102, Quantity: 2, Linked_Product_Id: 5004, Linked_Cart_Id: 6001, Creation_Date: nowISO(), Modified_Date: nowISO() }
  ];

  // ---------- orders ----------
  function daysAgoISO(n) { const d = new Date(); d.setDate(d.getDate() - n); return d.toISOString(); }
  const Order = [
    { id: 7001, Total: 1299.00, Shipping_Address_Id: 3001, Status: 1, Creation_Date: daysAgoISO(6), Modified_Date: nowISO(), User_Id: 2001 },
    { id: 7002, Total: 2599.00, Shipping_Address_Id: 3001, Status: 2, Creation_Date: daysAgoISO(2), Modified_Date: nowISO(), User_Id: 2001 },
    { id: 7003, Total: 3499.00, Shipping_Address_Id: 3002, Status: 3, Creation_Date: daysAgoISO(10), Modified_Date: nowISO(), User_Id: 2002 },
    { id: 7004, Total: 4499.00, Shipping_Address_Id: 3002, Status: 4, Creation_Date: daysAgoISO(10), Modified_Date: nowISO(), User_Id: 2002 }
  ];
  const Order_Item = [
    { id: 7101, Quantity: 1, Linked_Product_Id: 5002, Linked_Order_Id: 7001, Creation_Date: nowISO(), Modified_Date: nowISO(), Slug: 'white-sneakers', User_Id: 2001 },
    { id: 7102, Quantity: 1, Linked_Product_Id: 5005, Linked_Order_Id: 7002, Creation_Date: nowISO(), Modified_Date: nowISO(), Slug: 'slim-fit-jeans', User_Id: 2001 },
    { id: 7103, Quantity: 1, Linked_Product_Id: 5012, Linked_Order_Id: 7003, Creation_Date: nowISO(), Modified_Date: nowISO(), Slug: 'floral-dress', User_Id: 2002 },
    { id: 7104, Quantity: 1, Linked_Product_Id: 5011, Linked_Order_Id: 7004, Creation_Date: nowISO(), Modified_Date: nowISO(), Slug: 'floral-dress', User_Id: 2002 }
  ];

  // ---------- coupons & FAQ ----------
  const Coupon = [
    { id: 12001, Code: 'WELCOME10', Type: 'percent', Value: 10, Status: 'active', Usage: 342, Creation_Date: nowISO(), Modified_Date: nowISO() },
    { id: 12003, Code: 'SAVE200', Type: 'flat', Value: 200, Status: 'active', Usage: 120, Creation_Date: nowISO(), Modified_Date: nowISO() }
  ];
  const FAQ = [
    { id: 13001, Question: 'How do I apply a coupon?', Answer: 'Enter the coupon at checkout.' },
    { id: 13002, Question: 'What is your return policy?', Answer: '30 days from delivery.' }
  ];

  // ---------- site visuals ----------
  const Hero_Image = [
    {id: 10004, image_url: '/assets/hero/hero-4.webp'},
    { id: 10001, image_url: '/assets/hero/hero-1.webp' },
    { id: 10002, image_url: '/assets/hero/hero-2.webp' },
    { id: 10003, image_url: '/assets/hero/hero-3.webp' },
    {id: 10005, image_url: '/assets/hero/hero-5.webp'},
    {id: 10006, image_url: '/assets/hero/hero-6.webp'},
  ];
  const Display_Card = [
    { id: 11001, Title: 'Perfect Fit', Image_url: '/assets/home/fit_bg_removed.png' },
    { id: 11002, Title: 'Fast Delivery', Image_url: '/assets/home/fast_delivery_bg_removed.png' },
    { id: 11003, Title: 'Secure Checkout', Image_url: '/assets/home/secure_checkout_bg_removed.png' },
    { id: 11004, Title: 'Wide Variety', Image_url: '/assets/home/wide_bg_removed.png' },
    { id: 11005, Title: 'Smart Search & Filters', Image_url: '/assets/home/smart_search_bg_removed.png' },
    { id: 11006, Title: 'Easy Returns & Exchanges', Image_url: '/assets/home/easy_returns_bg_removed.png' },
    { id: 11007, Title: 'Customer Centric Service', Image_url: '/assets/home/customer-centric_bg_removed.png' },
    { id: 11008, Title: 'Affordable Fashion', Image_url: '/assets/home/affordable_bg_removed.png' },
    { id: 11009, Title: 'Community of Shoppers', Image_url: '/assets/home/community_bg_removed.png' },
  ];

  // ---------- state ----------
  const state = {
    Admin, User, User_Address, Category, Product, Product_Images,
    Cart, Cart_Item, Order, Order_Item, Payment_Status, Order_Status,
    Coupon, FAQ, Hero_Image, Display_Card
  };

  // ---------- generic CRUD ----------
  function select(table) { return deepClone(state[table] || []); }
  function get(table, id) { const row = (state[table] || []).find(byId(id)); return row ? deepClone(row) : null; }
  function insert(table, row) {
    if (!state[table]) state[table] = [];
    const now = nowISO();
    const rec = { ...row };
    if (!('id' in rec)) rec.id = genId();
    if ('Creation_Date' in rec || 'Modified_Date' in rec) {
      if (rec.Creation_Date == null) rec.Creation_Date = now;
      rec.Modified_Date = now;
    }
    state[table].push(rec);
    persist();
    return deepClone(rec);
  }
  function update(table, id, patch) {
    const arr = state[table] || [];
    const idx = arr.findIndex(byId(id));
    if (idx < 0) return null;
    const now = nowISO();
    const next = { ...arr[idx], ...patch };
    if ('Modified_Date' in next) next.Modified_Date = now;
    arr[idx] = next;
    persist();
    return deepClone(next);
  }
  function remove(table, id) {
    const arr = state[table] || [];
    const idx = arr.findIndex(byId(id));
    if (idx < 0) return false;
    arr.splice(idx, 1);
    persist();
    return true;
  }

  const LS_KEY = 'ts_appdb_state_v1';
  function persist() { try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch { } }

  (function hydrate() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') Object.assign(state, parsed);
    } catch { }
  })();

  // ---------- normalization/migration ----------
  (function normalize() {
    // Fix bad Order_Status shapes or typos from older builds
    const os = state.Order_Status;
    const looksBad =
      !Array.isArray(os) ||
      os.some(o => typeof o !== 'object' || !('id' in o) || !('Display_Text' in o)) ||
      os.some(o => String(o.Display_Text).toLowerCase() === 'confrimed');
    if (looksBad) state.Order_Status = deepClone(Order_Status);

    // Coerce any order status outside known range to 'Placed'
    const validIds = new Set((state.Order_Status || []).map(s => s.id));
    (state.Order || []).forEach(o => { if (!validIds.has(o.Status)) o.Status = 1; });

    persist();
  })();

  // ---------- helpers ----------
  const findUserByEmail = (email) => (state.User || []).find(u => (u.email || '').toLowerCase() === (email || '').toLowerCase()) || null;
  const findAdminByEmail = (email) => (state.Admin || []).find(u => (u.email || '').toLowerCase() === (email || '').toLowerCase()) || null;
  const statusText = (id) => (state.Order_Status || []).find(s => s.id === id)?.Display_Text || `#${id}`;


  function analytics() {
    const orders = state.Order || [];
    const totalRev = orders.reduce((a, o) => a + (o.Total || 0), 0);

    // Use current master; fall back to built-in if needed
    const statusMaster = (state.Order_Status && state.Order_Status.length)
      ? state.Order_Status
      : [
        { id: 1, Display_Text: 'Placed' },
        { id: 2, Display_Text: 'Confirmed' },
        { id: 3, Display_Text: 'Packed' },
        { id: 4, Display_Text: 'Shipped' },
        { id: 5, Display_Text: 'Out for delivery' },
        { id: 6, Display_Text: 'Delivered' },
        { id: 7, Display_Text: 'Cancelled' },
        { id: 8, Display_Text: 'Returned' }
      ];

    // Count per status (no clubbing)
    const statusCounts = {};
    statusMaster.forEach(s => { statusCounts[s.id] = 0; });
    orders.forEach(o => {
      if (statusCounts[o.Status] == null) statusCounts[o.Status] = 0;
      statusCounts[o.Status] += 1;
    });

    // For charts / UI
    const ordersByStatus = statusMaster.map(s => ({
      id: s.id,
      label: s.Display_Text,
      count: statusCounts[s.id] || 0
    }));

    // 7-day revenue trend (exclude Cancelled/Returned only from revenue)
    const cancelledReturnedIds = new Set(
      statusMaster.filter(s => /cancelled|returned/i.test(s.Display_Text)).map(s => s.id)
    );
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date();
    const dayIdx = (d) => (d.getDay() + 6) % 7; // Mon=0
    const rev7 = [0, 0, 0, 0, 0, 0, 0];
    orders.forEach(o => {
      const d = new Date(o.Creation_Date || Date.now());
      const diff = Math.floor((today - d) / 86400000);
      if (diff <= 6 && !cancelledReturnedIds.has(o.Status)) {
        rev7[dayIdx(d)] += (o.Total || 0);
      }
    });

    // Category mix unchanged
    const cats = state.Category || [];
    const prod = state.Product || [];
    const categoryMix = cats.map(c => ({
      label: c.Display_Text,
      count: prod.filter(p => p.Categories_Id === c.id && !p.Out_of_Stock).length
    }));

    return {
      totals: {
        revenue: totalRev,
        orders: orders.length,
        customers: (state.User || []).length,
        products: (state.Product || []).filter(p => !p.Out_of_Stock).length
      },
      ordersByStatus,                 // array of {id,label,count} for every status
      ordersByStatusMap: Object.fromEntries( // handy for quick lookups
        statusMaster.map(s => [s.id, statusCounts[s.id] || 0])
      ),
      revenue7: { labels, data: rev7 },
      categoryMix
    };
  }

  // ---------- User-flow helpers ----------
  const AppDBHelpers = {
    userCartId(userId) {
      const cart = (state.Cart || []).find(c => c.User_Id === userId);
      if (cart) return cart.id;
      return insert('Cart', { User_Id: userId, Creation_Date: null, Modified_Date: null }).id;
    },
    addToCart(userId, productId, qty = 1) {
      const cartId = this.userCartId(userId);
      const items = state.Cart_Item || [];
      const found = items.find(ci => ci.Linked_Cart_Id === cartId && ci.Linked_Product_Id === productId);
      if (found) {
        update('Cart_Item', found.id, { Quantity: (found.Quantity || 0) + qty });
      } else {
        insert('Cart_Item', { Quantity: qty, Linked_Product_Id: productId, Linked_Cart_Id: cartId, Creation_Date: null, Modified_Date: null });
      }
      return cartId;
    },
    getCart(userId) {
      const cartId = this.userCartId(userId);
      const items = (state.Cart_Item || []).filter(ci => ci.Linked_Cart_Id === cartId);
      return items.map(ci => ({
        ...ci,
        product: get('Product', ci.Linked_Product_Id)
      }));
    },
    clearCart(userId) {
      const cartId = this.userCartId(userId);
      state.Cart_Item = (state.Cart_Item || []).filter(ci => ci.Linked_Cart_Id !== cartId);
      persist();
    },
    placeOrder({ userId, addressId, couponCode }) {
      const cartId = this.userCartId(userId);
      const items = (state.Cart_Item || []).filter(ci => ci.Linked_Cart_Id === cartId);
      if (!items.length) return null;

      const subtotal = items.reduce((a, ci) => a + (get('Product', ci.Linked_Product_Id)?.price || 0) * (ci.Quantity || 1), 0);
      let discount = 0;
      if (couponCode) {
        const c = (state.Coupon || []).find(x => x.Code.toLowerCase() === String(couponCode).toLowerCase() && x.Status === 'active');
        if (c) {
          discount = (c.Type === 'percent') ? Math.round(subtotal * (c.Value / 100)) : c.Value;
        }
      }
      const total = Math.max(0, subtotal - discount);

      const order = insert('Order', {
        Total: total,
        Shipping_Address_Id: addressId,
        Status: 1, // Placed
        Creation_Date: null, Modified_Date: null,
        User_Id: userId
      });

      items.forEach(ci => {
        insert('Order_Item', {
          Quantity: ci.Quantity,
          Linked_Product_Id: ci.Linked_Product_Id,
          Linked_Order_Id: order.id,
          Creation_Date: null, Modified_Date: null,
          Slug: (get('Product', ci.Linked_Product_Id)?.Name || '').toLowerCase().replace(/\s+/g, '-'),
          User_Id: userId
        });
      });

      this.clearCart(userId);
      return order;
    },
    userOrders(userId) {
      const orders = (state.Order || []).filter(o => o.User_Id === userId).sort((a, b) => new Date(b.Creation_Date) - new Date(a.Creation_Date));
      return orders.map(o => ({
        ...o,
        statusText: statusText(o.Status),
        items: (state.Order_Item || []).filter(oi => oi.Linked_Order_Id === o.id)
          .map(oi => ({ ...oi, product: get('Product', oi.Linked_Product_Id) }))
      }));
    }
  };

  // ---------- Admin helpers (Phase-1: Users & Orders mgmt) ----------
  const AdminHelpers = {
    listUsers() { return select('User'); },
    deleteUser(id) { return remove('User', id); }, // Phase-1 simple remove
    listOrders() {
      return select('Order').map(o => ({
        ...o,
        statusText: statusText(o.Status),
        user: get('User', o.User_Id),
        address: get('User_Address', o.Shipping_Address_Id),
        items: (state.Order_Item || []).filter(oi => oi.Linked_Order_Id === o.id).map(oi => ({
          ...oi, product: get('Product', oi.Linked_Product_Id)
        }))
      })).sort((a, b) => new Date(b.Creation_Date) - new Date(a.Creation_Date));
    },
    setOrderStatus(orderId, statusId) {
      return update('Order', orderId, { Status: statusId });
    }
  };

  // ---------- expose ----------
  global.AppDB = {
    select, get, insert, update, remove,
    findUserByEmail, findAdminByEmail, analytics, _state: state
  };
  global.AppDBHelpers = AppDBHelpers;
  global.AdminHelpers = AdminHelpers;
})(window);