import './dashboard.css'
import userSvg from '../../assets/svgs/user.svg';
import plusSvg from '../../assets/svgs/plus.svg';
import editSvg from '../../assets/edit.png';
import deleteSvg from '../../assets/delete.png';
import api from '../../api/api';
import { useEffect, useState } from 'react';

function Dashboard() {

    const [userTasks,setUserTasks] = useState([])

    useEffect( ()=>{
        async function fetchTasks(){
            try{
                const userTask = await api.get('/tasks')
                setUserTasks(userTask)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchTasks();
    }, [])

    console.log(userTasks)

    return (
        <>
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <div class="header-left">
                        <h1>Dashboard</h1>
                    </div>
                    <div class="header-right">
                        <img src={userSvg} alt="user-profile" />
                        <h1>Dulanjana Nisal</h1>
                    </div>
                    <div class="profile">
                        <p>dulanjananisal67@gmail.com</p>
                        <button>Logout</button>
                    </div>
                </div>
                <div class="dashboard-body">
                    <div class="body-head">
                        <button> <img src={plusSvg} alt="" />Create Task</button>
                    </div>
                    <div class="body-bottom">
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src={editSvg} alt="" /></button>
                                    <button class="delete-btn"><img src={deleteSvg} alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add-task">
                    <form action="#" method="post">
                        <div class="name">
                            <label for="name">Task Name</label>
                            <input type="text" placeholder="Enter your Task Name" />
                        </div>
                        <div class="discription">
                            <label for="name">Discription</label>
                            <input type="text" placeholder="Enter your Discription" />
                        </div>
                        <div class="messages">
                            <p>Some Error messages here</p>
                        </div>
                        <div class="btn">
                            <input type="submit" value="Add" class="add-btn" />
                            <button>cancel</button>
                        </div>
                    </form>
                </div>
                <div class="update-task">
                    <form action="#" method="post">
                        <div class="name">
                            <label for="name">Task Name</label>
                            <input type="text" placeholder="Enter your Task Name" />
                        </div>
                        <div class="discription">
                            <label for="name">Discription</label>
                            <input type="text" placeholder="Enter your Discription" />
                        </div>
                        <div class="isDone">
                            <label for="name">Completed</label>
                            <input type="checkbox" />
                        </div>
                        <div class="messages">
                            <p>Some Error messages here</p>
                        </div>
                        <div class="btn">
                            <input type="submit" value="Update" class="submit-btn" />
                            <button>cancel</button>
                        </div>
                    </form>
                </div>
                <div class="dashboard-footer"></div>
            </div>
        </>
    )
}

export default Dashboard;