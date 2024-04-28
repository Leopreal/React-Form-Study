// Components

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {FiSend} from "react-icons/fi";
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from "./components/Steps";
// hooks

import { userForm } from "./hooks/useForm";
import { useState } from "react";

import './App.css'




function App() {

  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  }

  const [data,setData] = useState(formTemplate)

  const updateFiedlHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComtents = [
    <UserForm data={data} updateFiedlHandler={updateFiedlHandler}/>,
    <ReviewForm data={data} updateFiedlHandler={updateFiedlHandler}/>,
    <Thanks data={data}/>
  ]



  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = userForm(formComtents)
 

  return (
    <div className='app'>
        <div className="header">
          <h2>Deixe sua Avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>

        </div>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
              ) : (
                <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
              )}
            </div>
          </form>
        </div>
    </div>
  )
}

export default App
