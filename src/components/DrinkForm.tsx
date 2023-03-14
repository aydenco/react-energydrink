import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseBrand, chooseFlavor, chooseCaffeine, chooseSugar, chooseCalories } from "../redux/slices/RootSlice";

interface DrinkFormProps {
  id?: string[]
}

export const DrinkForm = (props:DrinkFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseBrand(data.brand));
      dispatch(chooseFlavor(data.flavor));
      dispatch(chooseCaffeine(data.caffeine));
      dispatch(chooseSugar(data.sugar));
      dispatch(chooseCalories(data.calories));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Brand</label>
            <Input {...register('brand')} name='brand' placeholder="Brand" />
        </div>
        <div>
          <label htmlFor="flavor">Flavor</label>
            <Input {...register('flavor')} name='flavor' placeholder="Flavor" />
        </div>
        <div>
          <label htmlFor="caffeine">Caffeine</label>
            <Input {...register('caffeine')} name='caffeine' placeholder="Caffeine" />
        </div>
        <div>
          <label htmlFor="sugar">Sugar</label>
            <Input {...register('sugar')} name='sugar' placeholder="Sugar" />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
            <Input {...register('calories')} name='calories' placeholder="Calories" />
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default DrinkForm