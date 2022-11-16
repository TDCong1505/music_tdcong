import react from "react";
import './slide.css';
import images1 from "../../../images/ThuyLinh/t_linh_01.PNG";
import images2 from "../../../images/ThuyLinh/t_linh_02.PNG";
import images3 from "../../../images/ThuyLinh/t_linh_03.PNG";
import images4 from "../../../images/ThuyLinh/t_linh_04.PNG";
import images5 from "../../../images/ThuyLinh/t_linh_05.PNG";
import images6 from "../../../images/ThuyLinh/t_linh_06.PNG";

const Slide = () => {
 
    const handlePrev = () => {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length  - 1]);
    }

    const handleNext = () => {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }

    return (
        <div className="wrapper">
        <div className="container">
            <div id="slide">
                <div className="item" style={{backgroundImage:`url(${images1})`}} >
                </div>
                <div className="item" style={{backgroundImage:`url(${images2})`}} >
                </div>
                <div className="item" style={{backgroundImage:`url(${images3})`}} >
                </div>
                <div className="item" style={{backgroundImage:`url(${images4})`}} >
                </div>
                <div className="item" style={{backgroundImage:`url(${images5})`}} >
                </div>
                <div className="item" style={{backgroundImage:`url(${images6})`}} >
                </div>
            </div>
            <div className="buttons">
                <button id="prev" onClick={handlePrev}><i className="fa-solid fa-left"></i></button>
                <button id="next" onClick={handleNext}><i className="fa-solid fa-right"></i></button>
            </div>
        </div>
    </div>
    )
}

export default Slide;