# Example 5 - Terraform
We've spoken about 2 different `Object Oriented` IaC tools, one `Procedural` and one `Declarative`. There's definitely still space in the conversation for us to talk about a second `Declarative` tool, so let's set to it!

`Terraform` is a free-to-use, platform-agnostic IaC framework. Not unlike `Cloudformation`, it lets the user define their infrastructure in so-called `HCL` ([Hashicorp Configuration Language](https://github.com/hashicorp/hcl/blob/main/hclsyntax/spec.md).)

Similar to `Pulumi`, `Terraform` is a multi-cloud offering which theoretically allows users to have sets of infrastructure for different clouds defined in the same codebase.

|Pros|Cons|
|----|----|
|✅ Multi-cloud|❌ Terraform `HCL` sometimes difficult to read|
|✅ Free to use (managed service exists)|❌ No inbuilt unit testing capabilities|
|✅ Cool logo|❌ Tendency for "infrastructure monoliths" to occur|
|✅ Fast to run||
