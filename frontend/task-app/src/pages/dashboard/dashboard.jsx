import './dashboard.css'
import userSvg from '../../assets/svgs/user.svg';
import plusSvg from '../../assets/svgs/plus.svg';
import editSvg from '../../assets/edit.png';
import deleteSvg from '../../assets/delete.png';
import api from '../../api/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const [userData, setUserData] = useState([]);
    const [taskData, setTaskData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [addTaskToggle, setAddTaskToggle] = useState(false);
    const [updateTaskToggle, setUpdateTaskToggle] = useState(false);
    const [addTaskName, setAddTaskName] = useState("");
    const [addTaskDesc, setAddTaskDesc,] = useState("");
    const [updateTaskId, setUpdateTaskId,] = useState("");
    const [addTaskDone, setAddTaskDone,] = useState(false);
    const [errMsg, setErrMsg] = useState(null)
    const navigate = useNavigate();

    function profile() {
        toggle ? setToggle(false) : setToggle(true);
    }

    function updateTask(e) {
        setUpdateTaskId(e.target.id)
        updateTaskToggle ? setUpdateTaskToggle(false) : setUpdateTaskToggle(true);
    }

    function addTask() {
        addTaskToggle ? setAddTaskToggle(false) : setAddTaskToggle(true);
    }

    function userLogout() {
        localStorage.removeItem('token');
        navigate('/login')
    }

    //get all tasks
    useEffect(() => {
        async function fetchTasks() {
            try {
                const userTask = await api.get('/tasks')
                setUserData(userTask.data.user)
                setTaskData(userTask.data.data)
            }
            catch (err) {
                navigate('/login')
                console.log(err)
            }
        }
        fetchTasks();
    }, [addTaskToggle,updateTaskToggle])

    //create task
    const addTaskSubmit = async (e) => {
        setAddTaskName("")
        setAddTaskDesc("")
        e.preventDefault();
        try {
            await api.post('/tasks', { "title": addTaskName, "description": addTaskDesc });
            setAddTaskToggle(false)
        }
        catch (err) {
            setErrMsg(err.response.data.message)
        }
    }

    //update task
    const updateTaskSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.patch(`/tasks/${updateTaskId}`, { "title": addTaskName, "description": addTaskDesc, "isDone": addTaskDone });
            setUpdateTaskToggle(false)
        }
        catch (err) {
            console.log(err.response)
            setErrMsg(err.response.data.message)
        }
    }

    //delete task
    const deleteTask = async (id)=>{
        try{
            await api.delete(`/tasks/${id}`)
            location.reload();
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <div class="header-left">
                        <h1>Dashboard</h1>
                    </div>
                    <div class="header-right" onClick={profile}>
                        <img src={userSvg} alt="user-profile" />
                        <h1>{userData.name}</h1>
                    </div>
                    {
                        toggle &&
                        <div class="profile">
                            <p>{userData.email}</p>
                            <button onClick={userLogout}>Logout</button>
                        </div>
                    }
                </div>
                <div class="dashboard-body">
                    <div class="body-head">
                        <button onClick={addTask}> <img src={plusSvg} alt="" />Create Task</button>
                    </div>
                    <div class="body-bottom">
                        {
                            taskData.map((tasks) => {
                                return (
                                    <div class="task-card" key={tasks._id}>
                                        <div class="card-head">
                                            <h1>{tasks.title}</h1>
                                            <p>{tasks.description}</p>
                                            <p class="status">{tasks.isDone === true ? 'Finished' : 'Pending'}</p>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-body-left">
                                                <button class="edit-btn" onClick={updateTask} ><img src={editSvg} alt="" id={tasks._id} /></button>
                                                <button class="delete-btn" onClick={() => {deleteTask(tasks._id)}}><img src={deleteSvg} alt="" /></button>
                                            </div>
                                            <div class="card-body-right">
                                                <p>{tasks.updatedAt.slice(0, 10)}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    addTaskToggle &&
                    <div class="add-task">
                        <form onSubmit={addTaskSubmit}>
                            <div class="name">
                                <label for="name">Task Name</label>
                                <input type="text" placeholder="Enter your Task Name" value={addTaskName} onChange={(e) => { setAddTaskName(e.target.value) }} />
                            </div>
                            <div class="discription">
                                <label for="name">Discription</label>
                                <input type="text" placeholder="Enter your Discription" value={addTaskDesc} onChange={(e) => { setAddTaskDesc(e.target.value) }} />
                            </div>
                            {
                                errMsg &&
                                <div class="messages">
                                    <p>{errMsg}</p>
                                </div>
                            }
                            <div class="btn">
                                <input type="submit" value="Add" class="add-btn" />
                                <button onClick={addTask}>cancel</button>
                            </div>
                        </form>
                    </div>
                }
                {
                    updateTaskToggle &&
                    <div class="update-task">
                        <form onSubmit={updateTaskSubmit}>
                            <div class="name">
                                <label for="name">Task Name</label>
                                <input type="text" placeholder="Enter your Task Name" value={addTaskName} onChange={(e) => { setAddTaskName(e.target.value) }}/>
                            </div>
                            <div class="discription">
                                <label for="name">Discription</label>
                                <input type="text" placeholder="Enter your Discription" value={addTaskDesc} onChange={(e) => { setAddTaskDesc(e.target.value) }} />
                            </div>
                            <div class="isDone">
                                <label for="name">Completed</label>
                                <input type="checkbox" onChange={(e)=>{setAddTaskDone(e.target.checked)}}/>
                            </div>
                            {
                                errMsg &&
                                <div class="messages">
                                    <p>{errMsg}</p>
                                </div>
                            }
                            <div class="btn">
                                <input type="submit" value="Update" class="submit-btn" />
                                <button onClick={updateTask}>cancel</button>
                            </div>
                        </form>
                    </div>
                }
                <div class="dashboard-footer"></div>
            </div>
        </>
    )
}

export default Dashboard;