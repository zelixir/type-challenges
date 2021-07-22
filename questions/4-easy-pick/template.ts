type MyPick<T, K> = {[P in keyof T as K extends P ? P : never]:  T[P] }

