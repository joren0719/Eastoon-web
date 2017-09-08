export default function (state = [], action) {
    switch(action.type) {    
        case "ITEM_SEARCHEDLOCALLY":
            return action.payload;
            break;
    }
    return state;
}
