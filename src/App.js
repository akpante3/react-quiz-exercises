import './App.css';


/** Question: TodoList also accepts an onItemClick function prop, which should be called when a user 
 * clicks an item in the list, if the item is not marked as done. Otherwise, the onItemClick 
 * should not be called and the click event itself should not be propagated further. 
 * The function should be called with the item object from the items list as the first parameter and the event as the second parameter. */



const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onListClick, onItemClick }) => {


    const   handleItemClick = (item, event) => {
      // Write your code here
      if (item.done){
        event.stopPropagation()
        return
      }
      onItemClick(item, event)
      
    }
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
        <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)}/>)}
    </ul>);

}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

export default App;
