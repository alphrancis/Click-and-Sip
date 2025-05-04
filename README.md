# Click & Sip Project

## Project Structure
The project is organized into a clear and modular structure to ensure maintainability and scalability:
- **src/html/**: Contains all the HTML files for the website, including `product.html`, `about.html`, `feedback.html`, and `login.html`. Each file represents a specific page of the website.
- **src/css/**: Contains CSS files for styling individual pages, such as `product.css`, `aboutus.css`, `login.css`, and `feedback.css`. This modular approach ensures that styles are isolated and easier to manage.
- **src/assets/**: Stores images and icons used across the website, such as logos, banners, and product images.

## Design Choices
### 1. **Semantic HTML5**
Semantic HTML5 elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` are used to improve accessibility and provide a clear structure to the content. This ensures that the website is easy to navigate for both users and search engines.

### 2. **Responsive Design**
The website is designed to be responsive, ensuring it works seamlessly across different devices and screen sizes. The use of flexible layouts, percentages, and media queries ensures that the content adapts gracefully to various resolutions.

### 3. **Consistent Styling**
The project uses a consistent color palette and typography:
- **Primary Color**: Purple shades (`#512da8`, `#455de6`) are used for buttons, headings, and highlights to create a cohesive brand identity.
- **Typography**: The `Montserrat` font is used across the website for a modern and clean look.
- **Shadows and Borders**: Subtle shadows and rounded borders are applied to elements like cards and buttons to enhance visual appeal.

### 4. **User-Friendly Forms**
The feedback and login forms are designed with user experience in mind:
- **Feedback Form**: Includes input fields, radio buttons, and checkboxes to collect detailed feedback from users.
- **Login Form**: Features a toggle between sign-in and sign-up forms using CSS animations for a smooth and interactive experience.

### 5. **Modular CSS**
Each page has its own CSS file to isolate styles and avoid conflicts. Shared styles, such as the navigation bar and footer, can be placed in a global stylesheet (`style.css`).

### 6. **Accessibility**
The project incorporates accessibility best practices:
- Labels are associated with form inputs using the `for` attribute.
- Buttons and links are styled for easy interaction.
- Text contrast is optimized for readability.

### 7. **Scalability**
The modular structure allows for easy addition of new pages or features. For example, adding a new page like "Contact Us" would involve creating a new HTML file and its corresponding CSS file without affecting existing functionality.

## Conclusion
The Click & Sip project is designed to provide a seamless and engaging user experience while maintaining a clean and scalable codebase. The use of semantic HTML5, responsive design, and modular CSS ensures that the website is both user-friendly and developer-friendly.
