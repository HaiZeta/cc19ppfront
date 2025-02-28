import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import App from '../App'

const guestRouter = createBrowserRouter([
	{ path : '/', element: <p>home</p>},
	{ path : '*', element: <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element : <App />, 
		children : [
			{path: '', element :<>
			        <p>test</p>
			</>},
			{path: 'friends', element : <p>Friends Page</p>},
			{path: '*', element : <Navigate to='/' />}
		]
	},
	
])

export default function AppRouter() {
	const user = useUserStore(state=>state.user)
	const finalRouter = user ? userRouter : guestRouter
	return(
		<RouterProvider router={finalRouter} />
	)
}