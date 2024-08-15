import TodoItem from "./TodoItem";

function TodoList(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-5 flex-grow">
            <h1 className="text-2xl font-medium mb-2">Today's Activity</h1>
            {activityArr.length === 0 ? <p>You haven't added any activity yet</p> : ""}
            <h1>
                {
                    activityArr.map(function (item, index) {
                        return <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                    })
                }</h1>
        </div>
    )
}

export default TodoList;