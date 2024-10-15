import CanvasBackground from "./CanvasBackground";
import { TypeAnimation } from "react-type-animation";
function App() {
  return (
    <div className="App">
      <CanvasBackground/>
      <div className="content" style={{marginLeft:10,background:"white",display:"inline-block",width:"auto",padding:10,border:"5px dashed black",marginTop:10}}>
        <TypeAnimation
          sequence={[
            3000,
            "Hamza Ali Rizvi"
          ]}
          wrapper="h1"
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            "",
            5000,
            "Web Development",
            2000,
            "Machine Learning",
            2000,
            "Data Engineering",
            2000,
            "Data Visualization",
            2000,
            "Cloud Computing",
            2000,
            "Statistical Analysis",
            2000,
            "Distributed Computing",
          ].map(el=>{
            if(typeof(el)=="string"){
              return "> "+el
            }else{
              return el
            }
          })}
          wrapper="h3"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default App;
