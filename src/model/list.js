import request from '../util/request'
import {message} from 'antd';

export default {

    namespace: 'listDatas',

    state: {
        data: [],
    },
    effects: {
        *queryListData(_,sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = '/dev/list';
            // const userInformations =  [
            //         {
            //             key: '1',
            //             name: '胡彦斌',
            //             age: 32,
            //             address: '西湖区湖底公园1号',
            //         },
            //         {
            //             key: '2',
            //             name: '胡彦祖',
            //             age: 42,
            //             address: '西湖区湖底公园1号',
            //         },
            //     ];
            const userInformations = yield call(request,endPointURI);
            yield put({type: 'addUser', payload: userInformations});
        }
    },
    reducers: {
        addUser(state, { payload: users }) {
            const userList = state.data.concat(users);
            return {
                data: userList,
            };
        }
    },
};