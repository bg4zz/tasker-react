import { useState } from "react";

export default function FormCreateTask(props){
    const [value, setValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTask([...props.tasks, value]);
        setValue('');
    }
    const handleValueChange = (event) => {
        setValue(event.target.value); 
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleValueChange} type="text" placeholder="Введите задачу" value={value}/>
                </div>
                <div>
                    <input type="submit" value="Создать задачу" />
                </div>
            </form>
        </div>
    );
}