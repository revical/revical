package main

import (
	"context"
	"os"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// Whether to use portable mode or not
var REVICAL_PORTABLE_MODE = os.Getenv("REVICAL_PORTABLE_MODE")

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetConfig() map[string]string {
	return map[string]string{"a": "1"}
}

func (a *App) WindowMaximise() {
	runtime.WindowMaximise(a.ctx)
}

func (a *App) WindowMinimise() {
	runtime.WindowMinimise(a.ctx)
}

func (a *App) Quit() {
	runtime.Quit(a.ctx)
}
