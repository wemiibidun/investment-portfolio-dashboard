# Investment Portfolio Dashboard Notes

## What this project is
A React project built to displays portfolio assets, allows adding and deleting assets, and calculates total portfolio value.

## React concepts used in this project

### 1. Components
The project uses:
- App.js as the parent component
- Asset.js as the child component

A React component is a JavaScript function that returns JSX.

### 2. JSX
JSX is the syntax used to write UI in React.
It looks like HTML but is written inside JavaScript.

### 3. State with useState
The project uses useState to store the list of assets.

Example:
const [assets, setAssets] = useState([]);

State is data that React tracks and updates in the UI when it changes.

### 4. useEffect
The project uses useEffect to simulate fetching portfolio data.

Example:
useEffect(() => {
  const fetchPortfolio = async () => {
    ...
    setAssets(portfolioData);
  };

  fetchPortfolio();
}, []);

useEffect is used for side effects such as API calls.

### 5. Props
The App component passes asset data to the Asset component through props.

Example:
<Asset name={asset.name} symbol={asset.symbol} price={asset.price} />

Props are used to pass data from parent to child components.

### 6. Rendering lists with map
The project uses map() to loop through the assets array and display each asset.

Example:
assets.map((asset) => (...))

### 7. Event handling
The Add Asset and Delete buttons use onClick handlers.

Example:
<button onClick={addAsset}>Add Asset</button>

### 8. Updating state
The project updates the state using setAssets.

Examples:
setAssets([...assets, newAsset])
setAssets(assets.filter(asset => asset.id !== id))

### 9. Derived data with reduce
The total portfolio value is calculated using reduce().

Example:
const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0);

## This project demonstrates technically
- React components
- props
- state management (useState)
- lifecycle effects (useEffect)
- async data simulation
- conditional rendering
- event handling
- list rendering with map
- state updates with filter
- derived calculations with reduce
- responsive layout with Bootstrap
