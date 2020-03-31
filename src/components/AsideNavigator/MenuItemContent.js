import React from 'react';
import {useDispatch} from 'react-redux'
import ItemTypes from '../ItemTypes/ItemTypes';
import { DragSource } from 'react-dnd';
import { dragItemToWorkspace } from '../../store/actions';


const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};


const MenuItemContent = ({data, isDragging, connectDragSource}) => {

    const opacity = isDragging ? 0.8 : 1;

    const {title, content, imgName} = data;
    const imgSrc = `assets/${imgName}`;
    return (
        <div >
            <div className="blockelem create-flowy noselect" ref={connectDragSource} style={{ ...style, opacity }}>
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
        </div>
    );
};

export default DragSource(
  ItemTypes.BOX,
  {
      beginDrag: (props) => {
        return  ({ data:props.data, dispatch: props.dispatch })
      },

      endDrag(props, monitor) {

          const item = monitor.getItem();
          console.log(props,'itemitem');
          const dropResult = monitor.getDropResult();
          if (dropResult) {
             item.dispatch(dragItemToWorkspace(item.data));
             // alert(`You dropped ${item.data.title} into ${dropResult.name}!`)
          }
      },
  },
  (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
      dropResult: monitor.getDropResult()
  }),
)(MenuItemContent)