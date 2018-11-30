
const screenReducer = (state='Login Screen', action) => {
    console.log('Get ScreenReducer: ', action );

    switch(action.type) {
        case 'SHOW_SCREEN1':
        console.log('SHOW SCREEN 1 payload: ', action.payload );
        return action.payload ;
    break; 
    case 'CLOSE_SCREEN':
        console.log('CLOSE SCREEN payload: ', action.payload );
        return   action.payload ;
    break;
    }//end switch

    return state;
}

export default screenReducer
