import React, {useState} from 'react';
import {menuItemsTypes} from './constants/constants'
import {getIdActiveBtn, searchByQueryAsideMenu, setTriggers} from "../../store/actions";
import {useDispatch, useSelector} from 'react-redux';
import {menuItemsTypesActiveClass, menuItemsTypesNotActiveClass} from './constants/constants'

const AsideNavigatorMenu = () => {
    const dispatch = useDispatch();
    const query = useSelector(state=>state.rememberedQuery);
    const [activeBtn, setActiveBtn] = useState("triggers");
    return (
        <div>
            <div id="subnav">
                {menuItemsTypes.map(menuItem => (
                    <div key={menuItem.id}>
                        <div
                            className={activeBtn === menuItem.id ? menuItemsTypesActiveClass : menuItemsTypesNotActiveClass}
                            id={menuItem.id}
                            onClick={() => {
                                dispatch(setTriggers(menuItem.id));
                                setActiveBtn(menuItem.id);
                                dispatch(getIdActiveBtn(menuItem.id));
                                dispatch(searchByQueryAsideMenu(query, menuItem.id))
                            }}
                        >
                            {menuItem.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsideNavigatorMenu;