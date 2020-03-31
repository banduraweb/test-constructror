import React from 'react';
import { useSelector } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../ItemTypes/ItemTypes';
import DraggedBlock from '../DraggedBlock/DraggedBlock';

import { Line } from 'react-lineto';

function render() {

	return (
		<Line x0={0} y0={0} x1={40} y1={40} />
	);
}


const WorkSpace = ({ canDrop, isOver, connectDropTarget }) => {
	const draggedBlocks = useSelector(state => state.workSpaceBlocks);


	const isActive = canDrop && isOver;
	if (isActive) {
		console.log('isActive');
	} else if (canDrop) {
		console.log('canDrop');
	}
	return (

		<div ref={connectDropTarget} className="work-space">
			{isActive ? 'Release to drop' : 'Drag a box here'}

				{draggedBlocks.length > 0 && draggedBlocks.map(block => (
					<>
					<DraggedBlock
						key={block.title}
						data={block}
					/>
					<div style={{height: '100px', border: "1px solid red"}}>
						{render()}
					</div>
					</>
				))}

		</div>

	);
};


export default DropTarget(
	ItemTypes.BOX,
	{
		drop: () => ({ name: 'WorkSpace' })
	},
	(connect, monitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	})
)(WorkSpace);
