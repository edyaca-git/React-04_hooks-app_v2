import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HookApp } from './HookApp'

import './index.css'
import { ScrambleWordsUseReducer } from './05-useReducer/ScrambleWordsUseReducer'
// import { ScrambleWordsUseStates } from './05-useReducer/ScrambleWordsUseStates'
 
// import { TaskAppConuseState } from './05-useReducer/TaskAppConuseState'
// import { TaskAppConReducer } from './05-useReducer/TaskAppConReducer'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithEffectHook } from './02-useEffect/TrafficLightWithEffectHook'

// import TrafficLightWithEffect from './02-useEffect/TrafficLightWithEffect'
//import TrafficLight from './01-useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <HookApp /> */}
   {/* <TrafficLightWithEffect /> */}
   {/* <TrafficLightWithEffectHook /> */}
   {/* <PokemonPage /> */}
   {/* <FocusScreen /> */}
   {/* <TaskAppConuseState /> */}
   {/* <TaskAppConReducer /> */}
   {/* <ScrambleWordsUseStates /> */}
   <ScrambleWordsUseReducer />
  </StrictMode>,
)
