export const actionsTypes = {
    SET_TRIGGERS: 'SET_TRIGGERS',
    SEARCH_QUERY_ASIDE_MENU: 'SEARCH_QUERY_ASIDE_MENU',
    GET_ID_ACTIVE_ASIDE_MENU_BTN: 'GET_ID_ACTIVE_ASIDE_MENU_BTN',
    REMEMBER_QUERY_FOR_SEARCH: "REMEMBER_QUERY_FOR_SEARCH",
    DRAG_ITEM_TO_WORK_SPACE: "DRAG_ITEM_TO_WORK_SPACE"
};

export const setTriggers = id => ({
    type: actionsTypes.SET_TRIGGERS,
    id,
});


export const searchByQueryAsideMenu = (query, resetId) => ({
    type: actionsTypes.SEARCH_QUERY_ASIDE_MENU,
    query,
    resetId
});


export const getIdActiveBtn = (id) => ({
    type: actionsTypes.GET_ID_ACTIVE_ASIDE_MENU_BTN,
    id,
});


export const rememberQueryForSearchInDiffTabs = (query) => ({
    type: actionsTypes.REMEMBER_QUERY_FOR_SEARCH,
    query,
});


export const dragItemToWorkspace = block => ({
    type: actionsTypes.DRAG_ITEM_TO_WORK_SPACE,
    block,
});