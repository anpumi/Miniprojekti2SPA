import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    name="taskName"
                    value={props.data.taskName}
                    onChange={props.handleChange}
                    placeholder="Task Name"
                />
                <br />

                <textarea
                    name="taskDesc"
                    value={props.data.taskDesc}
                    onChange={props.handleChange}
                    placeholder="Task Description. 400 max."
                />
                <br />


                {/* <label>
                    <input
                        type="radio"
                        name="status"
                        value="done"
                        checked={props.data.status === "done"}
                        onChange={props.handleChange}
                    /> Done
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="status"
                        value="inProgress"
                        checked={props.data.status === "inProgress"}
                        onChange={props.handleChange}
                    /> In Progress
                </label> */}

                <br />

                <select
                    value={props.data.priority}
                    name="priority"
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose priority --</option>
                    <option value="By the end of day">By the end of day</option>
                    <option value="End of the Week">End of the Week</option>
                    <option value="At some point">At some point</option>
                </select>

                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isDone"
                        onChange={props.handleChange}
                        checked={props.data.isDone}
                    /> Done
                </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="inProgress"
                        onChange={props.handleChange}
                        checked={props.data.inProgress}
                    /> in Progress
                </label>
                <br />
                {/* 
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br /> */}

                <button>Submit</button>
            </form>
            <hr />
            <h2>Task information:</h2>
            <p>Task name: {props.data.taskName}</p>
            <p>Task Description : {props.data.taskDesc}</p>
            <p>Status: {props.data.gender}</p>
            <p>Task Priority: {props.data.priority}</p>
            {/* <p>Your dietary restrictions:</p> */}

            <p>Done: {props.data.isDone ? "Yes" : "No"}</p>
            <p>In Progress: {props.data.inProgress ? "Yes" : "No"}</p>
            {/* <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p> */}

        </main>
    )
}

export default FormComponent