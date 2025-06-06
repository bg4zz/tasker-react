import Task from "../Task/Task";

export default function Container() {
    let tasks = ['Buy milk', 'Go home', 'Go sleep', 'Finish project'];
    return (
        <div>
            {
                tasks.map((item) => (
                    <Task name={item} />
                ))
            }
        </div>
    )
};