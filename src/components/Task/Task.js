import { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import './Task.css';

export default function Task({ name }) {
    const [isVisible, setIsVisible] = useState(true);
    const [count, setCount] = useState(0);

    const RemoveTask = () => {
        setIsVisible(false);
        console.log('is remove =(');
    }

    const EditTask = () => {
        setCount(count + 1);
        console.log('is edit!');
    }

    return (
        <div className={isVisible ? "task" : "hide"}>
            <span>{name}</span>
            <PencilFill className='btn-edit' onClick={EditTask} />
            <TrashFill className='btn-remove' onClick={RemoveTask} />
            {count}
        </div>
    );
}