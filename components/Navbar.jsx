const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Component mounted");
}, []);

import { useRef } from "react";

const inputRef = useRef();

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>
  Focus
</button>


// context

const ThemeContext = createContext();
const theme = useContext(ThemeContext);


//usememo

const total = useMemo(() => {
  return expensiveCalculation(num);
}, [num]);


// usecallback

const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);


//usereducer

const reducer = (state, action) => {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

// useparams

import { useParams } from "react-router-dom";

const { id } = useParams();

//use Navigate

const navigate = useNavigate();
navigate("/users");


