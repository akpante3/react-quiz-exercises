import React from 'react'

const Product = ({name, votes, handleOnVoteClick}) => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    handleOnVoteClick('add')
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    handleOnVoteClick('minus')
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);

  const onVote = (dir, action, index) => {
    // Update the products array accordingly ...
    if (action !== 'add' && dir.votes === 0) return
    
    const newList = products.filter((p) => p.name !== dir.name)
    const UpdatedItem = {...dir, votes: action === 'add' ? dir.votes + 1 : dir.votes - 1 }

    // so the element remains in its position while updating the list
    newList.splice(index,0, UpdatedItem)

    setProducts([...newList])

  };

  return (
    <ul>
      {/* Render an array of products, which should call onVote when + or - is clicked */}
      { products.map((product, index) => <Product key={index} votes={product.votes} name={product.name} handleOnVoteClick={(action) => onVote(product, action, index)} /> )

      }
    </ul>
  );
}


const App = (props) => <GroceryApp
products={[
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 }
]}
/>;
export default App;
