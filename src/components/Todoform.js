import React, { useState, useEffect } from  "react";

const Todoform = () => {

    let [todoname, setTodoname] = useState();
    let [task1, setTask1] = useState();
    let [task2, setTask2] = useState();
    let [todotype, setTodotype] = useState();

    let tododata = {
        id: parseInt(Math.random()*1000),
        title: todoname,
        subtask1: task1,
        subtask2: task2,
        type: todotype
    };

    let [todorecord, setTodorecord] = useState([]);

    let [data, setData] = useState();

    useEffect(() => {

        setData(JSON.parse(window.localStorage.getItem("todorecord")));

        console.log(data);

    }, [data])
    
    const submitTodo = (e) => {
        
        e.preventDefault()

        setTodorecord([...todorecord, tododata])

        console.log(todorecord);
        
        window.localStorage.setItem("todorecord", JSON.stringify(todorecord))

    }

    const deleteRecord = (e) => {

        let data = JSON.parse(window.localStorage.getItem("todorecord"));

        
        for(var i = 0; i <= data.length; i++){
            
            if(data[i].id === e){
                
                data.splice(i, 1);

                window.localStorage.setItem("todorecord", JSON.stringify(data))

            }

        }

    }

    return(
        <div>
            <form onSubmit={(e) => submitTodo(e)}>
                <table border="1">
                    <tr>
                        <td>Todo Name</td>
                        <td><input type="text" name="todoName" onChange={(e) => setTodoname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Todo Sub Task 1</td>
                        <td><input type="text" name="task1" onChange={(e) => setTask1(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Todo Sub Task 2</td>
                        <td><input type="text" name="task2" onChange={(e) => setTask2(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Todo Type</td>
                        <td>
                            <select name="todoType" onChange={(e) => setTodotype(e.target.value)}>
                                <option value="">--- Select Category ---</option>
                                <option value="home">Home</option>
                                <option value="office">Office</option>
                                <option value="personal">Personal</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="Add Todo" />
                        </td>
                    </tr>
                </table>
            </form>
            <br /><br />
            <div>
                <table border="1">
                    <tr>
                        <td>Todo id</td>
                        <td>Todo Title</td>
                        <td>Todo Sub Task 1</td>
                        <td>Todo Sub Task 2</td>
                        <td>Todo Type</td>
                        <td>Actions</td>
                    </tr>
                    {
                        data.map((value) => {
                            return(
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.title}</td>
                                    <td>{value.subtask1}</td>
                                    <td>{value.subtask2}</td>
                                    <td>{value.type}</td>
                                    <td><button>Update</button>||<button onClick={(e) => deleteRecord(value.id)}>Delete</button></td>
                                </tr> 
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Todoform;