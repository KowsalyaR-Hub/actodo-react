import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer() {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Wake up by 7:00 AM"
        },
        {
            id: 2,
            activity: "Exercise for 30 minutes"
        },
        {
            id: 3,
            activity: "Take a Shower"
        }
    ])

    return (
        <div>
            <div className="flex flex-wrap gap-7 justify-between align-middle mt-10">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
    )
}

export default TodoContainer;