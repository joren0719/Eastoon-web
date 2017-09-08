
export const actions = {
    selectUser: (user) => {
        return {
            type: "USER_SELECTED",
            payload: user
        }
    },
    selectStage: (stage) => {
        return {
            type: "STAGE_SELECTED",
            payload: stage
        }
    },
    searchHandler: (value) => {
        return {
            type: "ITEM_SEARCHED",
            payload: value
        }
    },
    searchLocalHandler: (value) => {
        return {
            type: "ITEM_SEARCHEDLOCALLY",
            payload: value
        }
    },
    isOpen: (state) => {
        return {
            type: "MOUSE_ENTERED",
            payload: true
        }
    },
    isClose: (state) => {
        return {
            type: "MOUSE_ENTERED",
            payload: false
        }
    }
}
