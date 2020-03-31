import {combineReducers} from 'redux';
import {actionsTypes} from './actions';
import {ACTIONS, LOGGERS, TRIGGERS} from '../components/AsideNavigator/constants/constants'


const defaultMenuItems = [
    {   imgName: 'eye.svg',
        title: "New visitor",
        content: "Triggers when somebody visits a specified page"
    },
    {
        imgName: 'action.svg',
        title: "Action is performed",
        content: "Triggers when somebody performs a specified action"
    },
    {
        imgName: 'time.svg',
        title: "Time has passed",
        content: "Triggers after a specified amount of time"
    },
    {
        imgName: 'error.svg',
        title: "Error prompt",
        content: "Triggers when a specified error happens"
    },

];

const actionsMenuItems = [
    {
        imgName: 'database.svg',
        title: "New database entry",
        content: "Adds a new entry to a specified database"
    },
    {
        imgName: 'database.svg',
        title: "Update database",
        content: "Edits and deletes database entries and properties"
    },
    {
        imgName: 'action.svg',
        title: "Action is performed",
        content: "Performs or edits a specified action"
    },
    {
        imgName: 'twitter.svg',
        title: "Make a tweet",
        content: "Makes a tweet with a specified query"
    },
];


const loggersMenuItems = [
    {
        imgName: 'log.svg',
        title: "Add new log entry",
        content: "Adds a new log entry to this project"
    },
    {
        imgName: 'log.svg',
        title: "Update logs",
        content: "Edits and deletes log entries in this project"
    },
    {
        imgName: 'error.svg',
        title: "Promo an error",
        content: "Triggers a specified error"
    },

];

const asideMenuItemsReducer = (state = defaultMenuItems, action) => {

    switch (action.type) {
        case actionsTypes.SET_TRIGGERS :
            const {id} = action;
        switch (id) {
            case ACTIONS:
                return actionsMenuItems;
            case LOGGERS:
                return loggersMenuItems;
            default:
                return defaultMenuItems;
        }
        case actionsTypes.SEARCH_QUERY_ASIDE_MENU :

            const {query, resetId} = action;

            if (query===``) {

                return resetId === ACTIONS ? actionsMenuItems : resetId === LOGGERS ? loggersMenuItems : defaultMenuItems;
            }
            return state.filter(({title, content})=>(title+content).toLowerCase().includes(query.toLowerCase().trim()));

        default : return state;
    }

};



const rememberQueryReducer = (state = '', action) => {
    switch (action.type) {
        case actionsTypes.REMEMBER_QUERY_FOR_SEARCH :
            const {query} = action;
            return query;
        default:
            return state;
    }
};

const asideMenuActiveBtnReducer = (state = TRIGGERS, action) => {
    switch (action.type) {
        case actionsTypes.GET_ID_ACTIVE_ASIDE_MENU_BTN :
            const {id} = action;
            return id;
        default:
            return state;
    }
};


const workSpaceReducer = (state = [], action) => {
    switch (action.type) {
        case actionsTypes.DRAG_ITEM_TO_WORK_SPACE :
            const {block} = action;
            return [...state, block];
        default:
            return state;
    }

};



export const rootReducer = combineReducers({
    asideMenuItems: asideMenuItemsReducer,
    activeAsideBtn: asideMenuActiveBtnReducer,
    rememberedQuery: rememberQueryReducer,
    workSpaceBlocks: workSpaceReducer
});