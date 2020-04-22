import axios from 'axios';

class TodoListApi{
    static getTodoList(){
        const GET_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
        return axios.get(GET_URL);
    }

}
export default TodoListApi;