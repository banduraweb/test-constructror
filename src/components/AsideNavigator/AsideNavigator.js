import React from 'react';
import AsideNavigatorList from "./AsideNavigatorList";
import AsideNavigatorMenu from "./AsideNavigatorMenu";
import AsideNavigatorSearch from "./AsideNavigatorSearch";
import AsideNavigatorBtnControl from "./AsideNavigatorBtnControl";



const AsideNavigator = () => {
    return (
        <div id="leftcard">
           <AsideNavigatorBtnControl/>
            <p id="header">Blocks</p>
           <AsideNavigatorSearch/>
           <AsideNavigatorMenu/>
           <AsideNavigatorList/>

        </div>
    );
};

export default AsideNavigator;