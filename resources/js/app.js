import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import axios from 'axios'
import { InertiaProgress } from '@inertiajs/progress';
import AOS from 'aos';
import 'aos/dist/aos.css';

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers["Accept"] = "application/json";


AOS.init();
AOS.refresh();

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: true,
})

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})