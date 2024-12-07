# Simple User Management

## About

Documentation outlining the various phases of implementing a simple platform to manage users.

## Project Overview

This application is a general purpose user management system that managers can use to keep track of users and their respective targets and issues.

## Target Users

To be used by team managers, this application aims to provide objective feedback of user performance against defined goals, and timely assistance to issues.

## Schema

The schema describes the relationship between the different entities in the application.

![Screenshot 2024-12-07 052607](https://github.com/user-attachments/assets/6d194dae-99d1-4849-84c8-71fb8aa02e42)

## Entities

A list of entities and their relationships.

### Team

**Relationship:** One-to-Many with `Role`

A Team represents a formal organizational entity with a defined purpose and structure.

### Role

**Relationships:** Many-to-One with `Team`, One-to-Many with `User`

A Role is a specialized position within a Team that defines a specific set of responsibilities, and expected outcomes.

### User

**Relationships:** Many-to-One with `Role`, One-to-Many with `Target`, One-to-Many with `Issue`

A User is an individual assigned to a single Role within a specific Team.

### Target

**Relationship:** Many-to-One with `User`

A Target is a mandatory, measurable goal exclusively associated with a User. It provides a quantifiable objective that directly aligns with the User's Role.

### Issue

**Relationship:** Many-to-One with `User`

An Issue represents a challenge encountered by a User in executing their Role.

## Technology Stack

An overview of the technologies used in this application.

### Frontend Library

This application uses React, a JavaScript library for building user interfaces.

### State Management

To manage the local UI state, this application uses the built-in React state and context subscription hooks. For remote server state, this application uses React Query.

### Routing

React Router is used to manage URL routes and data in this Single-Page Application.

### Forms

To create and manage form validation, this application uses React Hook Form.

### Styling

This application uses Styled Components, a CSS-in-JS library for component-level styles.

### Database

This application uses Supabase, providing real-time databases, authentication and access to a RESTful API.

### Build Tool and Deployment

This application uses Vite for its build tool, and deployed in Vercel.
