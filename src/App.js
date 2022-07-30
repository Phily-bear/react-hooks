import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useReducer,
  useCallback,
  useTransition,
} from "react";
import { ClassContextComponent } from "./ClassContextComponent";
import { FunctionContextComponent } from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";
import Todo from "./Todo";
import List from "./List";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";
import { List1 } from "./List1";
import CustomInput from "./CustomInput";
import ConfirmationModal from "./ConfirmationModal";
import EmailForm from "./EmailForm";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

export default function App() {
  /* useEffect example1 */
  // const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);
  // // useEffect在依赖项发生变化时，先执行return语句来清楚上一个状态，然后再执行return上面的语句
  // useEffect(() => {
  //   console.log('resource changed');
  //   // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //   //   .then((response) => response.json())
  //   //   .then((json) => setItems(json));
  //   return () => {
  //     console.log('return from resource change');
  //   };
  // }, [resourceType]);
  // return (
  //   <>
  //     <div>
  //       <button onClick={() => setResourceType('posts')}>Posts</button>
  //       <button onClick={() => setResourceType('users')}>Users</button>
  //       <button onClick={() => setResourceType('comments')}>Comments</button>
  //     </div>
  //     <h1>{resourceType}</h1>
  //     {/* {items.map((item) => {
  //       return <pre key={item.id}>{JSON.stringify(item)}</pre>;
  //     })} */}
  //   </>
  // );
  /* useEffect example2 */
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // return <div>{windowWidth}</div>;
  /* useMemo example1*/
  // const [number, setNumber] = useState(0);
  // const [dark, setDark] = useState(false);
  // // useMemo相当于记住某个依赖项的值，只要它不变，就算重新渲染组件也不会执行useMemo代码块中的值
  // // useMemo一般用在那些执行时间比较长的代码或者对象发生内容改变时才需要渲染的情况
  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number);
  // }, [number]);
  // const themeStyles = useMemo(() => {
  //   return {
  //     backgroundColor: dark ? 'black' : 'white',
  //     color: dark ? 'white' : 'black',
  //   };
  // }, [dark]);
  // return (
  //   <>
  //     <input
  //       type="number"
  //       value={number}
  //       onChange={(e) => setNumber(parseInt(e.target.value))}
  //     />
  //     <button onClick={() => setDark((prevDark) => !prevDark)}>
  //       Change Theme
  //     </button>
  //     {/* 这里的doubleNumber并没有执行useMemo的回调函数，而是直接使用上一个状态中的值 */}
  //     <div style={themeStyles}>{doubleNumber}</div>
  //   </>
  // );
  /* useRef example1*/
  // const [name, setName] = useState('');
  // const renderCount = useRef(0);
  // const inputRef = useRef();
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  // function focus() {
  //   inputRef.current.focus();
  //   console.log(inputRef.current);
  //   inputRef.current.value = 'Some value';
  // }
  // const prevName = useRef('');
  // useEffect(() => {
  //   prevName.current = name;
  // }, [name]);
  // return (
  //   <>
  //     <input
  //       value={name}
  //       ref={inputRef}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <div>
  //       My name is {name} and it used to be {prevName.current}
  //     </div>
  //     <div>I rendered {renderCount.current} times</div>
  //     <button onClick={focus}>FOCUS</button>
  //   </>
  // );
  /* useContext example1 */
  // return (
  //   /* useContext提供了全局的状态，它的所有children都可以使用provider的value值 */
  //   <>
  //     <ThemeProvider>
  //       <FunctionContextComponent />
  //       <ClassContextComponent />
  //     </ThemeProvider>
  //   </>
  // );
  /* useReducer example1 */
  // //useReducer跟useState类似，都能进行状态管理，useReducer可以根据不同的type对当前状态进行处理
  // const ACTIONS = {
  //   INCREASMENT: 'increasment',
  //   DECREASMENT: 'decreasment',
  // };
  //   const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, setCount] = useState(0);
  //   function increasment() {
  //     dispatch({ type: ACTIONS.INCREASMENT });
  //   }
  //   function decreasment() {
  //     dispatch({ type: ACTIONS.DECREASMENT });
  //   }
  //   return (
  //     <>
  //       <button onClick={decreasment}>-</button>
  //       <span>{state.count}</span>
  //       <button onClick={increasment}>+</button>
  //     </>
  //   );
  // }
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case ACTIONS.INCREASMENT:
  //       return { count: state.count + 1 };
  //     case ACTIONS.DECREASMENT:
  //       return { count: state.count - 1 };
  //     default:
  //       return state;
  //   }
  /* useReducer example2 */
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case ACTIONS.ADD_TODO:
  //       return [...state, newTodo(action.payload.name)];
  //     case ACTIONS.TOGGLE_TODO:
  //       return state.map((todo) => {
  //         if (todo.id === action.payload.id) {
  //           return { ...todo, complete: !todo.complete };
  //         }
  //         return todo;
  //       });
  //     case ACTIONS.DELETE_TODO:
  //       return state.filter((todo) => {
  //         return todo.id !== action.payload.id;
  //       });
  //     default:
  //       return state;
  //   }
  // }
  // function newTodo(name) {
  //   return { id: Date.now(), name, complete: false };
  // }
  // const [todos, dispatch] = useReducer(reducer, []);
  // const [name, setName] = useState('');
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
  //   setName('');
  // }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <button type="submit">提交</button>
  //     </form>
  //     {todos.map((todo) => (
  //       <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
  //     ))}
  //   </div>
  // );
  /* useCallback example1 */
  // // useCallback可以确保在依赖项不变的情况下，不会重新创建useCallback里面的回调函数
  // const [number, setNumber] = useState(1);
  // const [dark, setDark] = useState(false);
  // const getItems = useCallback(
  //   (increasmentor) => {
  //     return [
  //       number + increasmentor,
  //       number + increasmentor + 1,
  //       number + increasmentor + 2,
  //     ];
  //   },
  //   [number]
  // );
  // const theme = {
  //   backgroundColor: dark ? '#333' : '#FFF',
  //   color: dark ? '#FFF' : '#333',
  // };
  // return (
  //   <div style={theme}>
  //     <input
  //       type="number"
  //       value={number}
  //       onChange={(e) => setNumber(parseInt(e.target.value))}
  //     />
  //     <button onClick={() => setDark((prevDark) => !prevDark)}>
  //       Toggle theme
  //     </button>
  //     <List getItems={getItems} />
  //   </div>
  // );
  /*  */
  /* custom hook example1 (自定义钩子)*/
  // const [name, setName] = useLocalStorage("name", "");
  // useUpdateLogger(name);
  // return (
  //   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  // );
  /* useLayoutEffect example1 */
  // // useLayoutEffect是同步的，useEffect是异步的，useLayoutEffect会在所有的DOM变更之后同步调用effect,可以用来读取DOM布局并同步出发渲染
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  // return (
  //   <>
  //     <button onClick={() => setCount((c) => c + 1)}>Increasment</button>
  //     <div>{count}</div>
  //   </>
  // );
  /* useTransition example1 */
  // // useTransition的作用在于区分代码块的优先级，在startTransition的回调函数中的代码的优先级较低，一般用于存放那些讲应用程序速度降低代码
  // const [isPending, startTransition] = useTransition();
  // const [input, setInput] = useState('');
  // const [list, setList] = useState([]);
  // const LIST_SIZE = 20000;
  // function handleChange(e) {
  //   setInput(e.target.value);
  //   startTransition(() => {
  //     const l = [];
  //     for (let i = 0; i < LIST_SIZE; i++) {
  //       l.push(e.target.value);
  //     }
  //     setList(l);
  //   });
  // }
  // return (
  //   <>
  //     <input type="text" value={input} onChange={handleChange} />
  //     {isPending
  //       ? 'Loading'
  //       : list.map((item, index) => {
  //           return <div key={index}>{item}</div>;
  //         })}
  //   </>
  // );
  /* useDeferredValue example1 */
  // // useDeferredValue用于拖延组件传递的值，防止数据过时，比如说在一个输入框中输入字符串，useDeferredValue可以获取到最终的值而忽略中间值
  // const [input, setInput] = useState('');
  // function handleChange(e) {
  //   setInput(e.target.value);
  // }
  // return (
  //   <>
  //     <input type="text" value={input} onChange={handleChange} />
  //     <List1 input={input} />
  //   </>
  // );
  /* useImperativeHandle example1 */
  // // useImperativeHandle用于改变ref的实例，在下面这个例子中，ref指向一个只有alterHi方法的对象
  // const [value, setValue] = useState('red');
  // const inputRef = useRef();
  // return (
  //   <>
  //     <CustomInput
  //       ref={inputRef}
  //       value={value}
  //       onChange={(e) => setValue(e.target.value)}
  //     />
  //     <br />
  //     <button onClick={() => inputRef.current.alertHi()}>Focus</button>
  //   </>
  // );
  /* useImperativeHandle example2 */
  // const [open, setOpen] = useState(false);
  // const modalRef = useRef();
  // return (
  //   <>
  //     <button onClick={() => setOpen(true)}>Open</button>
  //     <button onClick={() => modalRef.current.focusCloseBtn()}>
  //       Focus Close
  //     </button>
  //     <button onClick={() => modalRef.current.focusConfirmBtn()}>
  //       Focus Confirm
  //     </button>
  //     <button onClick={() => modalRef.current.focusDenyBtn()}>
  //       Focus Deny
  //     </button>
  //     <ConfirmationModal
  //       ref={modalRef}
  //       isOpen={open}
  //       onClose={() => setOpen(false)}
  //     />
  //   </>
  // );
  /* useId example1 */
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, suscipit!
        Sed dolorum enim doloribus velit illo quo commodi quas autem. Recusandae
        nemo nam iusto autem deleniti quaerat ullam temporibus delectus! Vero
        natus iusto numquam molestias, voluptates temporibus eius expedita
        culpa!
      </article>
      <EmailForm />
    </>
  );
}

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
