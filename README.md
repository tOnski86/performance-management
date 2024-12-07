# Simple User Management

## About

Documentation outlining the various phases of implementing a simple platform to manage users.

## Project Overview

This application is a general purpose user management system that managers can use to keep track of users and their respective targets and issues.

## Target Users

To be used by team managers, this application aims to provide objective feedback of user performance against defined goals, and timely assistance to issues.

## Entities

A table of entities and their relationships.

| Entity   | Relationship                                                                 | Description                                                                                                            |
| -------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Team`   | One-to-Many with `Role`                                                      | A Team represents a formal organizational entity with a defined purpose and structure.                                 |
| `Role`   | Many-to-One with `Team`, One-to-Many with `User`                             | A Role is a specialized position within a Team that defines a specific set of responsibilities, and expected outcomes. |
| `User`   | Many-to-One with `Role`, One-to-Many with `Target`, One-to-Many with `Issue` | A User is an individual assigned to a single Role within a specific Team.                                              |
| `Target` | Many-to-One with `User`                                                      | A Target is a mandatory, measurable goal exclusively associated with a User.                                           |
| `Issue`  | Many-to-One with `User`                                                      | An Issue represents a challenge encountered by a User in executing their Role.                                         |

## Schema

The schema describes the relationship between the different entities in the application.

![Screenshot 2024-12-07 052607](https://github.com/user-attachments/assets/6d194dae-99d1-4849-84c8-71fb8aa02e42)

## Technology Stack

An overview of the technologies used in this application.

| Requirements        | Technology           | Description                                                         |
| ------------------- | -------------------- | ------------------------------------------------------------------- |
| Frontend Library    | React                | A JavaScript library for building user interfaces.                  |
| Local UI State      | useState, useContext | Built-in React state and context subscription hooks.                |
| Remote Server State | React Query          | Managing, caching and syncing asynchronous and remote data.         |
| Routing             | React Router         | Managing URL routes and data for Single-Page Applications.          |
| Forms               | React Hook Form      | Managing form validation.                                           |
| Styling             | Styled Components    | CSS-in-JS library for component-level styles.                       |
| Database            | Supabase             | Real-time database, authentication and access to a RESTful API.     |
| Build and Deployment    | Vite, Vercel         | This application uses Vite for its build tool,  deployed in Vercel. |
