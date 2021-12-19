import {Construct} from "constructs";
import {Stack, StackProps} from "aws-cdk-lib";
import {Project} from "aws-cdk-lib/aws-codebuild";
import {NoArtifacts} from "aws-cdk-lib/aws-codebuild/lib/no-artifacts";

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Project(this, 'example-project', {
      artifacts: new NoArtifacts(),
    })
  }
}
