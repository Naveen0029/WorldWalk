import { takeEvery,put,call } from 'redux-saga/effects';
import { FORM_DETAILS } from './constant';
import apiUrl from '../config';
import axios from 'axios';


function* addDetails(action) {
    try{
        const response = yield call(axios.post, `${apiUrl}/v1/contactUs`, action.payload);  
        yield put({type: 'ADDFORMDATA',data: response})
    }
    catch (error) {
        yield put({type: 'POST_FAILURE',data: error});
    }
}
function* walkSaga(){
    yield takeEvery(FORM_DETAILS, addDetails);
}

export default walkSaga;