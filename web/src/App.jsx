import { useState } from 'react'
import './App.css'
import { Button, DatePicker, Flex, Layout, Splitter } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <Profile/>
    </>
  )
}

function Profile(){
	
	return (
		<>
		<Layout>
		<Header  style={ { backgroundColor: "blue", } }>

		<Splitter style={{ height: "100%", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', }} >
		<Splitter.Panel defaultSize="70%" min="20%" max="90%">
		<p>First</p>
		</Splitter.Panel>
		<Splitter.Panel>
		<p>Second</p>
		</Splitter.Panel>
		</Splitter>

		</Header>
		<Content  style={ { backgroundColor: "red", } } >Content</Content>
		<Footer  style={ { backgroundColor: "green", } } >Footer</Footer>
		</Layout>
		</>
	)
}

export default App
