# Example 3 - CDK
`AWS CDK` is an official library which brings _Object Oriented_ programming paradigms to Infrastructure as Code. Instead of defining your infrastructure in _declarative_ blocks or stanzas, we can use `CDK Constructs` to build our infrastructure (see: [comparison of programming paradigms](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms).)

Behind the scenes, the AWS core library translates your code into native `Cloudformation`, but allows you to organise your code into logical groups.

|Pros|Cons|
|----|----|
|✅ Provides state management capabilities|❌ Requires `NodeJS`/`C#`/`Python` runtimes to be installed|
|✅ Allows unit testing|❌ Bleeding-edge versions sometimes lacking `AWS` features|
|✅ Enables code to be structured across multiple files/levels||
|✅ Strong community||
|✅ Actively developed||