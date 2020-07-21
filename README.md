# [![Akkadu][akkadu-logo]][akkadu-url] Eslint Config

<!-- PROJECT SHIELDS -->
<!--
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
*** See bottom of page for list of reference links
-->
[![NPM Total Downloads][npm-shield]][npm-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Language grade: JavaScript][lgtm-shield]][lgtm-url]
[![FOSSA Status][fossa-shield]][fossa-url]
![Version][version-shield]
[![Maintenance][maintenance-shield]][maintenance-url]
[![David Dependencies Status][david-dm-shield]][david-dm-url]
[![styled with prettier][prettier-shield]][prettier-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Get started on Javascript projects at Akkadu much quicker by using this template repository.

[Explore the docs »](https://github.com/Akkadu/eslint-config-akkadu)

[View Demo](https://github.com/Akkadu/eslint-config-akkadu) • [Report Bug](https://github.com/Akkadu/eslint-config-akkadu/issues) • [Request Feature](https://github.com/Akkadu/eslint-config-akkadu/issues)

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [![Akkadu Eslint Config](#akkadu-eslint-config)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Roadmap](#roadmap)
  - [Edge Cases Addressed](#edge-cases-addressed)
  - [Contributing](#contributing)
  - [Author](#author)
  - [Dependencies](#dependencies)
  - [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

This is Akkadu's living Javascript linting standard. It's created and maintained by the core Akkadu Tech Force and designed to enforce more readable and efficient code.

### Built With

These are the major linting plugins integrated with our own linting rules.

* [Airbnb Eslint Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [Prettier](https://prettier.io/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* yarn

```sh
npm install yarn@latest -g
```

### Installation

1. Clone the repo
2. Get the .env keys from techforce@akkadu-team.com

```sh
git clone https://github.com/Akkadu/eslint-config-akkadu.git
```

3. Install NPM packages

```sh
yarn install
```

<!-- USAGE EXAMPLES -->
## Usage

```sh
yarn add -D prettier eslint-config-akkadu
```

.eslintrc

```json
{
  "extends": ["eslint-config-akkadu"]
}
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Akkadu/eslint-config-akkadu/issues) for a list of proposed features (and known issues)

<!-- EDGE CASES -->
## Edge Cases Addressed
`eslint-config-akkadu` also adds a few rules that have had some problems in the recent past. These are the kinds of problems that may be inconsistent in occurence and will probably prop up as your dependency versions change:

1. **`babel-eslint` template literal indentation** ([`babel/babel-eslint` issue #799](https://github.com/babel/babel-eslint/issues/799#issuecomment-651954838))
    Depending your current version of `babel-eslint` or `@babel/parser`, the following ESlint error may present itself in places that use template literals in code:
    ```bash
    TypeError: Cannot read property 'range' of null
    ```

    This was fixed by adding the following snippet to the indent rule:
    
    _Source: [babel/babel-eslint#799 (comment)](https://github.com/babel/babel-eslint/issues/799#issuecomment-651954838)_

    ```json
    {
      "rules": {
        "indent": [
          "error",
          2,
          {
            "SwitchCase": 1,
            "ignoredNodes": [
              "TemplateLiteral"
            ]
          }
        ],
        "template-curly-spacing": 0
      }
    }
    ```

    This issue will be resolved by future versions of Babel. We can remove if from the config then.

<!-- CONTRIBUTING -->
## Contributing

Want to make a change? Any contributions you make are **greatly appreciated**.

1. Clone the repo
2. Create your Feature Branch (`gco -b release/my-project`)
3. Commit your Changes (`git commit -m 'add: small addition'`)
4. Push to the Branch (`git push origin release/my-project`)
5. Open a Pull Request

<!-- AUTHORS -->
## Author

👤 **JT Houk <jt1992@gmail.com>**

* Website: [jt.houk.space](https://jt.houk.space/)
* Twitter: [@HoukasaurusRex](https://twitter.com/HoukasaurusRex)
* Github: [@HoukasaurusRex](https://github.com/HoukasaurusRex)
* LinkedIn: [@JT Houk](https://linkedin.com/in/jt-houk)

<!-- DEPENDENCIES -->
## Dependencies

[![FOSSA Status][fossa-scan]][fossa-url]

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[akkadu-logo]: https://res.cloudinary.com/jthouk/image/upload/e_improve,w_30,h_30/v1570345513/Logos/akkadu-logo-white-simple.png
[akkadu-url]: https://akkadu.com
[npm-shield]: https://img.shields.io/npm/dt/eslint-config-akkadu.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-akkadu
[contributors-shield]: https://img.shields.io/github/contributors/Akkadu/eslint-config-akkadu.svg?style=flat-square
[contributors-url]: https://github.com/Akkadu/eslint-config-akkadu/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Akkadu/eslint-config-akkadu.svg?style=flat-square
[forks-url]: https://github.com/Akkadu/eslint-config-akkadu/network/members
[stars-shield]: https://img.shields.io/github/stars/Akkadu/eslint-config-akkadu.svg?style=flat-square
[stars-url]: https://github.com/Akkadu/eslint-config-akkadu/stargazers
[issues-shield]: https://img.shields.io/github/issues/Akkadu/eslint-config-akkadu.svg?style=flat-square
[issues-url]: https://github.com/Akkadu/eslint-config-akkadu/issues
[license-shield]: https://img.shields.io/github/license/Akkadu/eslint-config-akkadu.svg?style=flat-square
[license-url]: https://github.com/Akkadu/eslint-config-akkadu/blob/master/LICENSE.txt
[lgtm-shield]: https://img.shields.io/lgtm/grade/javascript/g/akkadu/eslint-config-akkadu.svg?logo=lgtm&logoWidth=18
[lgtm-url]: https://lgtm.com/projects/g/akkadu/eslint-config-akkadu/context:javascript
[fossa-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2FAkkadu%2Feslint-config-akkadu.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2FAkkadu%2Feslint-config-akkadu?ref=badge_shield
[fossa-scan]: https://app.fossa.com/api/projects/git%2Bgithub.com%2FAkkadu%2Feslint-config-akkadu.svg?type=large
[version-shield]: https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000
[maintenance-shield]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://github.com/Akkadu/eslint-config-akkadu/graphs/commit-activity
[david-dm-shield]: https://david-dm.org/akkadu/eslint-config-akkadu.svg
[david-dm-url]: https://david-dm.org/akkadu/eslint-config-akkadu
[prettier-shield]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/akkadu/
[product-screenshot]: https://raw.githubusercontent.com/ritaly/README-cheatsheet/master/img/screenshot.png
