//1. Импортируем функцию с помощью которой создадим Slice
import { createAppSlice } from "store/createAppSlice";
import { CounterStateSlice } from "./types";

//Здесь создаем обьект с первоначальным состоянием, которое потом передадим в initialstate в переменной
const counterInitialState: CounterStateSlice = {
    count: 0
}

//2.Создаем Slice для counter будет хранится в переменной 
export const counterSlice = createAppSlice({
    //3.Задаем имя для обьекта со значением counter в глобальном стейте
    name: 'COUNTER',
    //4.Задаем обьект, в котором хранится начальное состояние
    initialState: counterInitialState,
    //5.Создаем обьект, внутри которого будут хранится все Reducer
    reducers: create => ({
        plus: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),//вернется функция  и потом ее перезаписываем count
        minus: create.reducer((state: CounterStateSlice)=>{state.count = state.count - 1})
    }),
    //6.привязываем store к view компоненту. Создаем селекторы, которые позволяют забрать данные из хранилища в компонент
    selectors: {
        count: (state: CounterStateSlice) => state.count
    }
    
})

//7.Экспорт экшенов и селекторы для того, чтобы можно было ими воспользоваться в компонентах приложения
export const counterSliceActions = counterSlice.actions;
export const counterSliceSelectors = counterSlice.selectors;