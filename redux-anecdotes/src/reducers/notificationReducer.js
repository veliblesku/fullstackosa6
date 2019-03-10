

const notificationReducer = (state=[], action) => {
    console.log("morrrooo")
    switch(action.type) {
        case 'VOTE':
        return "you voted"
        default:
        return state
    }

}

export const notificationChange = notification => {
    return {
        type: 'VOTE',
        notification
    }
}

export default notificationReducer