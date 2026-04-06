function Dashboard() {
    return (
        <>
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <div class="header-left">
                        <h1>Dashboard</h1>
                    </div>
                    <div class="header-right">
                        <img src="../images/svgs/user.svg" alt="user-profile" />
                        <h1>Dulanjana Nisal</h1>
                    </div>
                    <div class="profile">
                        <p>dulanjananisal67@gmail.com</p>
                        <button>Logout</button>
                    </div>
                </div>
                <div class="dashboard-body">
                    <div class="body-head">
                        <button> <img src="../images/svgs/plus.svg" alt="" />Create Task</button>
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
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
                                </div>
                                <div class="card-body-right">
                                    <p>2026.01.03</p>
                                </div>
                            </div>
                        </div>
                        <div class="task-card">
                            <div class="card-head">
                                <h1>Task Name</h1>
                                <p>This is test task for task app dashboard</p>
                                <p class="status">Pending</p>
                            </div>
                            <div class="card-body">
                                <div class="card-body-left">
                                    <button class="edit-btn"><img src="../images/edit.png" alt="" /></button>
                                    <button class="delete-btn"><img src="../images/delete.png" alt="" /></button>
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