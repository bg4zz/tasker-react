import Task from "../Task/Task";
import './Container.css'

export default function Container() {
    let tasks = ['Buy milk', 'Go home', 'Go sleep', 'Finish project'];
    return (
        <div className="container">
            {
                tasks.map((item, index) => (
                    <Task name={item} key={index} />
                ))
            }
        </div>
    )
};