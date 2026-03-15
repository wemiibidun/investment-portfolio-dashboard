// Asset component displays a single portfolio item
// onDelete is passed from the parent component
// This component represents a single asset in the portfolio list.
// It receives data from the parent component (App) through props.
function Asset({ name, symbol, price, onDelete }) {

    return (
        // Each asset is rendered as a list item
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {/* Display the asset name, stock symbol, and price */}
            {name} ({symbol}) - ${price}
            {/* 
        The Delete button triggers the onDelete function.
        This function is passed from the parent component (App).

        Important React concept:
        Child components do not modify state directly.
        Instead, they call a function provided by the parent
        so the parent can update the state.
      */}
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
                Delete
            </button>
        </li>
    );
}
// Export the component so it can be used in App.js
export default Asset;