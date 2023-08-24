# GDSC FPTU DN WEBSITE

![Logo](/public/android-chrome-512x512.png)

>This is the official website of GDSC FPTU DN. And before start contributing, please read this document carefully.

## Getting Started

First, make an copy of `.env.example` file and rename it to `.env.local` and fill in the required information.

```bash
cp .env.example .env.local
```

Then, install the dependencies (we recommend using `yarn`):

```bash
yarn
# or
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

This project has acceptance, integration and unit tests located inside the tests/ folder.

yarn test - CLI output
yarn test --server - Live browser preview and console access

## Deployment

This project is deployed on Vercel. Any push to the main branch will trigger a new deployment. But you can also deploy it manually by running:

```bash
yarn build 
```

Then, you can deploy the `out` folder to any static hosting service.

```bash
yarn start
```

## Contributions Best Practices

### Commits

- Write clear meaningful git commit messages (Do read <https://chris.beams.io/posts/git-commit/>)
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (More info at <https://github.com/blog/1506-closing-issues-via-pull-requests> )
- When you make very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at <https://davidwalsh.name/squash-commits-git> )
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

### Feature Requests and Bug Reports

- When you file a feature request or when you are submitting a bug report to the issue tracker, make sure you add steps to reproduce it. Especially if that bug is some weird/rare one.

### Join the development

- Before you join development, please set up the project on your local machine, run it and go through the application completely. Press on any button you can find and see where it leads to. Explore. (Don't worry ... Nothing will happen to the app or to you due to the exploring 😉 Only thing that will happen is, you'll be more familiar with what is where and might even get some cool ideas on how to improve various aspects of the app.)
- If you would like to work on an issue, drop in a comment with the estimated completion date at the issue. If it is already assigned to someone, but there is no sign of any work being done, please feel free to drop in a comment.
- If you have a feature in mind, create an issue for it and we can discuss it further on the issue itself.
