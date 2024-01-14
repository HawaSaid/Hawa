import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";

export const Banner =()=>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate=["Web Developper", "Software Engineer", "Game Developper"];
    const[ text, setText]= useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period=2000;/* How long its gonna take */

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        }, delta)

<<<<<<< Updated upstream
        return () => {clearInterval(ticker)};
    }, [text])
=======
    return () => {
      clearInterval(ticker);
    };
    
  }, [text, cursorVisible]);
>>>>>>> Stashed changes

    const tick =() =>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
<<<<<<< Updated upstream

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Hawa`}<span className="wrap"> - An Aspiring {text} </span></h1>
                        <p>Hi! I'm Hawa-Afnane Said, a second-year Software Engineering Student at Concordia University who loves to game and code.</p>
                        <button className="LetsConnect" onCanPlay={() => console.log('connect')}>Lets Connect <ArrowRightCircle size={25}/></button>
            
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img" />
                    </Col>
                </Row>
            </Container>
=======
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  const downloadCV = () => {
    const path = process.env.PUBLIC_URL + '/hawa_afnane_said_cv.pdf';
    const link = document.createElement('a');
    link.href = path;
    link.download = 'hawa_afnane_said_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{`Hi, I'm Hawa`}<span className="wrap"> , an Aspiring {text}</span></h1>
            <p>
              Hi! I'm a second-year Software Engineering
              Student at Concordia University who loves to game and code in her
              free time and is intrigued by large-scale, high-impact products. 
            </p>
            <div className="d-flex">
            <button className="CV" onClick={downloadCV}>
                <Download size={25}/> &nbsp; Download CV 
              </button>
              <button
                className="LetsConnect mr-2" 
                onClick={() => console.log("connect")}
              >
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="tree">
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
>>>>>>> Stashed changes

        </section>
    )
}
export default Banner