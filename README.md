# Fearless

## Summary

A phone app for helping people overcome their fears and phobias.
The app centers around a swipable card wrapper that forces the user to look at the card for a certain amount of time, before allowing the user to continue by either swiping right, or tap a button saying "Continue".
Alternatively the user could swipe left, or tap a button saying "Take a break" (without waiting for the timer) which would give them an option to meditate or leave the app and get reminded to come back the next day.
The app will show the user these flash cards one after another ensuring they are feeling safe after each one, and gradially increase their exposure to more scary activities

The activities on a flash card could be

- words
- images
- videos
- real-life exercises.

Once the user completes all of the flash cards on a program they have effectively overcome their phobia.

The app structure is made up of:

- A Registration/Login page
- A home page, showing statistics of how far through the program the user is, and how their curent fear rating is compared to when they first started the program. ( If the user hasn't started a program it'll display a placeholder and a link to the Start New Program page)
- A "Start New Program" page
- A "Program Details" page, showing details of what the phobia is, and what the treatment program entails.
- A program page, which is the main purpose of the app displaying all the flash cards for the user.
- A Meditation page, that will help the user calm down from a difficult activity, or stressor.

Depending on how i want to handle monetisation the "Start New Program" page might also have a purchase/transaction interface.

## Development

Install dependencies:

```bash
npm install
```

Start a development server: (and open the app in a new browser tab)

```bash
npm run dev -- --open
```

To create a production version of your app:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

To deploy:
Deploy to `master` git branch

#todo - Actually setup a live site, and CICD Pipeline

To Lint:

```bash
npm run lint
```

To auto-format code

```bash
npm run format
```

To run Unit tests:

```bash
npm run test:unit
```

To run End to End tests:

```bash
npm run test
```

## Tech

- Powered by [`Svelte`](https://svelte.dev/).
- Unit Tests by ['Vitest'](https://vitest.dev/)
- End To End Tests by ['Playwright'](https://playwright.dev/)
- Data stored on Device (currently no database required)

test
