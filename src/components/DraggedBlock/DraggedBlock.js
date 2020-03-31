import React from 'react';
import Draggable from 'react-draggable'



const DraggedBlock = ({data}) => {
	const {title, content, imgName} = data;
	const imgSrc = `assets/${imgName}`;
	return (
		<Draggable >
			<div className="blockelem create-flowy noselect dragged-block" >
				<input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
				<div className="grabme">
					<img src="assets/grabme.svg"/>
				</div>
				<div className="blockin">
					<div className="blockico">
						<span></span>
						<img src={imgSrc}/>
					</div>
					<div className="blocktext">
						<p className="blocktitle">{title}</p>
						<p className="blockdesc">{content}</p>
					</div>
				</div>
			</div>
		</Draggable>
	);
};

export default DraggedBlock;