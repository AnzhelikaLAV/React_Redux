// Импортируем функцию с помощью которой создадим Slice
import { createAppSlice } from "store/createAppSlice";
import { CounterStateSlice } from "./types";

//Здесь создаем обьект с первоначальным состоянием, которое потом передадим в initialstate в переменной
const counterInitialState: CounterStateSlice = {
    count: 0
}

//Создаем Slice для counter будет хранится в переменной 
export const counterSlice = createAppSlice({
    //Задаем имя для обьекта со значением counter в глобальном стейте
    name: 'COUNTER',
    // Задаем обьект, в котором хранится начальное состояние
    initialState: counterInitialState,
    //Создаем обьект, внутри которого будут хранится все Reducer
    reducers: create => ({
        plus: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),//вернется функция  и потом ее перезаписываем count
        minus: create.reducer((state: CounterStateSlice)=>{state.count = state.count - 1})
    }),
    //привязываем store к view компоненту. Создаем селекторы, которые позволяют забрать данные из хранилища в компонент
    selectors: {
        count: (state: CounterStateSlice) => state.count
    }
    
})

// Экспорт экшенов и селекторы для того, чтобы можно было ими воспользоваться в компонентах приложения
export const counterSliceActions = counterSlice.actions;
export const counterSliceSelectors = counterSlice.selectors;