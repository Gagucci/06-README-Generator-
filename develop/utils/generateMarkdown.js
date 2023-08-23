// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "BSD") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink(license);
  if (license) {
    return `This project is protected under the ${license} license.\n For more information visit [here:](${licenseLink}). \n`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}\n\n
  ## Description \n\n${data.description}\n
  ## Table of Contents\n\n * [Installation](#installation)\n * [Usage](#usage)\n * [License](#license)\n * [Contributing](#contributing)\n * [Tests](#tests)\n * [Questions](#questions)\n
  ## Installation\n\n${data.installation}\n
  ## Usage\n\n${data.usage}\n
  ## License\n\n${licenseSection}\n${licenseBadge}\n
  ## Contributing\n\n${data.contributing}\n
  ## Tests\n\n${data.tests}\n
  ## Questions\n\n For any questions, concerns, or contributions you can reach me at
  ${data.email} or check out my GitHub page at ${data.github}.\n`;
}

module.exports = generateMarkdown;
