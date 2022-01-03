import {createSlice} from '@reduxjs/toolkit'

const initStore = {
    nameUser: "",
    avatarUrl: "",
    overview: "",
    nameCard: "",
    colorCard: "",
    qrImage: "",
    social: []
}

const Infor = createSlice({
    name: 'Info',
    initialState: initStore,
    reducers: {
        SAVECART(state, action){
            console.log('action payload', action.payload)
            state.nameUser = action.payload.nameUser
            state.avatarUrl = action.payload.avatarUrl
            state.overview = action.payload.overview
            state.colorCard = action.payload.colorCard
            state.social = [...action.payload.social]
            state.nameCard = action.payload.nameCard
            state.qrImage = action.payload.qrImage
        // state = {...action.payload}
        },
        RESETCART(state, action){
            let reset = {    
            nameUser: "",
            avatarUrl: "",
            overview: "",
            nameCard: "",
            colorCard: "",
            qrImage: "",
            social: []
        }
        Object.assign(state, reset)
        },

    }
})

export const {SAVECART, RESETCART} = Infor.actions
export default Infor.reducer