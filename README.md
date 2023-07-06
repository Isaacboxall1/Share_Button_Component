# Collapsible Share Button Component for React

![](https://github.com/Isaacboxall1/Collapsible_Share_Button/blob/main/public/sharebutton.gif)

This project is a React component that provides a responsive and animated share button. Initially presented as a single button, the component unfolds into four distinct buttons when hovered over, each linking to a different social media platform: Instagram, Facebook, Twitter, and LinkedIn.

## Features

- **Collapsible Share Button**: A single, space-saving button that splits into four individual buttons on hover, each representing a different social media platform.
- **Custom Links**: The component accepts custom props to assign the desired URLs for each social media platform button.

## Upcoming Enhancements

The roadmap for future updates includes:

- **Configurable Styling**: The component will allow for styling customization through props, giving users control over the logo of each button, the overall size of the button, and the color scheme.

## Why This Project

This project was created as a stepping stone to improve my understanding of React and CSS animations. The simplicity of the component allowed for a clear focus on these two areas, while still creating a functional and reusable component.

## Technologies Used

- React
- JSX
- CSS

## Usage

To use this component in your project:

1. Import the component.
```jsx
import ShareButton from './ShareButton'; //adjust path as necessary
```
2. Add the component to your JSX.
```jsx
<ShareButton
  facebookURL="http://facebook.com/your-page"
  instagramURL="http://instagram.com/your-profile"
  twitterURL="http://twitter.com/your-handle"
  linkedInURL="http://linkedin.com/in/your-profile"
/>
```