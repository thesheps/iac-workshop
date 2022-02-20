# Example 1 - CLI

One thing to remember when interacting with AWS via _any_ IaC tool is that under-the-hood they're all going to making `HTTP` calls to the `AWS Api`. There's no magic here at all!

With that in mind, our first example uses the `AWS CLI` tool to _procedurally_ build the infrastructure 🤓

|Pros|Cons|
|----|----|
|✅ Super fast to get going|❌ No state management capabilities|
|✅ No external dependencies needed|❌ No ability to test infrastructure being created|
|✅ Faster than other approaches|❌ Deep knowledge of `AWS Resources` needed|