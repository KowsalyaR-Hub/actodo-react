function TodoItem(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    function handleDelete(deleteid) {
        var temparr = activityArr.filter(function (item) {
            if (item.id === deleteid) {
                return false
            }
            else {
                return true
            }
        })
        setActivityArr(temparr)
    }

    return (
        <div className="flex justify-between align-top">
            <p className="my-1">{props.index + 1}.{props.item.activity}</p>
            <p className="bg-red-600 py-1 px-2 my-1 border border-red-600 text-white rounded-md hover:cursor-pointer" onClick={() => handleDelete(props.id)}>Delete</p>
        </div>
    )
}

export default TodoItem;