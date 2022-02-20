# Example 4 - Pulumi
Pulumi is a `PaaS` (Platform as a Service) framework which allows people to define their Infrastructure using their favourite programming languages:

- Typescript
- Javascript
- Python
- Go
- Dotnet

Unlike `CDK` it not only allows you to define your infrastructure in your chosen language, but provides a free-for-individuals portal for managing your projects.

Pulumi is cross-cloud unlike the `AWS CDK` which, by definition, is for AWS alone.

|Pros|Cons|
|----|----|
|✅ Has native bindings for most programming languages|❌ Risk of vendor lock-in|
|✅ Allows infrastructure to be unit tested|❌ Requires users to have a Pulumi account|
|✅ Has additional capabilities used for deploying containers|❌ Difficult to migrate from pulumi|
|✅ Allows migration from cloudformation||
|✅ Multi-cloud||