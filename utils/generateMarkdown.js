// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-red.svg)

  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests-instrunctions)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  ## Contributing 
  ${data.contributors}

  ## Tests Instructions
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;
