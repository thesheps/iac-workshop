import {
  App,
  aws_s3,
  LegacyStackSynthesizer,
  RemovalPolicy,
  Stack,
} from "aws-cdk-lib";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

class HelloWorldStack extends Stack {
  constructor(app: App) {
    super(app, "HelloWorld", {
      synthesizer: new LegacyStackSynthesizer(),
    });

    const bucket = new aws_s3.Bucket(this, "HelloWorldBucket", {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    new BucketDeployment(
      this,
      "deployStaticWebsite",
      {
        sources: [Source.asset("../app")],
        destinationBucket: bucket,
      },
    );
  }
}
