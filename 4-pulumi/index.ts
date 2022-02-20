import * as aws from "@pulumi/aws";
import { FileAsset } from "@pulumi/pulumi/asset";

const siteBucket = new aws.s3.Bucket("iac-workshop-p", {
    website: {
        indexDocument: "index.html",
    },
});

function publicReadPolicyForBucket(bucketName: string) {
    return JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Effect: "Allow",
            Principal: "*",
            Action: [
                "s3:GetObject"
            ],
            Resource: [
                `arn:aws:s3:::${bucketName}/*`
            ]
        }]
    })
}

new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: siteBucket.bucket,
    policy: siteBucket.bucket.apply(publicReadPolicyForBucket)
});

new aws.s3.BucketObject('index.html', {
    bucket: siteBucket,
    source: new FileAsset('../app/index.html'),
    contentType: 'text/html'
});

exports.websiteUrl = siteBucket.websiteEndpoint;

export const bucketName = siteBucket.id;
