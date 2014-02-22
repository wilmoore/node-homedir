# homedir [![Build Status](https://travis-ci.org/wilmoore/node-homedir.png?branch=master)](https://travis-ci.org/wilmoore/homedir) [![Build Status](https://david-dm.org/wilmoore/homedir.png)](https://david-dm.org/wilmoore/homedir) [![NPM version](https://badge.fury.io/js/homedir.png)](http://badge.fury.io/js/homedir)

  Platform agnostic user home directory path resolution (i.e. `man 5 passwd`) for [Node.js][].

> The user's home directory. This is the full path name where the user will be placed on login.

#### OSX

    homedir();
    #=> /Users/wilmoore

    homedir('Guest');
    #=> /Users/Guest

#### Windows

    homedir();
    #=> C:\Users\wilmoore

    homedir('Public');
    #=> C:\Users\Public

#### Linux

    homedir();
    #=> /home/wilmoore

    homedir('guest');
    #=> /home/guest

## Installation

    npm install homedir --save

## Alternatives

- [userhome][]
- [home-dir][]


## License

  MIT

[userhome]: https://www.npmjs.org/package/userhome
[home-dir]: https://www.npmjs.org/package/home-dir
[Node.js]:  http://nodejs.org

