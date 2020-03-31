import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import MenuItemContent from "./MenuItemContent";

const AsideNavigatorList = () => {
    const activeAsideMenuItems = useSelector(state => state.asideMenuItems);
    const dispatch = useDispatch();

    return (

        <div id="blocklist">

            {activeAsideMenuItems.map(item => (

                <MenuItemContent
                  key={item.title}
                  data={item}
                  dispatch={dispatch}
                />

            ))}

        </div>
    );
};

export default AsideNavigatorList;