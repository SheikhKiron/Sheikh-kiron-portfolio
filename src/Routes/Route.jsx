import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';
import Services from '../Pages/Services/Services';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      {path:'/about', Component:About},
      {path:'/projects', Component:Projects},
      {path:'/services', Component:Services},
      {path:'/contact', Component:Contact},
    ]
  },
]);

export default router;