const { useState } = React;
const onListItemClick = (event) => {
  console.log('I got clicked');
};
const TodoListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none'
  };
  return (
  <li style={style} onClick={() => setIsDone(!isDone)}>{props.todo}</li>
  )
};

const GroceryItems = (props) => {
  const [isDone, setIsDone] = useState(false);

  const style = {
    fontWeight: isDone ? 'bold' : 'normal'
  };

  return (
    <li style={style} onClick={() => setIsDone(!isDone)}>{props.grocery}</li>
  )
};

const TodoList = (props) => {
  return (
    <ul>
    {props.todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
  )
};

const groceries = ['apple', 'kale', 'berries']
const GroceryList = (props) => {
  return (
    <ul>
    {props.GroceryListItems.map((grocery) => (
      <GroceryItems grocery={grocery} />
    ))}
  </ul>
  )
}

const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
    <h3>Grocery List</h3>
    <GroceryList GroceryListItems={groceries}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"))