import {ProfileState} from "../types/profile";

const initialState: ProfileState = {
    profileAvatarSrc: 'https://cdn1.flamp.ru/6b57c4933751b981d84f4d7aa77b1057.jpg',
    name: 'Дмитрий Увалов',
}

export const ProfileReducer = (state = initialState, action: any): ProfileState => {
    switch (action.type) {
        default:
            return state
    }
}
