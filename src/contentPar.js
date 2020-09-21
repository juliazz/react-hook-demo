import React,{useContext ,createContext} from 'react';

// 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，
// 这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。


const ThemeContext = React.createContext('light');

function ContentPar(){
  // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
  // 无论多深，任何组件都能读取这个值。
  // 在这个例子中，我们将 “dark” 作为当前的值传递下去。

  // 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
  // 这有助于在不使用 Provider 包装组件的情况下对组件进行测试。
  // 注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效

  // Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。
  // 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
  return(
    <ThemeContext.Provider value="block1">
      
      <Toolbar />
    </ThemeContext.Provider>
  )
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
function ThemedButton(){
   // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
   // 在这个例子中，当前的 theme 值为 “dark”。
  const contextType = useContext(ThemeContext)
  // 两种使用方式 Consumer 和  useContext
  return (
  <ThemeContext.Consumer>{
    value=> <input value={value} />
    }</ThemeContext.Consumer>
    // <input value={contextType} />
  )
}

export default ContentPar