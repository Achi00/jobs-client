# Jobs Client Application

**App Url**: https://linkedin.wordcrafter.io/

## Overview

The Jobs Client Application is a web-based platform designed to interact with custom express.js API which scrapes jobs data from linkedin and saves it in mongoDB database.

## Repos of custom Express.js API:

https://github.com/Achi00/jobs-server

## Tech Stack

- **Frontend**: Next.JS

- **Backend**: Node.js with Express.js

- **Database**: MongoDB

- **Authentication**: Google OAuth 2.0

## Features

- **Google Authentication**:
  • Users can log in using their Google accounts.
  • User is able to set up profile from /profile page and get featured jobs listing based on there entered data which are

  - Skills: this skill input in profile page provides input field which is attachhed to hard coded data
  - Experience: this field inclides: `Job title`, `Company name`, `Duration`

- **Job Listings**: The application fetches and displays job listings from a API, allowing users to browse and search for jobs with 2 options: `All Jobs` and `Featured Jobs`

- API scrapes jobs from https://www.linkedin.com based on `location` and `query`,
  in this case query is set to `query`: `Engineer`, because this engineering jobs app
