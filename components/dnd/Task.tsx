import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

type TaskProps = {
    task: any;
    index: any;
};

export const Task: React.FC<TaskProps> = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <div
                    className={`border  p-2 mb-2 rounded-sm ${
                        snapshot.isDragging
                            ? 'bg-blue-300 text-blue-800 border-blue-800 shadow-lg'
                            : 'bg-white text-black border-gray-200'
                    }`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <p>{task.content}</p>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
