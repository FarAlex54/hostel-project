import React from 'react'
import './styles/Feedback.css';
import FeedBackItem from './cart/FeedBackItem';
import { useForm } from "react-hook-form"


const Feedback = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  console.log(watch("example"))

  return (
    <div class="d-flex flex-row">
      <div class="p-2 col-1"></div>  
      <div class="p-2 col-7"><FeedBackItem feedback={props.feedback}
                    setFeedback={props.setFeedback}/> 
      </div>
      <div class="p-2 col-4 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Оставте Ваш отзыв</h5>
          <input {...register("name")} /><br/>
          {errors.exampleRequired}
          <input {...register("exampleRequired", { required: true })} />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
          
        </form>
      </div>  

    </div>
  )
}

export default Feedback