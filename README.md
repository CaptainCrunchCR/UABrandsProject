# Product Quick View Modal

A modern, responsive product quick view modal component for e-commerce websites. This project demonstrates a clean and user-friendly interface for displaying product details, size selection, color options, and purchase functionality.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 4
- **Interactive Product Selection**: 
  - Size selection with dynamic pricing
  - Color swatch dropdown with visual preview
  - Fit options (Regular, Petite, Tall)
  - Quantity selector with increment/decrement
- **Real-time Updates**: Dynamic price and availability updates based on selections
- **Product Information Display**:
  - Product images with zoom capability
  - Star ratings and review count
  - Price ranges and additional pricing info
  - Style number and product details
- **Enhanced UX**:
  - Embroidery add-on option
  - Stock availability indicators
  - Smooth animations and transitions
- **Modern Styling**: Custom SCSS with Bootstrap integration

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 4.6.2
- **Styling**: SCSS/Sass
- **Dependencies**:
  - jQuery 3.7.1
  - Popper.js 1.16.1
  - Sass 1.89.2 (dev dependency)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the SCSS compiler** (for development):
   ```bash
   npm run scss
   # or
   yarn scss
   ```

3. **Open the project**:
   - Open `index.html` in your browser
   - Or serve it using a local development server

## 🎯 Usage

### Basic Implementation

1. Include the required CSS and JS files in your HTML:
   ```html
   <link rel="stylesheet" href="css/style.css">
   <script src="js/main.js"></script>
   ```

2. Add the modal trigger button:
   ```html
   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#quickViewModal">
       Quick View
   </button>
   ```

3. Include the modal HTML structure (see `index.html` for complete structure)

### Customization

#### Modifying Product Data
Update the `sizeData` object in `js/main.js` to customize size options, prices, and availability messages:

```javascript
const sizeData = {
    'XXS': { price: '$26.99', message: 'Hurry! Only 7 available.' },
    'XS': { price: '$26.99', message: 'Hurry! Only 5 available.' },
    // Add more sizes as needed
};
```

#### Styling Customization
- Modify `scss/_variables.scss` for color schemes and custom variables
- Update `scss/style.scss` for component-specific styling
- Recompile SCSS to CSS using `npm run scss`

## 📁 Project Structure

```
UaBrandsProject/
├── assets/
│   └── images/          # Product images and icons
├── css/
│   ├── style.css        # Compiled CSS
│   └── style.css.map    # Source map for debugging
├── js/
│   └── main.js          # JavaScript functionality
├── scss/
│   ├── _variables.scss  # SCSS variables
│   └── style.scss       # Main SCSS file
├── index.html           # Demo page
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Key Components

### Product Quick View Modal
- **Modal Structure**: Bootstrap modal with custom styling
- **Product Image**: Responsive image display with zoom functionality
- **Product Details**: Title, style number, ratings, and pricing
- **Selection Options**: Size, color, fit, and quantity selectors
- **Add to Bag**: Purchase functionality with quantity control

### Interactive Features
- **Size Selection**: Dynamic pricing and availability updates
- **Color Dropdown**: Visual color swatches with preview
- **Quantity Control**: Increment/decrement with validation
- **Fit Options**: Radio button selection for different fits
- **Embroidery Add-on**: Optional customization feature

## 🔧 Development

### SCSS Compilation
The project uses Sass for styling. To watch for changes during development:

```bash
npm run scss
```

This will automatically compile SCSS to CSS and watch for file changes.

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The modal is fully responsive and optimized for:
- **Desktop**: Full modal with side-by-side layout
- **Tablet**: Adjusted spacing and button sizes
- **Mobile**: Stacked layout with optimized touch targets

## 👨‍💻 Author

**Pablo Fonseca**