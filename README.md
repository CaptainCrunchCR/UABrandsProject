# Product Quick View Modal 2.0

A modern, responsive product quick view modal component for e-commerce websites. This project demonstrates a clean and user-friendly interface for displaying product details, size selection, color options, and purchase functionality.

## 📝 Pixel-Perfect Improvements 

# Summary of CSS Changes in Quick View Modal

| UI Section              | Description (Human Language)                                                                 | Technical Details                                                                 |
|-------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| Modal Dialog            | Set fixed width to match design specs                                                        | `max-width: 750px;`, `opacity: 1`                                                 |
| Modal Content           | Increased border radius, ensured white background                                            | `border-radius: 12px;`, `background: #ffffff`, `opacity: 1`                        |
| Close Button            | Made button larger and lighter                                                               | `font-size: 2.5rem;`, `font-weight: lighter`, `opacity: 1`                         |
| Heading Title           | Adjusted font styling and weight                                                             | `font: 22px/25px Roboto`, `font-weight: 450`                                      |
| Rating Section          | Ensured baseline alignment and added spacing                                                 | `align-items: baseline`, `gap: 4px`                                               |
| View Full Detail        | Added right padding                                                                          | `padding-right: 10px`                                                             |
| Price Display           | Unified font styling and color adjustments                                                   | `font: bold 26px/30px Roboto`, `color: $black`, `opacity: 1`                       |
| Fit Options Buttons     | Reduced width, fixed alignment and added border                                              | `width: 100px;`, `margin-left: 0`, `border: 1px solid #A6A6A6`                     |
| Color Dropdown Label    | Changed spacing and color for better clarity                                                 | `letter-spacing: 1.2px;`, `color: $black`, `opacity: 1`                            |
| Size Buttons            | Removed borders, improved font styling                                                       | `border: none`, `font: 14px/24px Roboto`, `font-weight: 500`                       |
| Quantity Selector       | Set fixed width/height and refined border appearance                                         | `width: 180px`, `height: 50px`, `border: 1px solid #dee2e6`                        |
| Embroidery Checkbox     | Adjusted border size and appearance when checked                                             | `border: 2px solid #000`, `background-image` with SVG checkmark                   |
| Add to Bag Button       | Standardized dimensions and text styling                                                     | `width: 154px`, `.add-to-bag-text { font-size: 16px; font-weight: 100; }`         |
| Mobile Responsiveness   | Adjusted paddings and element widths for small screens                                       | `padding-left/right: 0.25rem`, `.btn width: 90px`, `.quantity-selector: 170px`    |


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