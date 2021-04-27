import Task from '@components/dnd/Task';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

type ColumnProps = {
    column: any;
    tasks: any;
};

export const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
    return (
        <div className="m-2 border border-solid border-gray-100 rounded-sm">
            <h3 className="text-xl p-2">{column.title}</h3>
            <Droppable droppableId={column.id}>
                {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                    <div
                        className={`p-2 ${snapshot.isDraggingOver ? 'bg-blue-200' : 'bg-white'}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task: any, index) => {
                            return <Task key={task.id} task={task} index={index} />;
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
