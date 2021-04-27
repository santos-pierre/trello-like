import { initialData } from 'data/dummy-data';
import { Fragment, useState } from 'react';
import Column from '@components/dnd/Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export const Test = () => {
    const [datas, setDatas] = useState<any>(initialData);

    const handleDragEnd = ({ destination, source, draggableId }: DropResult) => {
        // If nothing move
        if (!destination) {
            return;
        }
        // If nothing change
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const column = datas.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };
        setDatas({
            ...datas,
            columns: {
                ...datas.columns,
                [newColumn.id]: newColumn,
            },
        });
    };

    return (
        <Fragment>
            <div>
                <h1>My Lists</h1>
                <DragDropContext onDragEnd={handleDragEnd}>
                    {datas.columnOrder.map((columnId: any) => {
                        const column = datas.columns[columnId];
                        const tasks = column.taskIds.map((taskId: any) => datas.tasks[taskId]);
                        return <Column key={columnId} tasks={tasks} column={column} />;
                    })}
                </DragDropContext>
            </div>
        </Fragment>
    );
};

export default Test;
