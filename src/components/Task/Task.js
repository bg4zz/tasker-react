import { PencilFill, TrashFill } from 'react-bootstrap-icons';

export default function Task({ name }) {
    return (
        <div>
            <span>{name}</span>
            <PencilFill />
            <TrashFill />
        </div>
    );
}