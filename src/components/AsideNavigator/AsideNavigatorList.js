import React from 'react';
import {useSelector} from 'react-redux'
import MenuItemContent from "./MenuItemContent";

const AsideNavigatorList = () => {
    const activeAsideMenuItems = useSelector(state => state.asideMenuItems);

    return (

        <div id="blocklist">

            {activeAsideMenuItems.map(item => (

                <MenuItemContent key={item.title} data={item}/>

            ))}

        </div>
    );
};

export default AsideNavigatorList;