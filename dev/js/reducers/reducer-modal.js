export default function (state = false, action) {
    switch(action.type) {
        case "OPEN_MODAL":
            return action.payload;
            break;
        case "CLOSE_MODAL":
            return action.payload;
    }
    return state;
}
