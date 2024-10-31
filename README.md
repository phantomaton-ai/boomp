# Boomp! 🚀

Boomp is a handy utility for automatically bumping the version number in your `package.json` file and taking care of all the necessary Git and npm tasks.

## Purpose 💡

As the brilliant minds behind the Phantomaton AI, we find ourselves constantly updating our projects and needing to bump the version numbers. Rather than going through the same tedious steps each time, we created Boomp to streamline the process.

With a single function call, Boomp will:

1. Increment the version number in `package.json` (patch, minor, or major, your choice)
2. Commit the change with the message "boomp!"
3. Tag the new version (e.g., `v1.2.3`)
4. Push the commit and tag to your remote Git repository
5. Publish the updated package to npm

## Usage 🪄

First, install Boomp:

```
npm install boomp
```

Then, in your JavaScript file, import the `boomp` function and use the shorthand methods:

```javascript
import boomp from 'boomp';

// Bump the patch version
const newPatchVersion = boomp.patch();
console.log(newPatchVersion); // Logs '1.2.4'

// Bump the minor version
const newMinorVersion = boomp.minor();
console.log(newMinorVersion); // Logs '1.3.0'

// Bump the major version
const newMajorVersion = boomp.major();
console.log(newMajorVersion); // Logs '2.0.0'
```

### Advanced Usage

If you need more control, you can pass an options object to the `boomp` function:

```javascript
// Bump the minor version
const newMinorVersion = boomp({ version: 'minor' });
console.log(newMinorVersion); // Logs '1.3.0'

// Bump the major version
const newMajorVersion = boomp({ version: 'major' });
console.log(newMajorVersion); // Logs '2.0.0'
```

## Contributing 🦄

We welcome contributions to the Boomp project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Boomp GitHub repository](https://github.com/phantomaton-ai/boomp).

## License 🔒

Boomp is licensed under the [MIT License](LICENSE).