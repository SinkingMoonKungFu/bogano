import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import routes from '~react-pages';

import "./assets/scss/_root.scss";


function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Suspense fallback={<p>Loading...</p>}>
                {useRoutes(routes)}
            </Suspense>
        </LocalizationProvider>
    );
}

export default App;