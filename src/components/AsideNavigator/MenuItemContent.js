import React from 'react';

const MenuItemContent = ({data}) => {
    const {title, content, imgName} = data;
    const imgSrc = `assets/${imgName}`;
    return (
        <div>
            <div className="blockelem create-flowy noselect">
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

export default MenuItemContent;