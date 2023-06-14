let initialState={
    lang:'en-US',
    loader:false,
    favorties:[]
}

export default function languageReducer(state=initialState,action){
    switch (action.type) {
        case 'SET_Language' :
            return{
                ...state,
                lang:action.payload
            }
    
        case 'SET_Favorite' :
            let isInFavorite=state.favorties.findIndex(
                (movie)=>movie.id===action.payload.id
            )
            if(isInFavorite===-1){
                state.favorties.push(action.payload)
            }
            return state;
    
        default:
            return state;
            
    }

}