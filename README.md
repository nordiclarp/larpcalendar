# Larp Calendar

![Larp Calendar logo](assets/logo/larpcalendar-logo-light.png?raw=true 'Larp Calendar')

_Larp Calendar logo designed by [Niklas Rhöse](https://neostate.net/)._

[Larp Calendar](https://larpcalendar.org/) is a website for keeping track of larp events accepting international participants.

This repository contains the source code for the website as well as some documentation on how to contribute.

## Tech Stack

The core technical ideals of this project is to maintain a modern codebase with a professional grade structure and avoid user hostile patterns and technologies like tracking, dark patterns and such.

### Repository

This is a monorepo built on [Nx](https://nx.dev). In short it's a tool that helps us keep a clean structure and helps us write better code.

### Backend

The site backend is a [NodeJS](https://nodejs.org/) api build on [NestJS](https://nestjs.com/) using [Prisma](https://www.prisma.io/) for database management and [Passport](https://www.passportjs.org/) for authentication. For local development [Docker](https://www.docker.com/) is used to run a local [Postgres](https://www.postgresql.org/) database.

### Frontend

The site frontend is built on [Next.js](https://nextjs.org/) with the [Chakra UI](https://chakra-ui.com/) library for styling and interface. We strive for keeping the code modular, easy to maintain and as testable as possible.

## Recommended Tools

- [Visual Studio Code](https://code.visualstudio.com/) for editing code. There is a vscode workspace set up in the repository to help you follow the standards and settings of the project.
- [GitHub Desktop](https://desktop.github.com/) for source control if you are not a fan of command line git use.
- [commitizen](https://github.com/commitizen/cz-cli) for clean git commit messages.

## Local Development

### Pre-requisites

To run the project locally you need:

- [git](https://git-scm.com/) for source control.
- [node.js](https://nodejs.org/) version 16 to run the code.
- [Docker](https://www.docker.com/) to run a local database.

### Getting Started

Check out the code from Github using your favorite method.

Enter the project directory and run `npm install` to install packages.

Copy the file `.env.example` to `.env`.

Open the file `larpcalendar.code-workspace` in Visual Studio Code and install the suggested plugins.



Run the npm script `start:dev`, either from within Visual Studio Code or from the command line with `npm run start:dev`. This will start the Docker container with the database, migrate the database schema, seed it with data, start Prisma Studio, start the api server and start frontend web server.

You can now access Prisma Studio on <http://localhost:5555>, the api server on <http://localhost:3333> and the website itself on <http://localhost:4200/>.

The frontend app uses hot module reloading, so any changes in the code should automatically reload the page.

### Mock Data

There is a handful of default events pre-populated in the mock database.

There are several users for testing auth. There is one admin user with the email address `admin@example.com`. All other users are regular users. All users including admin have the password `password`.

There are several organizer profiles. Each have at least one admin user and one regular contributor attached to them. They also each have some events.

You can make any changes you like to the mock data in the ui. All data is reset when data is seeded again.

The easiest way to run migrations and reseed data is to just restart the `start:dev` npm script.

### Running Tests

Run `npm test:dev` to run the test. Tests run on a separate fresh database

### Adding a Feature

To add features to the project you must use Nx generators. These will scaffold components for you with tests and proper defaults. The easiest way to do this is with the Nx plugin in Visual Studio Code. If you want to use the command line you can read more on how to in the [Nx Generators documentation](https://nx.dev/l/r/generators/using-schematics).

The api and client reside in the `apps` folder.

Libs supporting these are in the `libs` folder.

### Committing Code

This repository uses Husky to lint and test the code before allowing a commit.

Please use commitizen to write a concise and clear commit message following the [conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

When a pull request is created on Github a continous integration/continuous deploy workflow will run that lints, tests, builds and deploys the app to a temporary test site. (WIP)

### Contact

You can use the [issues tab](https://github.com/nordiclarp/larpcalendar/issues) in this repository to report bugs or suggest improvements.

If you have any questions, don't hesitate to reach out! You can reach me on [johannes@axner.io](mailto:johannes@axner.io) or join our community in the [Nordic Larp Discord](https://discord.gg/bGvAFDsDwV).
