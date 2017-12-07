
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
    },
    openModal: () => {
        return {
            type: "OPEN_MODAL",
            payload: true
        }
    },
    closeModal: () => {
        return {
            type: "CLOSE_MODAL",
            payload: false
        }
    },
    handleSelect: (pagestate) => {
        return {
            type: "PAGE_SELECTED",
            payload: pagestate
        }
    },
    selectMachine: (machine) => {
        return {
            type: "MACHINE_SELECTED",
            payload: machine
        }
    }
}
