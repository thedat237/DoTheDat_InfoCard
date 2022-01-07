import {createSlice} from '@reduxjs/toolkit'

const initStore = {
    // nameUser: "",
    // avatarUrl: "",
    // overview: "",
    // nameCard: "",
    // colorCard: "",
    // qrImage: "",
    // social: []
    data: []
}

const Infor = createSlice({
    name: 'Info',
    initialState: initStore,
    reducers: {
        SAVECART(state, action){
            // console.log('action payload', action.payload)
            // state.nameUser = action.payload.nameUser
            // state.avatarUrl = action.payload.avatarUrl
            // state.overview = action.payload.overview
            // state.colorCard = action.payload.colorCard
            // state.social = [...action.payload.social]
            // state.nameCard = action.payload.nameCard
            // state.qrImage = action.payload.qrImage
            let result=state.data
            console.log("save cart", action.payload);
            console.log(typeof action.payload === "object");
            if(typeof action.payload === "object"){
                result.push(action.payload)
            } else {
                result=[...action.payload]

            }
            state.data = [...result]
        },
        RESETCART(state, action){
            state.data=[]
        },
        UPDATESHOPPINGSUCCESS(state, action){
            state.data=[...action.payload]
            console.log(state.data);
        }
    }
})

export const {SAVECART, RESETCART, UPDATESHOPPINGSUCCESS} = Infor.actions
export default Infor.reducer