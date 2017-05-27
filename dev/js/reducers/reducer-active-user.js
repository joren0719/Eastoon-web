export default function (state = null, action) {
    console.log('we are at active user');
    console.log(action.type);
    console.log(action.payload);
    switch(action.type) {
        case "USER_SELECTED":
            return action.payload;
            break;
    }
    return state;
}
