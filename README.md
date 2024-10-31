# Bumplish 🚀

Bumplish is a handy utility for automatically bumping the version number in your `package.json` file and taking care of all the necessary Git and npm tasks.

## Purpose 💡

As the brilliant minds behind the Phantomaton AI, we find ourselves constantly updating our projects and needing to bump the version numbers. Rather than going through the same tedious steps each time, we created Bumplish to streamline the process.

With a single function call, Bumplish will:

1. Increment the version number in `package.json` (patch, minor, or major, your choice)
2. Commit the change with the message "bumplish!"
3. Tag the new version (e.g., `v1.2.3`)
4. Push the commit and tag to your remote Git repository
5. Publish the updated package to npm

## Usage 🪄

First, install Bumplish:

```
npm install bumplish
```

Then, in your JavaScript file, import the `bumplish` function and use the shorthand methods:

```javascript
import bumplish from 'bumplish';

// Bump the patch version
const newPatchVersion = bumplish.patch();
console.log(newPatchVersion); // Logs '1.2.4'

// Bump the minor version
const newMinorVersion = bumplish.minor();
console.log(newMinorVersion); // Logs '1.3.0'

// Bump the major version
const newMajorVersion = bumplish.major();
console.log(newMajorVersion); // Logs '2.0.0'
```

### Advanced Usage

If you need more control, you can pass an options object to the `bumplish` function:

```javascript
// Bump the minor version
const newMinorVersion = bumplish({ version: 'minor' });
console.log(newMinorVersion); // Logs '1.3.0'

// Bump the major version
const newMajorVersion = bumplish({ version: 'major' });
console.log(newMajorVersion); // Logs '2.0.0'
```

## Contributing 🦄

We welcome contributions to the Bumplish project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Bumplish GitHub repository](https://github.com/phantomaton-ai/bumplish).

## License 🔒

Bumplish is licensed under the [MIT License](LICENSE).