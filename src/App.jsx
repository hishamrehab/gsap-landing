import gsap from "gsap"
import { ScrollTrigger ,  SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger ,SplitText);


const App = () => {
  return (
    <div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>    </div>
  )
}

export default App
