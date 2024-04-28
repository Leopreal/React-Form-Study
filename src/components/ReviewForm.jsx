import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'
  
 import "./ReviewForm.css"

const ReviewForm = ({data, updateFiedlHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label  className='radio-container'>
          <input 
          type="radio" 
          value={"unsatisfied"} 
          name='review' 
          required 
          checked={data.review === "unsatisfied"}
          onChange={(e) => updateFiedlHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insantisfeito</p>
        </label>
        <label  className='radio-container'>
          <input 
          type="radio" 
          value={"neutral"} 
          name='review' 
          required 
          checked={data.review === "neutral"}
          onChange={(e) => updateFiedlHandler("review", e.target.value)}/>
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label  className='radio-container'>
          <input 
          type="radio" 
          value={"satisfied"} 
          name='review' 
          required 
          checked={data.review === "satisfied"}
          onChange={(e) => updateFiedlHandler("review", e.target.value)}/>
          <BsFillEmojiSmileFill />
          <p>Santisfeito</p>
        </label>
        <label  className='radio-container'>
          <input 
          type="radio" 
          value={"verysatisfied"} 
          name='review' 
          required 
          checked={data.review === "verysatisfied"}
          onChange={(e) => updateFiedlHandler("review", e.target.value)}/>
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>
      </div>
        <div className="form-control">
          <label htmlFor="comment">Comentário</label>
          <textarea 
          name="comment" 
          id="comment" 
          placeholder='Conte como foi a sua expêriancia com o produto' 
          required
          value={data.comment || ""}
          onChange={(e) => updateFiedlHandler("comment", e.target.value)}>

          </textarea>

          
        </div>
    </div>
  )
}

export default ReviewForm