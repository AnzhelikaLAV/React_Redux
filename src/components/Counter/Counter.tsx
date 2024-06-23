//import { useState } from "react";
import Button from "components/Button/Button"
import { CounterComponent, CounterResult } from "./styles"

// 8.Импортируем хуки для диспатч и селектора
import { useAppDispatch, useAppSelector } from "store/hooks"
// 9. Импортируем экшены и селекторы, которые мы экспортировали в слайсе
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/CounterSlice"

function Counter() {
  //10.Забираем значение count из store
  const count = useAppSelector(counterSliceSelectors.count)
  //11.Сохраним функцию dispatch которую возвращает вызов хука useDispatch
  const dispatch = useAppDispatch()

  const onPlus = () => {
    //12. диспатчим екшн plus, который вызовет reducer plus
    dispatch(counterSliceActions.plus()) //ПРИ НАЖАТИИ НА КНОПКУ
  }

  //13. диспатчим екшн minus, который вызовет reducer minus
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  return (
    <CounterComponent>
      <Button name="-" onClick={onMinus} />
      <CounterResult>{count}</CounterResult>
      <Button name="+" onClick={onPlus} />
    </CounterComponent>
  )
}

export default Counter
