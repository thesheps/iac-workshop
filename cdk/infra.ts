import {
  App,
  CfnOutput,
  LegacyStackSynthesizer,
  RemovalPolicy,
  Stack,
} from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

export class HelloWorldStack extends Stack {
  constructor(app: App) {
    super(app, "HelloWorld", {
      synthesizer: new LegacyStackSynthesizer(),
    });

    const bucket = new Bucket(this, "HelloWorldBucket", {
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

    new CfnOutput(this, "WebsiteUrl", {
      value: bucket.bucketWebsiteUrl,
    });
  }
}
