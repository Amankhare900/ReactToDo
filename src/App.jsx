import ToDoItem from "./component/ToDoItem";
function App() {
    const todoItem = {
        text: "complete the work",
        completed: false,
        important: true,
    };
    return (
        <>
            <ToDoItem {...todoItem} />
        </>
    );
}

export default App;
