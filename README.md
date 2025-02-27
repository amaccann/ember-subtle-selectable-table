# (Ember) Testing table behaviours

- Bootstrapped `ember` using its CLI to get a sense of its behaviours
- esssentially copies the `react` version in terms of functionality
  - (albeit with slightly less exacting CSS, kinda ran outta time)
- [ReactJS version here](https://github.com/amaccann/subtle-selectable-table)
- didnt bother with any Tests, just to save some time.
- As with the React one, didn't have time to add some `eslint` driven formatting, or parity on the CSS
- Just a fun bonus repo 😊

### URL & Build status

https://ember-subtle-selectable-table.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/d26080f8-d5a5-41c0-94b1-87e77f900f8c/deploy-status)](https://app.netlify.com/sites/ember-subtle-selectable-table/deploys)

### Install / development

##### Unlike the `react` repo, this works in `npm` not `yarn`.

- Clone the repo
- `npm install` to install all deps (`npm install` should work fine too)
- `npm start` to run the development server
- `npm build` to create build (that's uploaded to netlify URL ☝️)

### Code notes:

- Pretty raw with `ember` so I'm sure there are smarter ways to fetch load the data
