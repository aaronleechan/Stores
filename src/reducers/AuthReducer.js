import {USER_SIGNIN} from '../actions/types';

export default (state={},action)=>{
    switch(action.type){
        case USER_SIGNIN:
            return null
        default: 
            return null
    }
}