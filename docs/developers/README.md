<!-- Part of the Revical Project, under the MIT license. See '/LICENSE' for license information. SPDX-License-Identifier: MIT License. -->

# 🛠️ Developer Documentation

- [🛠️ Developer Documentation](#️-developer-documentation)
  - [🖥️ Environment Setup](#️-environment-setup)
    - [Cloning the Repository](#cloning-the-repository)
  - [Making Changes](#making-changes)
    - [Testing Code](#testing-code)
    - [Compiling Code](#compiling-code)
  - [📁 Code Structure](#-code-structure)

## 🖥️ Environment Setup

> [!IMPORTANT]\
> GitHub Codespaces uses devcontainers to setup development environments. If you are using GitHub Codespaces, you can skip this section. This is because we have a devcontainer setup ready.

Requirements to setup the development environment for Revical:

- [**Git**](https://git-scm.com/downloads) - For cloning the repository.
- [**Wails**](https://wails.app/) - Used to build the frontend and backend together.
  - Wails has an [**Install Guide**](https://wails.io/docs/gettingstarted/installation) guide that is recommended to follow. Wails has other dependencies, but they will not be listed here to avoid redundancy.

### Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/revical/revical
cd revical/revical
```

## Making Changes

### Testing Code

Run **`wails dev`** to start the development server. The application will be available at `localhost:34115`. You can find more information about the `wails dev` command in the [**Wails Documentation**](https://wails.io/docs/reference/cli/#dev).

> [!NOTE]\
> Wails automatically monitors the directory for changes, and if it finds any, it rebuilds the application.

### Compiling Code

Run **`wails build`** to build the application. The application will be available at `build/bin`. You can find more information about the `wails build` command in the [**Wails Documentation**](https://wails.io/docs/reference/cli/#build).

## 📁 Code Structure
