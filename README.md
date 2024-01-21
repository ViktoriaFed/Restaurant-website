# Italian Restaurant Website - Angular Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.
## Responsive Theme Design
The final theme design is responsive, achieved using CSS and Bootstrap to ensure a seamless user experience across different devices.
## Components
The project comprises the following components:
 - NavBar: Navigation bar for easy navigation across the website.
 - Home: The main landing page of the website.
 - Footer: Footer section providing additional information or links.
 - About Us: Section providing information about the restaurant.
 - Menu: Displaying the list of dishes available for order.
 - Details: Detailed information about a specific dish.
 - Cart: Component to view and manage the order cart.
## Routing
The application is implemented as a Single Page Application (SPA) with routing, allowing smooth navigation between components without refreshing the browser.
## Dynamic UI
Buttons ("Details" and "Order") are dynamically displayed based on the availability of each dish. If a dish is unavailable, only the dish picture is shown with a message indicating its unavailability.
## Order Functionality
Clicking on the "Order" button adds the selected dish to the cart. Users can place orders from both the Menu and Details components. The Order component displays the contents of the cart.
## Details Component
A Details component is created to provide specific information about a dish when the "Details" button is clicked. Users can also place orders directly from this component.
## Bill Calculation
The application calculates the total bill and includes a "Service" section that shows 10% of the total amount on top. If the total sum exceeds EUR 40, users receive a 15% discount. The original total and discounted price are displayed on the screen.
