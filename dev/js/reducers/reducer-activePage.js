export default function (state = 1, action) {
    switch(action.type) {
        case "PAGE_SELECTED":
            return action.payload;
            break;
    }
    return state;
}
