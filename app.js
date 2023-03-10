const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else { 
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData)
  })
  .then(pageHTML => {
    return writeFile(pageHTML)
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse)
    return copyFile()
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse)
  })
  .catch(err => {
    console.log(err)
  })



// const fs = require('fs')
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name,github)


// fs.writeFile('index.html', pageHTML, err => {

//     if (err) throw Error(err)

//     console.log('portfolio complete... check out index.html to see the output')
// })





//reference module work:
//const profileDataArgs = process.argv.slice(2)
//const printProfileData = profileDataArr => {
    // this...
   // for (let i = 0 i < profileDataArr.length i += 1) {
   //   console.log(profileDataArr[i])
   // }
  
   // console.log('================')
    // is the same as this
   //profileDataArr.forEach((profileItem) => console.log(profileItem))    
//}

//printProfileData(profileDataArgs)

//const message = 'hello node'

//if (true === true) {
  //  const message = 'hello es6'
  //  let sum = 5
  //  sum +=10
  //  console.log(message)
  //  console.log(sum)
//}

//console.log(message)
//console.log(sum)
