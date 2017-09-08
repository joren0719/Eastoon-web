export default function (state = [], action) {
    switch(action.type) {
        case "ITEM_SEARCHED":
            return action.payload;
            break;
    }
    return state;
}
