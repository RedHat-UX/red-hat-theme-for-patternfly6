# Red Hat Design System Theme

The Red Hat Design System Theme is an ongoing initiative to adapt and standardize the CSS styles of components from [PatternFly](https://www.patternfly.org/) and [PatternFly Elements](https://patternflyelements.org/) to align with the Red Hat Design System. This initiative ensures design and user experience consistency across Red Hat’s digital products, in full alignment with the standards and guidelines established in the [Red Hat Design System](https://ux.redhat.com/).

## Usage

To integrate the Red Hat Design System (RHDS) theme into your project, follow the steps below:

### Install the RHDS Theme
Run the following command to install the rhds-theme package via npm:

```
npm install rhds-theme
```

### Import the RHDS CSS
In your main application file (e.g., index.js or App.js), import the RHDS theme CSS. Ensure that the RHDS theme has precedence over other framework styles by placing the import statement at the appropriate location:

```
import 'rhds-theme/dist/rhds-theme.css';  // Import RHDS theme
```

It is recommended to place this import after any other CSS imports to ensure that the RHDS theme styles take priority over framework-specific styles.

By following these steps, the RHDS theme will be applied to your project, providing a consistent design and user experience in line with the Red Hat Design System.