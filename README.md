Mini Product Showcase - by Varshitha Reddy Dornala

Overview

Features
- Responsive product showcase
- Product search
- Category filtering
- Dynamic product details
- Shopping cart
- Quantity management
- Cart persistence
- Login / guest flow
- Contact form

Technologies
- Next.js
- React
- TypeScript
- CSS
- localStorage

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Time Taken : 6 - 6.5 hrs

Used ChatGPT During Development

prompts used 

1. “I need to build a Mini Product Showcase website from scratch using Next.js and TypeScript. Guide me step by step, starting with project setup and folder structure.”

2. “Help me create a reusable Navbar and application layout in Next.js using the App Router, with Home, Products, About, Login, and Cart navigation.”

3. “Help me create a TypeScript Product interface and reusable product data structure containing id, name, description, price, category, image, and featured status.”

4. “Create a reusable ProductCard component that receives a Product through props and displays the product information with a link to its details page.”

5. “Help me create a dynamic Next.js route using /products/[id] that retrieves the product ID from the URL, finds the corresponding product, and displays its details.”

6. “Add product search and category filtering using React state. Users should be able to search by product name and filter by Electronics, Fashion, Home, or All.”

7. “Make the product showcase responsive for desktop, tablet, and mobile. Use three product columns on desktop, two on tablet, and one on mobile, and make the Navbar and filters responsive.”

8. “Create a responsive home page with a hero section, Shop Products button, and Featured Products section using products where featured is true.”

9. “Replace product image placeholders with actual images stored in the Next.js public folder and use the Next.js Image component.”

10. “Implement shared shopping-cart state using React Context so products can be added from the Product Details page and accessed from the Navbar and Cart page.”

11. “Add quantity increase/decrease controls, product removal, cart count, individual item totals, and overall cart total.”

12. “Persist the shopping cart after browser refresh using localStorage while keeping the cart state managed through React Context.”

13. “Create a simple frontend login page with email/password validation and a Continue as Guest option. Do not implement backend authentication.”

14. “Create an About and Contact page with responsive layout, contact form, basic validation, error messages, and a successful submission message.”

15. “I am getting the error ‘Export products doesn’t exist in target module’. Help me understand the cause and fix it.”

16. “I am getting ‘Do not call Hooks inside useEffect or other built-in Hooks’. Help me identify the incorrect hook placement in CartContext and fix it.”

17. “Review the ESLint errors in my Next.js project and help me fix them without changing the existing functionality.”

18. “Help me verify the completed project using npm run lint and npm run build, and identify anything that needs to be fixed before submission.”




