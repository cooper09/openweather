
const initialState = [
    {
        results: [],
        error: null
    }
]

const dataReducer = (state=initialState, action) => {
    console.log('Get DataReducer: ', action )

    return state;
}

export default dataReducer
