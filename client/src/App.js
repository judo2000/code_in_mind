import Navbar from './components/Navbar';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Courses from './components/Courses';
import Course from './components/SingleCourse';
import { Login } from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { Signup } from './components/Signup';
import { CreateCourse } from './components/CreateCourse';
import Footer from './components/Footer';
import './css/style.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <header className='App-header'>
        <Navbar />
      </header>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
            Home
          </Route>
          <Route exact path='/courses' element={<Courses />}>
            About
          </Route>
          <Route exact path='/courses/:id' element={<Course />}>
            Course
          </Route>
          <Route exact path='/courses/create' element={<CreateCourse />}>
            Create Course
          </Route>
          <Route exact path='/about' element={<About />}>
            About
          </Route>
          <Route exact path='/contact' element={<Contact />}>
            Contact
          </Route>
          <Route exact path='/dashboard' element={<Dashboard />}>
            Dashboard
          </Route>
          <Route exact path='/login' element={<Login />}>
            Login
          </Route>
          <Route exact path='/signup' element={<Signup />}>
            Signup
          </Route>
        </Routes>
      </Router>
      <br />
      <br />
      <br />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
