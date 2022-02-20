# Example 2 - Cloudformation

Building on the previous example, it's possible to define AWS infrastructure _declaratively_ using `Cloudformation`.

This example uses the `AWS CLI` in conjunction with a `Cloudformation template` to define the `S3 Bucket` and `Bucket Policy`.

|Pros|Cons|
|----|----|
|✅ Provides state management capabilities|❌ `YAML` format can be difficult to parse|
|✅ Fast|❌ No unit testing capabilities|
|✅ No additional dependencies needed|❌ Cloudformation community support not _great_|
||❌ Difficult to debug when things may be wrong|
||❌ Tendency for declarative code to "rot"|