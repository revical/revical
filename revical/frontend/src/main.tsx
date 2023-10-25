import { render } from 'preact';
import { App } from './app';

import { GetConfig } from "../wailsjs/go/main/App";

import "./assets/css/global.css";

for (const [key, value] of Object.entries(GetConfig())) {
    console.log(`${key}: ${value}`);
}

let appElement = document.getElementById('app')!;

render(<App />, appElement);
