import { App } from "aws-cdk-lib/core";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";

const app = new App();
new DataStack(app, 'DataStack');
new LambdaStack(app, 'LambdaStack')