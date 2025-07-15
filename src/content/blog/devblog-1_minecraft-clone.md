---
title: 'Minecraft Clone - Devblog #1: Project Overview'
description: 'This blog post introduces the Minecraft Clone project, discussing its goals, features, and the technologies used in its development.'
pubDate: '2023-07-13'
tags: ['devblog', 'projects', 'game', 'development', '3D', 'c|c++']
---

# Introduction
## Motivation
I have seen that many people when they start learning OpenGL or game development(with no GUI engine) they start with a Minecraft clone. It always gave me a butterfly in my stomach, so I decided to try it myself. There are a lot of tutorials on how to create it, so if I will struck to a problem that I can't solve, I will to find solution based on what people did. But I want to try to do it myself, so I can learn something new. 
## What is Minecraft Clone?
Minecraft Clone is a project that aims to recreate the core mechanics and features of the popular game Minecraft. The goal is to create a simple, yet functional, version of the game that can be used as a learning tool for understanding game development concepts, such as rendering, input handling, and game logic.

# Features
- **Voxel-based world**: The game will use a voxel-based world, similar to Minecraft, where each block is represented as a cube.
- **Chunk system**: The world will be divided into chunks, which are small sections of the world that can be loaded and unloaded dynamically. This will help manage memory usage and improve performance.
- **Basic player movement and physics**: The player will be able to move around the world, jump, and interact with blocks.
- **Block interaction**: The player will be able to place and remove blocks, allowing for basic building mechanics.

## Features to be added later
- **Basic lighting**: The game will implement a simple lighting system to simulate day and night cycles.
- **Inventory system**: The player will have an inventory to manage blocks and items.
- **Basic crafting**: Simple crafting mechanics with a few recipes.
- **Multiplayer support**: The game will support multiplayer.
- **Health**: The player will have an ability to take damage and die.

# Technologies Used
- **C++**: The primary programming language for the project, chosen for its performance and control over system resources. I will enforce Modern C++ Memory Safety Practices and use smart pointers to manage memory.
- **OpenGL**: The graphics API for rendering the 3D world.
- **GLFW**: A library for creating windows and handling input events.
- **GLM**: A mathematics library for OpenGL, providing vector and matrix operations.
- **ImGUI**: A graphical user interface library for creating in-game menus and debugging tools.
- **CMake**: A build system to manage the project and its dependencies.
Something may be added later as I progress with the project, but these are the core technologies that will be used for sure.

# Project Structure
The project will be organized into several directories to keep the codebase clean and maintainable:
- **Engine**: Umbrella directory for the modules of the engine.
  - **Core**: Contains the core engine logic, such as the main loop and input handling.
  - **Renderer**: Contains the rendering code, including shaders and rendering pipelines.
  - **Other modules**: Additional modules for features like physics, audio, and networking will be added as needed.

- **External**: Contains third-party libraries and CMake dependecies fetching.

- **Game**: Runtime entry point for the game.

Modules will look like this:
```
<module_name>
  |-- include
  |   |-- *.hpp
  |-- src
  |   |-- *.cpp
  |-- CMakeLists.txt
```
# Conclusion
This is just the beginning of the Minecraft Clone project. In the next devblog post, I will post the progress on the block rendering system.