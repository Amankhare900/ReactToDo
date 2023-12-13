import { useState, useEffect } from "react";
import style from "./ToDoItem.module.css";
import PropTypes from "prop-types";
const ToDoItem = ({ text, completed, important }) => {
    const [textState, setTextState] = useState(text);
    useEffect(() => {
        setTextState(`${text} ${new Date().toLocaleTimeString()}`);
    }, [text]);
    return (
        <div className={completed ? style.completed : ""}>
            {important ? "*" : ""} {textState}
        </div>
    );
};

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
};

export default ToDoItem;
