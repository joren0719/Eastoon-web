export default function (state = false, action) {
    switch(action.type) {
        case "MOUSE_ENTERED":
            return action.payload;
            break;
        case "MOUSE_LEAVE":
            return action.payload;
    }
    return state;
}
