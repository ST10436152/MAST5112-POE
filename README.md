# MAST5112-POE
POE PART 3

Changelog: Comprehensive Enhancements to App Components and Features

Date: November 08, 2024
Overview
This changelog summarizes the key improvements made to the app's codebase, focusing on enhancing user interface, user experience, and functionality across multiple screens, including the AddMenuScreen, WelcomeScreen, HomeScreen, and FilterScreen components.

AddMenuScreen Component Enhancements
1.	UI Improvements for Add and Cancel Buttons:
•	Replaced default buttons with custom TouchableOpacity components to create a visually appealing, responsive user interface.
•	Added distinct colors, rounded edges, and centered bold text, ensuring a consistent design and enhancing the overall user experience.

2.	Modal Styling Improvements:
•	Enhanced the modal view for course selection with a semi-transparent background to improve readability and focus.

3.	Improved Input Field Design:
•	Adjusted colour schemes, padding, and border styling across input fields to create a cohesive and polished appearance, boosting readability and alignment across screens.

4.	Reusable and Consistent Button Styles:
•	Implemented reusable button styles (e.g., addButton and cancelButton) with color consistency and rounded edges across various screens, improving the interface and easing future modifications.

WelcomeScreen Component Enhancements
1.	Text Styling:
•	Increased the font size of the welcome text ("Welcome to Chef Christoffel's App") to 34 for improved emphasis.
•	Added a text shadow with adjustments to textShadowColor, textShadowOffset, and textShadowRadius to enhance readability against bright backgrounds.
•	Applied a semi-transparent background behind the text to ensure legibility, improving user experience on diverse background images.
2.	Container Styling:
•	Increased padding within the text container for a more balanced layout.
•	Added shadow effects and limited the container width to 80% of the screen, creating a refined, professional look.

HomeScreen Component Enhancements
1.	Menu Item Selection:
•	Enabled item selection with visual feedback, including a highlighted background for selected items, adding interactivity and aiding usability.
2.	Average Price Calculation:
•	Added functionality to calculate and display average prices across menu courses, providing users with relevant and insightful pricing information.
3.	Menu Filtering and Navigation:
•	Integrated menu filtering by course, enabling streamlined menu management and direct navigation to the add menu item screen for improved efficiency.
4.	Responsive Design:
•	Enhanced the component's adaptability to various screen sizes, ensuring a consistent and user-friendly experience across different devices.

FilterScreen Component Enhancements
1.	Back Navigation Improvements:
•	Implemented a custom-styled "Back to Home" button for intuitive navigation, maintaining visual consistency across the application.
2.	Improved Filter Buttons:
•	Refined filter buttons with dynamic color changes and rounded edges, providing users with an accessible and engaging interface.


Code Quality and Consistency
1.	Icon Integration:
•	Integrated Ionicons for dropdown selection on the AddMenuScreen, making the UI more intuitive and visually informative.
2.	Code Refactoring for Maintainability:
•	Refactored inline styles to named style properties, enhancing readability and supporting future updates.
