import './Thanks.css'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}



const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>Sua opiniao é muito importante, em breve você liberará um cupom para 10% de desconto na proxima compra</p>
        <p>Para concluir a avaliação clique no botão abaixo: </p>
        <h3>Aqui esta o resumo da sua avaliação {data.name} </h3>
        <p className="review-data">
          <span>Satisfação com o produto: </span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentario: </span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks