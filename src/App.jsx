import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './Components/Loading'
import { ProvideAuth } from './hooks/auth'
import PrivateRoute from './Components/PrivateRoute'

let data = null

const getData = () => {
  console.log('getData')
  if (data) {
    console.log('resolve')
    return Promise.resolve(data)
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('resolve')
      data = {
        code: 0,
        msg: 'success',
      }
      resolve(data)
    }, 300)
  })
}

const Home = Loadable.Map({
  loader: {
    Home: () => import('./pages/Home'),
    data: getData,
  },
  loading: Loading,
  render(loaded, props) {
    const Home = loaded.Home.default
    const data = loaded.data
    return <Home {...props} data={data} />
  },
})

const List = Loadable.Map({
  loader: {
    List: () => import('./pages/List'),
    data: getData,
  },
  loading: Loading,
  render(loaded, props) {
    const List = loaded.List.default
    const data = loaded.data
    return <List {...props} data={data} />
  },
})

const Login = Loadable({
  loader: () => import('./pages/Login'),
  loading: Loading,
})

function App() {
  return (
    <div className="h-full p-24 flex items-center justify-center">
      <section>
        <ProvideAuth>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/list">
              <List />
            </PrivateRoute>
          </Switch>
        </ProvideAuth>
      </section>
    </div>
  )
}

export default App
