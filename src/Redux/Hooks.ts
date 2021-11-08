import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './Store'
/**
 * Black magic because Redux sucks 🧙
 * Used throughout the app instead of plain `useDispatch` and `useSelector` 
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector