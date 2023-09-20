## Project Features

- This project is fully developed in React JS.
- In this project, I used react-toastify instead of alert to make the visuals more attractive.
- All the buttons are fully functional and the cart has a fixed position.

## State Management.

Firstly fetching data from api and store it in a state was so easy cause as we'll react is one directional. Thats why i declared first state for storing all the course data in Cards.jsx file. the i just forwarded it to Card.jsx in props. But the situation got tough when i had to handle button in a child component but the reaction has to be done in carts. cause there was to direct connection or relation between cards, card. jsx to cart.jsx. So i had to use state in the grandparent file (app.jsx). then i had to send the data and receive the data through props.

### I had to create 5 state in this project.

1. Fetched data's state management.

2. Selected course's state management.

3. Total Credit Hours State management.

4. Total price's state management.

5. Remaining Credit Hour's state management.
