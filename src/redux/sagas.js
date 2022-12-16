import { takeLatest, put, call, all, fork } from 'redux-saga/effects'
import * as types from './actionType'
import { getRecipes } from './api'

export function* onLoadRecipeAsync({ query }) {
    try{
        console.log('QUERY::' , query);
        const response = yield call(getRecipes, query);
        yield put({type: types.FETCH_RECIPE_SUCCESS, payload: response.data});
    }
    catch(error){
        yield put({type: types.FETCH_RECIPE_FAIL, payload: error})
    }
}

export function* onLoadRecipe () {
    yield takeLatest(types.FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga(){
    yield all([...recipeSaga])
}