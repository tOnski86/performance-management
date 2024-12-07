# Simple User Management

---

## About

Documentation outlining the various phases of implementing a simple platform to manage users.

### Project Revisions

> [!tip] Managing Revisions
> Revisions to this project will be tagged with a callout when it occurs in the project lifecycle.

## Project Overview

---

This application is a general purpose user management system that managers can use to keep track of users and their respective targets and issues.

## Target Users

---

To be used by team managers, this application aims to provide objective feedback of user performance against defined goals, and timely assistance to issues.

## Schema

---

The schema describes the relationship between the different entities in the application.

![[Pasted image 20241207052610.png]]

## Entities

---

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

---

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

## Wireframe

---

Application design

## Components

---

Reusable components
