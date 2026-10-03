import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Button from "../components/Button";

const slides = [
    {
        id: 1,
        slide: "/slide01.png"
    },
    {
        id: 2,
        slide: "/slide02.png"
    },
    {
        id: 3,
        slide: "/slide03.png"
    },
];

const counterContext = createContext();

const initialState = {
    count: 0,
}

function reducer(state, action) {
  switch (action.type) {

    case "inc":
      return {
        ...state,
        count: state.count + 1
      };

    case "dec":
        return{
            ...state,
            count: state.count === 0 ? 0 : state.count - 1
        }

    default:
      return state;
  }
}


export default function Services() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(){
       setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
    }

    function prevSlide(){
        setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
    }

    useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, []);

  return (
    <>
    <div className="container-fluid py-5">
      <div className="container">
      
      <div className="row">
        <div className="col-md-12">
          <img src={slides[currentSlide].slide} alt="Slide" className="img-fluid" />
        </div>
      </div>
      
      <div className="w-100 mt-3 d-flex align-items-center justify-content-center gap-3">
        <Button onClick={prevSlide}>Prev</Button>
        <Button onClick={nextSlide}>Next</Button>
      </div>

      </div>
    </div>

    <counterContext.Provider value={{ state, dispatch }}>
    <Counter />
    </counterContext.Provider>
    </>
  );
}



function Counter(){
        const { state, dispatch } = useContext(counterContext);
    return(
        <div className="container-fluid py-5 bg-light">
        <div className="container">

        <div className="row">
        <div className="col-md-12">
        <div className="w-100 text-center">
          <h1>{state.count}</h1>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center gap-3">
        <Button onClick={() => dispatch({type: "dec"})}>Dec</Button>
        <Button onClick={() => dispatch({type: "inc"})}>Inc</Button>
        </div>
          </div>
        </div>

        </div>
        </div>
    )
}
