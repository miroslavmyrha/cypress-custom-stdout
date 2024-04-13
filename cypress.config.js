const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/my-test-output-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:spec', (spec, results) => {
        results.tests.forEach(testResult => {
          console.log(`


            
          `)
          console.log('Test title: ' + '\x1b[34m%s\x1b[0m', testResult.title[testResult.title.length - 1])
          console.log('Duration time: ', testResult.duration)

          if (testResult.attempts[0].state === 'failed') {
            console.log('Status: ' + '\x1b[31m%s\x1b[0m', testResult.attempts[0].state)  
          } else if (testResult.attempts[0].state === 'pending') {
            console.log('Status: ' + '\x1b[45m%s\x1b[0m', 'skipped')
          } else {
            console.log('Status: ' + '\x1b[32m%s\x1b[0m', testResult.attempts[0].state)
          }

          if (testResult.displayError !== null) {
            console.log('Error describe: ' + '\x1b[31m%s\x1b[0m', testResult.displayError)
          }
          
          console.log(`
          
          
          ----------------------------------------------------------

          
          `)
        })      
      })

      on('before:run', (details) => {
        console.log('\x1b[34m%s\x1b[0m', 'Stay with')
        console.log('\x1b[33m%s\x1b[0m', 'Ukraine')
      })
    },
  },
})
