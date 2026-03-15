// useState is a React Hook that lets components store and update data.
// useEffect runs side effects like API calls
// Calculated the total portfolio value


import { useState, useEffect } from "react";
import Asset from "./Asset";
import './App.css';

// App is a React component
// A component is just a function that returns UI (JSX)
function App() {
  // React state storing portfolio assets
  // Starting with an empty array since I will simulate loading data from an API
  const [assets, setAssets] = useState([]);
  // Loading state to track whether data is being fetched
  const [loading, setLoading] = useState(true);

  // useEffect runs after the component renders
  // Here we simulate fetching portfolio data from an API
  useEffect(() => {

    const fetchPortfolio = async () => {
      setTimeout(() => {
        // Simulate API response
        const portfolioData = [
          { id: 1, name: "Apple", symbol: "AAPL", price: 180 },
          { id: 2, name: "Tesla", symbol: "TSLA", price: 240 },
          { id: 3, name: "Microsoft", symbol: "MSFT", price: 330 }
        ];

        // Update state
        setAssets(portfolioData);
        setLoading(false);
      }, 2000);
    };

    fetchPortfolio();

  }, []);

  // Function to add a new asset
  const addAsset = () => {

    const newAsset = {
      id: assets.length + 1, // simple id generation
      name: "Amazon",
      symbol: "AMZN",
      price: 145
    };

    // update state using setAssets
    setAssets([...assets, newAsset]);
  };

  // Filter out the asset to delete
  const deleteAsset = (id) => {
    const updatedAssets = assets.filter(asset => asset.id !== id);
    setAssets(updatedAssets);
  };

  // Calculate total portfolio value
  const totalValue = assets.reduce((sum, asset) => sum + asset.price, 0);

  // If data is still loading, show a loading message
  if (loading) {
    return <p>Loading portfolio...</p>;
  }

  return (
    // JSX must return one parent element
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm p-4">

            {/* This is the title of my app */}
            <h1 className="mb-3">Investment Portfolio Dashboard</h1>
            {/* This is a short description */}
            <p className="text-muted">
              Track my financial assets
            </p>
            <div className="bg-light p-3 rounded mb-4">
              <h4 className="text-muted mb-1">Total Portfolio Value</h4>
              <h4 className="mb-0">${totalValue}</h4>
            </div>

            <button className="btn btn-primary mb-3 px-4" onClick={addAsset}>
              Add Asset
            </button>

            {/* Render portfolio assets */}
            {assets.length === 0 ? (
              <p>No assets in portfolio</p>
            ) : (
              <ul className="list-group">
                {/* map() loops through the assets array */}
                {assets.map((asset) => (
                  // key helps React track elements efficiently
                  <Asset
                    key={asset.id}
                    name={asset.name}
                    symbol={asset.symbol}
                    price={asset.price}
                    onDelete={() => {
                      deleteAsset(asset.id);
                    }}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;