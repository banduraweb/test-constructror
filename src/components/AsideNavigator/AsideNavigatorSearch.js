import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {searchByQueryAsideMenu, rememberQueryForSearchInDiffTabs} from "../../store/actions";
import { DebounceInput } from 'react-debounce-input';

const AsideNavigatorSearch = () => {
    const dispatch = useDispatch();
    const activeAsideBtn = useSelector(state=>state.activeAsideBtn);
    return (
        <div>
            <div id="search">
                <img src="assets/search.svg"/>
                <DebounceInput
                    debounceTimeout={500}
                    type="text"
                    placeholder="Search blocks"
                    onChange={({target})=>
                    {dispatch(searchByQueryAsideMenu(target.value, activeAsideBtn));
                     dispatch(rememberQueryForSearchInDiffTabs(target.value))
                    }

                    }

                />
            </div>
        </div>
    );
};

export default AsideNavigatorSearch;