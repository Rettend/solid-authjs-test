# SolidStart + AuthJS

## Setup a GitHub app

In order to run this example, you need to setup a GitHub app here: <https://github.com/settings/developers>, to get a client secret and client id which should be added to the .env file. Also, in the GitHub app settings under OAuth2, set the Return URL to: <http://localhost:3000/api/auth/callback/github>

## AuthJS

Everything you need to build an [AuthJS](https://authjs.dev/) authenticated Solid project, powered by [`solid-start`](https://start.solidjs.com);

This will start a production server on port `3000`.

### Environment Variables

- `AUTH_GITHUB_ID`=
- `AUTH_GITHUB_SECRET`=
- `AUTH_SECRET`=b198e07a64406260b98f06e21c457b84
- `AUTH_TRUST_HOST`=true
- `AUTH_URL`=<http://localhost:3000>
- `VITE_AUTH_PATH`=/api/auth

[Sponsor Create JD App](https://github.com/sponsors/OrJDev)

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
