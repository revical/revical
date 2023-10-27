import { render } from 'preact';
import { App } from './components/app';

import { GetConfig } from "../wailsjs/go/main/App";

let appElement = document.getElementById('app')!;

render(<App />, appElement);
