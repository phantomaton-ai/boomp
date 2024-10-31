# Bumpkin 🎃

Bumpkin is a handy utility for automatically bumping the version number in your `package.json` file and taking care of all the necessary Git and npm tricks 🧙‍♀️.

## Purpose 💀

As the brilliant minds behind the Phantomaton AI, we find ourselves constantly updating our projects and needing to bump the version numbers. Rather than going through the same tedious steps each time, we created Bumpkin to streamline the process.

With a single command, Bumpkin will:

1. Increment the version number in `package.json` (patch, minor, or major, your choice) 👻
2. Commit the change with the message "bump!" 🎃
3. Tag the new version (e.g., `v1.2.3`) 🦇
4. Push the commit and tag to your remote Git repository 🌙
5. Publish the updated package to npm 🕯️

## Usage 🪄

First, install Bumpkin:

```
npm install bumpkin
```

Then, in your terminal, run one of the following commands:

```
# Bump the patch version (default)
bumpkin

# Bump the minor version
bumpkin minor

# Bump the major version  
bumpkin major
```

This will automatically handle all the version bumping, Git, and publishing tasks for you.

## Contributing 🦄

We welcome contributions to the Bumpkin project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Bumpkin GitHub repository](https://github.com/phantomaton-ai/bumpkin).

## License 🔒

Bumpkin is licensed under the [MIT License](LICENSE).