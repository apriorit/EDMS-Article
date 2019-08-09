# Micro-frontends with Web Components


## To start Angular progect
1. Clone `micro-angular` repo
2. Clone `wrapper` repo
3. Go to your cloned `micro-angular`:
    * Run `npm install` in root
    * In file `micro-angular/src/app/app.module.ts` - set your custom tag to render your app `customElements.define('your-custom-tag-name', ngCustomElement);`
    * In file `package.json` set port to run your app `"start": "npm run build && serve -l 5001 dist/micro-fe-ng"` by default 5001. Port must be unique, it should be different from other micro frontends
    * Run `npm run start` in root
4. Go to your cloned `wrapper`:
    * Run `npm install` in root
    * Add variable with host url of your Angular app to `.env` file `REACT_APP_YOUR_APP_HOST = http://localhost:5001`
    * In file `wrapper/src/utils/FrontManager.js` create function to render your site:
    ```
    const YourSiteContent = ({ history }) => (
         <FrontManager history={history}
         host={REACT_APP_YOUR_APP_HOST}
         appEl="your-custom-tag-name"
         appName="Your-site-name" />);
    ```
    and edd YourSiteContent to export
    * Put `<YourSiteContent />` where you want to show it.
5. Run `npm run start` - go to http://localhost:3000


## To start React progect
1. Clone `micro-react` repo
2. Clone `wrapper` repo
3. Go to your cloned `micro-react`:
    * Run `npm install` in root
    * In file `micro-react/src/index.js` - set your custom tag to render your app `customElements.define('your-custom-tag-name', ReactElement);`
    * In file `package.json` set port to run your app `"start": "npm run build && serve -l 5002 dist"` by default 5002. Port must be unique, it should be different from other micro frontends
    * Run `npm run start` in root
4. Go to your cloned `wrapper`:
    * Run `npm install` in root
    * Add variable with host url of your Angular app to `.env` file `REACT_APP_YOUR_APP_HOST = http://localhost:5002`
    * In file `wrapper/src/utils/FrontManager.js` create function to render your site:
    ```
    const YourSiteContent = ({ history }) => (
         <FrontManager history={history}
         host={REACT_APP_YOUR_APP_HOST}
         appEl="your-custom-tag-name"
         appName="Your-site-name" />);
    ```
    and edd YourSiteContent to export
    * Put `<YourSiteContent />` where you want to show it.
5. Run `npm run start` - go to http://localhost:3000


##### Note: If you have already cloned the wrapper, you shouldn't do it twice, you should only add the configuration to the `.env` and `wrapper/src/utils/FrontManager.js` files.
